import React from "react"
import { Avatar, IconButton, Paper, Typography } from "@material-ui/core"
import CommentIcon from "@material-ui/icons/ChatBubbleOutlineOutlined"
import RepostIcon from "@material-ui/icons/RepeatOutlined"
import LikeIcon from "@material-ui/icons/FavoriteBorderOutlined"
import ShareIcon from "@material-ui/icons/ReplyOutlined"
import { useHomeStyles } from "../../pages/Home/theme"
import classNames from "classnames"
import { Link } from "react-router-dom"

interface TweetProps {
  _id: string
  classes: ReturnType<typeof useHomeStyles>
  user: {
    fullname: string
    username: string
    avatarUrl: string
  }
  text: string
}

export const Tweet: React.FC<TweetProps> = ({
  _id,
  classes,
  text,
  user,
}: TweetProps): React.ReactElement => {
  return (
    <Link to={`/home/tweet/${_id}`}>
      <Paper
        className={classNames(classes.tweet, classes.tweetsWrapperHeader)}
        variant="outlined"
      >
        <Avatar
          className={classes.tweetAvatar}
          alt={`Аватарка пользователя ${user.fullname}`}
          src={user.avatarUrl}
        />
        <div className="">
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
                <span style={{ fontSize: 14, marginLeft: 10 }}>1</span>
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
        </div>
      </Paper>
    </Link>
  )
}
