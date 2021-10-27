import React from 'react'
import SongList from '../../component/SongList';
import SongDetail from '../../component/SongDetail';
import { SongProvider } from '../../context/SongContext'
import './home.css';

const Home = () => {
    return (
        <div className="home-container">
            <SongProvider>
                <div className="izquierdo">
                    <h2>Lado Izquierdo</h2>
                    <SongList />
                </div>
                <div className="derecho">
                    <h2>Lado Derecho</h2>
                    <SongDetail />
                </div>
            </SongProvider>
        </div>
    )
}

export default Home;
