import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { CircularProgress } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  rowTitle: {
    fontWeight: "bold",
    marginLeft: 50,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 2, 2),
    textAlign: "center",
  },
}));

export const User = ({ user }) => {
  const classes = useStyles();
  return (
    <>
      {!!user ? (
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
      ) : (
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
      )}
      
    </>
  );
};
