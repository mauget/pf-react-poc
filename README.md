## React POC Project
This project is intended to be used to evaluate various React 
component toolkits for use with mobile web apps.  It is based on
a starter project based on [https://github.com/diegohaz/arc]() 

### Getting started

```
$ npm install
$ npm run dev
```

A live-reload server starts. Access the current POC demo at

[http://localhost:3000]() — Development live-update server

### Components

React components are located in `src\components`. 

#### Example ES6 HTML/CSS React Component

A React button component follows. It uses Bootstrap CSS, 
but no component toolkit. You may wish create a branch of this project to
experiment with toolkit-based component implementations such as MDL or Foundatation.

The following button components ES6 class is located at
`src/components/controls/button.js`

```javascript
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
        <button style={{width: "100%", border: "solid 1px green",
                        borderRadius: "4px", marginTop: "10px", marginBottom: "10px"}}
                className="form-control"
                onClick={this.clickHandler}>{this.text}</button>
      </div>
    </div>;

  }

}

export default Button;

```

### Example Start Page

The start page contents are located 
at ` src/components/pages/HomePage/index.js`.

```javascript

import React from 'react';
import Page from 'components/controls/page';
import Section from 'components/controls/section';
import Heading3 from 'components/controls/heading3';
import TextInput from 'components/controls/textinput';
import MultilineTextInput from 'components/controls/multilineinput';
import Button from 'components/controls/Button';

const HomePage = () => {

  const
    page = <Page>
      <Section id="section1" title="Section One">
        <Heading3 text="Name"/>
        <TextInput text="Elwood P. Suggins"/>
        <Heading3 text="City"/>
        <TextInput text="Dogpatch"/>
        <Button text="Update" />
      </Section>

      <Section id="section2" title="Section Two">
        <Heading3 text="Hobby"/>
        <TextInput text="Coffee tasting"/>
        <Heading3 text="Occupation"/>
        <TextInput text="Meeting attendee"/>
      </Section>

      <Section id="section3" title="Section Three">
        <Heading3 text="Notes"/>
        <MultilineTextInput text="To  be or not to be, that is the ... gazornanplatt.
                To  be or not to be, that is the ... gazornanplatt.
                To  be or not to be, that is the ... gazornanplatt.
                To  be or not to be, that is the ... gazornanplatt.
                To  be or not to be, that is the ... gazornanplatt.
                To  be or not to be, that is the ... gazornanplatt."/>
        <Heading3 text="Favorite Thing"/>
        <TextInput text="Coding"/>
      </Section>

    </Page>;

  return page;

};

export default HomePage;

```

## License

MIT © [Diego Haz](https://github.com/diegohaz)
