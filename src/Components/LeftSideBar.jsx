import React from 'react'
import Menu_item from './Menu_item'

function LeftSideBar(loggedInUser) {
  return (
    <>
        <aside className="left-side">
        <div className="logo">
            <i className="fa-brands fa-twitter"></i>
        </div>

        <Menu_item divclassName = "menu-item active"
                   iclassName ="fa-solid fa-magnifying-glass"
                   text = "Home"></Menu_item>

        <Menu_item divclassName = "menu-item"
                   iclassName ="fa-solid fa-house"
                   text = "Explore"></Menu_item>

        <Menu_item divclassName = "menu-item"
                   iclassName ="fa-regular fa-bell"
                   text = "Notifications"></Menu_item>

        <Menu_item divclassName = "menu-item"
                   iclassName ="fa-regular fa-envelope"
                   text = "Messages"></Menu_item>

        <Menu_item divclassName = "menu-item"
                   iclassName ="fa-solid fa-bars"
                   text = "Lists"></Menu_item>

        <Menu_item divclassName = "menu-item"
                   iclassName ="fa-regular fa-bookmark"
                   text = "Bookmarks"></Menu_item>

        <Menu_item divclassName = "menu-item"
                   iclassName ="fa-regular fa-circle-check"
                   text = "Verified"></Menu_item>
                   
        <Menu_item divclassName = "menu-item"
                   iclassName ="fa-regular fa-user"
                   text = "Profile"></Menu_item>

        <Menu_item divclassName = "menu-item"
                   iclassName ="fa-solid fa-ellipsis"
                   text = "More"></Menu_item>

        <button className="tweet-btn">Tweet</button>

        <div className='profile-card'>
            <div className="profile-icon"><img src={loggedInUser.profileImage}/></div>

            <div className="profile-details">
                <h4>{loggedInUser.name}</h4>
                <small>{loggedInUser.handle}</small>
            </div>

            <div className="action">
                <i className="fa-solid fa-ellipsis"></i>
            </div>
        </div>
    </aside>    
    </>
  )
}

export default LeftSideBar