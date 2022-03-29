import React, { Component } from 'react';

import SignInForm from './signinForm';
import PageTitle from '../pageTitle';
import Footer from '../footer'

import { connect } from 'react-redux';
import * as actions from '../../actions';



class SignIn extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);

        this.props.fetchUsersGlobal();
        this.props.testing();

    }

    onSubmit = (fields) => {
        console.log(fields)

    }




    render() {
        const users = this.props.users;

        console.log("nene", users)

        return (
            <div className='signin'>
                <div className='signin-box'>
                    <PageTitle className='signin-box__page-title' title='Login' />
                    <SignInForm onSubmit={this.onSubmit} className='signin__form' />
                    <Footer className='signin-box__footer' />
                </div>

            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log(state.user)
    const { users } = state.user
    return { users }
}

SignIn = connect(mapStateToProps, actions)(SignIn)
export default SignIn;