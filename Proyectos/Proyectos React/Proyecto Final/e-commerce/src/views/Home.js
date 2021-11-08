import React from 'react';
import Payload from '../utils/payload';
import AllProducts from '../component/Product/AllProducts';
import CoolHeader from '../component/CoolHeader/CoolHeader';
import { CurrentUserProvider } from '../context/CurrentUserContext';

const Home = () => {

    const user = Payload()

    return (
        <div>
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
