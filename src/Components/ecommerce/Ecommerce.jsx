import React, { useState, useEffect } from 'react';
import './Ecommerce.css';
import HomeIcon from '@mui/icons-material/Home';
import { Outlet, useLocation, Link } from 'react-router-dom';

const Cart = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [pageTitle, setPageTitle] = useState('Product'); 

  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;

    switch (currentPath) {  
      case '/':
        setPageTitle('Home');
        break;
      case '/ecommerce/cart':
        setPageTitle('Cart');
        break;
      case '/ecommerce/product':
        setPageTitle('Product');
        break;
      default:
        setPageTitle('Product'); 
        break;
    }
  }, [location.pathname]);


  const breadcrumbItems = [
    { text: "Oreo", path: "/" },
    { text: "eCommerce", path: "/ecommerce/product" },
    { text: pageTitle, path: location.pathname }
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };
 
  return (
    <>
      <nav className='title-header'>
        
        <div className='header-content'>
          <h1 className='product'>{pageTitle}</h1> 
          <p className='welcome'>Welcome to Oreo</p>
        </div>
       
        <div className='navigate-btn'>
          <HomeIcon />
          {breadcrumbItems.map((item, index) => (
            <span key={index}>
              <Link 
              className='title'
                to={item.path}
                onClick={() => handleClick(index)}
                style={{ color: activeIndex === index ? 'black' : 'inherit', cursor: 'pointer' }}
              >
                {item.text}
              </Link>
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
