import React from 'react'

const MoodSort = ({ selectSort }) => {
    return (
        <div>
            <select onChange={ (e) => selectSort(e.target.value)}>
                <option value="None">None</option>
                <option value="Alphabetical">Alphabetical</option>
            </select>
        </div>
    )
}

export default MoodSort