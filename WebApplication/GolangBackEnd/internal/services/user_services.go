package service

import (
	"errors"

	"GolangBackEnd/internal/repositories"
	"GolangBackEnd/models"
)

var (
	ErrIDIsNotValid    = errors.New("id is not valid")
	ErrTitleIsNotEmpty = errors.New("movie title cannot be empty")
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

func (d *DefaultMovieService) GetMovies() ([]models.Movie, error) {
	return d.movieRepo.GetMovies()
}

func (d *DefaultMovieService) GetMovie(id int) (models.Movie, error) {
	if id <= 0 {
		return models.Movie{}, ErrIDIsNotValid
	}
	movie, err := d.movieRepo.GetMovie(id)

	if err != nil {
		if errors.Is(err, repositories.ErrMovieNotFound) {
			return models.Movie{}, ErrMovieNotFound
		}
	}
	return movie, nil
}

func (d *DefaultMovieService) CreateMovie(movie models.Movie) error {
	if movie.Title == "" {
		return ErrTitleIsNotEmpty
	}
	return d.movieRepo.CreateMovie(movie)
}

func (d *DefaultMovieService) DeleteMovie(id int) error {
	if id <= 0 {
		return ErrIDIsNotValid
	}

	err := d.movieRepo.DeleteMovie(id)
	if err != nil {
		if errors.Is(err, repositories.ErrMovieNotFound) {
			return ErrMovieNotFound
		}
		return err
	}

	return nil
}

func (d *DefaultMovieService) DeleteAllMovie() error {
	return d.movieRepo.DeleteAllMovies()
}

func (d *DefaultMovieService) UpdateMovie(id int, movie models.Movie) error {
	if id <= 0 {
		return ErrIDIsNotValid
	}

	if movie.Title == "" {
		return ErrTitleIsNotEmpty
	}

	err := d.movieRepo.UpdateMovie(id, movie)
	if errors.Is(err, repositories.ErrMovieNotFound) {
		return ErrMovieNotFound
	}

	return nil
}