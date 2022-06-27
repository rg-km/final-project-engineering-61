package main

import (
	"database/sql"
	"log"
)

func connection() {
	db, err := sql.Open("sqlite3", "./KUAS.db")
	if err != nil {
		log.Fatal(err)
	}
	defer db.Close()

}
