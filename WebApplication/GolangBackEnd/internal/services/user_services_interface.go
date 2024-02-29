package service

import "GolangBackEnd/models"


type IMovieService interface {
	GetMovies() ([]models.Movie, error)
	GetMovie(id int) (models.Movie, error)
	CreateMovie(movie models.Movie) error
	DeleteMovie(id int) error
	DeleteAllMovie() error
	UpdateMovie(id int, movie models.Movie) error
}