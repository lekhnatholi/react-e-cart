import React, { Component } from 'react';

import Title from '../Title';
import CartColumn from './CartColumn';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartSubTotal from './CartSubTotal';
import { ProductConsumer } from '../../context';


export default class Cart extends Component {
    render() {
        return (
            <div className="container">
                <ProductConsumer>
                    {value => {
                        const { cart } = value;
                        console.log(cart);
                        console.log(cart.length);
                        if (cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title name="your" title="cart" />
                                    <CartColumn />
                                    <CartList value={value} />
                                    <CartSubTotal value={value} />
                                </React.Fragment>
                            )
                        } else {
                            return <EmptyCart />
                        }
                    }}
                </ProductConsumer>
            </div>
        )
    }
}
