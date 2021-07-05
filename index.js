// Import stylesheets
import './style.css';
import axios from "axios"
import newRect from "./constructorDesignPattern.js"

const fakeJson = function(routePath){
  this.api = "https://jsonplaceholder.typicode.com"
  this.fetch = function(routePath){
    !routePath ? this.routePath = "users" : this.routePath = routePath
    axios.get(`${this.api}/${this.routePath}`)
      .then(response =>{
        console.log(response.data)
      })
  }
}

const callAPI = new fakeJson()

callAPI.fetch()