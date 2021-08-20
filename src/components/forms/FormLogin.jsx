import React from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import { useStyles } from "./styled";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export const FormLogin = ({ submitHandler }) => {
  const classes = useStyles();
  const { error } = useSelector((state) => state.auth);
  const history = useHistory();

  const validationSchemaLogin = yup.object({
    username: yup.string("Enter your username").required("Required field"),
    password: yup.string("Enter password").required("Required field"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema:
    validationSchemaLogin,
    onSubmit: (values) => submitHandler(values),
  });

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
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  fullWidth
                  id="username"
                  name="username"
                  label="Username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                  helperText={formik.touched.username && formik.errors.username}
                />
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  label="Password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />

                <Button
                  className={classes.button}
                  color="primary"
                  variant="contained"
                  type="submit"
                  fullWidth
                >
                  Submit
                </Button>
                <Button
                  className={classes.button}
                  color="secondary"
                  variant="contained"
                  fullWidth
                  onClick={changeEnterType}
                >
                  Sign Up
                </Button>

                {error && (
                  <Typography
                    className={classes.errorCredentials}
                    variant="h5"
                    component="h2"
                  >
                    {error}
                  </Typography>
                )}
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
