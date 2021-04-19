import Product from '../ProductWithBtn';       
import { useSelector } from 'react-redux';
import { fetchProducts } from '../../actions/productsActions';
import { connect } from 'react-redux'
import React, { Component } from 'react';

class Products extends Component {

  constructor(props) {
    super(props);
    this.props.fetchProducts();
  }

  list() {
      return(
        <div className="products">
          { this.props.products.products.map((product) => (<Product key={product.id} product={product}/>)) }
        </div>
      );
  }

  render() {
    if(this.props.products.isLoading) {
      return <div>Loading....</div>;
    } else {
      return(this.list());
    }
  }
}


const mapStateToProps = (state) => ({
  products: state.products,
  isLoading: state.isLoading
});
export default connect(mapStateToProps, {
  fetchProducts
})(Products);