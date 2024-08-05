import React, { useState } from 'react';
import Slider from 'react-slick';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

// Import des styles de Slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const carouselItems = [
  {
    title: 'Image 1',
    description: 'Description de l\'image 1',
    imageUrl: 'https://source.unsplash.com/random/800x600',
  },
  {
    title: 'Image 2',
    description: 'Description de l\'image 2',
    imageUrl: 'https://source.unsplash.com/random/800x601',
  },
  {
    title: 'Image 3',
    description: 'Description de l\'image 3',
    imageUrl: 'https://source.unsplash.com/random/800x602',
  },
  {
    title: 'Image 4',
    description: 'Description de l\'image 4',
    imageUrl: 'https://source.unsplash.com/random/800x603',
  },
  {
    title: 'Image 5',
    description: 'Description de l\'image 5',
    imageUrl: 'https://source.unsplash.com/random/800x604',
  },
  {
    title: 'Image 6',
    description: 'Description de l\'image 6',
    imageUrl: 'https://source.unsplash.com/random/800x605',
  },
  // Ajoutez plus d'éléments ici
];

const NextArrow = ({ onClick }:any) => (
  <ArrowForwardIos
    onClick={onClick}
    style={{
      position: 'absolute',
      top: '50%',
      right: 0,
      transform: 'translateY(-50%)',
      cursor: 'pointer',
      color: 'white',
      zIndex: 1,
      fontSize: '2rem',
    }}
  />
);

const PrevArrow = ({ onClick }:any) => (
  <ArrowBackIos
    onClick={onClick}
    style={{
      position: 'absolute',
      top: '50%',
      left: 0,
      transform: 'translateY(-50%)',
      cursor: 'pointer',
      color: 'white',
      zIndex: 1,
      fontSize: '2rem',
    }}
  />
);

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: function(index:any) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    dotsClass: 'slick-dots custom-dots',
  };

  return (
    <Box sx={{ maxWidth: 800, margin: 'auto' }}>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <Card key={index} sx={{ maxWidth: 240, margin: 'auto' }}>
            <CardMedia
              component="img"
              height="300"
              image={item.imageUrl}
              alt={item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
