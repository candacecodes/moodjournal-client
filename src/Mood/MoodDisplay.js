import React from 'react'
import MoodCard from './MoodCard'

const MoodDisplay = ({moods}) => {
    return (
        <div className="mood-card">
            <div className="row mood-row">
                {moods.map(mood => (
                    <MoodCard key={mood.id} mood={mood}/>
                ))}
            </div>
        </div>
    )
}

export default MoodDisplay