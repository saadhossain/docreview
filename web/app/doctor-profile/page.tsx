import DoctorProfileForm from '../components/Main/DoctorProfileForm';

export const metadata = {
    title: 'List Doctor - Claim Your Physician Profile',
    description: 'Create your Doctor Profile'
}

const page = () => {
    return (
        <section className='w-10/12 mx-auto py-5'>
            <h2 className='text-3xl font-semibold text-primary border-l-4 border-primary pl-2'>Claim Your Physician Profile</h2>
            <p className='text-lg mt-5'>
                Register below to create your profile and get found by patients<br /> on the industry-leading <em className='text-primary'>Doctor Review</em> network.
            </p>
            {/* Registration Form */}
            <DoctorProfileForm/>
        </section>
    );
};

export default page;