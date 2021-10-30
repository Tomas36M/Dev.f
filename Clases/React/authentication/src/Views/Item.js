import React, {useEffect, useState} from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios'
import HOC from '../Utils/protect'

const Item = () => {

    const [item, setItem] = useState({})

    useEffect(() =>{
        const token = window.localStorage.getItem('token');
        const config = {
            headers: {
                Authorization: `JWT ${token}`
            }
        }
        axios.get("https://ecomerce-master.herokuapp.com/api/v1/item", config)
        .then((response) => {
            setItem(response.data)
        }).catch((err) => {
            alert(err.response.data.message)
        })
    }, [])

    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h2>{item.item}</h2>
                        <span>{item.source}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HOC(Item)

