import React from 'react'

const MoodCard = ({mood}) => {
    return (
            <div className="mood card ui grid" >
                <div className="card-body" key="mood">
                    <h3 className="card-title">{mood.title}</h3>
                    <div className="card-text">
                        <p><span>{mood.description}</span></p><br/>
                        <p><strong>Facial Expressions: </strong><span>{mood.facial_expressions}</span></p>
                        <p><strong>Body Language: </strong><span>{mood.body_language}</span></p>
                        <p><strong>Physical Reactions: </strong><span>{mood.physical_reactions}</span></p>
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