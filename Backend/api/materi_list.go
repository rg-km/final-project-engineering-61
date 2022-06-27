package api

import (
	"encoding/json"
	"net/http"
)

type MateriListErrorResponse struct {
	Error string `json:"error"`
}

type Materi struct {
	Nama_Pelajaran string `json:"name_pelajaran"`
	Subbab         string `json:"sub_bab"`
	Content        string `json:"content"`
}

type MateriListSuccessResponse struct {
	Materis []Materi `json:"materi"`
}

func (api *API) materiList(w http.ResponseWriter, req *http.Request) {
	api.AllowOrigin(w, req)
	encoder := json.NewEncoder(w)

	response := MateriListSuccessResponse{}
	response.Materis = make([]Materi, 0)

	materis, err := api.materiRepo.FetchMateri()
	defer func() {
		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
			encoder.Encode(DashboardErrorResponse{Error: err.Error()})
			return
		}
	}()
	if err != nil {
		return
	}

	for _, materi := range materis {
		response.Materis = append(response.Materis, Materi{
			Nama_Pelajaran: materi.Nama_Pelajaran,
			Subbab:         materi.Subbab,
			Content:        materi.Content,
		})
	}

	encoder.Encode(response)
}
