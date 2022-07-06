import React from 'react';

import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <ul>
              <li><NavLink to='punct1'>Пункт 1</NavLink></li>
              <li><NavLink to='punct2'>Пункт 2</NavLink></li>
              <li><NavLink to='punct3'>Пункт 3</NavLink></li>
              <li><NavLink to='punct4'>Пункт 4 <div className='punct-two-line'></div>
                  в 2 строки</NavLink></li>
            </ul>
        </nav>

    )
}

export default Navbar;