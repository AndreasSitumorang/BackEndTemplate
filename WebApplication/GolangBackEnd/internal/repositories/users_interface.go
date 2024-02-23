package repositories

import (
	"GolangBackEnd/models"
)

type IUsersRepository interface {
	GetUsers() ([]models.Users, error)
	GetUser(id int) (models.Users, error)
	CreateUser(user models.Users) error
	DeleteUser(id int) error
	DeleteAllUsers() error
	UpdateUser(id int, user models.Users) error
}