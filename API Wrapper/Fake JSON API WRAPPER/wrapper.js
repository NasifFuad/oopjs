const fakeJson = function(){
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
console.log(callAPI)
callAPI.fetch()