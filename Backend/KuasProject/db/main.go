package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "Backend/KUAS.db")

	if err != nil {
		panic(err)
	}

	_, err = db.Exec(`
		CREATE TABLE IF NOT EXISTS users (
		id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
		username VARCHAR(255) NOT NULL,
		first_name VARCHAR(255) NOT NULL,
		last_name VARCHAR(255) NOT NULL,
		password VARCHAR(255) NOT NULL,
		tingkatan VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS "group" (
	user_group VARCHAR(255) NOT NULL,
	id_group INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

CREATE TABLE IF NOT EXISTS "mata_pelajaran" (
	id_tingkatan INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	name_pelajaran VARCHAR(255) NOT NULL,
	materi TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS tingkatan (
	id_tingkatan INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	name_tingkatan VARCHAR(255)
);

)`)

}
