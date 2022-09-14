import { useState } from 'react';
import Test2 from './test2';

export default function Test1() {
    console.log('Test1');

    const [checked, setChecked] = useState(false);

    return (
        <div>
            <p className='cursor-pointer' onClick={() => {setChecked(prev => !prev)}}>Test1 = {checked?'true':'false'}</p> 
            <Test2 />
        </div>
    );
}