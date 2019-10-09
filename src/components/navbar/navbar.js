import React, {Component} from 'react';
import {Link} from 'react-router-dom';
export default class Navbar extends Component{

callHelpPage = () => {
console.log('contact us!')
}

render(){
  const {callHelp, callMain} = this.props
    return(
      <div className="app-search">
                <div className="app-buttons">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
          <Link to="/" className="nav-link">Главная</Link>      
        </li>
        <li className="nav-item active">
          <Link to="/directory/" className="nav-link">Справочник</Link>      
        </li>
        <li className="nav-item active">
          <Link to="/help/" className="nav-link">Помощь</Link>      
        </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</div>
</div>       
    )
    }
  
  }