import React, { Component } from "react";
// import 'src/components/counter.css'
// import Carousel from "./Carousel";
// import Banner from "./Banner";

class Counter extends Component {

  state = {
    // count: this.props.value,
    count: 0,
    imgUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };
  constructor() {
    super();
    // alert('cost'+ this.state.count);
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }
  incrementCount() {
    // alert('icrement ', this.state.count);
    this.setState({ count: this.state.count + 1 });
  }
  decrementCount() {
    if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
  }
  render() {
    
    console.log("props", this.props.value);
    return (
      <div>
        {/* <Carousel></Carousel>
        <Banner></Banner> */}
        
        <div className="container  my-5 text-center">
        <div>{this.props.children}</div>
          <img
            src={this.state["imgUrl"]}
            className="img-fluid m-3 shadow rounded-3"
            alt=""
            srcSet=""
          />
          <span className={this.counterBadge()}>{this.formatCount()}</span>
          <button
            onClick={this.incrementCount}
            type="button"
            className="btn btn-sm m-3  btn-outline-secondary"
          >
            Incrment
          </button>
          <button
            onClick={this.decrementCount}
            type="button"
            className="btn btn-sm m-3  btn-outline-secondary"
          >
            decrement
          </button>

          {/* {this.state.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))} */}
        </div>
      </div>
    );
  }

  counterBadge() {
    let couterBadge = "m-3 rounded-pill  badge bg-";
    couterBadge += this.state.count === 0 ? "warning" : "primary";
    return couterBadge;
  }

  formatCount() {
    const { count } = this.state;

    return count === 0 ? "zero" : count;
  }
}

export default Counter;
