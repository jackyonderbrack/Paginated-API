import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Products from './components/Products';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const App = () => {

const URL_API = "https://reqres.in/api/products";

/// Importujemy produkty
const [ products, setProducts ] = useState([]); 
/// Jeśli setProduct nie zadziała, pozostanie włączony setLoading
const [ loading, setLoading ] = useState(); 

useEffect(() => {
  const fetchProducts = async () => {
    setLoading(true);
    const response = await axios.get(URL_API);
    setProducts(response.data.data);
    setLoading(false);
  }
  fetchProducts();
  console.log("Produkty zostały pobrane")
}, []);





//////// PRODUKTY ZOSTAŁY ZAIMPORTOWANE ////////

   return (

      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    <Container maxWidth="md">
      <h1>Pagination</h1>
    
        <Products products={products} loading={loading}/>
      
      
      

    </Container>
    </ThemeProvider>
  
    
    
  );
}






export default App;
