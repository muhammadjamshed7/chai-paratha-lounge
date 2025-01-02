import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const MenuCard = ({ title, price, image }) => {
  return (
    <Card className="bg-yellow-100">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <CardContent>
        <Typography variant="h5" component="div">{title}</Typography>
        <Typography variant="body2" color="textSecondary">{price}</Typography>
      </CardContent>
    </Card>
  );
};

export default MenuCard;