import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

const TopDoctors = () => {
    return (
        <section className='my-5'>
            <h2 className='text-3xl font-semibold text-center text-primary'>Top Doctors Near You</h2>
            <div className='grid grid-cols-4 gap-5 my-10'>
                {/* Single Doctor */}
                <div className='bg-secondary p-5 rounded'>
                    <Image src='/assets/doctors/doc1.png' height={60} width={60} alt='Sanjana Ahmed' className='mx-auto' />
                    <div className='flex flex-col gap-2 items-center'>
                    <h4 className='text-xl font-semibold'><Link href='/doctorname'>Dr. Sanjana Ahmed</Link></h4>
                    <p className='text-xs'>Internal and Family Medicine Expert</p>
                    <p className='flex text-sm gap-2'>
                        <span className='flex items-center text-[#FBC43A]'>
                            <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                            <AiOutlineStar />
                        </span>
                        <span className='font-semibold'>4.8</span> <Link href='/doctorname/review/' className='hover:text-blue-600 hover:underline'>(560 Reviews)</Link>
                    </p>
                    </div>
                </div>
                {/* Single Doctor */}
                <div className='bg-secondary p-5 rounded'>
                    <Image src='/assets/doctors/doc2.png' height={60} width={60} alt='Shohail Shabbir' className='mx-auto' />
                    <div className='flex flex-col gap-2 items-center'>
                    <h4 className='text-xl font-semibold'><Link href='/doctorname'>Dr. Shohail Shabbir</Link></h4>
                    <p className='text-xs'>Cardiologist & Medicine Expert</p>
                    <p className='flex text-sm gap-2'>
                        <span className='flex items-center text-[#FBC43A]'>
                            <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                            <AiOutlineStar />
                        </span>
                        <span className='font-semibold'>4.7</span> <Link href='/doctorname/review/' className='hover:text-blue-600 hover:underline'>(320 Reviews)</Link>
                    </p>
                    </div>
                </div>
                {/* Single Doctor */}
                <div className='bg-secondary p-5 rounded'>
                    <Image src='/assets/doctors/doc3.png' height={60} width={60} alt='Fatema Annaya' className='mx-auto' />
                    <div className='flex flex-col gap-2 items-center'>
                    <h4 className='text-xl font-semibold'><Link href='/doctorname'>Dr. Fatema Annaya</Link></h4>
                    <p className='text-xs'>Gaynae and Obs Expert</p>
                    <p className='flex text-sm gap-2'>
                        <span className='flex items-center text-[#FBC43A]'>
                            <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                            <AiOutlineStar />
                        </span>
                        <span className='font-semibold'>4.6</span> <Link href='/doctorname/review/' className='hover:text-blue-600 hover:underline'>(290 Reviews)</Link>
                    </p>
                    </div>
                </div>
                {/* Single Doctor */}
                <div className='bg-secondary p-5 rounded'>
                    <Image src='/assets/doctors/doc4.png' height={60} width={60} alt='Yeasir Ahmed' className='mx-auto' />
                    <div className='flex flex-col gap-2 items-center'>
                    <h4 className='text-xl font-semibold'><Link href='/doctorname'>Dr. Yeasir Ahmed</Link></h4>
                    <p className='text-xs'>Medicine and Urology Expert</p>
                    <p className='flex text-sm gap-2'>
                        <span className='flex items-center text-[#FBC43A]'>
                            <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                            <AiOutlineStar />
                        </span>
                        <span className='font-semibold'>4.8</span> <Link href='/doctorname/review/' className='hover:text-blue-600 hover:underline'>(460 Reviews)</Link>
                    </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopDoctors;