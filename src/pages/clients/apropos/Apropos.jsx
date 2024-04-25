import React from 'react';
import Footer from './../../../components/footer/footer';
import Navbar from '../../../components/clients/navbar/navbar';

const AboutPage = () => {
	return (
		<section>
			<Navbar />
				<div className="px-4 py-12 my-10 bg-gray-200 max-w-7xl sm:px-6 lg:px-6">
					<div className="max-w-3xl">
						<h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
							About Us
						</h2>
						<p className="mt-4 text-lg text-gray-500">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
							euismod ultrices augue, nec venenatis purus tincidunt id. Nullam
							fermentum nisi eget quam efficitur, ut rutrum lacus vulputate.
						</p>
						<p className="mt-4 text-lg text-gray-500">
							Fusce ultrices velit id nisi volutpat, nec malesuada velit
							lobortis. Integer auctor varius felis, eget suscipit lacus
							pharetra sed.
						</p>
						<p className="mt-4 text-lg text-gray-500">
							Suspendisse potenti. Nulla facilisi. Praesent ut urna vel ligula
							tempor eleifend nec non magna.
						</p>
					</div>
				</div>
			<Footer />
		</section>
	);
};

export default AboutPage;
