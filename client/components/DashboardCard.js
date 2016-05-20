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
    <Card>
      <CardHeader
        title="Coffee Tour"
        subtitle="A tasting of SF's finest cafes"
        avatar="http://lorempixel.com/100/100/nature/"
      />
      <CardMedia
        overlay={<CardTitle title="Philz Coffee" subtitle="Front and Market" />}
      >
        <img src="https://tctechcrunch2011.files.wordpress.com/2013/05/philz-cupz.jpg" />
      </CardMedia>
    </Card>
  </div>
);

export default DashboardCard;
