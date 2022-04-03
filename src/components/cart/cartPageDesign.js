import React, { Component } from 'react'
import CartPageItems from './cartPageItems';


import * as actions from '../../actions';
import { connect } from 'react-redux';

class CartPageDesign extends Component {
    render() {
        const { className } = this.props;

        const { products } = this.props
        let count = products.length;
        let totalPrice = products.reduce((total, currentValue) => total = total + currentValue.product.product_price, 0);

        return (
            <div className='cart-items'>
                <div className={`${className} cart-items__products`}>
                    <div className={`cart-items__products-item no-scroll`} >
                        {
                            products.map(product => {
                                return (
                                    <CartPageItems className='cart-page__products-map cart-items__products-map' onClick={() => { this.props.deleteProduct(product._id) }} image={product.product.product_image} name={product.product.product_name} subtitle={product.product.product_brand} price={product.product.product_price} key={Math.random()} />
                                )
                            })
                        }
                        <div className={`${className} cart-footer`}>
                            <hr className='cart-footer__line' />
                            <div className='cart-footer__subtotal'>
                                <div className='cart-footer__subtotal-sub'>
                                    <div className='cart-footer__subtotal-sub-subtotal'>Subtotal</div>
                                    <div className='cart-footer__subtotal-sub-count'>{count} Items</div>
                                </div>
                                <div className='cart-footer__subtotal-price'>${totalPrice}</div>
                            </div>


                            <div className='cart-footer__checkout'>
                                <button className='cart-footer__checkout__bttn' onClick={() => history.push('/order/review')}>Checkout</button>
                            </div>
                        </div>
                    </div>







                </div >

            </div >

        )
    }
}

CartPageDesign = connect(null, actions)(CartPageDesign)

export default CartPageDesign;