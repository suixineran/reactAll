import React, { useReducer } from 'react';
import Show from './Show';
import Button from './Button';
import { Color  } from './color'

function Hook1(){
    return (
        <Color >
            <Show  />
            <Button  />
        </Color >
    )
}

export default Hook1