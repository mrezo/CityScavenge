import React from 'react';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';

const DashboardCard = () => (
  <div>
    <Card>
      <CardHeader
        title="Retro Pub Hunt"
        subtitle="A stroll around SF's coolest retro pubs"
        avatar="http://lorempixel.com/100/100/nature/"
      />
      <CardMedia
        overlay={<CardTitle title="Ricky's Bar" subtitle="5th and Folsom" />}
      >
        <img src="http://cdn.partyearth.com/photos/842716c040ac94a9187c2d969db6bb03/toronado_s345x230.jpg?1375037264" />
      </CardMedia>
    </Card>
  </div>
);

export default DashboardCard;
