

import React, {Component} from 'react';

class Button extends Component {

  constructor(props) {
    super(props);
    this.text = props.text;

    // Declare any event handlers here
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    window.alert("Placeholder for update");
  }

  render() {

    return <div className="row">
      <div className="col-sm-12">
        <button style={{width: "100%", border: "solid 1px green", borderRadius: "4px", marginTop: "10px", marginBottom: "10px"}}
                className="form-control"
                onClick={this.clickHandler}>{this.text}</button>
      </div>
    </div>;

  }

}

export default Button;
