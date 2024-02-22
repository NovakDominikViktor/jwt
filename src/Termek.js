import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Termek({ token }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://jwt.sulla.hu/termekek', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        setProducts(response.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchProducts();
  }, [token]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Product List</h2>
              <ul className="list-group">
                {products.map(product => (
                  <li key={product.id} className="list-group-item">
                    {product.name} - ${product.price}
                  </li>
                ))}
              </ul>
              {error && <p className="text-danger mt-3">Error: {error.message}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Termek;
