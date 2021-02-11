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
  CircularProgress,
  IconButton,
} from "@material-ui/core"

import SearchIcon from "@material-ui/icons/SearchOutlined"
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined"

import { Tweet } from "../../components/Tweet"
import { SideMenu } from "../../components/SideMenu"

import { AddTweetForm } from "../../components/AddTweetForm.tsx"
import { useHomeStyles } from "./theme"
import { SearchTextField } from "../../components/SearchTextField"
import { useDispatch, useSelector } from "react-redux"
import { fetchTweets } from "../../store/ducks/tweets/actionCreatores"
import {
  selectIsTweetsLoading,
  selectTweetsItems,
} from "../../store/ducks/tweets/selectors"
import { Tags } from "../../components/Tags"
import { fetchTags } from "../../store/tags/actionCreatores"
import { Route } from "react-router-dom"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import { BackButton } from "../../components/BackButton"

const Home: React.FC = (): React.ReactElement => {
  const classes = useHomeStyles()
  const dispatch = useDispatch()
  const tweets = useSelector(selectTweetsItems)
  const isLoading = useSelector(selectIsTweetsLoading)

  React.useEffect(() => {
    dispatch(fetchTweets())
    dispatch(fetchTags())
  }, [dispatch])

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item sm={1} md={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item sm={8} md={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsWrapperHeader} variant="outlined">
              <Route path={`/home/:any`}>
                <BackButton />
              </Route>
              <Route path={["/home", "home/search"]} exact>
                <Typography variant="h6">Твиты</Typography>
              </Route>

              <Route path={`/home/tweet`}>
                <Typography variant="h6">Твитнуть</Typography>
              </Route>
            </Paper>

            <Route path={["/home", "home/search"]} exact>
              <Paper>
                <AddTweetForm classes={classes} />
                <div className={classes.addFormBottomLine} />
              </Paper>
            </Route>
            <Route path="/home" exact>
              {isLoading ? (
                <div className={classes.tweetCenter}>
                  <CircularProgress />
                </div>
              ) : (
                tweets.map((tweet) => (
                  <Tweet key={tweet._id} classes={classes} {...tweet} />
                ))
              )}
            </Route>
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
            <Tags classes={classes} />
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
