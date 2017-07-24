
import React, {Component} from 'react';

class TextInput extends Component {

  constructor(props) {
    super(props);
    this.text = props.text;

    // Declare any event handlers here
  }

  render() {

    return <div className="row">
      <div className="col-sm-12">
        <input style={{width: "100%"}} defaultValue={this.text} className="form-control"/>
      </div>
    </div>;

  }

}

export default TextInput;
