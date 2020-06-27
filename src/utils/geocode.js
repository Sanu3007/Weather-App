const request=require('request')

const geocode=(address,callback)=>{

    const url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoiZ29sZGllMDA0IiwiYSI6ImNrYmxxc2pnbDFibmgyenB2aHg5YW94aXUifQ.uLMjg9TrIs4gVKaxEM-JmA&limit=1`

    request({url:url,json:true},(err,res)=>{
        if(err){
            callback('Unable to connect to server',undefined)
        }else if(res.body.features.length===0){
            callback('Search for valid location',undefined)
        }else{
            callback(undefined,{
                latitude:res.body.features[0].center[1],
                longitude:res.body.features[0].center[0],
                location:res.body.features[0].place_name
            })
        }
    })
}

module.exports=geocode