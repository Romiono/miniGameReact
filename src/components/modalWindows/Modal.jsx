import React from 'react';
import classes from "./Modal.module.css";
import AuthInput from "../inputs/AuthInput";
import OriginButton from "../buttons/OriginButton";
import AuthButton from "../buttons/AuthButton";


const Modal = ({children, visible, setVisible}) => {
    const rooClasses =[classes.Modal]
    if(visible) {
        rooClasses.push(classes.active)
    }
    return (
        <div className={rooClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;