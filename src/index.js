const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

// here
app.get('/', (req,res)=>{
    return res.status(200).message("Hello world");
});

app.get("/add",function(req,res){
    // res.sendFile(__dirname+"/index.html");
  ///  res.send("<h1>you are on the calculator page now</h1>");
     res.sendFile(__dirname+"/index.html");

});             

    app.get("/sub",function(req,res){
             res.sendFile(__dirname+"/index.html");
    });

   app.get("/multiply",function(req,res){
          res.sendFile(__dirname+"/index.html");
   });

   app.get("/divide",function(req,res){
         res.sendFile(__dirname+"/index.html");
   });







app.post("/add",function(req,res){
            
    // console.log(req.body);
        let num1=parseFloat(req.body.v1);
        let num2=parseFloat(req.body.v2);
        if(isNaN(num1)||isNaN(num2)){
         return  res.json({
             status:"error",
             message:"Invalid data types",
         })
     }
     if(num1>1000000||num2>1000000){
         return res.status(200).json({
             'message': "overflow"
         })
     }
     const sum = num1 + num2;
     return res.status(200).json({
         status:"success",
         'message': 'the sum of given two numbers',
         'sum': sum
     })
}); 





app.post("/sub",function(req,res){
            
        let num1=parseFloat(req.body.v1);
        let num2=parseFloat(req.body.v2);
        if(isNaN(num1)||isNaN(num2)){
         return  res.json({
             status:"error",
             message:"Invalid data types",
         })
     }
     if(num1<-1000000||num2<-1000000){
         return res.status(200).json({
             'message': "underflow"
         })
     }
     const sub = num1 - num2;
     return res.status(200).json({
         status:"success",
         'message': 'the substract of given two numbers',
         'sub': sub
     })
}); 

app.post("/multiply",function(req,res){
            
        let num1=parseFloat(req.body.v1);
        let num2=parseFloat(req.body.v2);
        if(isNaN(num1)||isNaN(num2)){
         return  res.json({
             status:"error",
             message:"Invalid data types",
         })
     }
     if(num1>1000000||num2>1000000){
         return res.status(200).json({
             'message': "overflow"
         })
     }
     const mult = num1 * num2;
     return res.status(200).json({
         status:"success",
         'message': 'The product of given numbers',
         'mult': mult
     })
}); 

app.post("/calculator",function(req,res){
            

        let num1=parseFloat(req.body.v1);
        let num2=parseFloat(req.body.v2);
        if(isNaN(num1)||isNaN(num2)){
         return  res.json({
             status:"error",
             message:"Invalid data types",
         })
     }
     if(num2==0){
         return res.status(200).json({
             'message': "Cannot divide by Zero"
         })
     }
     const divi = num1 / num2;
     return res.status(200).json({
         status:"success",
         'message': 'The divison of given numbers',
         'div': divi
     })
}); 



app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;