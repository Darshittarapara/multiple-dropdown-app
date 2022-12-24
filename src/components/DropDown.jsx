import React, { Fragment } from 'react';
import { useState } from 'react';
import { Autocomplete } from '@mui/material';
import { TextField } from '@mui/material';

const dummyOptions = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten"
];

const DropDown = () => {
    const [userSelectOptions, setUserSelectOptions] = useState([]);

    const handlerChange = (value) => {
        setUserSelectOptions(value);
    }

    return (
        <Fragment>
            <div className='drop-down'>
                <h4>Multi Select DropDown</h4>
                <Autocomplete
                    value={userSelectOptions}
                    onChange={(e, value) => handlerChange(value)}
                    id="controllable-states-demo"
                    options={dummyOptions}
                    multiple
                    sx={{ width: 400 }}
                    renderInput={(params) => <TextField {...params} label="Controllable" />}
                />
            </div>
        </Fragment>

    )
};
export default DropDown;