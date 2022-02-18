const React = require('react')
const ReactDOM = require('react-dom')

const myArray = [1, 2, 3, 4, 5]

const myRow = Array.from(Array(Math.floor(Math.random() * 8) + 3).keys())
const myCol = Array.from(Array(Math.floor(Math.random() * 8) + 3).keys())
// const myRow = [...Array(Math.floor(Math.random() * 8) + 3)]
// const myCol = [...Array(Math.floor(Math.random() * 8) + 3)]
// const myRow = [...Array(5)]
// const myCol = [...Array(10)]


class App extends React.Component {
  state = { 
    count: 0,
    liveCells: [[1,1], [2,3], [4,2]] 
    // how can I console.log the state?
  }

  render() {
    return (
      <div className='text-primary'>
        {/* <div className='my-4'>
          <Hello count={this.state.count} onReset={() => this.setState({ count: 0 })}></Hello>
          <Hello count={this.state.count + 5}></Hello>
          <Hello count={this.state.count + 6}></Hello>
          <Hello count={this.state.count + 7}></Hello>
          <Hello count={this.state.count - 10}></Hello>
          {this.state.count > 5 ? <div className="text-success">Whu?</div> : <div className="text-info">Ha!</div>}
        </div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me, pleaseeee!
        </button> */}
        {/* {myArray.map(i => <div>{i}</div>)} */}

        {/* hw starts here */}
        {myRow.map(i => <div className='row row-cols-auto' key={i.toString()}>
            {myCol.map(j => <div className='col cell' key={j.toString()} onClick={() => {this.setState({ liveCells: this.state.liveCells.push([i,j])}); console.log(this.state.liveCells)}}></div>)}
            {/* this only works for the first cell clicked, according to console log */}
          </div>)}
        
        

    
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