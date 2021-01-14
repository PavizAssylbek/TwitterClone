import React from "react"
import {
  Container,
  createStyles,
  Grid,
  InputBase,
  makeStyles,
  Paper,
  Theme,
  Typography,
  withStyles,
} from "@material-ui/core"

import { grey } from "@material-ui/core/colors"
import { Tweet } from "../../components/Tweet"
import { SideMenu } from "../../components/SideMenu"

export const useHomeStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    height: "100vh",
  },
  logo: {
    margin: "10px 0",
  },
  logoIcon: {
    fontSize: 36,
  },
  sideMenuList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  sideMenuListItem: {
    cursor: "pointer",
    "&:hover": {
      "& div": {
        backgroundColor: "rgb(29, 161, 242, 0.1)",
        "& h6": {
          color: theme.palette.primary.main,
        },
        "& svg path": {
          fill: theme.palette.primary.main,
        },
      },
    },

    "& div": {
      display: "inline-flex",
      alignItems: "center",
      padding: "0 25px 0 20px",
      marginBottom: 10,
      borderRadius: 30,
      height: 50,
      transition: "background-color 0.1s ease-in-out",
    },
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 15,
  },
  sideMenuListItemIcon: {
    fontSize: 28,
    marginLeft: -5,
  },
  tweetsWrapper: {
    borderRadius: 0,
    height: "100%",
    borderBottom: 0,
    borderTop: 0,
  },
  tweetsWrapperHeader: {
    borderRight: 0,
    borderLeft: 0,
    borderTop: 0,
    padding: 15,

    "& h6": {
      fontWeight: 800,
    },
  },
  tweet: {
    cursor: "pointer",
    paddingTop: 15,
    paddingLeft: 20,

    "& :hover": {
      backgroundColor: "rgb(245, 248, 250)",
    },
  },
  tweetAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
  tweetFooter: {
    position: "relative",
    left: -13,
    display: "flex",
    justifyContent: "space-between",
    width: 450,
  },
  tweetUserName: {
    paddingLeft: 10,
    color: grey[500],
  },
  sideMenuTweetButton: {
    padding: theme.spacing(3.2),
    marginTop: theme.spacing(2),
  },
}))

const SearchTextField = withStyles(() =>
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: "#e6ecf0",
      height: 45,
      padding: 0,
    },
  })
)(InputBase)

const Home: React.FC = (): React.ReactElement => {
  const classes = useHomeStyles()

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsWrapperHeader} variant="outlined">
              <Typography variant="h6">Главная</Typography>
            </Paper>
            {[
              ...new Array(6).fill(
                <Tweet
                  classes={classes}
                  user={{
                    fullname: "Lololokwa Olololowka",
                    username: "lollolo",
                    avatarUrl:
                      "https://sun2.beeline-kz.userapi.com/impf/c846417/v846417965/3f3af/gyWA6Q2_6UI.jpg?size=200x0&quality=96&crop=0,0,640,640&sign=0ae49e1b49bc68e79be1a14387c5f3ba&ava=1",
                  }}
                  text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id tenetur blanditiis cupiditate et quos eos in? Accusantium totam minima, deserunt, odio aspernatur in a distinctio sit iure vitae nam sed?"
                />
              ),
            ]}
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <SearchTextField fullWidth placeholder="Поиск по Твиттеру" />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
