import React from "react"
import {
  IconButton,
  Avatar,
  Button,
  TextareaAutosize,
  CircularProgress,
} from "@material-ui/core"
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined"
import EmojiIcon from "@material-ui/icons/SentimentSatisfiedOutlined"
import classNames from "classnames"
import { useHomeStyles } from "../../pages/Home/theme"

interface AddTweetFormProps {
  classes: ReturnType<typeof useHomeStyles>
}

const MAX_LENGTH = 280

export const AddTweetForm: React.FC<AddTweetFormProps> = ({
  classes,
}: AddTweetFormProps): React.ReactElement => {
  const [text, setText] = React.useState<string>("")
  const textLimitPercent = Math.round((text.length / 280) * 100)
  const textCount = MAX_LENGTH - text.length

  const handleChangeTextarea = (
    e: React.FormEvent<HTMLTextAreaElement>
  ): void => {
    if (e.currentTarget) {
      setText(e.currentTarget.value)
    }
  }

  const handleClickAddTweet = (): void => {
    setText("")
  }

  return (
    <div className={classes.addForm}>
      <div className={classes.addFormBody}>
        <Avatar
          className={classes.tweetAvatar}
          alt={"Аватарка пользователя UserAvatar"}
          src="https://sun2.beeline-kz.userapi.com/impf/c846417/v846417965/3f3af/gyWA6Q2_6UI.jpg?size=200x0&quality=96&crop=0,0,640,640&sign=0ae49e1b49bc68e79be1a14387c5f3ba&ava=1"
        />
        <TextareaAutosize
          value={text}
          onChange={handleChangeTextarea}
          className={classes.addFormTextArea}
          placeholder="WTF?"
        />
      </div>
      <div className={classes.addFormBottom}>
        <div
          className={classNames(
            classes.tweetFooter,
            classes.addFormBottomActions
          )}
        >
          <IconButton color="primary">
            <ImageOutlinedIcon style={{ fontSize: 26 }} />
          </IconButton>
          <IconButton color="primary">
            <EmojiIcon style={{ fontSize: 26 }} />
          </IconButton>
        </div>
        <div className={classes.addFormBottomRight}>
          {text && (
            <>
              <span>{textCount}/280</span>
              <div className={classes.addFormCircleProgress}>
                <CircularProgress
                  variant="determinate"
                  size={20}
                  thickness={4}
                  value={text.length >= MAX_LENGTH ? 100 : textLimitPercent}
                  style={
                    text.length >= MAX_LENGTH ? { color: "red" } : undefined
                  }
                />
                <CircularProgress
                  style={{ color: "rgba(0,0,0, 0.1)" }}
                  variant="determinate"
                  size={20}
                  thickness={4}
                  value={100}
                />
              </div>
            </>
          )}
          <Button
            onClick={handleClickAddTweet}
            disabled={Boolean(text.length >= MAX_LENGTH)}
            color="primary"
            variant="contained"
          >
            Твитнуть
          </Button>
        </div>
      </div>
    </div>
  )
}
