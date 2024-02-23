package models

type Account struct {
    User_id   int    `json:"user_id"`
    Username  string `json:"username"`
    Password  string `json:"password"`
    Key       string `json:"key"`
    Salt      string `json:"salt"`
    Created_at string `json:"created_at"`
    Updated_at string `json:"updated_at"`
    Email     string `json:"email"`
}

//Adding model use capilta latter