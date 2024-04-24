import React from 'react';

function CheckoutPage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-8">
                    <div className="card">
                        <div className="card-body">
                            <ol className="px-4 mt-3 mb-0 activity-checkout">
                                <li className="checkout-item">
                                    <div className="p-1 avatar checkout-icon">
                                        <div className="avatar-title rounded-circle bg-primary">
                                            <i className="text-white bx bxs-receipt font-size-20"></i>
                                        </div>
                                    </div>
                                    <div className="feed-item-list">
                                        <div>
                                            <h5 className="mb-1 font-size-16">Billing Info</h5>
                                            <p className="mb-4 text-muted text-truncate">Sed ut perspiciatis unde omnis iste</p>
                                            <div className="mb-3">
                                                <form>
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <div className="mb-3">
                                                                    <label className="form-label" htmlFor="billing-name">Name</label>
                                                                    <input type="text" className="form-control" id="billing-name" placeholder="Enter name"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="mb-3">
                                                                    <label className="form-label" htmlFor="billing-email-address">Email Address</label>
                                                                    <input type="email" className="form-control" id="billing-email-address" placeholder="Enter email"/>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4">
                                                                <div className="mb-3">
                                                                    <label className="form-label" htmlFor="billing-phone">Phone</label>
                                                                    <input type="text" className="form-control" id="billing-phone" placeholder="Enter Phone no."/>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="mb-3">
                                                            <label className="form-label" htmlFor="billing-address">Address</label>
                                                            <textarea className="form-control" id="billing-address" rows="3" placeholder="Enter full address"></textarea>
                                                        </div>

                                                        <div className="row">

                                                            <div className="col-lg-4">
                                                                <div className="mb-4 mb-lg-0">
                                                                    <label className="form-label" htmlFor="billing-city">City</label>
                                                                    <input type="text" className="form-control" id="billing-city" placeholder="Enter City"/>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                
                            </ol>
                        </div>
                    </div>

                    
                </div>
                <div className="col-xl-4">
                    <div className="card checkout-order-summary">
                        <div className="card-body">
                            <div className="p-3 mb-3 bg-light">
                                <h5 className="mb-0 font-size-16">Order Summary</h5>
                            </div>
                            <div className="table-responsive">
                                <table className="table mb-0 table-centered table-nowrap">
                                    <thead>
                                    </thead>
                                    <tbody>                                        
                                        <tr>
                                            <td colSpan="2">
                                                <h5 className="m-0 font-size-14">Sub Total :</h5>
                                            </td>
                                            <td>
                                                $ 780
                                            </td>
                                        </tr>

                                        <tr>
                                            <td colSpan="2">
                                                <h5 className="m-0 font-size-14">Shipping Charge :</h5>
                                            </td>
                                            <td>
                                                $ 25
                                            </td>
                                        </tr>                            
                                            
                                        <tr className="bg-light">
                                            <td colSpan="2">
                                                <h5 className="m-0 font-size-14">Total:</h5>
                                            </td>
                                            <td>
                                                $ 745.2
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-4 row">
                        <div className="col">
                            <a href="ecommerce-products.html" className="btn btn-link text-muted">
                                <i className="mdi mdi-arrow-left me-1"></i> Continue Shopping </a>
                        </div> 
                        <div className="col">
                            <div className="mt-2 text-end mt-sm-0">
                                <a href="#/" className="btn btn-success">
                                    <i className="mdi mdi-cart-outline me-1"></i> Procced </a>
                            </div>
                        </div> 
                    </div>
            </div>
            
            
        </div>
    );
}

export default CheckoutPage;
