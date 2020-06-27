
const request =require('request')

const forecast=(latitude,longitude,callback)=>{

    const url=`http://api.weatherstack.com/current?access_key=89d5f866818ca1ea670ba1de50cc1f2e&query=${latitude},${longitude}&units=m`
    
    request({url:url,json:true},(err,res)=>{
        if(err){
            callback('Unable to connect to server',undefined)
        }else if(res.body.error){
            callback('Unable to find the location',undefined)
        }else{
            callback(undefined,{
                // location:res.body.location.name,
                // country:res.body.location.country,
                temperature:res.body.current.temperature,
                humidity:res.body.current.humidity,
                precipation:res.body.current.precip,
                weather:res.body.current.weather_descriptions,
                windspeed:res.body.current.wind_speed,
                uv_index:res.body.current.uv_index,
                visibility:res.body.current.visibility

            }
                // `Weather :${res.body.current.weather_descriptions}
                // Temperature : ${res.body.current.temperature} degrees
                // Feels like ${res.body.current.feelslike} degrees`
            )
        }
    })
}

module.exports=forecast