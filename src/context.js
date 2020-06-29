import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

 const ProductContext = React.createContext();

 class ProductProvider extends Component {
     state={
            products:[],
            detailProduct:detailProduct
    }
    componentDidMount(){
        this.setProducts();
    }
    getItem = (id) => {
        const product = this.state.products.map(item=>item.id===id);
        return product;
    }

    setProducts = () =>{
        let tempProducts= [];
        storeProducts.forEach(item=>{
            const singleItem = {...item};
            tempProducts = [...tempProducts,singleItem];
        })
        this.setState(()=>{
            return {products:tempProducts}
        })
    }
    handleDetail = (id) =>{
        console.log('clicked');
        const product = this.getItem(id);
        this.setState(()=>{
          return  {detailProduct:product}
        })
    }
    addTocart = () => console.log('product is added to cart');
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, handleDetail:this.handleDetail,handleaddToCart :this.addTocart
            }} >
               {this.props.children}
            </ProductContext.Provider>
            
        )
    }
}
const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer};



