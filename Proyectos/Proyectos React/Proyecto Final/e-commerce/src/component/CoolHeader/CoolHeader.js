import React from 'react'
import './cool.css'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
// import { Link } from 'react-router-dom'
import { useUserContext } from '../../context/CurrentUserContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const CoolHeader = () => {

    const context = useUserContext()


    return (
        <div>
            {context.loading ? (
                <Box className="loader" sx={{ display: 'flex' }}>
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
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://wallpaperaccess.com/full/1124156.jpg" className="d-block w-100" alt="..." />
                                    <div className ="carousel-caption d-none d-md-block">
                                    <h1>Hi {context.user.first_name.charAt(0).toUpperCase() + context.user.first_name.slice(1)} {context.user.last_name.charAt(0).toUpperCase() + context.user.last_name.slice(1)}</h1>
                                    <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://cutewallpaper.org/21/2048-pixels-wide-and-1152-pixels-tall-backgrounds/Download-wallpaper-2048x1152-palm-trees-sunset-ocean-.jpg" className="d-block w-100" alt="..." />
                                    <div className ="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://images.wallpaperscraft.com/image/single/buddha_buddhism_meditation_147451_2048x1152.jpg" className="d-block w-100" alt="..." />
                                    <div className ="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    }</div>
                </div>
            )}
        </div>
    )
}

export default CoolHeader

