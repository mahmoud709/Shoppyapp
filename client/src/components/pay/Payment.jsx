import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

export default function PaymentForm() {
    return (
        <div className="container mt-5">
            <form >
                <div className="mb-4">
                    <label className="form-label font-medium">Name</label>
                    <input
                        type="text"
                        name="name"  // Add the name attribute
                        className={`form-control`}
                        placeholder="Name"
                    />
                </div>
                <div className="mb-4">
                    <label className="form-label font-medium">Email address</label>
                    <input
                        type="email"
                        className='form-control'
                        name="email"
                        placeholder="Email address"
                    
                    />
                </div>
                <div className="mb-4">
                    <label className="form-label font-medium">Address</label>
                    <input
                        type="text"
                        className='form-control'
                        name="Address"
                        placeholder="Address"
                    
                    />
                </div>

                <div className="mb-2">
                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                    >
                    order now
                    </button>
                </div>
            </form>
        </div>
    );
}
