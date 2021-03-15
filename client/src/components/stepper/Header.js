import React from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function GlobalHeader({ handleNext, handleBack, handleClose, step }) {
const check =() =>{
    if(step===2){
        handleClose()
    }else{
        handleNext()
    }
}
    return (
        <div>
                    <ArrowBackIcon className="arrow" onClick={handleBack}/>
                    <ArrowForwardIcon className="arrow" onClick={check} />
        </div>
    )
}

export default GlobalHeader
