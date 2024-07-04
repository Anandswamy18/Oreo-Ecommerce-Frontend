import React, {  useState } from 'react';
import './Ecommerce.css';
import HomeIcon from '@mui/icons-material/Home';
import { Outlet } from 'react-router-dom';

const Cart = () => {
  const [activeIndex, setActiveIndex] = useState(null);



  const breadcrumbItems = ["Oreo", "eCommerce", "Product"];

  const handleClick = (index) => {
    setActiveIndex(index);
  };
 
  return (
    <>
      <nav className='title-header'>
        
        <div className='header-content'>
        <h1 className='product'>Product</h1>
        <p className='welcome'>Welcome to Oreo</p>
        </div>
       
        <div className='navigate-btn'>
          <HomeIcon />
          {breadcrumbItems.map((item, index) => (
            <span key={index} >
              <span 
                onClick={() => handleClick(index)}
                style={{ color: activeIndex === index ? 'black' : 'inherit', cursor: 'pointer' }}
              >
                {item}
              </span>
              {index < breadcrumbItems.length - 1 && <span> / </span>}
            </span>
          ))}
        </div>
      </nav>
      <Outlet/>
      </>
  );
}

export default Cart;
