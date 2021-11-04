import React, { useState, useEffect } from 'react'
import UseAxios from '../hooks/UseAxios'
import Products from '../component/Product/Products';
import { Grid } from '@mui/material';
import Payload from '../utils/payload';
import CoolHeader from '../component/CoolHeader/CoolHeader';
import { useProductContext } from '../context/ProductContext';
import { CurrentUserProvider } from '../context/CurrentUserContext'

const Home = () => {

    const user = Payload()

    const context = useProductContext()

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');

    const { response, loading, error } = UseAxios({
        method: 'GET',
        url: 'item'
    });

    useEffect(() => {
        if (response !== null) {
            setProducts(response);
            console.log(response);
        }
    }, [response]);

    return (
        <div>
            {user ? (
                (
                    <div>
                        <CurrentUserProvider>
                            <CoolHeader />
                        </CurrentUserProvider>
                        {error && (
                            <div>
                                <p>{error.message}</p>
                            </div>
                        )}

                        {context.products && <Grid className="products" container spacing={3}>
                            {context.filteredProducts.map(product => {
                                return (
                                    <Grid item xs={12} sm={6} md={4} lg={3}>
                                        <Products
                                            key={product.id}
                                            name={product.product_name}
                                            price={product.price}
                                            image={product.image}
                                            description={product.description}
                                            brand={product.brand}
                                            category={product.category}
                                        />
                                    </Grid>
                                )
                            })}
                        </Grid>
                        }
                    </div>
                )
            ) :
                (
                    <div>
                        {error && (
                            <div>
                                <p>{error.message}</p>
                            </div>
                        )}

                        {context.products && <Grid className="products" container spacing={3}>
                            {context.filteredProducts.map(product => {
                                return (
                                    <Grid item xs={12} sm={6} md={4} lg={3}>
                                        <Products
                                            key={product.id}
                                            name={product.product_name}
                                            price={product.price}
                                            image={product.image}
                                            description={product.description}
                                            brand={product.brand}
                                            category={product.category}
                                        />
                                    </Grid>
                                )
                            })}
                        </Grid>
                        }
                    </div>
                )}
        </div>
    )
}

export default Home
