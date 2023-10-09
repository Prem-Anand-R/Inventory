import React from 'react';
import 'react-bootstrap'

const About = () => {
    return (
        <div>
            <h2>About Us</h2>
            <hr />
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">We're on a mission to make
                    building better </h1>
                <h3 className="col-lg-6 mx-auto">Inventory Management</h3>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Together, we are enabling developers & designers to bring stunning UIs to life with unrivalled speed and ease.</p>
                </div>
            </div>
            <div class="container my-5">
                <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <p>Our value</p>
                        <h1 class="display-4  lh-1">The our team pact</h1>
                        <p class="lead">They explain the behaviors and mindsets we actively encourage, discourage, and why. They serve as a guide toward better decision-making, results, and experiences at work.</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">View our handbook</button>
                           
                        </div>
                    </div>
                    <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img class="rounded-lg-3" src="https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2023/09/05163208/ABC-Analysis-in-Inventory-Management-Benefits-and-Examples-1024x554.jpg" alt="" width="100%"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;