import React from 'react'
import CVSection from './../cvsection'

function Header(){
    return (
        <p>
            <h1>
                Hristo Roque
            </h1>
            <CVSection
                title="Contact Infor"
                content={()=>(
                    <>
                        <p>
                            You can find my on Twitter
                        </p>
                        <p>
                            You can find me on Github
                        </p>
                    </>
                )}
            />
        </p>
    )
}

export default Header