package repository

//import "time"

type User struct {
	ID        int64  `db:"id"`
	Username  string `db:"username"`
	Email     string `db:"email"`
	Password  string `db:"password"`
	Role      string `db:"role"`
	Tingkatan string `db:"tingkatan"`
	LoggedIn  string `db:"loggedin"`
	Token     bool   `db:"token"`
}

type Materi struct {
	ID_Materi      int64  `db:"id_materi"`
	Nama_Pelajaran string `db:"nama_pelajaran"`
	Subbab         string `db:"sub_bab"`
	Content        string `db:"content"`
}
