import React from 'react'

const MoodCard = ({mood}) => {
    return (
        <div>
            <div className="card ui grid">
                <div className="card-body">
                    <h3 className="card-title">{mood.title}</h3>
                    <div className="card-text">
                        <p>{mood.description}</p><br/>
                        <p><strong>Facial Expressions:</strong>{mood.facial_expressions}</p>
                        <p>Body Language: {mood.body_language}</p>
                        <p>Physical Reactions: {mood.physical_reactions}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoodCard

// t.string :title
// t.text :description
// t.text :facial_expressions
// t.text :body_language
// t.text :physical_reactions