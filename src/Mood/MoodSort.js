import React from 'react'

const MoodSort = ({ selectSort }) => {
    return (
        <div>
            <strong>Sort By:</strong>
            {/* <label>
                <input type="radio" value="None" checked={null} onChange={e => selectSort(e.target.value)} />
                None
            </label> */}
            <label>
                <input type="radio" value="Alphabetically" checked={null} onChange={e => selectSort(e.target.value)} />
                Alphabetically
            </label>
        </div>
    )
}

export default MoodSort