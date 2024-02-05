import React, { useState } from 'react';

const Register = () => {
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle the registration process
        console.log('Registering:', role, name, email, password);
    };

    return (
        <div className="container main mt-5">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                 <div class="mb-3">
                    <button class="rolebtn"  type="button">
                        <select
                        class="form-select border-none"
                        name="role"
                        id="role"
                        onChange={e=>setRole(e.target.value)}
                    >
                        <option selected required>Select Role</option>
                        <option value="patient">Patient</option>
                        <option value="provider">Provider</option>
                        <option value="admin">Admin</option>
                        </select>
                    </button>
                    
                 </div>
                 

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
               
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
}

export default Register;