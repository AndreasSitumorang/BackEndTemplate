package repositories

import (
	"GolangBackEnd/models"
)

type IUsersRepository interface {
	GetUsers() ([]models.Account, error)
	GetUser(id int) (models.Account, error)
	CreateUser(user models.Account) error
	DeleteUser(id int) error
	DeleteAllUsers() error
	UpdateUser(id int, user models.Account) error
}