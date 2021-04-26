import React from 'react';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import Filter from './components/Filter';
import Results from './components/Results';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booklist: [],
      search: "",
      filter: "None",
      printType: "None"
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const apiKey= 'key=AIzaSyCUqIs4Xtw0nrfnWsse9gEEJZYB54S9sXY'
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&filter=${this.state.filter}&printType=${this.state.printType}&${apiKey}`
    fetch(url)
      .then(response => response.json())
      .then(bookData => this.setState({
        booklist: bookData.items
  
      }))
    };


  setSearch(search) {
    this.setState({
      search
    });
  }

  setFilter(filter) {
    this.setState({
      filter
    });
  }

  setPrint(printType) {
    this.setState({
      printType
    });
  }

  render() {
    console.log(this.state.booklist)
  return (
    <div className="App">
      <Header />
      <Searchbar setSearch={search => this.setSearch(search)} handleSubmit={e => this.handleSubmit(e)}/>
      <Filter setFilter={filter => this.setFilter(filter)} setPrint={printType => this.setPrint(printType)}/>
      <Results booklist={this.state.booklist}/>
    </div>
  );
  }
}

export default App;
