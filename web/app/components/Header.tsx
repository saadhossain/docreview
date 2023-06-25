import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className='w-full py-2 bg-secondary text-black'>
            <div className='w-10/12 mx-auto flex justify-between items-center'>
                <div>
                    <Link href='/' className='flex gap-2 items-center'>
                        <Image src='/assets/icon.png' width={40} height={40} alt='DocReview'/>
                        <h3>DocReview</h3>
                    </Link>
                </div>
                <div className='flex gap-4'>
                    <Link href='/' className='flex gap-1 items-start font-semibold'><Image src='/assets/home.svg' height={20} width={20} alt='Home'/>Home</Link>
                    <Link href='/doctor-profile' className='flex gap-1 items-start font-semibold'><Image src='/assets/doctor.svg' height={20} width={20} alt='List Doctor Proflie'/>List Doctor Profile</Link>
                    <Link href='/department' className='flex gap-1 items-start font-semibold'><Image src='/assets/department.svg' height={20} width={20} alt='Department'/>Department</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;