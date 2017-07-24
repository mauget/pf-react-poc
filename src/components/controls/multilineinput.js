
import React, {Component} from 'react';

class MultilineTextInput extends Component {

  constructor(props) {
    super(props || {});
    this.text = props.text;
    this.rows = props.rows;
    this.cols = props.cols;

    // Declare any event handlers here
  }

  render() {

    return <div className="row">
      <div className="col-sm-12">
        <texarea style={{width: "100%"}} rows={this.rows} cols={this.cols}>
          <span>{this.text}</span>
      </texarea>
      </div>
    </div>;

  }

}

export default MultilineTextInput;
