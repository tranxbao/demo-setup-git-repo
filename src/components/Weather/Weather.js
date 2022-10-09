import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Weather = () => {
    const [title,setTitle] = useState("")
    useEffect(async()=>{
       let response = await axios({
        method: 'post',
        data: {url: ''},
       })
    },[])
        console.log(">>> run render")
  return (
    <div>Weather App</div>
  )
}

export default Weather