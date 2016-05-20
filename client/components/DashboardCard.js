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
        title="Coffee Stroll"
        subtitle="A tasting of SF's finest cafes"
        avatar="http://lorempixel.com/100/100/nature/"
      />
      <CardMedia
        overlay={<CardTitle title="Philz Coffee" subtitle="Front and Market" />}
      >
        <img src="https://tctechcrunch2011.files.wordpress.com/2013/05/philz-cupz.jpg" />
      </CardMedia>
    </Card>
    <Card>
      <CardHeader
        title="Chocolate Tour"
        subtitle="Satisfy your sweet tooth"
        avatar="http://lorempixel.com/100/100/nature/"
      />
      <CardMedia
        overlay={<CardTitle title="Ghirardelli Square" subtitle="North Point and Larkin" />}
      >
        <img src="http://www.ghirardellisq.com/app/uploads/2014/07/ghirardelli-article-square1.jpg" />
      </CardMedia>
    </Card>
    <Card>
      <CardHeader
        title="Wine and Cheese Tasting"
        subtitle="For the culturally curious"
        avatar="http://lorempixel.com/100/100/nature/"
      />
      <CardMedia
        overlay={<CardTitle title="The Hidden Vine" subtitle="Merchant and Battery" />}
      >
        <img src="http://cityneversleeps.com/wp-content/uploads/2014/03/cns-sanfrancisco-thehiddenvine-winebar-california.jpg" />
      </CardMedia>
    </Card>
    <Card>
      <CardHeader
        title="Sightseeing Adventure"
        subtitle="Explore San Francisco, scavenger style"
        avatar="http://lorempixel.com/100/100/nature/"
      />
      <CardMedia
        overlay={<CardTitle title="Golden Gate Bridge" subtitle="Marina Blvd" />}
      >
        <img src="http://www.history.com/s3static/video-thumbnails/AETN-History_Prod/35/44/History_Deconstructed_Golden_Gate_Bridge_SF_still_624x352.jpg" />
      </CardMedia>
    </Card>
  </div>
);

export default DashboardCard;
