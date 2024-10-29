import React from 'react'
import { CgSpinnerTwoAlt } from "react-icons/cg"

import "../../styles/abstract/_variables.scss"
import "./loader.scss"

const Loader = () => {
  return (
    <div className="loader-container">
        <div className='rotate'>
            <CgSpinnerTwoAlt className='spinner-icon' />
        </div>
    </div>
  )
}

export default Loader
