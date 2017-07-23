// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react';

const HomePage = () => {
  return <div className="container" style={{border: "solid red 1px"}}>

    <div className="row">
      <div className="col-sm-12">
        <h5 style={{width: "100%", "text-align": "center"}}>Section 1</h5>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <div id="mountPoint"></div>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <h4 style={{width: "100%"}}>Name</h4>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <input style={{width: "100%"}} value="Elwood P. Suggins"/>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <h4 style={{width: "100%"}}>City</h4>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <input style={{width: "100%"}} value="Dogpatch"/>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <h5 style={{width: "100%", "text-align": "center"}}>Section 2</h5>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <h4 style={{width: "100%"}}>Hobby</h4>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <input style={{width: "100%"}} value="Coffee tasting"/>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <h4 style={{width: "100%"}}>Occupation</h4>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <input style={{width: "100%"}} value="Meeting attendee"/>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <h5 style={{width: "100%", "text-align": "center"}}>Section 3</h5>
      </div>
    </div>


    <div className="row">
      <div className="col-sm-12">
        <h4 style={{width: "100%"}}>Notes</h4>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <texarea style={{width: "100%"}} rows="4" cols="50">
          <span>To  be or not to be, that is the ... gazornanplatt.
          To  be or not to be, that is the ... gazornanplatt.
          To  be or not to be, that is the ... gazornanplatt.
          To  be or not to be, that is the ... gazornanplatt.
          To  be or not to be, that is the ... gazornanplatt.
          To  be or not to be, that is the ... gazornanplatt. </span>
        </texarea>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <h4 style={{width: "100%"}}>Favorite Thing</h4>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <input style={{width: "100%"}} value="Coding"/>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">&nbsp;</div>
    </div>


  </div>

};

export default HomePage
