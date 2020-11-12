import React from 'react'
import MoodCard from './MoodCard'

class MoodDisplay extends React.Component {

    // sort hogs options: none, alphabetical
    sortMoods = () => {
        const { moods, sortType } = this.props
            if (sortType === 'None') {
                return moods
            } 
            if (sortType === 'Alphabetically') {
                return moods.sort((a, b) => {
                    if (a.title < b.title) {
                        return -1
                    }
                    return 1
                })
            }
    }
    render() {
        
        return (
            <div className="mood-card">
                <div className="row mood-row">
                    {this.sortMoods().map(mood => {
                        return (
                        <div key={mood.name} >
                            <MoodCard mood={mood}/>
                        </div>
                    )})}
                </div>
            </div>
        )
    }
}

export default MoodDisplay