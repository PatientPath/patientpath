import React, { useState } from 'react';

const AddProviderForm = () => {
    const [formData, setFormData] = useState({
        providerId: '',
        name: '',
        phone: '',
        email: '',
        specialization: '',
        yearsOfExperience: '',
        mondaySchedule: '',
        tuesdaySchedule: '',
        wednesdaySchedule: '',
        thursdaySchedule: '',
        fridaySchedule: '',
        saturdaySchedule: '',
        sundaySchedule: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
       
    };

    return (
        <div className="mb-3 py-3 px-2 border border-primary rounded w-75">
            <h4>Add Provider</h4>
            <form onSubmit={handleSubmit}>
                
               {/* Name Input */}
               <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Enter full name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                {/* Phone Input */}
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone:</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="Enter phone number"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>

                {/* Email Input */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter email address"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                {/* Specialization Input */}
                <div className="mb-3">
                    <label htmlFor="specialization" className="form-label">Specialization:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="specialization"
                        name="specialization"
                        placeholder="Enter specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                    />
                </div>

                {/* Years of Experience Input */}
                <div className="mb-3">
                    <label htmlFor="yearsOfExperience" className="form-label">Years of Experience:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="yearsOfExperience"
                        name="yearsOfExperience"
                        placeholder="Enter years of experience"
                        value={formData.yearsOfExperience}
                        onChange={handleChange}
                    />
                </div>

                {/* Work Schedule Inputs for each day of the week */}
                <div className="mb-3">
                    <label htmlFor="mondaySchedule" className="form-label">Monday Schedule:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="mondaySchedule"
                        name="mondaySchedule"
                        placeholder="Enter Monday schedule"
                        value={formData.mondaySchedule}
                        onChange={handleChange}
                    />
                </div>
               
                <div className="mb-3">
                    <label htmlFor="tuesdaySchedule" className="form-label">Tuesday Schedule:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="tuesdaySchedule"
                        name="tuesdaySchedule"
                        placeholder="Enter Tuesday schedule"
                        value={formData.tuesdaySchedule}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="wednesdaySchedule" className="form-label">Wednesday Schedule:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="wednesdaySchedule"
                        name="wednesdaySchedule"
                        placeholder="Enter wednesday schedule"
                        value={formData.wednesdaySchedule}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="thursdaySchedule" className="form-label">Thursday Schedule:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="thursdaySchedule"
                        name="thursdaySchedule"
                        placeholder="Enter thursday schedule"
                        value={formData.thursdaySchedule}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="fridaySchedule" className="form-label">Friday Schedule:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="fridaySchedule"
                        name="fridaySchedule"
                        placeholder="Enter friday schedule"
                        value={formData.fridaySchedule}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="saturdaySchedule" className="form-label">Saturday Schedule:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="saturdaySchedule"
                        name="saturdaySchedule"
                        placeholder="Enter saturday schedule"
                        value={formData.saturdaySchedule}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="sundaySchedule" className="form-label">Sunday Schedule:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="sundaySchedule"
                        name="sundaySchedule"
                        placeholder="Enter sunday schedule"
                        value={formData.sundaySchedule}
                        onChange={handleChange}
                    />
                </div>


                {/* Submit Button */}
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Add Provider</button>
                </div>
            </form>
        </div>
    );
};

export default AddProviderForm;
