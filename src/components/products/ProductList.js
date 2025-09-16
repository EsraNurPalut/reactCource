import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge,Button } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import { Table } from "reactstrap";
import alertify from "alertifyjs";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

  addToCart=(product)=>{
    this.props.actions.addToCart({quantity:1,product})
  }

  render() {
    console.log("Ürünler:", this.props.products);
    return (
      <div>
        {" "}
        <h3>
          <Badge color="warning"> ProductList</Badge>

          <Badge color="success">{this.props.currentCategory.name}</Badge>
        </h3>{" "}
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((products) => (
              <tr key={products.id}>
                <th scope="row">{products.id}</th>
                <td>{products.productName}</td>
                <td>{products.unitPrice}</td>
                <td>{products.quantityPerUnit}</td>
                <td>{products.unitInStock}</td>
                <td><Button onClick={()=>this.addToCart(product)}
                 Sepete Ekle
                color="success">
                 
                </Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart:bindActionCreators(cartActions.addToCart,direction,dispatch)
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
