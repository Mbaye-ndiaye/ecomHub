import React from 'react';

function CheckoutPage() {
	return (
		<main className="flex items-center justify-center min-h-screen bg-gray-100">
			<section className="container grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-08">
				<div className="bg-white rounded-lg shadow-lg lg:col-span-2">
					<div className="card">
						<div className="p-8 card-body">
							<h2 className="mb-4 text-xl font-bold">Billing Info</h2>
							<form>
								<div className="flex flex-wrap justify-center mb-4">
									<div className="w-full mb-6 lg:w-1/2 lg:pr-4 lg:mb-6">
										<label
											htmlFor="billing-name"
											className="block text-sm font-medium text-gray-700"
										>
											Name
										</label>
										<input
											type="text"
											id="billing-name"
											className="block w-full p-2 mt-1 border border-black rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
											placeholder="Enter name"
										/>
									</div>
									<div className="w-full mb-4 lg:w-1/2 lg:pl-4 lg:mb-0">
										<label
											htmlFor="billing-email-address"
											className="block text-sm font-medium text-gray-700"
										>
											Email Address
										</label>
										<input
											type="email"
											id="billing-email-address"
											className="block w-full p-2 mt-1 border border-black rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
											placeholder="Enter email"
										/>
									</div>
									<div className="w-full mb-4 lg:w-1/2 lg:pr-4 lg:mb-6">
										<label
											htmlFor="billing-phone"
											className="block text-sm font-medium text-gray-700"
										>
											Phone
										</label>
										<input
											type="text"
											id="billing-phone"
											className="block w-full p-2 mt-1 border border-black rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
											placeholder="Enter phone no."
										/>
									</div>
									<div className="w-full mb-4 lg:w-1/2 lg:pl-4 lg:mb-0">
										<label
											htmlFor="billing-city"
											className="block text-sm font-medium text-gray-700"
										>
											City
										</label>
										<input
											type="text"
											id="billing-city"
											className="block w-full p-2 border border-black mt-1rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
											placeholder="Enter city"
										/>
									</div>
									<div className="w-full mb-4">
										<label
											htmlFor="billing-address"
											className="block text-sm font-medium text-gray-700"
										>
											Address
										</label>
										<textarea
											id="billing-address"
											rows="3"
											className="block w-full p-2 mt-1 border border-black rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200"
											placeholder="Enter full address"
										></textarea>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className="rounded-lg lg:col-span-1">
					<div className="p-6 bg-white shadow-lg card">
						<div className="card-body">
							<h2 className="p-3 mb-4 text-xl font-bold bg-gray-200">
								Order Summary
							</h2>
							<table className="w-full p-4 mx-6 table-auto">
								<tbody>
									<tr>
										<td colSpan="2">
											<h5 className="m-0 font-size-14">Sub Total :</h5>
										</td>
										<td>$ 780</td>
									</tr>
									<tr>
										<td colSpan="2">
											<h5 className="m-0 font-size-14">Shipping Charge :</h5>
										</td>
										<td>$ 25</td>
									</tr>

									<tr className="bg-light">
										<td colSpan="2">
											<h5 className="m-0 font-size-14">Total:</h5>
										</td>
										<td>$ 745.2</td>
									</tr>
								</tbody>
                                
							</table>
                            <div className="p-2 my-4 mb-4 text-xl font-bold bg-gray-200">
                            <p className='flex justify-between'>
                            Total:
                                <span className='text-red-500'>$745.2</span>
                            </p>
							</div>
						</div>
					</div>
					<div className="flex justify-between mt-8">
						<button className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300">
							Continue Shopping
						</button>
						<button className="px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
							Proceed
						</button>
					</div>
				</div>
			</section>
		</main>
	);
}

export default CheckoutPage;
