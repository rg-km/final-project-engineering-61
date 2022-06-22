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
	
CREATE TABLE IF NOT EXISTS group (
	id_group INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	user_group VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS tingkatan (
	id_tingkatan INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	nama_tingkatan VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS mata_pelajaran (
	id_matapelajaran INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	nama_pelajaran VARCHAR(255) NOT NULL,
	materi TEXT NOT NULL,
	id_tingkatan INTEGER NOT NULL,
	FOREIGN KEY (id_tingkatan) REFERENCES tingkatan(id_tingkatan)
);

CREATE TABLE IF NOT EXISTS quiz (
	id_quiz INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
	soal TEXT NOT NULL,
	jawaban TEXT NOT NULL,
	id_matapelajaran INTEGER NOT NULL,
	FOREIGN KEY (id_matapelajaran) REFERENCES mata_pelajaran(id_matapelajaran)
);

INSERT INTO users (username, first_name, last_name, password, tingkatan) VALUES
	('esaputra', 'Esa', 'Putra', Esa12345, SMA),
	('isnamdrkh', 'Isna', 'Mudrikah', Isna234, SMP);

)`)
	if err != nil {
		panic(err)
	}

}
