import React from 'react'
import axios from 'axios'
// import { useHistory } from 'react-router'
import { useUserContext } from '../../context/CurrentUserContext';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Payload from '../../utils/payload';
// import useForm from '../../hooks/useForm';

const PremiumBtn = () => {

    const currentUser = Payload();

    const context = useUserContext();

    const token = window.localStorage.getItem('token');


    const url = `https://ecomerce-master.herokuapp.com/api/v1/user/${currentUser.id}`;

    // let history = useHistory();

    const sendData = (data) => {

        const headers = {"Authorization": `JWT ${token}`}

        if (data === 'CUSTOMER') {
            axios.patch(url, { role: "ADMIN" }, {headers})
                .then(response => {
                    if (response.status === 200) {
                        //Cuando se crea el usuario
                        console.log(response.status)
                        // history.push('/')
                        alert('Genial, ya eres ADMIN');
                        return response;
                    }
                }).catch((error) => {
                    alert(error.response.data.message)
                })
        } else {
            alert("Ya eres ususario Premium")
        }
    }

    // const { input, handleInputChange, handleSubmit } = useForm(sendData, {})

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
            {context.loading ? (
                <Box className="loader" sx={{ display: 'flex' }}>
                    <CircularProgress color="secondary" />
                </Box>
            ) : (
                <div>
                    {context.error && (
                        <div>
                            <p>{context.error.message}</p>
                        </div>
                    )}

                    {context.user && (
                        <div>
                            <button onSubmit={sendData(context.user.role)}>Go Premium</button>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default PremiumBtn