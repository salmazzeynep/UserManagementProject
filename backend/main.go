package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

// User struct represents a user in the database
type User struct {
	ID    uint   `json:"id" gorm:"primaryKey"`
	Name  string `json:"name"`
	Email string `json:"email"`
}

var db *gorm.DB

func main() {
	var err error
	// Initialize the database connection
	db, err = gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
	if err != nil {
		panic("failed to connect to database")
	}

	// AutoMigrate will create the users table if it doesn't exist
	db.AutoMigrate(&User{})

	// Initialize the Gin router
	r := gin.Default()

	// Enable CORS
	r.Use(cors.Default())

	// Define the routes and their handlers
	r.GET("/users", getUsers)
	r.GET("/users/:id", getUserByID)
	r.POST("/users", createUser)
	r.PUT("/users/:id", updateUser)
	r.DELETE("/users/:id", deleteUser)

	// Start the server on port 8080
	r.Run(":8080")
}

// getUsers handles GET requests to /users and returns all users
func getUsers(c *gin.Context) {
	var users []User
	db.Find(&users)
	c.JSON(200, users)
}

// getUserByID handles GET requests to /users/:id and returns a user by ID
func getUserByID(c *gin.Context) {
	var user User
	if err := db.First(&user, c.Param("id")).Error; err != nil {
		c.JSON(404, gin.H{"error": "User not found"})
		return
	}
	c.JSON(200, user)
}

// createUser handles POST requests to /users and creates a new user
func createUser(c *gin.Context) {
	var user User
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}
	db.Create(&user)
	c.JSON(201, user)
}

// updateUser handles PUT requests to /users/:id and updates an existing user
func updateUser(c *gin.Context) {
	var user User
	if err := db.First(&user, c.Param("id")).Error; err != nil {
		c.JSON(404, gin.H{"error": "User not found"})
		return
	}
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}
	db.Save(&user)
	c.JSON(200, user)
}

// deleteUser handles DELETE requests to /users/:id and deletes a user
func deleteUser(c *gin.Context) {
	var user User
	if err := db.First(&user, c.Param("id")).Error; err != nil {
		c.JSON(404, gin.H{"error": "User not found"})
		return
	}
	db.Delete(&user)
	c.JSON(204, gin.H{"message": "User deleted"})
}
