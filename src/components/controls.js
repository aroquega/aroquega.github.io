import React from 'react'

function Link({to, children, type = 'contained'}) {
    let style = ""
    switch(type){
        case 'contained':
            style ="block text-white text-xs text-center font-bold uppercase bg-cyanprocess p-2 rounded shadow-md"
            break
        case 'text':
            style ="block text-cyanprocess text-xs text-center font-bold uppercase p-2"
            break
        default:
            style = "block"
    }
    return (
        <a href={to}
        className={style}>
            {children}
        </a>
    )
}

export {Link}