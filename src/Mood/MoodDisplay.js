import React from 'react'
import MoodCard from './MoodCard'

const MoodDisplay = ({ moods, sortType }) => {
    // sort hogs options: none, alphabetical
    const sortMoods = () => {
        if (sortType === 'None') {
            return moods
        }

        if (sortType === 'Alphabetical') {
            return moods.sort((a, b) => {
                if (a.title < b.title) {
                    return -1
                }
                return 1
            })
        }
    }

    return (
        <div className="mood-card">
            <div className="row mood-row">
                {sortMoods().map(mood => (
                    <MoodCard key={mood.id} mood={mood}/>
                ))}
            </div>
        </div>
    )
}

export default MoodDisplay