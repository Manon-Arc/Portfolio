import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, CardActions, Button, Avatar } from '@mui/material';

interface ArticleCardProps {
    image: string;
    title: string;
    date: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ image, title, date }) => (
    <Card sx={{ width: 360, maxWidth: 380, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <CardMedia
            component="img"
            height="250"
            image={image}
            alt={title}
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
            <Box mt={1} display="flex" alignItems="center">
                <a href="/a_propos" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                    <Avatar alt="Manon Arcas" src="/src/assets/blog/me.jpg" sx={{ width: 35, height: 35, mr: 1 }} />
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
