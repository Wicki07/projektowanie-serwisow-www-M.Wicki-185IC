# projektowanie-serwisow-www-M.Wicki-185IC

### Autor: Mateusz Wicki Grupa: 185IC_B1

## Wygląd strony 
![](https://github.com/Wicki07/projektowanie-serwisow-www-M.Wicki-185IC/blob/master/lab6/my-app/zrzuty/1.PNG)

Po naciśnięciu na elemnet w tabeli on znika natopmiast naciśnięcie na przycisk ***Pokaż wszystkie*** pojawiają się wszystkie elemnent

![](https://github.com/Wicki07/projektowanie-serwisow-www-M.Wicki-185IC/blob/master/lab6/my-app/zrzuty/1.PNG)

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
Aby dodać bootstrapa do aplikacji należy go najpier zainstalować przy pomocy komendy `npm install react-bootstrap bootstrap` nastpępnie należy go zaimportować
### Główna funkcja

```javascript
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Table">
        <TableTitle />
        <Table />
        </div>
      </header>
    </div>
  );
}
```
### Klasa TableTitle i wykorzystana funkcja

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
### Klasa Table i wykorzystane funkcje

```javascript
class Table extends React.Component{
  render(){
    return (
      <div>    
        <Test />
        <Button />
      </div>

    )
  }
  }


 function Test(){
  const data = React.useMemo(
    () => [
      {
        col1: '8:00 Polski',
        col2: '11:00 Matematyka',
        col3: 'WOLNE',
        col4: '9:30 Angielski',
        col5: '11:50 WF',
      },
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Poniedziałek',
        accessor: 'col1',
      },
      {
        Header: 'Wtorek',
        accessor: 'col2',
      },
      {
        Header: 'Środa',
        accessor: 'col3',
      },
      {
        Header: 'Czwartek',
        accessor: 'col4',
      },
      {
        Header: 'Piatek',
        accessor: 'col5',
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    // Tworzenie tabeli
    <table {...getTableProps()} style={{ 
            border: 'solid 2px black',
            marginLeft: 'auto',
            marginRight: 'auto',
            }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}> 
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                key={headerGroup.id}
                style={{
                  borderBottom: 'solid 3px black',
                  borderLeft: 'solid 1px black',
                  color: 'black',
                  fontWeight: 'bold',
                  paddingLeft: '30px',
                  paddingRight: '30px',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    className="cell"
                    style={{
                      padding: '10px',
                      border: 'solid 1px gray',
                      color: 'black',
                    }}
                    onClick={() => hide(cell.getCellProps().key)}
                  >
                    {cell.render('Cell')}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
function hide(id){
  document.querySelectorAll(".cell")[id.charAt(id.length-1) - 1].style.opacity = 0;
}

class Button extends React.Component{
  button(){
    document.querySelectorAll(".cell").forEach(element => {
      element.style.opacity = 100;
    });
  }
  render(){
    return(
      <div>
        <button type="button" className="btn btn-dark mt-5" onClick={this.button}>Pokaż wyszystkie</button>
      </div>
    )
  }
}
```
Do utworzenia tabeli skorzystałem z poradnika ze strony https://react-table.tanstack.com/. React-table działa jako biblioteka UI więc również trzeba go zainstalować przy pomocy komendy ` npm install react-table --save`
