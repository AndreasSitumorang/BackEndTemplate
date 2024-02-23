// internal/repositories/user_repository.go
package repositories

import (
	"GolangBackEnd/models"
	"database/sql"
	"errors"
	"fmt"
	"log"
)

//create struct --> like define a class in C#
type UserRepository struct{}
//add connection 
type postgresqluserRepository struct {
	connectionPool *sql.DB
}

func NewPostgreSQLUserRepository() *postgresqluserRepository {
	// Template: "postgresql://<username>:<password>@<database_ip>/<database-name>?sslmode=disable "postgres://postgres:postgres@localhost/movie-db?sslmode=disable"
	// connStr := "user=postgres password=Angienugraha17# dbname=HalloWorld port=5432 sslmode=disable"
	connStr := "postgres://postgres:Angienugraha17#@localhost/HalloWorld?sslmode=disable"

	connectionPool, err := sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal(err)
	}

	err = connectionPool.Ping()
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("PostgreSQL connection is successful")

	return &postgresqluserRepository{
		connectionPool: connectionPool,
	}
}

func NewUserRepository() *UserRepository {
    return &UserRepository{}
}


var (
	ErrusersNotFound = errors.New("FromRepository - movie not found")
)

type inmemoryUserRepository struct {
	Users []models.Account
}

func NewInMemoryUserRepository() *inmemoryUserRepository {
	var user = []models.Account{
		{   user_id:   1,
			username:  "john_doe",
			password:  "password123",
			key:       "some_key",
			salt:      "some_salt",
			created_at: "2024-02-23",
			updated_at: "2024-02-23",
			email:     "john@example.com",},
			{        user_id:   2,
				username:  "john_doe",
				password:  "password123",
				key:       "some_key",
				salt:      "some_salt",
				created_at: "2024-02-23",
				updated_at: "2024-02-23",
				email:     "john@example.com",},
	}

	return &inmemoryUserRepository{
		Users : user,
	}
}

func (i *inmemoryUserRepository) GetUsers() ([]models.Account, error) {
	return i.Users, nil
}
