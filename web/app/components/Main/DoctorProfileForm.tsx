'use client'
import {useState} from 'react'
const DoctorProfileForm = () => {
    const [department, setDepartment] = useState('')
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const form = e.currentTarget as HTMLFormElement;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const institution = form.institution.value;
        const chamber = form.chamber.value;
        const password = form.password.value;
        const docData = {
            name,
            email,
            phone,
            institution,
            chamber,
            department,
            password
        }
        const res = await fetch('http://localhost:3001/api/doctor/add-profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(docData)
        })
        const data = await res.json()
        console.log(data)
    }
    return (
        <div className="flex flex-col max-w-xl mx-auto my-5 p-6 rounded-md bg-secondary">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-3xl font-bold">List Doctor Profile</h1>
                <p className="text-sm  text-primary">Enter your Information to Create Account</p>
            </div>
            <form
                onSubmit={handleSubmit}
                className="space-y-12 ng-untouched ng-pristine ng-valid">
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
                        <label htmlFor="department" className="block mb-2 text-sm">Specialist Department <span className='text-red-600'>*</span></label>
                        <select onChange={(e)=> setDepartment(e.target.value)} name="department" id="department" className="w-full px-3 py-2 border border-gray-900 rounded-md  text-gray-900" >
                            <option selected>Select Department</option>
                            <option value="Medicine">Medicine</option>
                            <option value="Cardiology">Cardiology</option>
                            <option value="Gaynea & Obs">Gaynea & Obs</option>
                            <option value="Orthopadic">Orthopadic</option>
                            <option value="Psychology">Psychology</option>
                            <option value="Pediatric">Pediatric</option>
                            <option value="Skin & Sex">Skin & Sex</option>
                            <option value="Rheumatology">Rheumatology</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="profile" className="block mb-2 text-sm">Profile Picture <span className='text-red-600'>*</span></label>
                        <input type="file" name="profile" id="profile" className="w-full px-3 py-2 border border-gray-900 rounded-md  text-gray-900" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm">Account Password <span className='text-red-600'>*</span></label>
                        <input type="password" name="password" id="password" placeholder="************" className="w-full px-3 py-2 border border-gray-900 rounded-md  text-gray-900" />
                    </div>
                </div>
                <div className="space-y-2">
                    <div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md  bg-primary  text-white">Register</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default DoctorProfileForm;