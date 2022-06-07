import React from 'react'
import { useUserContext } from '../context/CurrentUserContext';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Navbar from '../component/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './profile.css'

const Profile = () => {

    const context = useUserContext();

    const profileImg = (gender) => {
        if (gender === "M") {
            return 'https://cdn.vectorstock.com/i/1000x1000/20/65/man-avatar-profile-vector-21372065.jpg';
        } else {
            return 'https://cdn5.vectorstock.com/i/1000x1000/20/74/woman-avatar-profile-vector-21372074.jpg';
        }
    }

    return (
        <div>
            <Navbar />
            {context.loading ? (
                <Box classNameName="loader" sx={{ display: 'flex' }}>
                    <CircularProgress color="secondary" />
                </Box>
            ) : (
                <div>
                    {console.log(context.error)} {context.error && (
                        <div>
                            <p>{context.error.message}</p>
                        </div>
                    )}
                    <div> {context.user &&
                        <div id="profile-upper">
                            <div id="profile-banner-image">
                                <img src="https://source.unsplash.com/random" alt="profile-pic" />
                            </div>
                            <div id="profile-d">
                                <div id="profile-pic">
                                    <img src={profileImg(context.user.gender)} alt="profile=pic" />
                                </div>
                                <div id="u-name">{context.user.first_name.charAt(0).toUpperCase() + context.user.first_name.slice(1)} {context.user.last_name.charAt(0).toUpperCase() + context.user.last_name.slice(1)}</div>
                                <div className="tb" id="m-btns">
                                    <div className="td">
                                        <div className="m-btn"><span>Activity log</span></div>
                                    </div>
                                    <div className="td">
                                        <div className="m-btn"><span>Privacy</span></div>
                                    </div>
                                </div>
                                <div id="edit-profile"><i className="material-icons">camera_alt</i></div>
                            </div>
                        </div>
                    }</div>
                </div>
            )}
        </div>
    )
}

export default Profile
