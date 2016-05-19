import React from 'react';
import Badge from 'material-ui/lib/badge';
import IconButton from 'material-ui/lib/icon-button';
import Card from 'material-ui/lib/card/card';
import CardText from 'material-ui/lib/card/card-text';

// icons
import HardwareVideogameAsset from 'material-ui/lib/svg-icons/hardware/videogame-asset';
import Star from 'material-ui/lib/svg-icons/toggle/star';
import DoubleCheck from 'material-ui/lib/svg-icons/action/done-all';
import AddLocation from 'material-ui/lib/svg-icons/maps/add-location';
import DirectionsRun from 'material-ui/lib/svg-icons/maps/directions-run';
import Flare from 'material-ui/lib/svg-icons/image/flare';
import Lightning from 'material-ui/lib/svg-icons/image/flash-on';
import Mood from 'material-ui/lib/svg-icons/social/mood';
import MoodBad from 'material-ui/lib/svg-icons/social/mood-bad';



const stats = [
  {
    title: "Games Played",
    icon: <HardwareVideogameAsset />,
    badgeContent: 10,
    text: '',
  },
  {
    title: "Games Won",
    icon: <Star />,
    badgeContent: 5,
    text: '',
  },
  {
    title: "Games Finished",
    icon: <DoubleCheck />,
    badgeContent: 5,
    text: '',
  },
  {
    title: "Places Visited",
    icon: <AddLocation />,
    badgeContent: 19,
    text: '',
  },
  {
    title: "Distance Traveled",
    icon: <DirectionsRun />,
    badgeContent: '15',
    text: '',
  },
  {
    title: "# of Actions Used",
    icon: <Flare />,
    badgeContent: 11,
    text: '',
  },
];

const peopleStats = [
  {
    title: "Nemesis",
    icon: <Lightning />,
    badgeContent: '',
    text: ': Michael',
  },
  {
    title: "Ally",
    icon: <Mood />,
    badgeContent: '',
    text: ': Genevieve',
  },
  {
    title: "Enemy",
    icon: <MoodBad />,
    badgeContent: '',
    text: ': Alexander',
  },
];

const UserProfile = () => (
  <div className="stats">
    {stats.map(stat =>
      <div>
        <Card>
          <CardText>
            <Badge
              badgeContent={stat.badgeContent}
              secondary={true}
              badgeStyle={{ top: 12, right: 12 }}
            >
              <IconButton tooltip={stat.title}>
                {stat.icon}
              </IconButton>
            </Badge><br></br>
            {stat.title}
          </CardText>
        </Card>
      </div>
    )}
    {peopleStats.map(stat =>
      <div>
        <Card>
          <CardText>
            <Badge
              className="person"
              primary={true}
              badgeStyle={{ top: 12, right: 12 }}
            >
              <IconButton tooltip={stat.title}>
                {stat.icon}
              </IconButton>
            </Badge>
            {stat.title} {stat.text}
          </CardText>
        </Card>
      </div>
    )}
  </div>
);

export default UserProfile;
