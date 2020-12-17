import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

function App() {
    return (
          <Router>
            <Header />
            <Contetnt />
          </Router>    
    )
  }

function Login() {
  const useStyles = makeStyles({
    root: {
      '& label.Mui-focused': {
        color: 'rgba(0, 0, 0, 0.87)',
      },
    },
    button: {
      backgroundColor: '#007bff',
    }
  });
  
  const classes = useStyles();
  return (
    <Container className={classes.root} component="main" maxWidth="xs">
      <CssBaseline />
      <div class="paper">
        <Typography component="h1" variant="h5">
          Logowanie
        </Typography>
        <form  noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Login"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Hasło"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Zapamiętaj mnie"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.button}
          >
            Zaloguj
          </Button>
        </form>
      </div>
    </Container>
  );
}
function Home() {
  const useStyles = makeStyles({
    root: {
      width: '70%',
      height: 500,
      marginTop: 50,
      marginRight: 'auto',
      marginLeft: 'auto',
    },
    title: {
      color: '#000',
      fontSize: 30,
    },
    pos: {
      marginBottom: 12,
    },
    image: {
      width: 200,
      height: 200,
      marginRight: 'auto',
      marginLeft: 'auto',
    },
    button: {
      marginRight: 'auto',
      marginLeft: 'auto',
    }
  });
  
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Strona stworzona przez
        </Typography>
        <Typography variant="h5" component="h2">
          Mateusza Wickiego
        <Avatar alt="Remy Sharp" src="https://avatars1.githubusercontent.com/u/71140843?s=460&v=4" className={classes.image} />
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.button} size="large" href="https://github.com/Wicki07" target="blank">Zajrzyj po więcej</Button>
      </CardActions>
    </Card>
  );
  
}

class Header extends React.Component{
  componentDidMount(){
      document.title = "Projektowanie serwisów www 22172"
  }
  render(){
      return(
        <div class="navbar-menu">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
          <div class="container">
            <a class="navbar-brand" href="index.html">Mateusz Wicki</a>
              <nav class="menu">
                  <ul>
                      <li>
                          <Link to="/">Home</Link>{/* <Link> z ModernUI*/}
                      </li>
                      <li>
                          <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                          <Link to="/login">Log in</Link>
                      </li>
                  </ul>
              </nav>
          </div>
        </nav>
      </div>
      );
  }
}
class Contetnt extends React.Component{
  componentDidMount(){
      document.title = "Projektowanie serwisów www 22172"
  }
  render(){
      return(
        <Switch>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/blog">
                <Blog />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
      );
  }
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6];

function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        <Container className={classes.cardGrid} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={6}>
                <Card className={classes.card + " shadow"}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://i.imgur.com/B68MhUu.gif"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Tytuł
                    </Typography>
                    <Typography>
                      Przykładowy opis.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default App;
