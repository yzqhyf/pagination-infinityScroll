import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";
import axios from "axios";
import Product from "../Components/product";
import DropDown from "../Components/dropdown";
import { fetchProduct, fetch_Product } from "../Service/fetchAPI";
import { productFilter } from "../Redux/action";

import "./productList.scss";

const handleObserver = (props) => {
  console.log(props);
  props.dispatch(fetchProduct());
  return true;
};

class ProductList extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    // this.state = {
    //   userInfo: {},
    //   prodoctList: [],
    //   error: ""
    // };
    this.loader = React.createRef();
  }

  handleOnChange = (e) => {
    // console.log(e.target.value);
    this.props.dispatch(productFilter(e.target.value));
  };

  componentDidMount() {
    // axios
    //   .get("https://api.github.com/users/yzqhyf")
    //   .then((response) => {
    //     this.setState({ userInfo: response.data });
    //   })
    //   .catch((err) => {
    //     this.setState({ error: err });
    //   });
    // fetchData().then((data) => {
    //   this.setState({ prodoctList: data });
    // });
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
    };
    // const props=this.props;
    const observer = new IntersectionObserver(
      () => handleObserver(this.props),
      options
    );
    observer.observe(this.loader.current);
    this.props.dispatch(fetchProduct());
  }

  render() {
    return (
      <>
        <div className="product">
          {/* {this.state.error && <span>Error</span>}
          {this.state.userInfo.login} */}

          {/* <div className="drop-down">
            <select onChange={(e) => this.handleOnChange(e)}>
              <option value="ALL">All</option>
              <option value="SORT_BY_NAME">sort by name</option>
              <option value="SORT_BY_PRICE">sort by price</option>
            </select>
          </div> */}
          <DropDown filter={(e) => this.handleOnChange(e)} />
          {/* <div>{this.props.lists.length}</div> */}
          {this.props.lists.length !== 0 ? (
            <div className="product-list">
              {this.props.lists.map((product) => (
                <Product key={product.id} item={product} />
              ))}
            </div>
          ) : (
            <Loader type="ThreeDots" color="#787878" height={50} width={100} />
          )}

          <div className="loader" ref={this.loader}>
            <Loader type="ThreeDots" color="#444444" height={50} width={100} />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  const tempLists = [...state.productReducer.lists];
  const filter = state.filterReducer.filter;

  if (filter === "SORT_BY_NAME") {
    tempLists.sort((a, b) => a.name.localeCompare(b.name));
  } else if (filter === "SORT_BY_PRICE") {
    tempLists.sort((a, b) => b.cost - a.cost);
  }
  // console.log(tempLists);
  return {
    lists: tempLists
  };
};

export default connect(mapStateToProps, null)(ProductList);
