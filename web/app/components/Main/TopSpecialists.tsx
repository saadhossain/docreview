import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TopSpecialists = () => {
    return (
        <section className='my-5'>
            <h4 className='text-center font-semibold'>FIND DOCTORS BY</h4>
            <h2 className='text-3xl font-semibold text-center text-primary'>Top Specialties</h2>

            <ul className='grid grid-cols-4 gap-5 my-10 list-none'>
                <li className='font-semibold hover:text-primary border-l-2 border-gray-400 hover:border-primary pl-2'><Link href='/'>Family Medicine</Link></li>
                <li className='font-semibold hover:text-primary border-l-2 border-gray-400 hover:border-primary pl-2'><Link href='/'>Dermatology</Link></li>
                <li className='font-semibold hover:text-primary border-l-2 border-gray-400 hover:border-primary pl-2'><Link href='/'>Obstetrics & Gynecology</Link></li>
                <li className='font-semibold hover:text-primary border-l-2 border-gray-400 hover:border-primary pl-2'><Link href='/'>Psychology</Link></li>
                <li className='font-semibold hover:text-primary border-l-2 border-gray-400 hover:border-primary pl-2'><Link href='/'>Dentist</Link></li>
                <li className='font-semibold hover:text-primary border-l-2 border-gray-400 hover:border-primary pl-2'><Link href='/'>Internal Medicine</Link></li>
                <li className='font-semibold hover:text-primary border-l-2 border-gray-400 hover:border-primary pl-2'><Link href='/'>Orthopedic Surgery</Link></li>
                <li className='font-semibold hover:text-primary border-l-2 border-gray-400 hover:border-primary pl-2'><Link href='/'>Gastroenterology</Link></li>
                <li className='font-semibold hover:text-primary border-l-2 border-gray-400 hover:border-primary pl-2'><Link href='/'>Cardiology</Link></li>
                <li className='font-semibold hover:text-primary border-l-2 border-gray-400 hover:border-primary pl-2'><Link href='/'>Endocrinology</Link></li>
                <li className='font-semibold hover:text-primary border-l-2 border-gray-400 hover:border-primary pl-2'><Link href='/'>Pediatrics</Link></li>
                <li className='font-semibold hover:text-primary border-l-2 border-gray-400 hover:border-primary pl-2'><Link href='/'>Rheumatology</Link></li>
            </ul>
        </section>
    );
};

export default TopSpecialists;