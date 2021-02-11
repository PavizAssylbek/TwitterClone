import React from "react"

import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import IconButton from "@material-ui/core/IconButton"
import { useHistory } from "react-router-dom"

export const BackButton: React.FC = (): React.ReactElement => {
  const history = useHistory()

  const handleClick = () => {
    history.goBack()
  }

  return (
    <div>
      <IconButton
        onClick={handleClick}
        style={{ marginRight: 20 }}
        color="primary"
      >
        <ArrowBackIcon />
      </IconButton>
    </div>
  )
}
