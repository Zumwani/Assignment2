import React from 'react'

const url = window.location.pathname.split("/").pop().replace(".html", "");

const NavBar = () => {
  return (
    <nav className="main-layout">
      
      <div>
        <a href="index.html" title="Fixxo" className="logo"></a>
      </div>
      
      <div className="text-align-center">
          <a href="index.html" className={"main-link " + GetActive("index")}>Home</a>
          <a href="" className={"main-link " + GetActive("categories")}>Categories</a>
          <a href="" className={"main-link " + GetActive("products")}>Products</a>
          <a href="contact.html" className={"main-link " + GetActive("contact")}>Contact</a>
      </div>
      
      <div>
          <button className="button-icon fa fa-search"></button>
          <button className="button-icon fa fa-code-compare"></button>
          <button className="button-icon fa fa-heart" badge="1"></button>
          <button className="button-icon fa fa-shopping-bag" badge="3"></button>
      </div>
      
  </nav>
  )
}

function GetActive(page) {
  console.log(url);
if (page == url) return "active";
return "";
}

export default NavBar