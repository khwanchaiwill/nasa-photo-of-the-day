import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './Photo.css';
import Detailholder from '../Detail/Details'
import {API_KEY, DATE} from '../constant/constant'

const PostPhoto = props =>{
    const [info, setInfo] = useState([]) 
    const [currentInfo, setCurrentInfo] = useState([])
    
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${DATE} `)
        .then (res =>{
            
            setInfo(res.data)
            
        })
        .catch(err =>{
            console.log('this not right')

        })
    }, [])
  
          return (
       <div className="addPhoto">
            <div className="photosDiv"> 
            <img 
            alt="nasaPhoto"
            className="allPhotos"
            src={info.url}/>
        </div>        
           
        <div className="detail">
            
          <div className="Opendetail">
           <h3 className='allDetail'> Detail:</h3>      
          <p className='seeDetail'>{info.explanation} </p>     
        </div>            
            <Detailholder/>
           </div>
        </div>

    )
    
}
export default PostPhoto;