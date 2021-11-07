package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/prappo/worpdress-hosting/api"
)

func getSites(c *gin.Context) {
	c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
	c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
	c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
	c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

	sites, _ := api.GetSites()
	c.IndentedJSON(http.StatusOK, sites)
}

func main() {
	router := gin.Default()
	router.GET("/sites", getSites)
	router.Run("localhost:3333")

}
