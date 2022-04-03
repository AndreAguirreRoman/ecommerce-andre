import React, { Component } from 'react'

import { connect } from 'react-redux';
import * as actions from '../../actions';
import PageTitle from '../pageTitle';
import CartPageDesign from './cartPageDesign';

import history from '../../history';


class CartPage extends Component {
    render() {
        console.log(this.props.cart)
        return (
            <div className='cart-page'>
                <PageTitle className='cart-page__title' title='Cart' />
                <div className='cart-page__content'>
                    {
                        this.props.cart.length ? <CartPageDesign products={this.props.cart} /> : <div className='cart-page__content-nothing'>
                            <h1 className='results__nothing-title'>Oh no!</h1>
                            <h2 className='results__nothing-subtitle'>Your cart is empty!</h2>
                            <div className='results__nothing-icon' onClick={() => history.push('/')}>
                                <a className='results__nothing-icon__text'>Continue shopping</a>
                            </div>

                        </div>
                    }
                </div>
            </div>

        )
    }
}



function mapStateToProps(state) {
    const cart = state.user.cart;

    return { cart }
}
CartPage = connect(mapStateToProps, actions)(CartPage)

export default CartPage;