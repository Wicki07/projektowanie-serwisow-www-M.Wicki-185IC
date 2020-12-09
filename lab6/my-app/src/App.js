import React from 'react'
import './App.css';
import { useTable } from 'react-table'

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


export default App;
