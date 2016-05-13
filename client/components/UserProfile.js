import React from 'react';
import Badge from 'material-ui/lib/badge';
import IconButton from 'material-ui/lib/icon-button';

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
    title: "Total Games Played",
    icon: <HardwareVideogameAsset />,
  },
  {
    title: "Total Games Won",
    icon: <Star />,
  },
  {
    title: "Total Games Finished",
    icon: <DoubleCheck />,
  },
  {
    title: "Total Places Visited",
    icon: <AddLocation />,
  },
  {
    title: "Total Distance Traveled",
    icon: <DirectionsRun />,
  },
  {
    title: "# of Actions Used",
    icon: <Flare />,
  },
  {
    title: "Nemesis",
    icon: <Lightning />,
  },
  {
    title: "Favorite User",
    icon: <Mood />,
  },
  {
    title: "Least Favorite User",
    icon: <MoodBad />,
  },
];

const UserProfile = () => (
  <div>
    {stats.map(stat =>
      <div>
        <Badge
          badgeContent={10}
          secondary={true}
          badgeStyle={{top: 12, right: 12}}
        >
          <IconButton tooltip={ stat.title }>
            { stat.icon }
          </IconButton>
        </Badge>
        <Badge
          badgeStyle={{ fontSize: 20 }}
        >
          { stat.title }
        </Badge>
      </div>
    )}
  </div>
);

export default UserProfile;
