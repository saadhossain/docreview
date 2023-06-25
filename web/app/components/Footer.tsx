import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className='w-full py-5 bg-secondary h-60'>
                <h1>Privacy Policy</h1>
            </div>
            <div className='w-full py-2 bg-accent'>
                <p className='text-center text-white'>&copy; 2023, DocReview | All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;