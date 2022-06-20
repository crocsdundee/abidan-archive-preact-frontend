/** @jsx h */
import { h } from 'preact';
import './main.scss';
import skywornPNG from '../../assets/skyworn.png';

const Main = () => (
  <div className="main">
    <header>
      <div className="logo">
        <a>
          <img src={skywornPNG} alt="skyworn_png" />
        </a>
      </div>
      <div className="panel">
        <nav className="login">
          <a className="dark-button">Sign in</a>
          <a className="dark-button">Sign up</a>
        </nav>
        <div className="search">
          <input type="search" placeholder="Search..."></input>
          <button className="dark-button" type="submit">
            search
          </button>
        </div>
        <nav className="tabs">
          <a>Events</a>
          <a>Recent</a>
          <a>Tags</a>
          <a>Wiki</a>
          <a>Chat</a>
        </nav>
      </div>
    </header>
    <main>main</main>
  </div>
);

export default Main;
