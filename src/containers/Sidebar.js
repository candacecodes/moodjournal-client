import React from 'react'
import { Nav } from 'react-bootstrap'
import { withRouter } from 'react-router';
import '../pages/style/Sidebar.css' /* only temporary */

const Side = (props) => {
    return (
        <>
            <div className="col-md-12 d-none d-md-block bg-light sidebar">
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/mood-entries">Mood Entries</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/search">Search Moods</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/browse-moods">Browse Moods</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/merchandise">Merchandise</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/visualizer">Visualizer</Nav.Link>
                </Nav.Item>
            </div>
        </>
    )

}

const Sidebar = withRouter(Side)

export default Sidebar