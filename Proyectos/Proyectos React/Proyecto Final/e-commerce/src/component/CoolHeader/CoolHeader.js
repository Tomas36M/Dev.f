import React from 'react'
import './cool.css'
import { Link } from 'react-router-dom'
import { useUserContext } from '../../context/CurrentUserContext'

const CoolHeader = () => {

    const context = useUserContext()


    return (
        <div>
            
            <header class="showcase">
                <div class="container showcase-inner">
                    
                    <div>
                    <a href="#" class="btn">Buy</a>
                    <Link to="/sell" class="btn">Sell</Link>
                    </div>
                </div>
            </header>
            {context.loading ? (
                <p>loading...</p>
            ) : (
                <div>
                    {context.error && (
                        <div>
                            <p>{context.error.message}</p>
                        </div>
                    )}
                    <div>{console.log(context.user)} {context.user && <h1>Welcome {context.user.first_name}</h1>}</div>
                </div>
            )}
        </div>
        
    )
}

export default CoolHeader

