import React, { useState } from 'react';

const BadgeForm = () => {


    const [formData, setFormData] = useState({})

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleClick = (e) => {
        console.log("button pressed");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }

    return (
        <div>
            <h1>New Attendant</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label className="form-label">First Name</label>
                    <input value={formData.first_name} onChange={onChange} className="form-control" type="text" name="first_name"></input>
                </div>
                {/* Agregando el prop value convertimos los input, en input controlados, es decir, la informacion que reciben se almacena en un solo lugar, en el atributo value en vez de en su default value y en onChange */}
                <div className="form-group mb-3">
                    <label className="form-label">Last Name</label>
                    <input value={formData.last_name} onChange={onChange} className="form-control" type="text" name="last_name"></input>
                </div>

                <div className="form-group mb-3">
                    <label className="form-label">Email</label>
                    <input value={formData.email} onChange={onChange} className="form-control" type="email" name="email"></input>
                </div>

                <div className="form-group  mb-3">
                    <label className="form-label">Job Title</label>
                    <input value={formData.job_title} onChange={onChange} className="form-control" type="text" name="job_title"></input>
                </div>

                <div className="form-group mb-3">
                    <label className="form-label">Twitter</label>
                    <input value={formData.twitter} onChange={onChange} className="form-control" type="text" name="twitter"></input>
                </div>


                <button onClick={handleClick} className="btn btn-primary">Save</button>
            </form>
        </div>
    );
}

export default BadgeForm;
