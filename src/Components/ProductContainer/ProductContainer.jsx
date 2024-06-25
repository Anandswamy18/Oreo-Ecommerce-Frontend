import React, { useEffect, useState } from 'react';
import './ProductContainer.css'; 
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);

  useEffect(() => {
    fetch('/productDetails.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  const handleProductClick = (index) => {
    setSelectedProductIndex(index === selectedProductIndex ? null : index);
  };

  const handleButtonClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className='body'>
      <div className="bounce-in-top">
        {products.map((product, index) => (
          <div
            key={index}
            className="product-item"
            onClick={() => handleProductClick(index)}
          >
            <div className={`ima-div ${selectedProductIndex === index ? 'ima-div-selected' : ''}`} onClick={() => handleProductClick(index)}>
              <img src={product.product_img} alt={product.product_name} className='image' />
              {selectedProductIndex === index && (
                <div className="product-details">
                  <div className='Plus' onClick={handleButtonClick}><AddRoundedIcon style={{ color: 'white' }} /></div> 
                  <div className='Shopping' onClick={handleButtonClick}><ShoppingCartRoundedIcon style={{ color: 'white' }} /></div> 
                </div>
              )}
            </div>
            <h2 className='text-focus-in'>{product.product_name}</h2>
            <div className='price-block'>
              <p> ${product.actual_price}</p>
              <p className='dis-price'> ${product.discounted_price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
