import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import "../components/styles/Navbar.css";
//GET https://youtube.googleapis.com/youtube/v3/search?part=title%2Csnippet&location=%20(37.42307%2C-122.08427).&locationRadius=500%20kilometers&maxResults=20&order=rating&videoCaption=closedCaption&videoDefinition=high&videoDuration=short&key=[YOUR_API_KEY] HTTP/1.1

import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
function Navbar() {
  const inline = "inline";
  const [disp, setDisplay] = useState(inline);
  const [user, setUser] = useState([]);
  const displayHandler = () => {
    setDisplay("none");
  };
  
  useEffect(() => {
    fetch("http://localhost:3005/user/61e93bc2f10b65e594c6cc5f")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        console.log(data);
      })
    }, []);

  return (
    <>
      <div className="main_container">
       <div className="navbar_wrapper">
       <div className="navbar">
          <div className=" logo_div">
            <img className="logo_img" src="images/instagram-logo.png" alt="" />
          </div>
          <div className="nav_search">
            <input
              className="search_input"
              type="text"
              onClick={displayHandler}
              placeholder="Search"
            />
          </div>
          <div className="grid_icons">
            <div>
              <Link to="/home">
              <svg
                aria-label="Home"
                class="_8-yf5 "
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
              </Link>
            </div>
          
            <div>
            <Link  to="/chats">
            <svg
                aria-label="Messenger"
                class="_8-yf5 "
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M12.003 2.001a9.705 9.705 0 110 19.4 10.876 10.876 0 01-2.895-.384.798.798 0 00-.533.04l-1.984.876a.801.801 0 01-1.123-.708l-.054-1.78a.806.806 0 00-.27-.569 9.49 9.49 0 01-3.14-7.175 9.65 9.65 0 0110-9.7z"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="1.739"
                ></path>
                <path
                  d="M17.79 10.132a.659.659 0 00-.962-.873l-2.556 2.05a.63.63 0 01-.758.002L11.06 9.47a1.576 1.576 0 00-2.277.42l-2.567 3.98a.659.659 0 00.961.875l2.556-2.049a.63.63 0 01.759-.002l2.452 1.84a1.576 1.576 0 002.278-.42z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </Link>
           
            </div>
            <div>
              <svg
                aria-label="New Post"
                class="_8-yf5 "
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="6.545"
                  x2="17.455"
                  y1="12.001"
                  y2="12.001"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="12.003"
                  x2="12.003"
                  y1="6.545"
                  y2="17.455"
                ></line>
              </svg>
            </div>
            <div>
              <svg
                aria-label="Find People"
                class="_8-yf5 "
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <polygon
                  fill="none"
                  points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polygon>
                <polygon
                  fill-rule="evenodd"
                  points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
                ></polygon>
                <circle
                  cx="12.001"
                  cy="12.005"
                  fill="none"
                  r="10.5"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></circle>
              </svg>
            </div>
            <div>
              <svg
                aria-label="Activity Feed"
                class="_8-yf5 "
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
              </svg>
            </div>
            <div>
            <Link to="/profile">
            <Avatar
              style={{ width: "1.7rem", height: "4vh" }}
                className="nav_avatar"
                alt="Remy Sharp"
                src={user?.profile_picture}
              />
            </Link>
            </div>
          </div>
        </div>
       </div>
        <div></div>
        <div className="search_icon_div">
          <SearchIcon style={{ display: disp }} className="search_logo" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
