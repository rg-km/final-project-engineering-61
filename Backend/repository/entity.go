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
	ID_Materi      int64  `db:"id_materi"`
	Nama_Pelajaran string `db:"nama_pelajaran"`
	Subbab         string `db:"sub_bab"`
	Content        string `db:"content"`
}
