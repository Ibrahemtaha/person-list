import React, { Component } from "react";
import "./App.css";

const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt="person" />
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </div>
  );
};

const PersonList = () => {
  return (
    <div className="person-list">
      <Person img="34" name="john" job="developer" />
      <Person img="43" name="ggggg" job="developer">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
          voluptatibus!
        </p>
      </Person>
      <Person img="66" name="bbbbb" job="Harid Dresser" />
    </div>
  );
};

class App extends Component {
  render() {
    return <PersonList />;
  }
}

export default App;
