import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styled";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { FormikLogin } from "./FormikLogin";

const useStyles = makeStyles(() => styles);

export const FormLogin = ({ submitHandler }) => {
  const classes = useStyles();
  const { error } = useSelector((state) => state.auth);
  const history = useHistory();

  const changeEnterType = () => {
    history.push("/signup");
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Card className={classes.rootCard}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Login
              </Typography>
              <FormikLogin
                submitHandler={submitHandler}
                redirectHandler={changeEnterType}
              />

              {error && (
                <Typography
                  className={classes.errorCredentials}
                  variant="h5"
                  component="h2"
                >
                  {error}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
