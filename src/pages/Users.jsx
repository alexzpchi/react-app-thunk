import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usersSlice } from "../store/slices";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import {User} from '../components/User' 

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  listBody: {
    boxShadow: '5px 7px 15px 5px #B2B2B2'
  },
  title: {
    margin: theme.spacing(4, 2, 2),
  },
}));

export const Users = () => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dispatch = useDispatch();
  const { loading, users } = useSelector((state) => state.users);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    async function fetchData() {
      await dispatch(usersSlice.effects.usersThunk());
    }
    fetchData();
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <CircularProgress />
        </Grid>
      ) : (
        <Grid container>
          <Grid item xs={4} md={3} lg={3} xl={2} style={{ minHeight: "calc(100vh - 64px)" }} className={classes.listBody}>
            <Typography variant="h6" className={classes.title}>
              Users
            </Typography>
            <div className={classes.demo}>
              <List
                dense={true}
                component="nav"
                aria-label="main mailbox folders"
              >
                {users.map((user, index) => (
                  <ListItem
                    key={user.id}
                    button
                    selected={selectedIndex === index}
                    onClick={()=>handleListItemClick(index)}
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <AccountCircleIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={user.name}
                      secondary={"Secondary text"}
                    />
                  </ListItem>
                ))}
              </List>
            </div>
          </Grid>
          <Grid item xs={8} md={9} lg={9} xl={10}>
            <User user={users[selectedIndex]} />
          </Grid>
        </Grid>
      )}
    </>
  );
};
