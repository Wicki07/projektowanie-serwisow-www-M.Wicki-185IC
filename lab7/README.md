# projektowanie-serwisow-www-M.Wicki-185IC

### Autor: Mateusz Wicki Grupa: 185IC_B1

## Wygląd strony 
![](https://i.imgur.com/ZbQENwA.png)
![](https://i.imgur.com/dgHk34w.png)
![](https://i.imgur.com/drbjHF8.png)
## Kod

### Kod uruchamiający aplikację
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
```
Aby dodać bootstrapa do aplikacji należy go najpierw zainstalować przy pomocy komendy `npm install react-bootstrap bootstrap` nastpępnie należy go zaimportować
### Główna funkcja

```javascript
function App() {
    return (
          <Router>
            <Header />
            <Contetnt />
          </Router>    
    )
  }
```
### Funkcja głównej strony
```javascript
 
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
```
Sytlowanie elemntów strony głównej

```javascript
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
  
```

#### Z biblioteki `@material-ui/core` wykorzystane elemnty:
 - Card
 - CardActions
 - CardContent
 - Typography
 - Avatar

### Funkcja strony "Login"
```javascript
 
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
```
Sytlowanie elemntów logowania

```javascript
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
  
  
```

#### Z biblioteki `@material-ui/core` wykorzystane elemnty:
 - Container
 - CssBaseline
 - Typography
 - TextField
 - FormControlLabel
 - Button
 
 
### Funkcja strony "Blog"
```javascript
 
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
```
Sytlowanie elemntów na blogu

```javascript
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
```

#### Z biblioteki `@material-ui/core` wykorzystane elemnty:
 - Container
 - Typography
 - Button
 - Grid
 - Card
 - CardMedia
 - CardContent
 - CardActions
