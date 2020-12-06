import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import './Testimonial.css'
// import { BeenhereRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 450,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    backgroundColor: '#2F3136',
  },
  avatar: {
    color: '#2F3136',
    fontWeight: 50,
  },
}));

const summerfun = `I’ve been a member of this sub for roughly 4 weeks. Previously, I had been a member of xtrades, parabolic options, and many many others. This is without a doubt the most organized and well managed discord server i’ve belonged to. There’s no hoping and guessing here. Every trade is well thought out and executed how it was designed from start to finish. There is so much knowledge to be gained from the admin and members. This really is a top tier trading room.`;

const maxnl = `Thanks a lot for all the help the past weeks. You recommend great set ups and teach more on on TA and FA in these past weeks than I have picked up the past months. I have been able to make better FA and TA, avoid risk, get out of positions with better timing and I have now locked in my first profits with over 20% on a set up that you have recommended, with more currently building profits in my portfolio. Looking forward to all the helpful information that is too come and strongly recommend the discord to others!`;

const benn = `Been here just under a week and I just have to say that this community has been really insightful. As a somewhat new trader, asking the dumb questions aren't easy but here they are. From @JB15 to @highrolla and many others who are willing to share their expertise is a blessing. Out of all the discords i've been to, LSV has been the most genuine, well managed, and easy to navigate`;

const ilbbw = `I have to say this discord prob the best I've ever been in. Straight business no games`;
 export default function TestimonialGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2} >
          <Grid item>
            <Avatar className={classes.avatar}>M</Avatar>
          </Grid>
          <Grid item xs>
            <Typography className="Testimonial-copy">{maxnl}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar className={classes.avatar}>S</Avatar>
          </Grid>
          <Grid item xs>
            <Typography className="Testimonial-copy">{summerfun}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar className={classes.avatar}>B</Avatar>
          </Grid>
          <Grid item xs>
            <Typography className="Testimonial-copy">{benn}</Typography>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar className={classes.avatar}>I</Avatar>
          </Grid>
          <Grid item xs>
            <Typography className="Testimonial-copy">{ilbbw}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}