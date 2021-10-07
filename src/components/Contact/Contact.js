import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact-us">
            <form className="w-50 mx-auto text-start py-2">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Your Name</label>
                    <input type="text" placeholder="Enter your name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" placeholder="Enter email address" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" placeholder="Enter password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Message</label>
                    <textarea type="password" style={{ height: "200px" }} placeholder="Type your message" className="form-control" id="exampleInputPassword1"></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Contact;