package repositories

import (
	"GolangBackEnd/models"
)

type IMovieRepository interface {
	GetMovies() ([]models.Movie, error)
	GetMovie(id int) (models.Movie, error)
	CreateMovie(movie models.Movie) error
	DeleteMovie(id int) error
	DeleteAllMovies() error
	UpdateMovie(id int, movie models.Movie) error
}
