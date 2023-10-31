import { useRef } from "react"
import '../styles/modal.css'
import { object } from "prop-types"
import { func } from "prop-types"

export default function Modal ({content, closeModal}) {
    const outsideDiv = useRef(null)
    return (
        <div className="modal" onClick={(e)=>{if(!outsideDiv.current.contains(e.target))closeModal(false)}}>
            <div className="modal-window" ref={outsideDiv}>
                <div>{content}</div>
                <button onClick={()=>closeModal(false)} >Back</button>
            </div>
        </div>
    )
}

Modal.propTypes = {
    content:object,
    closeModal:func
}