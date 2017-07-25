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

``` javascript
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

## License

MIT © [Diego Haz](https://github.com/diegohaz)
