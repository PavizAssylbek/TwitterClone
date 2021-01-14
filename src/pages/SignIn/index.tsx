import React from "react"
import TwitterIcon from "@material-ui/icons/Twitter"
import SearchIcon from "@material-ui/icons/Search"
import UsersIcon from "@material-ui/icons/PeopleOutline"
import MessageIcon from "@material-ui/icons/ChatBubbleOutlineOutlined"
import { Button, makeStyles, Typography, TextField } from "@material-ui/core"
import { ModalBlock } from "../../components/ModalBlock"
import FormGroup from "@material-ui/core/FormGroup"
import { FormControl } from "@material-ui/core"

export const useStylesSignIn = makeStyles(() => ({
  wrapper: {
    display: "flex",
    height: "calc(100vh - 84px)",
  },
  blueSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#71c9f8",
    flex: "0 0 50%",
    overflow: "hidden",
    position: "relative",
  },
  blueSideBigIcon: {
    position: "absolute",
    left: "50%",
    top: "55%",
    transform: "translate(-50%, -50%)",
    width: "250%",
    height: "250%",
  },
  blueSideInfo: {
    position: "relative",
    listStyle: "none",
    padding: 0,
    margin: 0,
    width: "380px",
    "& h6": {
      display: "flex",
      alignItems: "flex-start",
      color: "white",
      fontWeight: 700,
      fontSize: 20,
    },
  },
  blueSideInfoItem: {
    marginBottom: 40,
  },
  blueSideInfoIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  loginSide: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "0 0 50%",
    overflow: "hidden",
  },
  loginSideTwitterIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: "380px",
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginTop: 10,
    marginBottom: 45,
  },
  loginFormInput: {
    width: "100%",
    fontSize: 19,
    color: "#0f1419",
    marginBottom: 20,
  },
  regiserInput: {
    width: "100%",
    fontSize: 19,
    color: "#0f1419",
    marginBottom: 25,
  },
  loginTitle: {
    fontWeight: 700,
    fontSize: 23,
    color: "#0f1419",
    margin: "30px 0 10px",
  },
  loginTwitterIcon: {
    textAlign: "center",
    fontSize: 45,
  },
}))

const SignIn: React.FC = (): React.ReactElement => {
  const classes = useStylesSignIn()

  const [vissibleModal, setVissibleModal] = React.useState<
    "signIn" | "signUp"
  >()

  const handleClickOpenSignIn = (): void => {
    setVissibleModal("signIn")
  }

  const handleClickOpenSignUp = (): void => {
    setVissibleModal("signUp")
  }

  const handleCloseModal = (): void => {
    setVissibleModal(undefined)
  }

  return (
    <div>
      <div className={classes.wrapper}>
        <section className={classes.blueSide}>
          <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
          <ul className={classes.blueSideInfo}>
            <li className={classes.blueSideInfoItem}>
              <Typography variant="h6">
                <SearchIcon className={classes.blueSideInfoIcon} />
                Читайте о том, что вам интересно.
              </Typography>
            </li>
            <li className={classes.blueSideInfoItem}>
              <Typography variant="h6">
                <UsersIcon className={classes.blueSideInfoIcon} />
                Узнайте, о чем говорять в мире.
              </Typography>
            </li>
            <li className={classes.blueSideInfoItem}>
              <Typography variant="h6">
                <MessageIcon className={classes.blueSideInfoIcon} />
                Присоединяйтесь к общению.
              </Typography>
            </li>
          </ul>
        </section>
        <section className={classes.loginSide}>
          <div className={classes.loginSideWrapper}>
            <TwitterIcon
              color="primary"
              className={classes.loginSideTwitterIcon}
            />
            <Typography className={classes.loginSideTitle} variant="h4">
              Узнайте, что происходить в мире прямо сейчас
            </Typography>
            <Typography>
              <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
            </Typography>
            <br />
            <Button
              onClick={handleClickOpenSignUp}
              style={{ marginBottom: 20 }}
              variant="contained"
              color="primary"
              fullWidth
            >
              Зарегестрироваться
            </Button>
            <Button
              variant="outlined"
              onClick={handleClickOpenSignIn}
              color="primary"
              fullWidth
            >
              Войти
            </Button>
            <ModalBlock
              vissible={vissibleModal === "signUp"}
              onClose={handleCloseModal}
              classes={classes}
              title="Создайте учетную запись"
            >
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <TextField
                    className={classes.regiserInput}
                    autoFocus
                    id="name"
                    label="Имя"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="filled"
                    type="name"
                  />
                  <TextField
                    className={classes.regiserInput}
                    autoFocus
                    id="email"
                    label="E-mail"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="filled"
                    type="email"
                  />
                  <TextField
                    className={classes.regiserInput}
                    autoFocus
                    id="password"
                    label="Password"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="filled"
                    type="password"
                  />
                  <Button color="primary" variant="contained" fullWidth>
                    Далее
                  </Button>
                  <br />
                  <br />
                </FormGroup>
              </FormControl>
            </ModalBlock>
            <ModalBlock
              vissible={vissibleModal === "signIn"}
              onClose={handleCloseModal}
              classes={classes}
              title="Войти в аккаунт"
            >
              <FormControl component="fieldset">
                <FormGroup aria-label="position" row>
                  <TextField
                    className={classes.loginFormInput}
                    autoFocus
                    id="email"
                    label="E-Mail"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="filled"
                    type="email"
                  />
                  <TextField
                    className={classes.loginFormInput}
                    autoFocus
                    id="password"
                    label="Пароль"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="filled"
                    type="password"
                  />
                  <Button
                    onClick={handleCloseModal}
                    color="primary"
                    variant="contained"
                    fullWidth
                  >
                    Войти
                  </Button>
                  <br />
                  <br />
                </FormGroup>
              </FormControl>
            </ModalBlock>
          </div>
        </section>
      </div>
    </div>
  )
}
export default SignIn
