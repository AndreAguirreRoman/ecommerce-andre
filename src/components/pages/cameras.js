import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import ShopCart from '../cart/shopCart'
import ProductDesign from './productDesign';
import PageTitle from '../pageTitle';

class Cameras extends Component {


    componentDidMount() {

        const headerLinks = [
            {
                _id: 0,
                title: <div className='header-icon'>
                    <div className='header-icon__icon'><i className="fas fa-user-circle" ></i></div>
                    <div className='header-icon__text'>Account & Information</div>
                </div>,
                active: false,
                path: '/account'
            },
            {
                _id: 1,
                title: 'Orders',
                active: true,
                path: '/orders'
            },
        ]

        const navbarLinks = [
            {
                _id: 0,
                title: 'All',
                path: '/products',
                active: false,
            },
            {
                _id: 1,
                title: 'Phones',
                path: '/products/phones',
                active: false,
            },
            {
                _id: 2,
                title: 'Cameras',
                path: '/products/cameras',
                active: false,
            },
            {
                _id: 3,
                title: "TV's",
                path: '/products/tv',
                active: false,
            },
            {
                _id: 4,
                title: 'Computers',
                path: '/products/computers',
                active: false,
            },
            {
                _id: 5,
                title: 'Video Games',
                path: '/products/video-games',
                active: false,
            },
            {
                _id: 6,
                title: 'Headphones',
                path: '/products/headphones',
                active: false,
            },
        ]

        this.props.setHeaderLinks(headerLinks)
        this.props.setNavbarLinks(navbarLinks)
    }



    render() {
        const cameras = this.props.products.filter((productItem) => productItem.product_category_name.includes('Smartcamera')).map(productItem => {
            return (
                <ProductDesign key={productItem.product_id} className='cameras__wrapper-item design' productItem={productItem} />
            )
        })

        return (
            <div className='filter'>
                <PageTitle className={'filter__title'} title={'Cameras'} />
                <div className='filter__cart'>
                    <ShopCart className={'filter__cart-cart'} />
                </div>
                <div className='cameras'>
                    {cameras}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { products } = state.products
    const { cart } = state.user.cart
    return { products, cart }
}

Cameras = connect(mapStateToProps, actions)(Cameras);

export default Cameras;