import React from 'react'
import './layout.css'

function Layout({ children }){
    return (
        <div className='doc'>
            { children }
        </div>
    )
}

export default Layout;