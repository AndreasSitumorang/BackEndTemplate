package service

import (
	"errors"

	"GolangBackEnd/internal/repositories"
)

var (
	ErrIDIsNotValid    = errors.New("id is not valid")
	ErrTitleIsNotEmpty = errors.New("Movie title cannot be empty")
	ErrMovieNotFound   = errors.New("the movie cannot be found")
)

type DefaultMovieService struct {
	movieRepo repositories.IMovieRepository
}

func NewDefaultMovieService(mRepo repositories.IMovieRepository) *DefaultMovieService {
	return &DefaultMovieService{
		movieRepo: mRepo,
	}
}

// func (d *DefaultMovieService) GetMovies() ([]models.Movie, error) {
// 	return d.movieRepo.GetMovies()
// }
