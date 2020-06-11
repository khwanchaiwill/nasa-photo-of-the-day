import React, { useState, useEffect} from 'react'
import axios from 'axios'
import './plan.css'
import PostPhoto from '../Photoholder/Photos'
import {API_KEY, DATE} from '../constant/constant'
const PlanHeader = props => {
    
    useEffect(()=>{
        console.log('Run after all')
    })
    useEffect(()=>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${DATE}`)
        .then (res =>{
            console.log(res.data)
            
        })
        .catch(err =>{

        })
    },[])
    return (
        <div className="mainPlan">
            <div className="secondPlan">
                <h2>Nasa-photo-of-the-day 😍 </h2>
            </div>
            <div className="planDiv">
            <PostPhoto />
        </div>
        </div>
        
    )

}
export default PlanHeader;