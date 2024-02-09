// internal/repositories/user_repository.go
package repositories

import (
	"GolangBackEnd/models"
	"errors"
)

type UserRepository struct{}

func NewUserRepository() *UserRepository {
    return &UserRepository{}
}



var (
	ErrMovieNotFound = errors.New("FromRepository - movie not found")
)

type inmemoryMovieRepository struct {
	Movies []models.Movie
}

func NewInMemoryMovieRepository() *inmemoryMovieRepository {
	var movies = []models.Movie{
		{ID: 1, Title: "The Shawshank Redemption", ReleaseYear: 1994, Score: 9.3},
		{ID: 2, Title: "The Godfather", ReleaseYear: 1972, Score: 9.2},
		{ID: 3, Title: "The Dark Knight", ReleaseYear: 2008, Score: 9.0},
	}

	return &inmemoryMovieRepository{
		Movies: movies,
	}
}

func (i *inmemoryMovieRepository) GetMovies() ([]models.Movie, error) {
	return i.Movies, nil
}



// func (r *UserRepository) GetUserByID(ctx context.Context, id int) (*models.Album, error) {
//    return  r.GetUserByID() , nil
// }


// /home/andreas/Documents/Hustle/homePage/BackEndTemplate/WebApplication/GolangBackEnd/model/model.go