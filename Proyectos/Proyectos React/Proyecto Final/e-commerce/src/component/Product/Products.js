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
import { blue } from '@mui/material/colors';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import accounting from 'accounting';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { UseProductContext } from '../../context/ProductContext';
import CircularProgress from '@mui/material/CircularProgress';
import './products.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button onClick={handleOpen}>Open Child Modal</Button>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 200 }}>
                    <h2 id="child-modal-title">Text in a child modal</h2>
                    <p id="child-modal-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Button onClick={handleClose}>Close Child Modal</Button>
                </Box>
            </Modal>
        </React.Fragment>
    );
}

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
        return 'https://besthqwallpapers.com/Uploads/16-5-2019/92346/thumb2-404-wallpapers-not-found-blue-background-3d-creative-art-404-error-3d-letters.jpg';
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
    image,
    id
}) {

    const context = UseProductContext();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            {context.loading ? (
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress color="success" />
                </Box>
            ) : (
                <div>
                    {context.error && (
                        <div>
                            <p>{context.error.message}</p>
                        </div>
                    )}
                    <Card key={id} className="cards" sx={{ maxWidth: 345 }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{ bgcolor: blue[500] }} aria-label="product">

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
                            <p className="price">{accounting.formatMoney(price)}</p>
                            <ExpandMore>
                                <InfoIcon onClick={handleOpen} />
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="parent-modal-title"
                                    aria-describedby="parent-modal-description"
                                >
                                    <Box sx={{ ...style, width: 400 }}>
                                        <div className="card-modal">
                                            <div className="name-container">
                                                <h4>{name}</h4>
                                            </div>
                                            <div className="img-container">
                                                <img className="modal-image" src={image} alt="product" />
                                            </div>
                                            <div className="description-container">
                                                <p>{description}</p>
                                            </div>
                                            <div className="brand-container">
                                                <p>Brand: {brand}</p>
                                            </div>
                                            <div className="brand-container">
                                                <p>Category: {category}</p>
                                            </div>
                                            <div className="brand-container">
                                                <p>Price: {accounting.formatMoney(price)}</p>
                                            </div>
                                        </div>
                                    </Box>
                                </Modal>
                            </ExpandMore>
                        </CardActions>
                    </Card>
                </div>
            )}
        </div>
    );
}
