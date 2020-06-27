console.log('Client side javascript is running....')
// fetch('http://localhost:3000/weather?address=Hajipur').then((response)=>{
//     response.json().then((data)=>{
//         if(data.error){
//             console.log(data.error)
//         }else{
//             console.log(data.location)
//             console.log(data.forecastdata)
//         }
        
//     })
// })

const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const messageOne=document.querySelector('#message-1')
const messageTwo=document.querySelector('#message-2')
const messageThree=document.querySelector('#message-3')
const messageFour=document.querySelector('#message-4')
const messageFive=document.querySelector('#message-5')
const messageSix=document.querySelector('#message-6')
const messageSeven=document.querySelector('#message-7')
const messageEight=document.querySelector('#message-8')


weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value

    messageOne.textContent='Loading....'
    messageTwo.textContent=''
    messageThree.textContent=''
    messageFour.textContent=''
    messageFive.textContent=''
    messageSix.textContent=''
    messageSeven.textContent=''
    messageEight.textContent=''
    fetch(`/weather?address=${location}`).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            // console.log(data.error)
            messageOne.textContent=data.error
        }else{
            // console.log(data.location)
            // console.log(data.forecastdata)
            messageOne.textContent=`Hello!! Location is ${data.location}`
            messageTwo.textContent=`Weather :${data.forecastdata.weather}`
            messageThree.textContent=`Temperature :${data.forecastdata.temperature} 'C`
            messageFour.textContent=`Humidity :${data.forecastdata.humidity}%`
            //messageFive.textContent=`Precipitation:${data.forecastdata.precipitation} mm`
            messageSix.textContent=`Wind-speed :${data.forecastdata.windspeed} kmph`
            messageSeven.textContent=`Visibility :${data.forecastdata.visibility} km`
            messageEight.textContent=`UV-Index :${data.forecastdata.uv_index}`
        }
        
    })
})
    console.log('Testing!!')

})