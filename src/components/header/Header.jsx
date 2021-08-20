import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useSelector, useDispatch } from "react-redux";
import { authSlice } from "../../store/slices";
import { useStyles } from "./styled";

export const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(authSlice.actions.logout());
  };

  if (!token) {
    return null;
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {`Hello, ${user.username}!`}
          </Typography>
          <Button color="inherit" onClick={logout}>
            <ExitToAppIcon />
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
