import React from "react";
import unsplash from "../api/unsplash";

import SearchBar from "./SearchBar";
import Images from "./Images";
import "./App.css"

class App extends React.Component {
  state = { images: [] };
  
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    this.setState({ images: response.data.results})
  }

  render() {
    return (
      <div className="ui container searchbar">
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <Images images={this.state.images}/>

      </div>
    ) 
  }
};

export default App;