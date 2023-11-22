const forecast = require("./Data/forecast")

const geocode = require("./Data/geocode")
const country = process.argv[2]
geocode(country,(error,data)=>{
    console.log("Erorr : " , error)
    console.log("Data : " , data)
    if(data){
        forecast.x(data.latitude,data.longtitude,(error2,data2) =>{
        console.log("Error : ",error2)
        console.log("Data : ",data2)
    })
    }else{
        console.log("Data Entered have an erorr")
    }
})