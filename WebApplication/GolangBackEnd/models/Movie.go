package models

type Movie struct {
	ID          int     `json:"id"`
	Title       string  `json:"title"`
	ReleaseYear string     `json:"release_year"`
	Score       float64 `json:"score"`
}
//Adding model use capilta latter