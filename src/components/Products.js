import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




import { useState } from 'react';


// Styles & Pagination imports
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TablePagination from '@mui/material/TablePagination';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';




 


export default function Products({ products, loading }) {



 // Pagination settings.
  function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, productsPerPage, onPageChange } = props;
  
    const handleFirstPageButtonClick = (event) => {
      onPageChange(event, 0);
    };
  
    const handleBackButtonClick = (event) => {
      onPageChange(event, page - 1);
    };
  
    const handleNextButtonClick = (event) => {
      onPageChange(event, page + 1);
    };
  
    const handleLastPageButtonClick = (event) => {
      onPageChange(event, Math.max(0, Math.ceil(count / productsPerPage) - 1));
    };
  
    return (
      <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
          onClick={handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="first page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={handleBackButtonClick}
          disabled={page === 0}
          aria-label="previous page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={handleNextButtonClick}
          disabled={page >= Math.ceil(count / productsPerPage) - 1}
          aria-label="next page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / productsPerPage) - 1}
          aria-label="last page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </Box>
    );
  }
  
  TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
  };
  
  const [page, setPage] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(5);


// Waiting for API download.
  if(loading) {
    return <h2>Loading...</h2>
  }
  
// Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * productsPerPage - Products.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeProductsPerPage = (event) => {
    setProductsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


 // Return Products:

  return (
    
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 300 }} aria-label="product table">
      <TableHead>
        <TableRow> 
            <TableCell style={{ maxWidth: 10 }}   align='left'>ID</TableCell>
            <TableCell style={{ minWidth: 160 }}  align='left'>NAME</TableCell>
            <TableCell style={{ maxWidth: 100 }}  align='center'>YEAR</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {(productsPerPage > 0
        ? products.slice(page * productsPerPage, page * productsPerPage + productsPerPage)
        : products
        ).map((row) => (
          <TableRow 
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell style={{background: row.color}}  align="left" component="th" scope="row">{row.id}</TableCell>
            <TableCell style={{background: row.color}} align="left">{row.name}</TableCell>
            <TableCell style={{background: row.color}} align="center">{row.year}</TableCell>  
          </TableRow>
        ))}

            {emptyRows > (
            <TableRow style={{ height: 6 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
      </TableBody>
    </Table>
    <TablePagination
        rowsPerPageOptions={[2, 5, 6]}
        component="div"
        count={products.length}
        rowsPerPage={productsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeProductsPerPage}
      />
    {console.log("Tabela została utworzona")}
  </TableContainer> 
  )
}

