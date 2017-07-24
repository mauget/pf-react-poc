
import React, {Component} from 'react';

class Section extends Component {

  constructor(props) {
    super(props);
    this.title = props.title;
    this.id = props.id;

    // Declare any event handlers here
  }

  render() {

    return <div className="row">
      <div className="col-sm-12">
        <h4 style={{width: "100%"}}>{this.title}</h4>
        <div id={this.id}>{this.props.children}</div>
      </div>
    </div>;

  }

}

export default Section;
