import React from 'react';

class Songs extends React.Component {
  render(){
    if(!this.props.songs) return null
    const top20 = this.props.songs.map((song, index) => {

      let position = <p className="song-position">{index + 1}</p>
      let artist = <p className="song-artist" value={index} key={index}>{song["im:artist"].label}</p>
      let name = <p className="song-name">{song["im:name"].label}</p>
      let image = <img className="song-images" src={song["im:image"][0].label} alt={song["im:name"].label}/>
      let price = <p className="song-price">{song["im:price"].label}</p>

      return <article className="song-article">{position}{image}{artist}{name}{price}</article>
    })
    return <section className="song-section">{top20}</section>
  }
}

export default Songs
