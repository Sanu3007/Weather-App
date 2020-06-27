const path=require('path')
const express=require('express')
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

const app=express()
const port=process.env.PORT || 3000

//Define paths for Express config
const publicpath=path.join(__dirname,'../public')
const viewPath=path.join(__dirname,'../templates/views')
const partialPath=path.join(__dirname,'../templates/partials')

//Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views',viewPath)
hbs.registerPartials(partialPath)

//Setup static directory to serve
app.use(express.static(publicpath))

// app.get('/',(req,res)=>{
//     res.send('Welcome to Express!')
// })

// app.get('/help',(req,res)=>{
//     res.send('Help page')
// })

// app.get('/about',(req,res)=>{
//     res.send('<h1>About page</h1>')
// })

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Sanu'

    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Me',
        name:'Sanu'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        msg:'This is help page',
        title:'Help',
        name:'Sanu'
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404 Page Error',
        name:'Sanu',
        msg:'Help article not found'
    })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'Adress not given'
        })
    }

    
    const location=req.query.address
    geocode(location,(error,data)=>{
        if(error){
            return res.send({
                error:error
            })
        }
        forecast(data.latitude,data.longitude,(error,forecastdata)=>{
            if(error){
                return res.send({
                    error:error
                })
            }
            res.send({
                location:data.location,
                forecastdata:forecastdata
            })
        })
            
    })
    
    
})


app.get('*',(req,res)=>{
    res.render('404',{
        title:'404 Page Error',
        name:'Sanu',
        msg:'Page not found'
    })
})

app.listen(port,()=>{
    console.log('Server started and running....')
})