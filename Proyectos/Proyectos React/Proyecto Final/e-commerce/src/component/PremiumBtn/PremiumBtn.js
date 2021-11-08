import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { useUserContext } from '../../context/CurrentUserContext';
import Payload from '../../utils/payload';

const PremiumBtn = () => {

    const currentUser = Payload();

    const context = useUserContext();

    const token = window.localStorage.getItem('token');

    const url = `https://ecomerce-master.herokuapp.com/api/v1/user/${currentUser.id}`;

    let history = useHistory();

    const sendData = () => {
        // if (context.user.role === 'CUSTOMER') {
            axios(url, {
                method: "PATCH",
                headers: { Authorization: `JWT ${token}` },
                body: JSON.stringify({ role: "ADMIN" })
            })
                .then(response => {
                    console.log(response.status);

                })
                .then(data => console.log(data));
        // } else {
        //     alert("Ya eres ususario Premium")
        // }
    }

    // const { response, loading, error } = UseAxios({
    //     method: 'PATCH',
    //     url: currentUser ? `user/${currentUser.id}` : null,
    //     headers: {Authorization: `JWT ${token}`},
    //     body: {"role": "A"}
    // });

    // useEffect(() => {
    //     if (response !== null) {
    //         setPatchUser(response);
    //         console.log(response);
    //     }
    // }, [response]);

    return (
        <div>
            <button onClick={sendData()}>Go Premium</button>
        </div>
    )
}

export default PremiumBtn
