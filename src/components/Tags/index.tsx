import React from "react"
import {
  Paper,
  Typography,
  ListItem,
  Divider,
  ListItemText,
  List,
} from "@material-ui/core"
import { useHomeStyles } from "../../pages/Home/theme"
import { useSelector } from "react-redux"
import { selectIsTagsLoaded, selectTagsItems } from "../../store/tags/selectors"
import { Link } from "react-router-dom"

interface TagsProps {
  classes: ReturnType<typeof useHomeStyles>
}

export const Tags: React.FC<TagsProps> = ({
  classes,
}: TagsProps): React.ReactElement | null => {
  const items = useSelector(selectTagsItems)
  console.log("🚀 ~ file: index.tsx ~ line 22 ~ items", items)
  const isLoaded = useSelector(selectIsTagsLoaded)

  if (!isLoaded) {
    return null
  }

  return (
    <Paper className={classes.rightSideBlock}>
      <Paper className={classes.rightSideBlockHeader}>
        <b>Актуальне темы</b>
      </Paper>
      <List>
        {items.map((obj) => (
          <React.Fragment key={obj._id}>
            <ListItem className={classes.rightSideBlockItem}>
              <Link to={`home/search?q=${obj._id}`}>
                <ListItemText
                  primary={obj.name}
                  secondary={
                    <Typography component="span" variant="body2">
                      Твитов: {obj.count}
                    </Typography>
                  }
                />
              </Link>
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  )
}
