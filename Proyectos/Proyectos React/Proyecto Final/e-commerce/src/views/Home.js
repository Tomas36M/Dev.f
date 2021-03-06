import React from 'react';
import Payload from '../utils/payload';
import AllProducts from '../component/Product/AllProducts';
import CoolHeader from '../component/CoolHeader/CoolHeader';
import { CurrentUserProvider } from '../context/CurrentUserContext';
import Navbar from '../component/Navbar/Navbar';

const Home = () => {

    const user = Payload()

    return (
        <div>
            <Navbar />
            {user ? ((
                <div>
                    <CurrentUserProvider>
                        <CoolHeader />
                    </CurrentUserProvider>
                    <AllProducts />
                </div>
            )) : ((
                <div>
                    <AllProducts />
                </div>
            ))}
        </div>
    );
}

export default Home
