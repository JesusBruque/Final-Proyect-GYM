import React from "react";
import "./account.css";

const Account = () => {
    return (
        <div className="container">
            <div className="main-body">
                <div className="row gutters-sm">
                    <div className="col-md-4 mb-3">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="70" />
                                    <div className="mt-3">
                                        <h4>John Doe</h4>
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Goals
                                        </button>

                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        ...
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" class="btn btn-primary">Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card mb-3">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">First Name</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        Kenneth
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Last Name</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        Valdez
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Phone</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        (239) 816-9029
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Email</h6>
                                    </div>
                                    <div className="col-sm-9 text-secondary">
                                        fip@jukmuh.al
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <h6 className="mb-0">Password</h6>
                                    </div>
                                    <div className="col-sm-3 text-secondary">
                                        ********
                                    </div>
                                    <div className="col-sm-5 text-secondary">
                                        Change Password
                                    </div >
                                </div>
                                <div className="row">
                                    <div className="col-mb-3">
                                        <a className="btn btn-info " target="__blank" href="">Edit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <h5>Next Appointments</h5>
                        <ol class="list-group list-group-numbered">
                            <li class="list-group-item">A list item</li>
                            <li class="list-group-item">A list item</li>
                            <li class="list-group-item">A list item</li>
                            <li class="list-group-item">A list item</li>
                            <li class="list-group-item">A list item</li>
                            <li class="list-group-item">A list item</li>
                        </ol>

                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button class="btn btn-info me-md-2" type="button">Add</button>
                            <button class="btn btn-info" type="button">Changes</button>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <h5>Message</h5>
                        <div class="list-group">
                            <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">List group item heading</h5>
                                    <small>3 days ago</small>
                                </div>
                                <p class="mb-1">Some placeholder content in a paragraph.</p>
                                <small>And some small print.</small>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">List group item heading</h5>
                                    <small class="text-muted">3 days ago</small>
                                </div>
                                <p class="mb-1">Some placeholder content in a paragraph.</p>
                                <small class="text-muted">And some muted small print.</small>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">List group item heading</h5>
                                    <small class="text-muted">3 days ago</small>
                                </div>
                                <p class="mb-1">Some placeholder content in a paragraph.</p>
                                <small class="text-muted">And some muted small print.</small>
                            </a>
                        </div>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button class="btn btn-info" type="button">New Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;