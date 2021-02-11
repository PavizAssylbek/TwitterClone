import React from "react"

import TwitterIcon from "@material-ui/icons/Twitter"
import SearchIcon from "@material-ui/icons/Search"
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined"
import MessageIcon from "@material-ui/icons/MailOutline"
import BookmarkIcon from "@material-ui/icons/BookmarkBorderOutlined"
import ListIcon from "@material-ui/icons/ListAlt"
import UserIcon from "@material-ui/icons/Person"
import CreateIcon from "@material-ui/icons/CreateOutlined"
import { Button, Hidden, IconButton, Typography } from "@material-ui/core"
import { useHomeStyles } from "../../pages/Home/theme"
import { ModalBlock } from "../ModalBlock"
import { AddTweetForm } from "../AddTweetForm.tsx"
import { Link } from "react-router-dom"

interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyles>
}

export const SideMenu: React.FC<SideMenuProps> = ({
  classes,
}: SideMenuProps): React.ReactElement => {
  const [visibleAddTweet, setVisibleAddTweet] = React.useState<boolean>(false)

  const handleClickOpenAddTweet = () => {
    setVisibleAddTweet(true)
  }

  const onCloseAddTweet = () => {
    setVisibleAddTweet(false)
  }

  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <Link to="/home">
          <IconButton className={classes.logo} aria-label="" color="primary">
            <TwitterIcon className={classes.logoIcon} />
          </IconButton>
        </Link>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className="">
          <SearchIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography variant="h6" className={classes.sideMenuListItemLabel}>
              Поиск
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className="">
          <NotificationsIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography variant="h6" className={classes.sideMenuListItemLabel}>
              Уведомления
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className="">
          <MessageIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography variant="h6" className={classes.sideMenuListItemLabel}>
              Сообщения
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className="">
          <BookmarkIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography variant="h6" className={classes.sideMenuListItemLabel}>
              Закладки
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className="">
          <ListIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography variant="h6" className={classes.sideMenuListItemLabel}>
              Список
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className="">
          <UserIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography variant="h6" className={classes.sideMenuListItemLabel}>
              Профиль
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <Button
          className={classes.sideMenuTweetButton}
          fullWidth
          color="primary"
          variant="contained"
          onClick={handleClickOpenAddTweet}
        >
          <Hidden smDown>Твитнуть</Hidden>
          <Hidden mdUp>
            <CreateIcon />
          </Hidden>
        </Button>
        <ModalBlock
          title=""
          vissible={visibleAddTweet}
          onClose={onCloseAddTweet}
        >
          <div style={{ maxWidth: 500, width: "100%" }}>
            <AddTweetForm classes={classes} />
          </div>
        </ModalBlock>
      </li>
    </ul>
  )
}
