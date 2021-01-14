import React from "react"
import IconButton from "@material-ui/core/IconButton"
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core"
import { Close } from "@material-ui/icons"
import { useStylesSignIn } from "../../pages/SignIn"

interface DialogComponentsProps {
  title: string
  children: React.ReactNode
  classes?: ReturnType<typeof useStylesSignIn>
  vissible?: boolean
  onClose: () => void
}

export const ModalBlock: React.FC<DialogComponentsProps> = ({
  title,
  vissible = false,
  onClose,
  children,
}: DialogComponentsProps): React.ReactElement | null => {
  if (!vissible) {
    return null
  }
  return (
    <Dialog
      open={vissible}
      onClose={onClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        <IconButton onClick={onClose} color="secondary" aria-label="close">
          <Close style={{ fontSize: 26 }} color="primary" />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}
