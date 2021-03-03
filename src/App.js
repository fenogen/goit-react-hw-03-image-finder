import React from "react";

// import Phonebook from "./components/Phonebook/Phonebook"

import ImageSearch from './components/ImageSearch/ImageSearch'
// import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Phonebook /> */}
        <ImageSearch/>
      </div>
    );
  }
}

export default App;
