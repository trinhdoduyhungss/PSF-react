import React, { Component } from 'react';
import products from './../data/products'
import NumberHandling from './NumberHandling';

class MProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 3,
            products: products
        }
    }

    renderProduct = () => {
        return this.state.products.map(product => {
            return <div key={product.id}>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
            </div>
        })
    }

    filterProducts = (value) => {
        let filteredProducts = value === 'all' ? products : products.filter(pro => pro.price >= value)
        this.setState({ products: filteredProducts })
    }

    render() {
        return (
            <div>
                <NumberHandling filter={this.filterProducts} />
                {this.renderProduct()}
            </div>
        )
    }
}
export default MProduct