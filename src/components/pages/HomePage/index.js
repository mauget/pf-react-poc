
import React from 'react';
import SectionControl from 'components/controls/section';

const HomePage = () => {

  return <div className="container" style={{border: "solid red 1px"}}>

    <SectionControl id="sectionTest" title="Section One"/>

    <div className="row">
      <div className="col-sm-12">
        <div id="mountPoint"></div>
      </div>
    </div>


    <div className="row">
      <div className="col-sm-12">
        <h3 style={{width: "100%"}}>Name</h3>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <input style={{width: "100%"}} defaultValue="Elwood P. Suggins"/>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <h4 style={{width: "100%"}}>City</h4>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <input style={{width: "100%"}} defaultValue="Dogpatch"/>
      </div>
    </div>

    <SectionControl id="sectionTest" title="Section Two"/>

    <div className="row">
      <div className="col-sm-12">
        <h4 style={{width: "100%"}}>Hobby</h4>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <input style={{width: "100%"}} defaultValue="Coffee tasting"/>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <h4 style={{width: "100%"}}>Occupation</h4>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">
        <input style={{width: "100%"}} defaultValue="Meeting attendee"/>
      </div>
    </div>


    <SectionControl id="sectionTest" title="Section Three"/>


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
        <input style={{width: "100%"}} defaultValue="Coding"/>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-12">&nbsp;</div>
    </div>


  </div>

};

export default HomePage;
