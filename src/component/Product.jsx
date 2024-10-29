import React, { useEffect, useState } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';

const Product = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState({}); 
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const filtered = products.filter((product) =>
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  const toggleDescription = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
      {loading ? (
        <div style={{ alignItems: 'center', height: '100vh' }}>
          <Spinner animation="border" role="status" />
        </div>
      ) : (
        filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <Card
              key={product.id}
              style={{
                width: '15rem',
                minHeight: expanded[product.id] ? '35rem' : '30rem', 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflow: 'hidden', 
                transition: 'min-height 0.3s ease', 
              }}
            >
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.title}
                style={{ height: '200px', objectFit: 'contain' }}
              />
              <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <Card.Title style={{ fontSize: '1rem', height: '3.5rem', overflow: 'hidden' }}>{product.category}</Card.Title>
                  <Card.Text
                    style={{
                      height: expanded[product.id] ? 'auto' : '6rem', 
                      overflow: 'hidden', 
                      transition: 'height 0.3s ease', 
                    }}
                  >
                    {product.description}
                  </Card.Text>
                  <Button variant="link" onClick={() => toggleDescription(product.id)}>
                    {expanded[product.id] ? 'Show Less' : 'Show More'}
                  </Button>
                </div>
                <div>
                  <Card.Text><strong>Price:</strong> ${product.price}</Card.Text>
                  <Button
                    onClick={() => dispatch(addItem({
                      id: product.id,
                      category: product.category,
                      price: product.price,
                      image: product.image,
                      cartQuantity: 1 
                    }))}
                    className="btn btn-primary"
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No products found for this category</p>
        )
      )}
    </div>
  );
};

export default Product;
