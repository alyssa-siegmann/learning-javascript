const React = require('react')
const ReactDOM = require('react-dom')

const myArray = [1, 2, 3, 4, 5]

class App extends React.Component {
  state = { count: 0 }

  render() {
    return (
      <div class='text-primary'>
        <div class='my-4'>
          <Hello count={this.state.count} onReset={() => this.setState({ count: 0 })}></Hello>
          <Hello count={this.state.count + 5}></Hello>
          <Hello count={this.state.count + 6}></Hello>
          <Hello count={this.state.count + 7}></Hello>
          <Hello count={this.state.count - 10}></Hello>
          {this.state.count > 5 ? <div className="text-success">Whu?</div> : <div className="text-info">Ha!</div>}
        </div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me, pleaseeee!
        </button>
        {myArray.map(i => <div>{i}</div>)}
        {myArray.map(i => <div class='cell'>{i}</div>)}
      </div>
    )

    // React.createElement(
    //     "div", 
    //     { className: "text-primary" }, 
    //     React.createElement(
    //       "div",
    //       { className: "my-4" },
    //       "Hello world! The count is: " + this.state.count
    //     ),
    //     React.createElement(
    //       "button",
    //       {  },
    //       "Click me!"
    //     )
    //   )
  }
}

class Hello extends React.Component {
  render() {
    return (
      <div onClick={() => this.props.onReset && this.props.onReset()}>
        Hello world! {this.props.count}
      </div>
    )
  }
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById("app")
)