package main

import (
	"GolangBackEnd/internal/repositories"
	"database/sql"
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"

	_ "github.com/lib/pq"
)

//setting connection to DB posgre sql  "GolangBackEnd/internal/repositories"
const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "Angienugraha17#"
	dbname   = "HalloWorld"
)

type album struct {
	ID     string  `json:"id"`
	Title  string  `json:"title"`
	Artist string  `json:"artist"`
	Price  float64 `json:"price"`
}

var db *sql.DB

func main() {

dataRepository:= repositories.NewPostgreSQLMovieRepository()








fmt.Println("heloo fellwsas", dataRepository)

//normal Way
var nameOne string = "Joma"
var nameTwo = "Tech" 
var nameThree string

fmt.Println(nameOne, nameTwo, nameThree)

nameOne = "Marshal"
nameThree = "Doni"
nameTwo = "Luckas"
fmt.Println(nameOne, nameTwo, nameThree)

//short way --note  can't use outside function
nameShort := "Samsung"
fmt.Println(nameShort)


// ints

var numberOne int = 26
var numberTwo = 20
numberThree := 29

fmt.Println(numberOne, numberTwo, numberThree)


// print (formated string) 
var nameJoma string = "joam_tech"
var ages int = 26

fmt.Printf("nama saya %v dan usia saya adalah %v \n",nameJoma,ages)
fmt.Printf("nama saya %q dan usia saya adalah %q \n",nameJoma,ages)
fmt.Printf("type is %T \n", ages)
fmt.Printf("your scored %f \n", 255.555)
fmt.Printf("your scored %0.2f \n", 255.555)

// sprintf (save formatted strings)
//https://pkg.go.dev/fmt
var testStr = fmt.Sprintf("nama saya %v dan usia saya adalah %v \n",nameJoma,ages)
fmt.Println(testStr)

//setting connection string

var err error
connectionStr := "user=postgres password=Angienugraha17# dbname=HalloWorld port=5432 sslmode=disable"
db, err = sql.Open("postgres", connectionStr)

//sql.Open("postgres", "postgres://postgres:postgres@localhost/mydb?sslmode=disable")
if err != nil {
	log.Fatal(err)
}


//test rest API GO 
router := gin.Default()
router.GET("/albums", getAlbums)
// router.POST("/albums", createAlbum)
router.Run("localhost:8080")


//test connection to DB
psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
"password=%s dbname=%s sslmode=disable",
host, port, user, password, dbname)
db, err := sql.Open("postgres", psqlInfo)
if err != nil {
panic(err)
}
defer db.Close()

err = db.Ping()
if err != nil {
panic(err)
}

fmt.Println("Successfully connected!")

}

//returns a list of albums from the database
func getAlbums(c *gin.Context) {
	c.Header("Content-Type", "application/json")

	rows, err := db.Query("SELECT id, title, artist, price FROM albums")
	if err != nil {
		log.Fatal(err)
	}
	defer rows.Close()

	var albums []album
	for rows.Next() {
		var a album
		err := rows.Scan(&a.ID, &a.Title, &a.Artist, &a.Price)
		if err != nil {
			log.Fatal(err)
		}
		albums = append(albums, a)
	}
	err = rows.Err()
	if err != nil {
		log.Fatal(err)
	}

	c.IndentedJSON(http.StatusOK, albums)
}