package repository

//import "time"

type User struct {
	ID       int64  `db:"id"`
	Username string `db:"username"`
	Password string `db:"password"`
	Role     string `db:"role"`
	Loggedin bool   `db:"loggedin"`
	Token    string `db:"token"`
}

type Materi struct {
	id_materi      int64  `db:"id_materi"`
	nama_pelajaran string `db:"nama_pelajaran"`
	sub_bab        string `db:"sub_bab"`
	content        string `db:"content"`
}
