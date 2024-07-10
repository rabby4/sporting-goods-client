import Envelop from "@/assets/icons/Envelop"
import Location from "@/assets/icons/Location"
import Phone from "@/assets/icons/Phone"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { NavLink } from "react-router-dom"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

const Footer = () => {
	return (
		<div>
			<div className="w-full bg-gray-950 text-gray-300 py-14">
				<div className="container">
					<div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
						<div className="relative">
							<h2 className="text-xl font-bold mb-2 uppercase">About Ornald</h2>
							<span className="w-28 h-[2px] bg-green absolute"></span>
							<p className="mt-5">
								Welcome to Ornald, your premier destination for high-quality
								sporting goods.{" "}
							</p>
							<div className="flex gap-4 mt-5">
								<Location />
								<div className="-mt-1">
									<h3 className="text-lg font-bold">Address:</h3>
									<p>Mirpur, Dhaka, Bangladesh</p>
								</div>
							</div>
							<div className="flex gap-4 mt-5">
								<Phone />
								<div className="-mt-1">
									<h3 className="text-lg font-bold">Phone:</h3>
									<p>+880123456789</p>
								</div>
							</div>
							<div className="flex gap-4 mt-5">
								<Envelop />
								<div className="-mt-1">
									<h3 className="text-lg font-bold">Email:</h3>
									<p>help@ornald.com</p>
								</div>
							</div>
						</div>
						<div className="relative">
							<h2 className="text-xl font-bold mb-2 uppercase">Quick Links</h2>
							<span className="w-28 h-[2px] bg-green absolute"></span>
							<div className="mt-5 flex flex-col gap-4">
								<NavLink to={"/"} className={"hover:text-green font-semibold"}>
									Home
								</NavLink>
								<NavLink
									to={"/about-us"}
									className={"hover:text-green font-semibold"}
								>
									About Us
								</NavLink>
								<NavLink
									to={"/products"}
									className={"hover:text-green font-semibold"}
								>
									Products
								</NavLink>
								<NavLink
									to={"/manage-product"}
									className={"hover:text-green font-semibold"}
								>
									Manage Product
								</NavLink>
								<NavLink
									to={"/cart"}
									className={"hover:text-green font-semibold"}
								>
									Cart
								</NavLink>
								<NavLink
									to={"/checkout"}
									className={"hover:text-green font-semibold"}
								>
									Checkout
								</NavLink>
							</div>
						</div>
						<div className="relative">
							<h2 className="text-xl font-bold mb-2 uppercase">
								Stay Connected
							</h2>
							<span className="w-28 h-[2px] bg-green absolute"></span>
							<div className="mt-5">
								<h3 className="text-lg font-bold">Newsletter</h3>
								<p>
									Sign up for our newsletter and stay up-to-date with the latest
									collection, the latest trends and the best deals!
								</p>
								<div className="flex w-full max-w-sm items-center space-x-2 mt-2">
									<Input type="email" placeholder="Enter Your Email" />
									<Button
										type="submit"
										className="bg-green hover:bg-gray-200 hover:text-black"
									>
										Subscribe
									</Button>
								</div>
							</div>
							<div className="mt-5">
								<h3 className="text-lg font-bold">Follow Us</h3>
								<div className="flex w-full max-w-sm items-center space-x-5 mt-2">
									<FaFacebook className="size-6 hover:text-green cursor-pointer" />
									<FaInstagram className="size-6 hover:text-green cursor-pointer" />
									<FaTwitter className="size-6 hover:text-green cursor-pointer" />
									<FaYoutube className="size-6 hover:text-green cursor-pointer" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full bg-black text-gray-300 py-4 ">
				<div className="container">
					<div className="grid md:grid-cols-2 grid-cols-1 justify-between">
						<div className="text-sm">
							COPYRIGHT © 2024, ALL RIGHTS RESERVED. POWERED BY{" "}
							<NavLink to={"/"} className={"font-bold"}>
								ORNALDO
							</NavLink>
						</div>
						<div className="flex justify-end">
							<img
								src="https://demo.towerthemes.com/tt_aboss/image/catalog/payment-icon.png"
								alt=""
								className="w-72"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
