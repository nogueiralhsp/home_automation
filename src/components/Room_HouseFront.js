import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({

}));

export default function HouseFront() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className="card_root">
      <div className="details">
        <CardContent className="content">
          <Typography component="h5" variant="h5">
            House
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Lights
          </Typography>
          <div>

            <IconButton>
              <WbIncandescentIcon /> Driveway {true === !true ? 'On' : 'Off'}
            </IconButton>
          </div>
          <div>
            <IconButton>
              <WbIncandescentIcon /> Door {true === true ? 'On' : 'Off'}
            </IconButton>
          </div>
        </CardContent>
      </div>
      <CardMedia
        className="cover"
        image="/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
    </Card>
  );
}