import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import EditUserForm from '../../modals/editUserForm/index';
import { DELETE_USER } from '../../../client/actions';

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
  root: {
    backgroundColor: theme.palette.background.paper,
    maxWidth: "100%"
  }
}));

export default function UserCardView(props) {
  const classes = useStyles();
  const { user_details, ...other } = props
  const {id, avatar, first_name, last_name, email, } = user_details

  return (
    <List
      aria-labelledby="nested-list-subheader"
      className={classes.root}
      component="nav"
    >
      <ListItem button id={id}>
        <ListItemIcon>
          <Avatar alt={first_name} src={avatar} />
        </ListItemIcon>
        <ListItemText primary={`${first_name} ${last_name}` } />
        <ListItemText>
          <Button size="small" color="primary">{email}</Button>
        </ListItemText>
        <ListItemIcon>
          <EditUserForm current_user={user_details} {...other} / >
        </ListItemIcon>
        <ListItemIcon>
          <IconButton onClick={() => props.dispatch({ type : DELETE_USER, payload: { id } })} size="small" edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemIcon>
      </ListItem>
    </List>
  );
}
