import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {API_KEY, DATE} from '../constant/constant'
import './detail.css'
import Detailstyle from '../component/Detailstyle'

export default function Detailholder(){
    const [alldetail, setAllDetail] = useState([])
    const [currentdetail, setCurrentDetail] = useState('')

    useEffect(() =>{
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${DATE} `)
        .then(res =>{
            console.log('will get some data')
            setAllDetail(res.data)
        })
        .catch(err =>{
            console.log('Will get an error')
        })
    },[])
    // Change style color in line 
    const changeStyle = (color,fontSize) =>{
        return{
            ptag: {
                fontSize,
                color,
            },
            span: {
                fontSize,
                color,
            }
        }
    }
    return (
        <Detailstyle>        
            <p  className="smallDetail">Date: <span style={changeStyle('blue','1.15rem').span}>{alldetail.date}</span>   </p>
            <p  className="smallDetail">Media type: <span style={changeStyle('blue','1.15rem').span}>{alldetail.media_type}</span>  </p>
            <p  className="smallDetail">service_version:  <span style={changeStyle('blue','1.15rem').span}>{alldetail.service_version}</span>   </p>
            <p  className="smallDetail">Title:  <span style={changeStyle('blue','1.15rem').span}>{alldetail.title}</span>  </p>
        </Detailstyle>
    )
}