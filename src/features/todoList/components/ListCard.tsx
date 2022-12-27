import ClearIcon from '@mui/icons-material/Clear'
import DoneIcon from '@mui/icons-material/Done'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { task } from '../../../models'
import { v4 } from 'uuid'

interface ListCardProps {
  todoList: task[]
  onClickDelete: (idx: number) => void
  onClickMarkComplete: (idx: number) => void
}

export function ListCard({ todoList, onClickDelete, onClickMarkComplete }: ListCardProps) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'inherit' }} aria-label="todoList">
      {todoList.map((item, idx) => (
        <ListItem disablePadding key={v4()}>
          <ListItemButton>
            <ListItemText primary={item.mainTask} />
            <ListItemIcon>
              {item.taskStatus === 'none' ? (
                <ListItemButton onClick={() => onClickDelete(idx)}>
                  <ClearIcon sx={{ color: 'red' }} />
                </ListItemButton>
              ) : (
                !item.taskStatus && (
                  <ListItemButton onClick={() => onClickDelete(idx)}>
                    <ClearIcon sx={{ color: 'red' }} />
                  </ListItemButton>
                )
              )}
              {item.taskStatus === 'none' ? (
                <ListItemButton onClick={() => onClickMarkComplete(idx)}>
                  <DoneIcon sx={{ color: 'green' }} />
                </ListItemButton>
              ) : (
                item.taskStatus && (
                  <ListItemButton onClick={() => onClickMarkComplete(idx)}>
                    <DoneIcon sx={{ color: 'green' }} />
                  </ListItemButton>
                )
              )}
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}
