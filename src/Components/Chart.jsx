import React from 'react';

class Chart extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }
  }

  render() {
    return(
      <h1>hi</h1>
    )
  }

  componentDidMount(){
    console.log('componentDidMount');
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
        console.log(iTunesData);
      }
    })
    xhr.send();
 }
}
   // const oauth = "e47c5a1f1fd83eb8af0889a83adca667a633db80";
   // for (let user of this.state.usernames){
   //   let url = `https://api.github.com/users/${user}?access_token=${oauth}`;
   //   const xhr = new XMLHttpRequest();
   //   xhr.open('GET', url);
   //   xhr.addEventListener("load", () => {
   //     if (xhr.status !== 200){
   //       return console.log("request failed");
   //     } else {
   //       console.log("request successful");
   //       let jsonString = xhr.responseText;
   //       let userData = JSON.parse(jsonString);
   //       console.log(userData);
   //       this.setState(prevState => {
   //         return {profiles: prevState.profiles.concat(userData)};
   //       });
   //     }
   //   });
   //



export default Chart
