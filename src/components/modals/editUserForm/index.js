import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { UPDATE_USER } from '../../../client/actions';

export default function EditUserForm(props) {
  const [open, setOpen] = React.useState(false);
  const { id, avatar, first_name, last_name, email } = props.current_user
  
  const updateUser = (event) => {
    event.preventDefault()
    const payloadData = {
      id,
      avatar,
      email: event.target.elements.email.value,
      first_name: event.target.elements.first_name.value,
      last_name: event.target.elements.last_name.value,
    };

    props.dispatch({ type : UPDATE_USER, payload: payloadData })
    setOpen(false)
  };
  
  return (
    <React.Fragment>
      <IconButton size="small" edge="end" aria-label="edit" onClick={() => setOpen(true)}>
          <EditIcon />
      </IconButton>
      <Dialog open={open} aria-labelledby="form-dialog-title">
        <DialogContent>
          <ListItem>
            <ListItemIcon>
              <Avatar alt={first_name} src={avatar} />
            </ListItemIcon>
            <ListItemText primary={`Hi ${first_name}`} />
          </ListItem>
          <br/>
          <form onSubmit={updateUser}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First name"
                  name="first_name"
                  defaultValue={first_name}
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                    label="Last name"
                    name="last_name"
                    defaultValue={last_name}
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Email"
                  name="email"
                  defaultValue={email}
                  variant="outlined"
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
            <DialogActions>
              <Button onClick={() => setOpen(false)} color="primary"> Cancel </Button>
              <Button color="primary" type="submit"> Update </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
