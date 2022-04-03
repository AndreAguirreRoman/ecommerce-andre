import React, { Component } from 'react';

import { CartTitleProducts } from './cartFunctions';
import CartPrice from './cartPrice';

class CartPageItems extends Component {
    render() {

        const { onClick, products, price, name, subtitle, className, image } = this.props;
        return (
            <div className={`${className} cart-page cart-item`}>
                <img className='cart-page__image cart-item__image' src={image} />
                {products}
                <CartTitleProducts className='cart-page__title cart-item__products__title' subtitle={subtitle} title={name} />
                <CartPrice className='cart-page__price cart-item__price' onClick={onClick} price={`$${price}`} />
            </div>
        );
    }
}

export default CartPageItems;