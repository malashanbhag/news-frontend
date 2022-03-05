import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const News = ({ news }) => {
    const handleClick = () => {
        window.open(news.url);
    }

    return (
        <Card sx={{ maxWidth: '60vw', margin: '20px' }} onClick={handleClick} data-testid="news">
            <CardActionArea>
                <CardMedia
                component="img"
                height="300"
                image={news.urlToImage}
                alt="Image"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {news.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {news.description}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default News;