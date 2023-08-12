import React from 'react';
import classes from './selectel.module.css'
import {isDisabled} from "@testing-library/user-event/dist/utils";

const Selectel = ({first, second, treeth, name}) => {
    return (
        <select name={name} className={classes.select}>
            <option disabled={true}>{first}</option>
            <option>{second}</option>
            <option>{treeth}</option>
        </select>
    );
};

export default Selectel;