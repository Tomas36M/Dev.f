import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import accounting from 'accounting';
import './products.css'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const getImgUrl = (image) => {
    if (image === undefined) {
        return 'https://bitsofco.de/content/images/2018/12/broken-1.png';
    } else {
    return image;
    }
}

export default function Products({
    name,
    description,
    price,
    category,
    brand,
    image
}) {

    return (
        <Card className="cards" sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="product">
                        T
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <ShoppingCartIcon />
                    </IconButton>
                }
                title={name}
                subheader={category}
            />
            <CardMedia
                component="img"
                height="194"
                image={getImgUrl(image)}
                onError='https://bitsofco.de/content/images/2018/12/broken-1.png'
                alt="Product"
            />
            {/* <CardContent className="text-content">
                <Typography variant="body2" color="text.secondary">
                    {'Brand: ' + brand}
                </Typography>
            </CardContent> */}
            <CardActions disableSpacing>
                <h3 className="price">{accounting.formatMoney(price)}</h3>
                <ExpandMore>
                    <InfoIcon />
                </ExpandMore>
            </CardActions>
        </Card>

    );
}
