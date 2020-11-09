import React from 'react'

const MoodCard = ({mood}) => {
    return (
        <div>
            <h3>{mood.title}</h3>
            <p>{mood.description}</p>
        </div>
    )
}

export default MoodCard