// don't forget to run 
// npx esbuild life-grid-react.jsx --outfile=bundle.js --bundle --watch
// before testing in browser


const React = require('react')
const ReactDOM = require('react-dom')

const myArray = [1, 2, 3, 4, 5]

const myRow = Array.from(Array(Math.floor(Math.random() * 8) + 3).keys())
const myCol = Array.from(Array(Math.floor(Math.random() * 8) + 3).keys())

const cellInArray = (array, x, y) => array.some((element) => element[0] === x && element[1] === y);

// const myRow = [...Array(Math.floor(Math.random() * 8) + 3)]
// const myCol = [...Array(Math.floor(Math.random() * 8) + 3)]
// const myRow = [...Array(5)]
// const myCol = [...Array(10)]

// function f() {
//   return 5
// }


class App extends React.Component {
  state = { 
    count: 0,
    liveCells: [[1,1], [2,3], [4,2]] 
  }

  render() {
    return (
      <div className='text-primary p-4'> Here is a board for you:
        {myRow.map(i => 
          <div 
            className='row row-cols-auto'
            key={i}
          >
            {myCol.map(j => 
              <div 
                className={cellInArray(this.state.liveCells, i, j) ? "col cell alive" : "col cell dead"}
                key={j} 
                onClick={() => 
                  {var newCells = cellInArray(this.state.liveCells, i, j) ? 
                    // KNOWN BUG in line below becuase of the "not && not" condition - it removes everything with the same x OR y
                    this.state.liveCells.filter(cell => cell[0] !== i && cell[1] !== j) :
                    [...this.state.liveCells, [i,j]];
                  this.setState({ liveCells: newCells }); 
                  console.log(newCells);}}
              >
              </div>
            )}
          </div>)}
    
          <div className='btn btn-secondary px-2 m-1 btn-sm'
            onClick = {() => 
              {var newCells = [];
              this.setState({ liveCells: newCells }); 
              console.log(newCells);}}
          > Reset to dead ☠️
          </div>

          <div className='btn btn-secondary px-2 m-1 btn-sm'
            onClick = {() => 
              {var newCells = [[0,0]];
              myCol.map(i => myRow.map(j => [...newCells, [i,j]]));
                // THIS IS WRONG -- I NEED TO FIGURE OUT HOW TO CREATE AN ARRAY WITH ALL CELLS. ARRAY CONSTRUCTION SYNTAX PROBABLY WRONG. MAPPING MIGHT BE WRONG. Using [0,0] as a stub.
              this.setState({ liveCells: newCells }); 
              console.log(newCells);}}
          > 🚧 set all to alive WIP 🚧
          </div>

          <div className='btn btn-secondary px-2 m-1 btn-sm'
            onClick = {() => 
              {var newCells = myCol.map(i => i % 2 == 0 ? myRow.map(j => j % 2 == 1 ? Array([i, j]) : nothing) : myRow.map(j => j % 2 == 0 ? Array([i, j]) : noting ));
              // AGAIN, THIS IS A BUG AND DOESN'T WORK -- NEED TO FIGURE OUT HOW TO GET AN ARRAY OF CHECKERED CELLS. I KNOW I'M NOT CONSTRUCTING THE ARRAY CORRECTLY AND MY MAP AS LOOP MIGHT NOT BE SET UP RIGHT
                this.setState({ liveCells: newCells }); 
              console.log(newCells);}}
          > 🚧 checker the grid WIP 🚧
          </div>

          <div className='btn btn-secondary px-2 m-1 btn-sm'> 🚧 swap daed and alive WIP 🚧
          {/* STUB - need to add onclick function -- maybe try something like.... newCells = AllCells.filter OUT liveCells, liveCells: newCells*/}
          </div>

          <div className='btn btn-secondary px-2 m-1 btn-sm'
            onClick = {() => 
              {var newCells = [[1,2], [2,1]];
              this.setState({ liveCells: newCells }); 
              console.log(newCells);}}
          > Repaint 🎨
          </div>
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
  <App width={12} height={10} />,
  document.getElementById("app")
)