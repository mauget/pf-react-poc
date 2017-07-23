// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react';

const HomePage = () => {
  return <div className="container" style={{border: "solid red 1px"}}>

    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <h3 style={{width: "100%", "text-align": "center"}}>Section 1</h3>
      </div>
      <div className="col-md-2"></div>
    </div>

    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <div id="mountPoint"></div>
      </div>
      <div className="col-md-2"></div>
    </div>

    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <h4 style={{width: "100%"}}>Name</h4>
      </div>
      <div className="col-md-2"></div>
    </div>

    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <input style={{width: "100%"}} value="Elwood P. Suggins"/>
      </div>
      <div className="col-md-2"></div>
    </div>

    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <h4 style={{width: "100%"}}>City</h4>
      </div>
      <div className="col-md-2"></div>
    </div>

    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <input style={{width: "100%"}} value="Dogpatch"/>
      </div>
      <div className="col-md-2"></div>
    </div>

    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <h3 style={{width: "100%", "text-align": "center"}}>Section 2</h3>
      </div>
      <div className="col-md-2"></div>
    </div>

    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <h4 style={{width: "100%"}}>Hobby</h4>
      </div>
      <div className="col-md-2"></div>
    </div>

    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <input style={{width: "100%"}} value="Coffee tasting"/>
      </div>
      <div className="col-md-2"></div>
    </div>

    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <h4 style={{width: "100%"}}>Occupation</h4>
      </div>
      <div className="col-md-2"></div>
    </div>

    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <input style={{width: "100%"}} value="Meeting attendee"/>
      </div>
      <div className="col-md-2"></div>
    </div>

    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <h3 style={{width: "100%", "text-align": "center"}}>Section 3</h3>
      </div>
      <div className="col-md-2"></div>
    </div>


    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <h4 style={{width: "100%"}}>Notes</h4>
      </div>
      <div className="col-md-2"></div>
    </div>

    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <texarea style={{width: "100%"}} rows="4" cols="50">
          <span>To  be or not to be, that is the ... gazornanplatt.
          To  be or not to be, that is the ... gazornanplatt.
          To  be or not to be, that is the ... gazornanplatt.
          To  be or not to be, that is the ... gazornanplatt.
          To  be or not to be, that is the ... gazornanplatt.
          To  be or not to be, that is the ... gazornanplatt. </span>
        </texarea>
      </div>
      <div className="col-md-2"></div>
    </div>

    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <h4 style={{width: "100%"}}>Favorite Thing</h4>
      </div>
      <div className="col-md-2"></div>
    </div>

    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-8">
        <input style={{width: "100%"}} value="Coding"/>
      </div>
      <div className="col-md-2"></div>
    </div>

    <div className="row">
      <div className="col-md-12">&nbsp;</div>
    </div>


  </div>

};

export default HomePage
