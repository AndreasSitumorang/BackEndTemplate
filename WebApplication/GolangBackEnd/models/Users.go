package models

type Users struct {
    user_id   int    `json:"user_id"`
    username  string `json:"username"`
    password  string `json:"password"`
    key       string `json:"key"`
    salt      string `json:"salt"`
    created_at string `json:"created_at"`
    updated_at string `json:"updated_at"`
    email     string `json:"email"`
}