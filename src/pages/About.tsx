import { IoLocationOutline } from "react-icons/io5"
import { MdOutlinePhone } from "react-icons/md"
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaRegEnvelope,
	FaTwitter,
} from "react-icons/fa"

const About = () => {
	return (
		<div>
			<div className="bg-about-us h-64 flex justify-center items-center">
				<h1 className="text-5xl font-oswald text-white">About Us</h1>
			</div>
			<div className="container py-20">
				<div className="grid grid-cols-2 justify-between items-center">
					<div>
						<img
							src="https://ornaldo.themeftc.com/wp-content/uploads/2017/03/about-story-1.jpg"
							alt=""
						/>
					</div>
					<div className="space-y-5">
						<h2 className="text-3xl font-oswald">About Details</h2>
						<p>
							Welcome to Ornald, your premier destination for high-quality
							sporting goods. Founded with a passion for sports and a commitment
							to excellence, Ornald is dedicated to providing athletes, fitness
							enthusiasts, and sports lovers with the best products to elevate
							their performance and enjoyment.
						</p>
						<p>
							Ornald was born out of a love for sports and a desire to create a
							one-stop-shop for all sporting needs. Our founders, avid sports
							enthusiasts themselves, recognized the need for a store that not
							only offers a wide range of products but also values quality and
							customer satisfaction above all else. Today, Ornald continues to
							grow, driven by a community of passionate customers who inspire us
							to keep pushing the boundaries of what is possible in the world of
							sports retail.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-3 mt-20 justify-between border border-gray-200 py-10 rounded-md">
					<div className="flex gap-4 mt-5 justify-center">
						<IoLocationOutline className="text-4xl text-green" />
						<div className="-mt-1">
							<h3 className="text-lg font-bold">Address:</h3>
							<p className="italic">Mirpur, Dhaka, Bangladesh</p>
						</div>
					</div>
					<div className="flex gap-4 mt-5 justify-center">
						<MdOutlinePhone className="text-4xl text-green" />
						<div className="-mt-1">
							<h3 className="text-lg font-bold">Phone:</h3>
							<p className="italic">+880123456789</p>
						</div>
					</div>
					<div className="flex gap-4 mt-5 justify-center">
						<FaRegEnvelope className="text-3xl text-green" />
						<div className="-mt-1">
							<h3 className="text-lg font-bold">Email:</h3>
							<p className="italic">help@gmail.com</p>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-2 justify-between items-center gap-20 py-20 ">
					<div className="space-y-5">
						<h2 className="text-3xl font-oswald">Our Mission and Vision</h2>
						<p>
							At Ornald, our mission is to empower every athlete to reach their
							full potential by offering top-notch sporting equipment and
							apparel. We believe that with the right gear, anyone can achieve
							greatness. Our goal is to make your shopping experience seamless
							and enjoyable while ensuring you have access to the latest and
							most innovative products on the market.
							<br />
							<br />
							At Ornald, we envision a world where every athlete, regardless of
							their level or background, has access to the best sporting
							equipment and apparel to achieve their full potential. We strive
							to be a leading force in the sports retail industry, known for our
							commitment to quality, innovation, and customer satisfaction. Our
							goal is to inspire and empower a global community of sports
							enthusiasts to pursue their passions and embrace a healthy, active
							lifestyle.
						</p>
					</div>
					<div className="">
						<img
							src="https://trackstore.qodeinteractive.com/wp-content/uploads/2017/10/runing-simple-img-2.jpg"
							alt=""
						/>
					</div>
				</div>
				<div>
					<div className="w-2/4 mx-auto text-center space-y-3">
						<h1 className="text-4xl font-bold">Our Team Members</h1>
						<p className="italic">
							Meet our lovely team member and get support from these persons
						</p>
					</div>
					<div className="grid grid-cols-4 gap-7 mt-10">
						<div className="flex gap-4 mt-5 justify-center flex-col text-center">
							<div className="member-img relative cursor-pointer">
								<img
									src="https://htmldemo.net/fitzoon/fitzoon/img/team/1.jpg"
									alt=""
								/>
								<div className="social-profile ">
									<ul className="flex gap-1 justify-center">
										<li>
											<a
												href="#"
												className="flex justify-center items-center text-xl size-10 bg-white rounded-full text-gray-500 hover:text-white hover:bg-green"
											>
												<FaFacebook />
											</a>
										</li>
										<li>
											<a
												href="#"
												className="flex justify-center items-center text-xl size-10 bg-white rounded-full text-gray-500 hover:text-white hover:bg-green"
											>
												<FaTwitter />
											</a>
										</li>
										<li>
											<a
												href="#"
												className="flex justify-center items-center text-xl size-10 bg-white rounded-full text-gray-500 hover:text-white hover:bg-green"
											>
												<FaInstagram />
											</a>
										</li>
										<li>
											<a
												href="#"
												className="flex justify-center items-center text-xl size-10 bg-white rounded-full text-gray-500 hover:text-white hover:bg-green"
											>
												<FaLinkedin />
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="-mt-1">
								<h3 className="text-lg font-bold">Michael Thompson</h3>
								<p className="italic">CEO</p>
							</div>
						</div>
						<div className="flex gap-4 mt-5 justify-center flex-col text-center">
							<div className="member-img relative cursor-pointer">
								<img
									src="https://htmldemo.net/fitzoon/fitzoon/img/team/2.jpg"
									alt=""
								/>
								<div className="social-profile ">
									<ul className="flex gap-1 justify-center">
										<li>
											<a
												href="#"
												className="flex justify-center items-center text-xl size-10 bg-white rounded-full text-gray-500 hover:text-white hover:bg-green"
											>
												<FaFacebook />
											</a>
										</li>
										<li>
											<a
												href="#"
												className="flex justify-center items-center text-xl size-10 bg-white rounded-full text-gray-500 hover:text-white hover:bg-green"
											>
												<FaTwitter />
											</a>
										</li>
										<li>
											<a
												href="#"
												className="flex justify-center items-center text-xl size-10 bg-white rounded-full text-gray-500 hover:text-white hover:bg-green"
											>
												<FaInstagram />
											</a>
										</li>
										<li>
											<a
												href="#"
												className="flex justify-center items-center text-xl size-10 bg-white rounded-full text-gray-500 hover:text-white hover:bg-green"
											>
												<FaLinkedin />
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="-mt-1">
								<h3 className="text-lg font-bold">Michael Thompson</h3>
								<p className="italic">CEO</p>
							</div>
						</div>
						<div className="flex gap-4 mt-5 justify-center flex-col text-center">
							<div className="member-img relative cursor-pointer">
								<img
									src="https://htmldemo.net/fitzoon/fitzoon/img/team/3.jpg"
									alt=""
								/>
								<div className="social-profile ">
									<ul className="flex gap-1 justify-center">
										<li>
											<a
												href="#"
												className="flex justify-center items-center text-xl size-10 bg-white rounded-full text-gray-500 hover:text-white hover:bg-green"
											>
												<FaFacebook />
											</a>
										</li>
										<li>
											<a
												href="#"
												className="flex justify-center items-center text-xl size-10 bg-white rounded-full text-gray-500 hover:text-white hover:bg-green"
											>
												<FaTwitter />
											</a>
										</li>
										<li>
											<a
												href="#"
												className="flex justify-center items-center text-xl size-10 bg-white rounded-full text-gray-500 hover:text-white hover:bg-green"
											>
												<FaInstagram />
											</a>
										</li>
										<li>
											<a
												href="#"
												className="flex justify-center items-center text-xl size-10 bg-white rounded-full text-gray-500 hover:text-white hover:bg-green"
											>
												<FaLinkedin />
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="-mt-1">
								<h3 className="text-lg font-bold">Michael Thompson</h3>
								<p className="italic">CEO</p>
							</div>
						</div>
						<div className="flex gap-4 mt-5 justify-center flex-col text-center">
							<div className="member-img relative cursor-pointer">
								<img
									src="https://htmldemo.net/fitzoon/fitzoon/img/team/4.jpg"
									alt=""
								/>
								<div className="social-profile ">
									<ul className="flex gap-1 justify-center">
										<li>
											<a
												href="#"
												className="flex justify-center items-center text-xl size-10 bg-white rounded-full text-gray-500 hover:text-white hover:bg-green"
											>
												<FaFacebook />
											</a>
										</li>
										<li>
											<a
												href="#"
												className="flex justify-center items-center text-xl size-10 bg-white rounded-full text-gray-500 hover:text-white hover:bg-green"
											>
												<FaTwitter />
											</a>
										</li>
										<li>
											<a
												href="#"
												className="flex justify-center items-center text-xl size-10 bg-white rounded-full text-gray-500 hover:text-white hover:bg-green"
											>
												<FaInstagram />
											</a>
										</li>
										<li>
											<a
												href="#"
												className="flex justify-center items-center text-xl size-10 bg-white rounded-full text-gray-500 hover:text-white hover:bg-green"
											>
												<FaLinkedin />
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="-mt-1">
								<h3 className="text-lg font-bold">Michael Thompson</h3>
								<p className="italic">CEO</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187878219!2d90.33728799397399!3d23.78097572837469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1720689165997!5m2!1sen!2sbd"
					width="600"
					height="450"
					style={{ border: 0, width: "100%" }}
					// allowfullscreen=""
					loading="lazy"
					// referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</div>
	)
}

export default About
