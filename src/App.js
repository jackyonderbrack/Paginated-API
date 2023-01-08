
import './App.css';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState, useEffect} from 'react'
import Products from './components/Products';






const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const API_URL = 'https://reqres.in/api/products';

const App = () => {
  const [ products, setProducts ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ productsPerPage, setProductsPerPage ] = useState(10);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const res = await axios.get(API_URL);
      setProducts(res.data.data);
      setLoading(false);
    }

    fetchProducts();
  }, []);

  

   return (
   

      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <Container maxWidth="sm">
      <h1>Pagination task</h1>
      
      <Products products={products} loading={loading} />
    

      <Button>Prev</Button>
      <Button>Next</Button>
    </Container>
    </ThemeProvider>
  
    
    
  );
}






export default App;
