import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styled";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { FormikSignup } from "./FormikSignup";

const useStyles = makeStyles(() => styles);

export const FormSignup = ({ submitHandler }) => {
  const classes = useStyles();
  const history = useHistory();

  const changeEnterType = () => {
    history.push("/login");
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
                Sign up
              </Typography>
              <FormikSignup
                submitHandler={submitHandler}
                redirectHandler={changeEnterType}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
