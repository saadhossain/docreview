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
            <div className="flex flex-col max-w-xl mx-auto my-5 p-6 rounded-md bg-secondary">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-3xl font-bold">List Doctor Profile</h1>
                    <p className="text-sm  text-primary">Enter your Information to Create Account</p>
                </div>
                <form action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm">Full Name <span className='text-red-600'>*</span></label>
                            <input type="text" name="name" id="name" placeholder="eg: Ebadat Hossain" className="w-full px-3 py-2 border border-gray-900 rounded-md  text-gray-900" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email Address <span className='text-red-600'>*</span></label>
                            <input type="email" name="email" id="email" placeholder="eg: dr.ebadathossain@gmail.com" className="w-full px-3 py-2 border border-gray-900 rounded-md  text-gray-900" />
                            <p>* We won't share your email to the patients.</p>
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm">Phone Number <span className='text-red-600'>*</span></label>
                            <input type="phone" name="phone" id="phone" placeholder="eg: +880-XXXXX-XXXXX" className="w-full px-3 py-2 border border-gray-900 rounded-md  text-gray-900" />
                            <p>* We won't share your phone number to the patients.</p>
                        </div>
                        <div>
                            <label htmlFor="institution" className="block mb-2 text-sm">Institution Name <span className='text-red-600'>*</span></label>
                            <input type="text" name="institution" id="institution" placeholder="eg: Dhaka Medical College Hospital/BSMMU/NICVD/NITOR" className="w-full px-3 py-2 border border-gray-900 rounded-md  text-gray-900" />
                        </div>
                        <div>
                            <label htmlFor="chamber" className="block mb-2 text-sm">Chamber/Clinic Name <span className='text-red-600'>*</span></label>
                            <input type="text" name="chamber" id="chamber" placeholder="eg: Ibn Sina/Lab aid/Popular/Medinova" className="w-full px-3 py-2 border border-gray-900 rounded-md  text-gray-900" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm">Specialist Department <span className='text-red-600'>*</span></label>
                            <select name="password" id="password" className="w-full px-3 py-2 border border-gray-900 rounded-md  text-gray-900" >
                                <option selected>Select Department</option>
                                <option value="">Medicine</option>
                                <option value="">Cardiology</option>
                                <option value="">Gaynea & Obs</option>
                                <option value="">Orthopadic</option>
                                <option value="">Psychology</option>
                                <option value="">Pediatric</option>
                                <option value="">Skin & Sex</option>
                                <option value="">Rheumatology</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Profile Picture <span className='text-red-600'>*</span></label>
                            <input type="file" name="email" id="email" className="w-full px-3 py-2 border border-gray-900 rounded-md  text-gray-900" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm">Account Password <span className='text-red-600'>*</span></label>
                            <input type="password" name="password" id="password" placeholder="************" className="w-full px-3 py-2 border border-gray-900 rounded-md  text-gray-900" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="button" className="w-full px-8 py-3 font-semibold rounded-md  bg-primary  text-white">Register</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default page;