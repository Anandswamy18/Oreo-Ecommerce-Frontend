import React, { useState } from 'react';
import '../ProductContainer/ProductContainer.css'; 
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import { useDispatch, useSelector } from 'react-redux';
import { updateCartItem, removeFromCart } from '../../actions/Action';
import { toast} from 'react-toastify';
import './Cart.css'

const Cart = () => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  console.log('Current Cart State:', cart);

  const handleProductClick = (index) => {
    setSelectedProductIndex(index === selectedProductIndex ? null : index);
  };

  const handleAddButtonClick = (event, index, quantity) => {
    event.stopPropagation();
    dispatch(updateCartItem(index, quantity + 1));
    toast.success("your product quantity updated sucessfully!",{ position: 'top-center' })
  };

  const handleRemoveButtonClick = (event, index, quantity) => {
    event.stopPropagation();
    if (quantity > 1) {
      dispatch(updateCartItem(index, quantity - 1));
      toast.success("your product quantity updated sucessfully!",{ position: 'top-center' })
    } else {
      dispatch(removeFromCart(index));
      toast.success("your product removed from cart sucessfully!",{ position: 'top-center' })
    }
  };

  const handleRemovePermanentlyClick = (event, index) => {
    event.stopPropagation();
    dispatch(removeFromCart(index));
    toast.success("your product removed from cart sucessfully!",{ position: 'top-center' })
  };

  return (
    <div className='cart-body'>
      <div className="bounce-in-top">
        {cart.map((product, index) => (
          <div
            key={index}
            className="cart-product-item"
            onClick={() => handleProductClick(index)}
          >
            <div className={`cart-ima-div ${selectedProductIndex === index ? 'cart-ima-div-selected' : ''}`} onClick={() => handleProductClick(index)}>
              <img src={product.product_img} alt={product.product_name} className='image' />
              {selectedProductIndex === index && (
                <div className="cart-product-details">
                  <div className='cart-Plus' onClick={(e) => handleAddButtonClick(e, product.index, product.quantity)}>
                    <AddRoundedIcon style={{ color: 'white' }} />
                  </div> 
                  <div className='cart-Minus' onClick={(e) => handleRemoveButtonClick(e, product.index, product.quantity)}>
                    <RemoveRoundedIcon style={{ color: 'white' }} />
                  </div> 
                  <div className='cart-Delete' onClick={(e) => handleRemovePermanentlyClick(e, product.index)}>
                    <DeleteForeverRoundedIcon style={{ color: 'white' }} />
                  </div> 
                  
                </div>
              )}
            </div>
            <h2 className='text-focus-in'>{product.product_name}</h2>
            <p  className='cart-qty' style={{fontSize:"18px"}}>Qty:- {product.quantity}</p>
            <div className='cart-price-block'>
              <p>${product.actual_price}</p>
              <p className='cart-dis-price'>${product.discounted_price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
