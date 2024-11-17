import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../contexts/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

    // Số lượng món trong giỏ hàng
    const itemCount = cartItems[id] || 0;

    // Log URL ảnh để kiểm tra
    console.log("Image URL:", `${url}/uploads/${image}`);

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={`${url}/uploads/${image}`} alt={name} />
                {
                    itemCount === 0
                        ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add to cart" />
                        : <div className='food-item-counter'>
                            <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="Remove from cart" />
                            <p>{itemCount}</p>
                            <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="Add to cart" />
                        </div>
                }
            </div>
            <div className="food-item-infor">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
