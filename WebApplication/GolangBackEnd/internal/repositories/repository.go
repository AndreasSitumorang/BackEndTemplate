// internal/repositories/user_repository.go
package repositories

import (
	"GolangBackEnd/models"
	"database/sql"
	"errors"
	"fmt"
	"log"
)

type postgresqlMovieRepository struct {
	connectionPool *sql.DB
}
var (
	ErrMovieNotFound = errors.New("FromRepository - movie not found")
)

func NewPostgreSQLMovieRepository() *postgresqlMovieRepository {
	// Template: "postgresql://<username>:<password>@<database_ip>/<database-name>?sslmode=disable
	// connStr := "postgres://postgres:postgres@localhost/movie-db?sslmode=disable"
	connStr := "postgres://postgres:Angienugraha17%23@localhost:5432/HalloWorld?sslmode=disable"

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

func (p *postgresqlMovieRepository) GetMovies() ([]models.Movie, error) {
	rows, err := p.connectionPool.Query("SELECT * FROM albums")
	if err != nil {
		return []models.Movie{}, err
	}
	defer rows.Close()

	movies := make([]models.Movie, 0)

	for rows.Next() {
		mv := models.Movie{}
		err := rows.Scan(&mv.ID, &mv.Title, &mv.ReleaseYear, &mv.Score)
		if err != nil {
			return movies, err
		}
		movies = append(movies, mv)
	}

	return movies, nil
}

func (p *postgresqlMovieRepository) GetMovie(id int) (models.Movie, error) {
	//TODO implement me
	panic("implement me")
}

func (p *postgresqlMovieRepository) CreateMovie(movie models.Movie) error {
	//TODO implement me
	panic("implement me")
}

func (p *postgresqlMovieRepository) DeleteMovie(id int) error {
	//TODO implement me
	panic("implement me")
}

func (p *postgresqlMovieRepository) DeleteAllMovies() error {
	//TODO implement me
	panic("implement me")
}

func (p *postgresqlMovieRepository) UpdateMovie(id int, movie models.Movie) error {
	//TODO implement me
	panic("implement me")
}

