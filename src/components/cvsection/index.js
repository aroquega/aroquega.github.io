import React from 'react'

function CVSection({title, content}){
    return (
        <div>
            <h2>{ title }</h2>
            <div>
            { content() }
            </div>
        </div>
    )
}

export default CVSection