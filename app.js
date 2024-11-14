const express = require("express")
const app = express()
const port = 5000
app.get("/",(req,res)=>{
  res.json({
    message:"Hoş geldiniz"
  })
})

app.listen(postMessage,()=>{
  console.log("Sunucu 5000 portunda çalışıyor")
})