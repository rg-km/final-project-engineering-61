package main

import (
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "../KUAS.db")
	if err != nil {
		panic(err)
	}

	_, err = db.Exec(`
	CREATE TABLE IF NOT EXISTS users (
    id integer not null primary key AUTOINCREMENT,
    username varchar(255) not null,
	email varchar(255) not null,
    password varchar(255) not null,
    role varchar(255) not null,
	tingkatan varchar(255) not null,
	loggedin boolean not null);

	CREATE TABLE IF NOT EXISTS materi (
	id_materi integer not null primary key AUTOINCREMENT,
	nama_pelajaran varchar(255) not null,
	sub_bab varchar(255) not null,
	content TEXT not null);`)

	if err != nil {
		panic(err)
	}
}
