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
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import accounting from 'accounting';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
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

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

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
                    <InfoIcon onClick={handleOpen} />
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description"
                    >
                        <Box sx={{ ...style, width: 400 }}>
                            <h2 id="parent-modal-title">{name}</h2>
                            <img className="modal-image" src={image} />
                            <p id="parent-modal-description">
                                {description}
                            </p>
                            <p>{brand}</p>
                            <ChildModal />
                        </Box>
                    </Modal>
                </ExpandMore>
            </CardActions>
        </Card>

    );
}
