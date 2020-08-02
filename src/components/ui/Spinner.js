import React from 'react'
import spin from '../../img/spin.gif'

const Spinner = () => {
    return (
       <img src={spin} style={{width: '200px', margin: 'auto', display: 'block'}} alt="Loading..."/>
    )
}

export default Spinner
