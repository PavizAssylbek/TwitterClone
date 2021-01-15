import { makeStyles, Theme } from "@material-ui/core"
import { grey } from "@material-ui/core/colors"

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
    position: "sticky",
    top: 0,
    maxWidth: 230,
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
    display: "flex",
    cursor: "pointer",
    paddingTop: 15,
    paddingLeft: 20,

    "&:hover": {
      backgroundColor: "rgb(245, 248, 250)",
    },
  },
  tweetAvatar: {
    width: theme.spacing(6.5),
    height: theme.spacing(6.5),
    marginRight: 15,
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
  rightSide: {
    paddingTop: 20,
    position: "sticky",
    top: 0,
  },
  rightSideBlock: {
    backgroundColor: "#f5f8fa",
    borderRadius: 15,
    marginTop: 20,
    "& .MuiList-root": {
      paddingTop: 0,
    },
  },
  rightSideBlockHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    backgroundColor: "transparent",
    padding: "13px 18px",
    "& b": {
      fontSize: 20,
      fontWeight: 800,
    },
  },
  rightSideBlockItem: {
    cursor: "pointer",
    "& .MuiTypography-body1": {
      fontWeight: 700,
    },
    "& .MuiListItemAvatar-root": {
      minWidth: 50,
    },
    "& .MuiListItemText-root": {
      margin: 0,
    },
    "&:hover": {
      backgroundColor: "#edf3f6",
    },
  },
  addForm: {
    padding: 20,
  },
  addFormBody: {
    display: "flex",
    width: "100%",
  },
  addFormBottom: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addFormBottomActions: {
    marginTop: 10,
    paddingLeft: 70,
    justifyContent: "start",
  },
  addFormTextArea: {
    width: "100%",
    border: 0,
    fontSize: 20,
    outline: "none",
    fontFamily: "inherit",
    resize: "none",
  },
  addFormBottomLine: {
    height: 12,
    backgroundColor: "#e6ecf0",
  },
  addFormCircleProgress: {
    position: "relative",
    width: 20,
    height: 20,
    margin: "0 10px",
    "& .MuiCircularProgress-root": {
      position: "absolute",
    },
  },
  addFormBottomRight: {
    display: "flex",
    alignItems: "center",
  },
}))
