import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
      <Grid className="landing-grid">
        <Cell col={12}>
        <img
        src="https://scontent.fcmb4-1.fna.fbcdn.net/v/t1.0-9/28471211_1775319379198229_3678535946341700373_n.jpg?_nc_cat=111&oh=3903cbcc625477c24599340a1bb190ac&oe=5C57C3C0"
        alt="myimage"
        className="myhappy-image"
          />

          <div className="banner-text">
          <h1> Full Stack Web Developer </h1>

          <hr/>

          <p>  HTML/CSS  |  Bootstrap   |  JavaScript   |   React   |   React Native  |   Angular   |   Nodejs   |   Laravel   |   MongoDB  </p>
          <div className="social-links" >

          {/* LinkedIn*/}
          <a href="https://google.com" rel="noopener noreferrer" target="_balnk">
          <i className="fa fa-linkedin-square"  aria-hidden="true" />
          </a>


          {/* Github*/}
          <a href="https://google/com" rel="noopener noreferrer" target="_balnk">
          <i className="fa fa-github-square"  aria-hidden="true" />

          </a>


          {/* Freecodecamp*/}
          <a href="https://google/com" rel="noopener noreferrer" target="_balnk">
          <i className="fa fa-free-code-camp"  aria-hidden="true" />

          </a>

          {/*Youtube*/}
          <a href="https://google/com" rel="noopener noreferrer" target="_balnk">
          <i className="fa fa-youtube-square"  aria-hidden="true" />

          </a>



          </div>
          </div>
        </Cell>
      </Grid>
      </div>
    )
  }
}
export default Landing;
