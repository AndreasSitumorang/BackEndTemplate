package connectionstrgo

import (
	"database/sql"
	"fmt"
	"log"
)

type postgresqlRepository struct {
	connectionPool *sql.DB
}

func NewPostgreSQLRepository() *postgresqlRepository {
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

	return &postgresqlRepository{
		connectionPool: connectionPool,
	}
}