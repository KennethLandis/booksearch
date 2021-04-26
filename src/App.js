import React from 'react';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Filter from './components/Filter';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booklist: [],
      search: "",
      filter: "None",
      print: "None"
    }
  }

  setFilter(filter) {
    this.setState({
      filter
    });
  }

  setPrint(print) {
    this.setState({
      print
    });
  }

  render() {
  return (
    <div className="App">
      <Header />
      <Searchbar />
      <Filter setFilter={filter => this.setFilter(filter)} setPrint={print => this.setPrint(print)}/>
    </div>
  );
  }
}

export default App;
