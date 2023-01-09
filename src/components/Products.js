import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const Products = ({ products, loading }) => {
  if(loading) {
    return <h2>Loading...</h2>
  }
  

  function createData(id, name, year, color, pantone_value) {
    return (
      [
      id = products[0],
      name = products[1],
      year = products[2],
      color = products[3],
      pantone_value = products[4]
      ]
    ) ;
  }

  const rows = [ createData() ];

  console.log(createData());
  console.log(rows[0]);
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow> 
            <TableCell align='center'>ID</TableCell>
            <TableCell align='center'>NAME</TableCell>
            <TableCell align='center'>YEAR</TableCell>
            <TableCell align='center'>COLOR</TableCell>
            <TableCell align='center'>PANTONE COLOR</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows[0].map((row) => (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="center">{row.id}</TableCell>
            <TableCell align="center">{row.name}</TableCell>
            <TableCell align="center">{row.year}</TableCell>
            <TableCell align="center">{row.color}</TableCell>
            <TableCell align="center">{row.pantone_value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    
  )
}

export default Products