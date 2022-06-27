package main

import (
	"Backend/api"
	"Backend/repository"
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

func main() {
	db, err := sql.Open("sqlite3", "./KUAS.db")
	if err != nil {
		panic(err)
	}

	usersRepo := repository.NewUserRepository(db)
	materiRepo := repository.NewMateriRepository(db)

	mainAPI := api.NewAPI(*usersRepo, *materiRepo)
	mainAPI.Start()
}
