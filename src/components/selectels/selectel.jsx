import React from 'react';
import classes from './selectel.module.css'
import {isDisabled} from "@testing-library/user-event/dist/utils";

const Selectel = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            className={classes.select}
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.title}</option>
            )}
        </select>
    );
};

export default Selectel;