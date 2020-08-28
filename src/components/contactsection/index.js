import React from 'react'
import CVSection from './../cvsection'

function ContactSection(){
    return (
        <>
            <CVSection
                title="Contact Info"
                content={()=>(
                    <>
                    <p>From: Peru</p>
                    </>
                )}
            />
            <CVSection
                title="Social Links"
                content={()=>(
                    <>
                        <p>
                            You can Find me at twitter, github
                        </p>
                    </>
                )}
            />
        </>
    )
}

export default ContactSection