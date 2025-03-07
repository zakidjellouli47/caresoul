import React from 'react';
import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function App() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // Plant data for carousel cards
  const carouselData = [
    {
      image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      title: 'Monstera Deliciosa',
      description: 'A tropical plant with large, glossy leaves.',
    },
    {
      image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      title: 'Fiddle Leaf Fig',
      description: 'A popular indoor tree with broad, violin-shaped leaves.',
    },
    {
      image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      title: 'Snake Plant',
      description: 'A hardy plant with tall, upright leaves.',
    },
    {
      image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      title: 'Pothos',
      description: 'A low-maintenance trailing plant with heart-shaped leaves.',
    },
    {
      image: 'https://images.unsplash.com/photo-1531441878705-3f0a0ebe3f33?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
      title: 'Succulent Garden',
      description: 'A collection of small, drought-resistant plants.',
    },
  ];

  return (
    <div className="app">
      <h1 className="carousel-heading">Plants album</h1>
      <Carousel responsive={responsive}>
        {carouselData.map((item, index) => (
          <div key={index} className="carousel-card">
            <img src={item.image} alt={item.title} className="card-image" />
            <h3 className="card-title">{item.title}</h3>
            <p className="card-description">{item.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}