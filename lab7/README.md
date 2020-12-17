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
class TableTitle extends React.Component{
    state={
      title: 'Tabela zadan'
    }
    render(){
    return (
    <div><Title title={this.state.title}/></div>
    )
  }

}
 function Title(props){
  return(
  <h1 className="title-header">{props.title}</h1>
  )
}
```
### Funkcja strony "blog"

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
Sytlowanie elemntów elemntów strony "blog"

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
