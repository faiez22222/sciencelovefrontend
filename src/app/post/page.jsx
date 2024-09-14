"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (menu) => {
    if (openDropdown === menu) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(menu);
    }
  };

  return (
    <div className="container">

      <nav className="navbar">
        <div className="top-bar">
          <div className="logo">
            <a href="/">SW</a>
          </div>

          <div className="auth-search">
            <button className="sign-in">Sign In</button>
            <button className="subscribe">Subscribe</button>

            <button className="search-button">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </button>
          </div>


          <button className="hamburger" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>


        <div className={`bottom-bar ${isMenuOpen ? "open" : ""}`}>
          <div className="menu">
            <a href="/" className="home-button">Home</a>


            <div className="dropdown">
              <button onClick={() => toggleDropdown("micro-organisms")} className="dropdown-toggle">
                Micro-Organisms <FontAwesomeIcon icon={faChevronDown} />
              </button>
              {openDropdown === "micro-organisms" && (
                <div className="dropdown-menu">
                  <a href="/micro-organisms/bacteria">Bacteria</a>
                  <a href="/micro-organisms/viruses">Viruses</a>
                  <a href="/micro-organisms/fungi">Fungi</a>
                </div>
              )}
            </div>


            <div className="dropdown">
              <button onClick={() => toggleDropdown("biology")} className="dropdown-toggle">
                Biology <FontAwesomeIcon icon={faChevronDown} />
              </button>
              {openDropdown === "biology" && (
                <div className="dropdown-menu">
                  <a href="/biology/cell-biology">Cell Biology</a>
                  <a href="/biology/genetics">Genetics</a>
                  <a href="/biology/physiology">Physiology</a>
                </div>
              )}
            </div>


            <div className="dropdown">
              <button onClick={() => toggleDropdown("physics")} className="dropdown-toggle">
                Physics <FontAwesomeIcon icon={faChevronDown} />
              </button>
              {openDropdown === "physics" && (
                <div className="dropdown-menu">
                  <a href="/physics/mechanics">Mechanics</a>
                  <a href="/physics/optics">Optics</a>
                  <a href="/physics/thermodynamics">Thermo</a>
                </div>
              )}
            </div>


            <div className="dropdown">
              <button onClick={() => toggleDropdown("chemistry")} className="dropdown-toggle">
                Chemistry <FontAwesomeIcon icon={faChevronDown} />
              </button>
              {openDropdown === "chemistry" && (
                <div className="dropdown-menu">
                  <a href="/chemistry/organic">Organic Chemistry</a>
                  <a href="/chemistry/inorganic">Inorganic Chemistry</a>
                  <a href="/chemistry/physical">Physical Chemistry</a>
                </div>
              )}
            </div>


            <div className="dropdown">
              <button onClick={() => toggleDropdown("mcqs")} className="dropdown-toggle">
                MCQ's <FontAwesomeIcon icon={faChevronDown} />
              </button>
              {openDropdown === "mcqs" && (
                <div className="dropdown-menu">
                  <a href="/mcqs/biology">Biology MCQs</a>
                  <a href="/mcqs/chemistry">Chemistry MCQs</a>
                  <a href="/mcqs/physics">Physics MCQs</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>


      <main className="content">
        <div className="main-section">

          <div className="featured-card">
            <img
              src="https://wallpapercave.com/wp/ew0V5jf.jpg"
              alt="Respiration Disorders"
              className="featured-img"
            />
            <div className="text-content">
              <h2>Some Disorders of associated with Respiration</h2>
              <p>यह एक allergic reaction है...</p>
              <button>Read More...</button>
              <p className="post-info">Post by/post date/Category</p>
            </div>
          </div>


          <div className="posts-grid">
            {[1, 2, 3].map((post) => (
              <div className="post-card" key={post}>
                <img
                  src="https://wallpapercave.com/wp/ew0V5jf.jpg"
                  alt="Post Image"
                  className="post-img"
                />
                <h3>Some Disorders of associated with Respiration</h3>
                <p>यह एक allergic reaction है...</p>
                <button>Read More...</button>
                <p className="post-info">Post by/post date/Category</p>
              </div>
            ))}
          </div>
        </div>


        <aside className="sidebar">
          <div className="latest-news">
            <h3>Latest News</h3>
            <p>Add a little bit of body
              text Add a little bit of
              body text....</p>
          </div>
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <button>Search</button>
          </div>
          <div className="ad-section">
            <p>Ad Space</p>
          </div>
        </aside>
      </main>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          width: 100vw;
        }

        .navbar {
          display: flex;
          flex-direction: column;
          background-color: #006400;
          color: white;
          width: 100%;
        }

       
        .top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          height: 80px; 
          background-color: #006400;
          width: 100%;
          box-sizing: border-box;
        }

        .bottom-bar {
          height: 50px; 
          background-color: #e6ffe6;
        }

        .logo a {
          font-size: 1.8rem;
          font-weight: bold;
          color: white;
          text-decoration: none;
        }

        .auth-search {
          display: flex;
          align-items: center;
        }

        .sign-in {
          background-color: transparent;
          color: white;
          border: none;
          padding: 0;
          font-size: 1rem;
          cursor: pointer;
          margin-left: 1rem;
        }

        .subscribe {
          background-color: #fdd835;
          color: #006400;
          border: 1px solid #fdd835;
          padding: 0.5rem 1rem;
          font-size: 1rem;
          cursor: pointer;
          margin-left: 1rem;
          border-radius: 8px;
        }

        .search-button {
          background-color: transparent;
          border: none;
          margin-left: 1rem;
          cursor: pointer;
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
        }

        .search-icon {
          color: #ffffff;
          font-size: 2rem;
        }

       
        .dropdown {
          position: relative;
        }

        .dropdown-toggle {
          background: none;
          border: none;
          padding: 1rem;
          color: black;
          cursor: pointer;
          width: 100%;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .dropdown-toggle svg {
          margin-left: 0.5rem;
        }

        .dropdown-menu {
          display: flex;
          flex-direction: column;
          position: absolute;
          left: 0;
          top: 100%;
          background-color: #e6ffe6;
          width: 100%;
          z-index: 1;
        }

        .dropdown-menu a {
          padding: 1rem;
          color: black;
          text-decoration: none;
        }

        
        .home-button {
          /*background-color: #4caf50;  Green background */
          color: #000000; 
          padding: 0.75rem 1.5rem; 
          text-decoration: none; 
          border-radius: 5px; 
          font-weight: bold; 
          font-size: 1rem; 
          transition: background-color 0.3s ease;
          border: 1px solid transparent;  
        }

        .home-button:hover 
          /*background-color: #388e3c; Darker green on hover */
          border-color: #000000; x
        }

        .home-button:active {
          background-color: #2e7d32; 
        }

        .home-button:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.5); 
        }

        .home-button:visited {
          color: #1a1a1a; 
        }

        
        .hamburger {
          display: none;
        }

        .menu {
          display: flex;
          flex-direction: row;
          gap: 2rem;
          padding-left: 1rem;
        }

        .content {
          display: flex;
          padding: 2rem;
          
        }

        .main-section {
          flex: 3;
          padding-right: 2rem;
          
        }

        .sidebar {
          flex: 1;
        }

        .featured-card img,
        .post-card img {
          width: 50%;
          height: 50%;
          margin-bottom: 1rem;
        }

        .featured-card {
          display: flex;
          flex-direction: column;
          border: 1px solid #ddd;
          padding: 1.5rem;
          margin-bottom: 2rem;
          background-color: #f9f9f9;
          border: 2px solid #006400; Upgraded border;
        }

        .posts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .post-card {
          border: 1px solid #ddd;
          padding: 1rem;
          text-align: center;
          border: 2px solid #006400; Upgraded border;
        }

        .sidebar .latest-news {
          background-color: #e6ffe6;
          padding: 1rem;
          margin-bottom: 2rem;
        }

       .search-box {
        display: flex;
        align-items: center;
         background-color: #e6ffe6;
            padding: 1rem;
         margin-bottom: 2rem;
        /* border: 2px solid #006400; Upgraded border */
        border-radius: 8px;
        }

  .search-box input {
    flex: 1;
    padding: 0.5rem;
    border: 2px solid #006400; 
    border-radius: 8px;
  }

  .search-box button {
    background-color: #006400; 
    color: white;
    border: none;
    padding: 0.75rem; 
    margin-left: 0.5rem;
    border-radius: 50%; 
    width: 50px; 
    height: 50px; 
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .search-box button:hover {
    background-color: #004d00; 
  }

  .search-box button:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 100, 0, 0.5); 
  }
        .sidebar .ad-section {
          margin-top: 2rem;
          background-color: #fce4ec;
          padding: 1rem;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Home;
