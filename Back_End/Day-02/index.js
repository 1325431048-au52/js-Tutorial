 
 const express = require('express')
 const posts = require ('./mock/Posts')
const Posts = require('./mock/Posts')
 const app = express()
 // .mathodName ('pathName', fuction to handle that path)
 // fuction to handle homepage
  app.get('/', (request, response) => {
 // console.log("Homepage Request")
    // response.send("Saurabh Dixit")
     response.sendFile('C:\Users\91956\Desktop\js Tutorial\Back_End\Day-02\View\Index.html')
 })

 app.get('/Posts', (request,response) =>{
   console.log(" Posts Get All Triggered is done")
   response.send(Posts)
 })

 app.listen(8001, () => {
 console.log("server is successfully")}
 )
 


 // http verbs 
 // GET
 //PUT
 //POST
 // DELETE

//   PRODUCT  - Get all the product - GET
//   Get a pericular a resourses -one product -Get
//   Add a product - Post
// Delete a Product - Delete,
// Edit a product - Put,'__dirname','View', 'Index.html