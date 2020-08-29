import React from 'react'
import './cvsection.css'

function CVSection({title, content}){
    return (
        <section>
            <h2 className='text-primary'>{ title }</h2>
            <p>
            { content }
            </p>
        </section>
    )
}

export default CVSection