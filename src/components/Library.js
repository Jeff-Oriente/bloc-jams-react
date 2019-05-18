import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (
      <section className='library'>
        {
          this.state.albums.map( (album, index) =>
            <Link to={`/album/${album.slug}`} key={index}>
              <div class="container">
              <div class="row">
              <div class="col-md">
                <img src={album.albumCover} alt={album.title} />
                <div><strong>{album.title}</strong></div>
                <div><strong>{album.artist}</strong></div>
                <div><strong>{album.songs.length} songs</strong></div>
              </div>
              </div>
              </div>
            </Link>
          )
        }
      </section>
    );
  }
}

export default Library;
