package main

import "fmt"
func main() {
fmt.Println("heloo fellwsas")

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
}