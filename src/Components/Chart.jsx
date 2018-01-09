import React from 'react';
import Songs from './Songs'

class Chart extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      songs: []
    }
  }

  render() {
    return(
      <Songs songs={this.state.songs}/>
    )
  }

  componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener("load", () => {
      if (xhr.status !== 200){
        return console.log('Request Failed');
      } else {
        console.log('Request Successful');
        let jsonString = xhr.responseText;
        let iTunesData = JSON.parse(jsonString);
        this.setState({songs: iTunesData.feed.entry})
      }
    })
    xhr.send();
  }
}

export default Chart
