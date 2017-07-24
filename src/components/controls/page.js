
import React, {Component} from 'react';

class Page extends Component {

  constructor(props) {
    super(props);
    this.title = props.title;
    this.id = props.id;

    // Declare any event handlers here
  }

  render() {

    return <div id={this.id} className="container"
                style={{border: "solid red 1px", borderRadius: "16px", paddingBottom: "1em"}}>{this.props.children}</div>;

  }

}

export default Page;
