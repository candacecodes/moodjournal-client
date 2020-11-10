import React from 'react'
import MoodCard from './MoodCard'

const MoodDisplay = ({moods}) => {
    return (
        <div>
            {moods.map(mood => (
                <MoodCard key={mood.id} mood={mood}/>
            ))}
        </div>
    )
}

export default MoodDisplay