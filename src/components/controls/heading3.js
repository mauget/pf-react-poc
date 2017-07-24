

import React, {Component} from 'react';

class Heading3 extends Component {

  constructor(props) {
    super(props || {});
    this.text = props.text;

    // Declare any event handlers here
  }

  render() {

    return <div className="row">
      <div className="col-sm-12">
        <h3 style={{width: "100%", textAlign: "left"}}>{this.text}</h3>
      </div>
    </div>;

  }

}

export default Heading3;
