import React from "react"

import TwitterIcon from "@material-ui/icons/Twitter"
import SearchIcon from "@material-ui/icons/Search"
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined"
import MessageIcon from "@material-ui/icons/MailOutline"
import BookmarkIcon from "@material-ui/icons/BookmarkBorderOutlined"
import ListIcon from "@material-ui/icons/ListAlt"
import UserIcon from "@material-ui/icons/Person"
import { Button, IconButton, Typography } from "@material-ui/core"
import { useHomeStyles } from "../../pages/Home"

interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyles>
}

export const SideMenu: React.FC<SideMenuProps> = ({
  classes,
}: SideMenuProps): React.ReactElement => {
  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <div className="">
          <IconButton className={classes.logo} aria-label="" color="primary">
            <TwitterIcon className={classes.logoIcon} />
          </IconButton>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className="">
          <SearchIcon className={classes.sideMenuListItemIcon} />
          <Typography variant="h6" className={classes.sideMenuListItemLabel}>
            Поиск
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className="">
          <NotificationsIcon className={classes.sideMenuListItemIcon} />
          <Typography variant="h6" className={classes.sideMenuListItemLabel}>
            Уведомления
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className="">
          <MessageIcon className={classes.sideMenuListItemIcon} />
          <Typography variant="h6" className={classes.sideMenuListItemLabel}>
            Сообщения
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className="">
          <BookmarkIcon className={classes.sideMenuListItemIcon} />
          <Typography variant="h6" className={classes.sideMenuListItemLabel}>
            Закладки
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className="">
          <ListIcon className={classes.sideMenuListItemIcon} />
          <Typography variant="h6" className={classes.sideMenuListItemLabel}>
            Список
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div className="">
          <UserIcon className={classes.sideMenuListItemIcon} />
          <Typography variant="h6" className={classes.sideMenuListItemLabel}>
            Профиль
          </Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <Button
          className={classes.sideMenuTweetButton}
          fullWidth
          color="primary"
          variant="contained"
        >
          Твитнуть
        </Button>
      </li>
    </ul>
  )
}
