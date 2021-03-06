import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { signIn } from "../actions/authedUser";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [userId, setUser] = React.useState("");

  const handleChange = (_, newValue) => {
    let selectedUserId = newValue.id;
    setUser(selectedUserId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(userId));
  };

  const dispatch = useDispatch();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <Autocomplete
            onChange={handleChange}
            options={USERS}
            getOptionLabel={(option) => option.name}
            style={{ width: "100%" }}
            renderInput={(params) => (
              <TextField {...params} label="User" variant="outlined" />
            )}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

const USERS = [
  {
    id: "brittini",
    name: "Brittini",
    avatarURL: "https://i.pravatar.cc/300",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  },
  {
    id: "ifenna",
    name: "Ifenna",
    avatarURL: "https://i.pravatar.cc/300",
    answers: {
      vthrdm985a262al8qx3do: "optionOne",
      xj352vofupe1dqz9emx13r: "optionTwo",
    },
    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
  },
  {
    id: "joeylene",
    name: "Joeylene",
    avatarURL: "https://i.pravatar.cc/300",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  },
  {
    id: "peter",
    name: "Peter",
    avatarURL: "https://i.pravatar.cc/300",
    answers: {},
    questions: [],
  },
  {
    id: "anusha",
    name: "Anusha",
    avatarURL: "https://i.pravatar.cc/300",
    answers: {},
    questions: [],
  },
  {
    id: "evidence",
    name: "Evidence",
    avatarURL: "https://i.pravatar.cc/300",
    answers: {},
    questions: [],
  },
  {
    id: "meryem",
    name: "Meryem",
    avatarURL: "https://i.pravatar.cc/300",
    answers: {},
    questions: [],
  },
  {
    id: "james",
    name: "James",
    avatarURL: "https://i.pravatar.cc/300",
    answers: {},
    questions: [],
  },
];
