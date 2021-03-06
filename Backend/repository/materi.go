package repository

import (
	"database/sql"
)

type MateriRepository struct {
	db *sql.DB
}

func NewMateriRepository(db *sql.DB) *MateriRepository {
	return &MateriRepository{db: db}
}

func (u *MateriRepository) FetchMateriByID(id int64) (Materi, error) {
	var sqlStmt string
	var materi Materi

	sqlStmt = `SELECT id_materi, nama_pelajaran, sub_bab, content FROM materi WHERE id_materi = ?;`

	row := u.db.QueryRow(sqlStmt, id)
	err := row.Scan(
		&materi.ID_Materi,
		&materi.Nama_Pelajaran,
		&materi.Subbab,
		&materi.Content,
	)

	return materi, err
}

func (u *MateriRepository) FetchMateri() ([]Materi, error) {
	var sqlStmt string
	var materi []Materi

	sqlStmt = `SELECT id_materi, nama_pelajaran, sub_bab, content FROM materi`

	rows, err := u.db.Query(sqlStmt)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var materis Materi
	for rows.Next() {
		err := rows.Scan(
			&materis.ID_Materi,
			&materis.Nama_Pelajaran,
			&materis.Subbab,
			&materis.Content,
		)

		if err != nil {
			return nil, err
		}
		materi = append(materi, materis)
	}

	return materi, nil
}

func (u *MateriRepository) InsertMateri(nama_pelajaran string, sub_bab string, content string) error {
	var sqlStmt string

	sqlStmt = `INSERT INTO Materi (nama_pelajaran, sub_bab, content) VALUES (?, ?, ?);`

	_, err := u.db.Exec(sqlStmt, nama_pelajaran, sub_bab, content)
	if err != nil {
		return err
	}

	return nil
}
