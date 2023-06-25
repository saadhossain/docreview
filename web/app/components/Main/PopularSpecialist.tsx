import Image from 'next/image';
import React from 'react';

const PopularSpecialist = () => {
    return (
        <section>
            <div className='w-10/12 mx-auto my-10 flex gap-10 items-center'>
        <h2 className='text-2xl'>POPULAR <br/><span className='text-primary font-bold'>Specialties</span></h2>
        <div className='w-10/12 flex gap-5 justify-between'>
          <Image src='/assets/medicine.png' width={64} height={64} alt=''/>
          <Image src='/assets/gynae.png' width={64} height={64} alt=''/>
          <Image src='/assets/orthopadic.png' width={64} height={64} alt=''/>
          <Image src='/assets/eye-speciality.png' width={64} height={64} alt=''/>
          <Image src='/assets/dentistry.png' width={64} height={64} alt=''/>
          <Image src='/assets/dermatology.png' width={64} height={64} alt=''/>
        </div>
      </div>
        </section>
    );
};

export default PopularSpecialist;