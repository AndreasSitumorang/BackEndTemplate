// internal/repositories/user_repository.go
package repositories

import (
	"GolangBackEnd/models"
	"database/sql"
	"errors"
)

//create struct --> like define a class in C#
type UserRepository struct{}
//add connection 
type postgresqluserRepository struct {
	connectionPool *sql.DB
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
		{   User_id:   1,
			Username:  "john_doe",
			Password:  "password123",
			Key:       "some_key",
			Salt:      "some_salt",
			Created_at: "2024-02-23",
			Updated_at: "2024-02-23",
			Email:     "john@example.com",},
			{   User_id:   2,
				Username:  "john_doe",
				Password:  "password123",
				Key:       "some_key",
				Salt:      "some_salt",
				Created_at: "2024-02-23",
				Updated_at: "2024-02-23",
				Email:     "john@example.com",},
	}

	return &inmemoryUserRepository{
		Users : user,
	}
}

func (i *inmemoryUserRepository) GetUsers() ([]models.Account, error) {
	return i.Users, nil
}
