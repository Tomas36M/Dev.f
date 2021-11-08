return (
    <div>
        {context.loading ? (
            <div>
                <p>loading...</p>
            </div>) : (
            <div>
                {context.error && (
                    <div>
                        <p>{context.error.message}</p>
                    </div>
                )}
            </div>)
        }
        <div>
            {user ? ((
                <div>
                    <CurrentUserProvider>
                        <CoolHeader />
                    </CurrentUserProvider>
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
            )}
        </div>