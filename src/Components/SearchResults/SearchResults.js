import React from "react";

import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

export default class SearchResults extends React.Component {

  
  render(){
      return(
      <div className="SearchResults">
          <h2>Results</h2>
          <TrackList tracks = {this.props.searchResults} test={this.props.test} isRemoval={false}/>
        </div>
        );
    }
}