import React from "react"
import { Avatar, Grid, IconButton, Paper, Typography } from "@material-ui/core"
import CommentIcon from "@material-ui/icons/ChatBubbleOutlineOutlined"
import RepostIcon from "@material-ui/icons/RepeatOutlined"
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined"
import ShareIcon from "@material-ui/icons/ReplyOutlined"
import { useHomeStyles } from "../../pages/Home"
import classNames from "classnames"

interface TweetProps {
  classes: ReturnType<typeof useHomeStyles>
  user: {
    fullname: string
    username: string
    avatarUrl: string
  }
  text: string
}

export const Tweet: React.FC<TweetProps> = ({
  classes,
  text,
  user,
}: TweetProps): React.ReactElement => {
  return (
    <Paper
      className={classNames(classes.tweet, classes.tweetsWrapperHeader)}
      variant="outlined"
    >
      <Grid container spacing={3}>
        <Grid item xs={1}>
          <Avatar
            className={classes.tweetAvatar}
            alt={`Аватарка пользователя ${user.fullname}`}
            src={user.avatarUrl}
          />
        </Grid>
        <Grid item xs={11}>
          <Typography>
            <b>{user.fullname}</b>
            <span className={classes.tweetUserName}>@{user.username}</span>
            <span className={classes.tweetUserName}>·</span>
            <span className={classes.tweetUserName}>1 ч</span>
          </Typography>
          <Typography variant="body1" gutterBottom>
            {text}
          </Typography>
          <div className={classes.tweetFooter}>
            <div className="">
              <IconButton color="primary">
                <CommentIcon style={{ fontSize: 20 }} />
                <span style={{ fontSize: 14 }}>1</span>
              </IconButton>
            </div>
            <div className="">
              <IconButton color="primary">
                <RepostIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div className="">
              <IconButton color="primary">
                <LikeIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div className="">
              <IconButton color="primary">
                <ShareIcon style={{ fontSize: 20 }} />
              </IconButton>
            </div>
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
}
