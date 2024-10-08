import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, CardActions, Button, Avatar } from '@mui/material';

interface Author {
	name: string;
	avatar: string;
}

interface ArticleCardProps {
    id: number;
    image: string;
    title: string;
    date: string;
    author: Author;

}

const ArticleCard: React.FC<ArticleCardProps> = ({ id, image, title, date, author }) => (
    <Card sx={{ width: 360, maxWidth: 380, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'transform 0.3s ease-in-out', '&:hover': { transform: 'scale(1.03)' } }}>
        <CardMedia
            component="img"
            height="250"
            image={image}
            alt={title}
            sx={{
                backgroundColor: 'rgb(24, 29, 29)',
                objectFit: 'cover'
            }}
        />
        <CardContent
            sx={{
                backgroundColor: "var(--secclear)",
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}
        >
            <Box>
                <Typography gutterBottom variant="h5" color="var(--title)" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="var(--txt)">
                    {date}
                </Typography>
            </Box>
            <Box
                mt={1}
                display="flex"
                alignItems="center"
                sx={{
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.08)',
                        cursor: 'pointer'
                    },
                    transition: 'background-color 0.3s ease'
                }}
            >
                <a href="/a_propos" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                    <Avatar alt={author.name} src={author.avatar} sx={{ width: 35, height: 35, mr: 1 }} />
                    <Typography variant="body2" color="var(--txt)">
                        Par Manon Arcas
                    </Typography>
                </a>
            </Box>
        </CardContent>
        <CardActions
            sx={{
                backgroundColor: "var(--secclear)",
                height: 40,
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
            <Button 
            href={`/blog/${id}`}
                size="small" 
                sx={{ 
                    color: '#347274',
                    '&:hover': {
                        backgroundColor: 'rgba(52, 114, 116, 0.200)',
                    },
                }}
            >
                Voir
            </Button>
        </CardActions>
    </Card>
);

export default ArticleCard;
