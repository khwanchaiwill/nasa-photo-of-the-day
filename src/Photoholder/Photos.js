import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './Photo.css';
import Detailholder from '../Detail/Details'
import {API_KEY, DATE} from '../constant/constant'
// import styled component
import Addphoto from '../component/Addphoto';
import Divstyle from '../component/Divstyle'



const PostPhoto = props =>{
    const [info, setInfo] = useState([]) 
    const [currentInfo, setCurrentInfo] = useState(0)
    const openDetail = id =>{
        setCurrentInfo(id)
    }
    const closeDetail = () =>{
        setCurrentInfo(null)
    }
    
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${DATE} `)
        .then (res =>{
            
            setInfo(res.data)
            
        })
        .catch(err =>{
            console.log('this not right')

        })
    }, [])
  
    const makestyle = (width, height) =>{
        return {
           div: {
                width,
                height,
            },
            h3:{
                fontSize: `${(currentInfo+1)*1.5}rem`
            }
        }
    }
          return (
       <Addphoto>
            <Divstyle>
                <img style={makestyle().img}
                alt="nasaPhoto"
                className="allPhotos"
                src={info.url}/>
          
            </Divstyle>
               
           
        <Divstyle>
            <div style={makestyle('95%','auto').div} className="Opendetail">
                <h3 style={makestyle().h3} className='allDetail'> Detail:</h3>      
                
                <p className='alotOfDetial'>{info.explanation} </p>     
            </div>            
            <Detailholder/>

        </Divstyle>
            
           
        </Addphoto>
    )
    
}
export default PostPhoto;