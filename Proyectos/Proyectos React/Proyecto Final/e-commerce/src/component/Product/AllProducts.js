import React from 'react'
import Products from './Products'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { Grid } from '@mui/material';
import { UseProductContext } from '../../context/ProductContext';
import './products.css'

const AllProducts = () => {

    const context = UseProductContext();

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

                    export default AllProducts
