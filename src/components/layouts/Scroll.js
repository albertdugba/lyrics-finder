import React, { Component } from "react";
import "../../App.css";

class Scroll extends Component {
  state = {
    scrollPosition: 0
  };
  listToScrollEvent = () => {
    document.addEventListener("scroll", () => {
      requestAnimationFrame(() => {
        this.calculateScrollDistance();
      });
    });
  };

  componentDidMount() {
    this.listToScrollEvent();
  }

  getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const docHeight = this.getDocHeight();

    const totalDocScrollLength = docHeight - windowHeight;
    const scrollPosition = Math.floor((scrollTop / totalDocScrollLength) * 100);
    console.log(scrollPosition);

    this.setState({ scrollPosition });
  };

  render() {
    return <header></header>;
  }
}

export default Scroll;
