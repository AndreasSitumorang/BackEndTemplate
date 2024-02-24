package service

import (
	"errors"

	"GolangBackEnd/internal/repositories"
	"GolangBackEnd/models"
)

var (
	ErrUserNotValid    = errors.New("id is not valid")
	ErrUserNotEmpty = errors.New("Movie title cannot be empty")
	ErruserNotFound   = errors.New("the movie cannot be found")
)

type DefaultUserService struct {
	usersRepository repositories.IUsersRepository
}

func NewDefaultUserService(userRepo repositories.IUsersRepository) *DefaultUserService {
	return &DefaultUserService{
		usersRepository: userRepo,
	}
}

func (d *DefaultUserService) GetUser() ([]models.Account, error) {
	return d.usersRepository.GetUsers()
}
