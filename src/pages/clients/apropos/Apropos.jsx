import React from 'react';
import Navbar from '../../../components/clients/navbar/navbar';
import Footer from './../../../components/footer/footer';

const AboutPage = () => {
	return (
		<section>
			<Navbar />
			<div className="bg-gray-200">
				<div className="px-4 py-12 max-w-7xl sm:px-6 lg:px-6">
					<div className="max-w-3xl mx-auto my-12">
						<h2 className="mb-8 text-3xl font-extrabold text-gray-900 sm:text-4xl">
							A propos de nous
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
			</div>
			<Footer />
		</section>
	);
};

export default AboutPage;
