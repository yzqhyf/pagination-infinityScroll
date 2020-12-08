import React from "react";

class Product extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <div className="product-item">
        <div>{this.props.item.display_name}</div>
        <img src={this.props.item.imageURL} alt={this.props.item.name} />
        <div>{this.props.item.cost}</div>
      </div>
    );
  }
}

export default Product;
