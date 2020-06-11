import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {API_KEY, DATE} from '../constant/constant'
import './detail.css'

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
    return (
        <div className="allDetail">
            <p className="smallDetail">Date:  {alldetail.date} </p>
            <p className="smallDetail">Media type:  {alldetail.media_type} </p>
            <p className="smallDetail">service_version:  {alldetail.service_version} </p>
            <p className="smallDetail">Title:  {alldetail.title} </p>
        </div>
    )
}