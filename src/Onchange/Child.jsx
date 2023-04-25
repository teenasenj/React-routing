import React, { Component } from "react";
import Person from "./Person";


class Child extends Component {
  state = {
    persons: [
      { name: "max", age: 24 },
      { name: "jack", age: 26 },
      { name: "scott", age: 28 },
      { name: "adam", age: 23 },
    ],
    showPersons: false,
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name:  "scott", age: 26 },
        { name: event.target.value, age: 26 },
        { name: "scott", age: 28 },
      ],
    });
  };



  


  render() {
    
    return ( 
//     <>
//   <Person name={this.state.persons[0].name} 
//   age={this.state.persons[0].age}
//   change={this.nameChangeHandler}
//   />
   <Person name={this.state.persons[1].name} 
  age={this.state.persons[1].age}
  change={this.nameChangeHandler}/>







  

//   </>
);




}
}
export default Child;





