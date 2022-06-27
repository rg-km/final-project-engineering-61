package api

type DashboardErrorResponse struct {
	Error string `json:"error"`
}


type DashboardSuccessResponse struct {
	Username     string     `json:"username"`
}
