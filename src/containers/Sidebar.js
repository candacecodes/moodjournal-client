import React from 'react'
// import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

const Sidebar = () => {

return (
    
            <Menu>
                <a className="menu-item" href="/home">Home</a>
                <a className="menu-item" href="/mood-entries">Mood Entries</a>
                <a className="menu-item" href="/browse-moods">Browse Moods</a>
                <a className="menu-item" href="/merchandise">Merchandise</a>
                <a className="menu-item" href="/visualizer">Visualizer</a>
            </Menu>
        
    )
}

export default Sidebar