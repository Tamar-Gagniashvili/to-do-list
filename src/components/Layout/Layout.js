import React from 'react';
import './Layout.css';

const nav = () => {
    return (
        <div>
            <nav>
                <div className='nav-items'>
                    <span>რეგისტრაცია</span>
                    <span>შესვლა</span>
                </div>
            </nav>
            <div className='signup'>
                <input type='text' placeholder='სახელი, გვარი' />
                <input type='text' placeholder='პაროლი' />
                <input type='text' placeholder='Enter your name' />
                <input type='text' placeholder='Enter your password' />
                <button className='button'>რეგისტრაცია</button>
                <button className='button'>Sign Up</button>
            </div>
            {/* <div className='Signin'>

            </div> */}
        </div>

    )
}

export default nav;