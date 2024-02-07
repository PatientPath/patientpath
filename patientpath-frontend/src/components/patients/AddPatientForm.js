import React, { useState } from 'react';

const AddPatientForm = () => {
    const [formData, setFormData] = useState({
        patientId: '',
        name: '',
        phone: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        dateOfBirth: '',
        gender: 'default',
        emergencyContactName: '',
        emergencyContactRelationship: '',
        emergencyContactPhone: ''
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
            <h4>Add Patient</h4>
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

                {/* Address Inputs */}
                <div className="mb-3">
                    <label htmlFor="street" className="form-label">Street:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="street"
                        name="street"
                        placeholder="Enter street"
                        value={formData.street}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className="form-label">City:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                        placeholder="Enter city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="state" className="form-label">State:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="state"
                        name="state"
                        placeholder="Enter state"
                        value={formData.state}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="zip" className="form-label">ZIP Code:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="zip"
                        name="zip"
                        placeholder="Enter ZIP code"
                        value={formData.zip}
                        onChange={handleChange}
                    />
                </div>

                {/* Date of Birth Input */}
                <div className="mb-3">
                    <label htmlFor="dateOfBirth" className="form-label">Date of Birth:</label>
                    <input
                        type="date"
                        className="form-control"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                    />
                </div>

                {/* Gender Input */}
                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender:</label>
                    <select
                        className="form-select"
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    >
                        <option value="default">Select...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Emergency Contact Inputs */}
                <div className="mb-3">
                    <label htmlFor="emergencyContactName" className="form-label">Emergency Contact Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="emergencyContactName"
                        name="emergencyContactName"
                        placeholder="Enter emergency contact name"
                        value={formData.emergencyContactName}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="emergencyContactRelationship" className="form-label">Emergency Contact Relationship:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="emergencyContactRelationship"
                        name="emergencyContactRelationship"
                        placeholder="Enter relationship"
                        value={formData.emergencyContactRelationship}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="emergencyContactPhone" className="form-label">Emergency Contact Phone:</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="emergencyContactPhone"
                        name="emergencyContactPhone"
                        placeholder="Enter emergency contact phone number"
                        value={formData.emergencyContactPhone}
                        onChange={handleChange}
                    />
                </div>

                {/* Submit Button */}
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Add Patient</button>
                </div>
            </form>
        </div>
    );
};

export default AddPatientForm;
