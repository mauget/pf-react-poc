

import React, {Component} from 'react';

class Heading1 extends Component {

  constructor(props) {
    super(props);
    this.text = props.text;

    // Declare any event handlers here
  }

  render() {

    return <div className="row">
      <div className="col-sm-12">
        <h1 style={{width: "100%", textAlign: "left"}}>{this.text}</h1>
      </div>
    </div>;

  }

}

export default Heading1;
