 const Products = ({ products, loading }) => {
  if(loading) {
    return <h2>Loading...</h2>
  }

 
  return (

    <ul>
      {products.map( product => (
        <li key={product.id}>{product.name}</li>))}
    </ul>
    

  )
}

export default Products