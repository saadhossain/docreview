import Image from 'next/image'
import { MdLocationOn } from 'react-icons/md'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import PopularSpecialist from './components/Main/PopularSpecialist'
import TopDoctors from './components/Main/TopDoctors'
import TopSpecialists from './components/Main/TopSpecialists'

export const metadata = {
  title: 'Home - Find Top Rated Doctor Near You',
  description: 'Find Top Rated Doctor Near You'
}
export default function Home() {

  return (
    <section className='w-10/12 mx-auto my-10'>
      {/* Top heading */}
      <div className='text-center'>
        <h2 className='text-2xl font-semibold'>More than 20,000 People Provide Reviews</h2>
        <h1 className='text-5xl font-bold my-10 text-primary'>Find the Best Doctor for you</h1>
      </div>
      {/* Doctor Search Form */}
      <div className='w-10/12 flex justify-center mx-auto mt-10'>
        <form className='flex items-center border border-primary rounded-md'>
          <div className='flex gap-2 items-center bg-secondary rounded-l-md py-2 px-5'>
            <Image src='/assets/stepthoscope.svg' height={20} width={20} alt='Stepthoscope' />
            <input type="text" placeholder='Speciality, Condition or Procedure' className='bg-transparent outline-0' />
            <div className='text-primary'>|</div>
          </div>
          <div className='flex gap-2 items-center bg-secondary py-2 px-5'>
            <MdLocationOn className='w-5 h-5 text-[#009E95]' />
            <input type="text" placeholder='Preffered Location' className='bg-transparent outline-0' />
          </div>
          <button type='submit' className='bg-primary py-2 px-5 rounded-r-md text-white font-semibold'>Search</button>
        </form>
      </div>
      <h4 className='text-center mt-3'>You can also search by physician, practice, or hospital name</h4>
      {/* Doctors Section */}
      <div className='flex justify-center items-center gap-10 my-10'>
        <Image src='/assets/hero-image-doctor.webp' width={500} height={300} alt='Doctors Image'/>
        <div>
          <div className='flex gap-2 mt-5'>
            <AiOutlineCheckCircle className='w-10 h-10'/>
            <p>Learn what other patients had to say before you book an appointment</p>
          </div>
          <div className='flex gap-2 mt-5'>
            <AiOutlineCheckCircle className='w-10 h-10'/>
            <p>Find doctors that can understand your actual disease and serve you best.</p>
          </div>
        </div>
      </div>
      <hr className='border border-gray-50'/>
      {/* POPULAR Specialties */}
      <PopularSpecialist/>
      {/* Top Doctors Section */}
      <TopDoctors/>
      {/* find doctors by top specialist */}
      <TopSpecialists/>
    </section>
  )
}
