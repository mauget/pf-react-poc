
import React, {Component} from 'react';

class SectionControl extends Component {

  constructor(props) {
    super(props || {});
    this.title = props.title;

    // Declare any event handlers here
  }

  render() {

    return <div className="row">
      <div className="col-sm-12">
        <h5 style={{width: "100%", textAlign: "center"}}>{this.title}</h5>
      </div>
    </div>;

  }

}

export default SectionControl;
