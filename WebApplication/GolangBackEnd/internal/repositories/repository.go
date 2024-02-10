// internal/repositories/user_repository.go
package repositories

import (
	"GolangBackEnd/models"
	"database/sql"
	"errors"
	"fmt"
	"log"
)

type UserRepository struct{}

type postgresqlMovieRepository struct {
	connectionPool *sql.DB
}

func NewPostgreSQLMovieRepository() *postgresqlMovieRepository {
	// Template: "postgresql://<username>:<password>@<database_ip>/<database-name>?sslmode=disable
	connStr := "user=postgres password=Angienugraha17# dbname=HalloWorld port=5432 sslmode=disable"
	connectionPool, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}

	err = connectionPool.Ping()
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("PostgreSQL connection is successful")

	return &postgresqlMovieRepository{
		connectionPool: connectionPool,
	}
}

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

