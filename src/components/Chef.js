import React from 'react';
import { Card, CardContent, Typography, CardMedia, Grid } from '@mui/material';

const chefs = [
  {
    name: 'Muddassir Khan',
    position: 'Head Chef',
    phone: '+92 307 5326391',
    image: '/assets/images/mud.jpeg',
  },
  {
    name: 'Muhammad Rehan',
    position: 'Manager',
    phone: '+92 344 9693996',
    image: '/assets/images/reh.jpeg',
  },
  {
    name: 'Ahmad Khan',
    position: 'Senior Chef',
    phone: '+92 336 5861968',
    image: '/assets/images/ahmad.jpeg',
  },
];

const Chef = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 text-center">Meet Our Expert Chefs</h2>
      <Grid container spacing={4}>
        {chefs.map((chef, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card className="bg-yellow-100">
              <CardMedia
                component="img"
                alt={`${chef.name} Image`}
                image={chef.image}
                style={{ height: '300px', width: '100%', objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {chef.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Position: {chef.position}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Phone: <a href={`tel:${chef.phone}`}>{chef.phone}</a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Chef;