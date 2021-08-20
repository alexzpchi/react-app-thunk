import React from "react";
import { useStyles } from "./styled";
import Typography from "@material-ui/core/Typography";

export const User = ({ user }) => {
  const classes = useStyles();

  if (!user) {
    return null;
  }

  return (
    <>
      <Typography variant="h3" className={classes.title}>
        {user.name}
      </Typography>
      <Typography color="textPrimary">
        <span className={classes.rowTitle}>Email:&nbsp;</span>
        <span>{user.email}</span>
      </Typography>
      <Typography color="textPrimary">
        <span className={classes.rowTitle}>Phone:&nbsp;</span>
        <span>{user.phone}</span>
      </Typography>
      <Typography color="textPrimary">
        <span className={classes.rowTitle}>Web-site:&nbsp;</span>
        <a href={user.website} target="_blank" rel="noreferrer">
          {user.website}
        </a>
      </Typography>
      <Typography color="textPrimary">
        <span className={classes.rowTitle}>Address:&nbsp;</span>
        <span>{`${user.address.city} city, ${user.address.suit}, ${user.address.street} str.`}</span>
      </Typography>
    </>
  );
};
