import React from "react"
import {
  Container,
  Grid,
  InputAdornment,
  Paper,
  Typography,
  ListItem,
  Divider,
  ListItemAvatar,
  Avatar,
  ListItemText,
  List,
  Button,
} from "@material-ui/core"

import SearchIcon from "@material-ui/icons/SearchOutlined"
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined"

import { Tweet } from "../../components/Tweet"
import { SideMenu } from "../../components/SideMenu"

import { AddTweetForm } from "../../components/AddTweetForm.tsx"
import { useHomeStyles } from "./theme"
import { SearchTextField } from "../../components/SearchTextField"

const Home: React.FC = (): React.ReactElement => {
  const classes = useHomeStyles()

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item sm={1} md={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item sm={8} md={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsWrapperHeader} variant="outlined">
              <Typography variant="h6">Главная</Typography>
            </Paper>
            <Paper>
              <AddTweetForm classes={classes} />
              <div className={classes.addFormBottomLine} />
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
        <Grid item sm={3} md={3}>
          <div className={classes.rightSide}>
            <SearchTextField
              variant="outlined"
              placeholder="Поиск по Твиттеру"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader}>
                <b>Актуальне темы</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Астана"
                    secondary={
                      <Typography component="span" variant="body2">
                        Твитов: 3 222
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="#COVID-19"
                    secondary={
                      <Typography component="span" variant="body2">
                        Твитов: 3 333
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="#COVID-20"
                    secondary={
                      <Typography component="span" variant="body2">
                        Твитов: 3 777
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideBlockHeader}>
                <b>Кого читать</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemAvatar>
                    <Avatar
                      alt="user"
                      src="https://sun1.beeline-kz.userapi.com/impg/tMbQLt0wiiLqo7Lk1UAAb62_E6MHm5PAELBeRw/PorBBeBgjcE.jpg?size=100x0&quality=96&crop=108,108,864,864&sign=ed08a8e0548936a863ca8b0944309b60&ava=1"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="#COVID-20"
                    secondary={
                      <Typography component="span" variant="body2">
                        @BLABLALBA
                      </Typography>
                    }
                  />
                  <Button color="primary">
                    <PersonAddIcon />
                  </Button>
                </ListItem>
                <Divider component="li" />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemAvatar>
                    <Avatar
                      alt="user"
                      src="https://sun2.beeline-kz.userapi.com/impf/c836537/v836537795/50d29/Ps-6Aco6sz4.jpg?size=100x0&quality=96&crop=10,0,585,585&sign=4d7b68b4f0918811d5a6b8e083279e52&ava=1"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="#COVID-20"
                    secondary={
                      <Typography component="span" variant="body2">
                        @BLABLALBA
                      </Typography>
                    }
                  />
                  <Button color="primary">
                    <PersonAddIcon />
                  </Button>
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
