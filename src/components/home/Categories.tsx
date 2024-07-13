import {
	MdOutlineSportsCricket,
	MdOutlineSportsFootball,
	MdOutlineSportsTennis,
} from "react-icons/md"
import { IoIosFootball } from "react-icons/io"
import { GiBaseballGlove } from "react-icons/gi"

import { NavLink } from "react-router-dom"

const Categories = () => {
	return (
		<div>
			<div className="container py-20 space-y-10 lg:px-0 md:px-5">
				<div className="md:w-2/4 mx-auto text-center space-y-3">
					<h1 className="text-4xl font-bold">Featured Categories</h1>
					<p className="italic ">
						These are our popular categories. You can choose you products within
						few moment by clicking these categories
					</p>
				</div>
				<div className="grid md:grid-cols-5 grid-cols-3 md:gap-10 gap-5 ">
					<NavLink to={"/"} className="flex flex-col items-center space-y-4">
						<div className=" border-2 border-gray-400 hover:border-green text-gray-500 hover:text-green duration-300 rounded-full md:size-32 size-20 flex justify-center items-center cursor-pointer">
							<MdOutlineSportsTennis className="md:text-6xl text-4xl" />
						</div>
						<h5 className="md:text-xl text-base font-semibold uppercase italic">
							Tennis
						</h5>
					</NavLink>
					<NavLink to={"/"} className="flex flex-col items-center space-y-4">
						<div className=" border-2 border-gray-400 hover:border-green text-gray-500 hover:text-green duration-300 rounded-full md:size-32 size-20 flex justify-center items-center cursor-pointer">
							<MdOutlineSportsFootball className="md:text-6xl text-4xl" />
						</div>
						<h5 className="md:text-xl text-base font-semibold uppercase italic">
							Rugby
						</h5>
					</NavLink>
					<NavLink to={"/"} className="flex flex-col items-center space-y-4">
						<div className=" border-2 border-gray-400 hover:border-green text-gray-500 hover:text-green duration-300 rounded-full md:size-32 size-20 flex justify-center items-center cursor-pointer">
							<IoIosFootball className="md:text-6xl text-4xl" />
						</div>
						<h5 className="md:text-xl text-base font-semibold uppercase italic">
							Football
						</h5>
					</NavLink>
					<NavLink to={"/"} className="flex flex-col items-center space-y-4">
						<div className=" border-2 border-gray-400 hover:border-green text-gray-500 hover:text-green duration-300 rounded-full md:size-32 size-20 flex justify-center items-center cursor-pointer">
							<MdOutlineSportsCricket className="md:text-6xl text-4xl" />
						</div>
						<h5 className="md:text-xl text-base font-semibold uppercase italic">
							Cricket
						</h5>
					</NavLink>
					<NavLink to={"/"} className="flex flex-col items-center space-y-4">
						<div className=" border-2 border-gray-400 hover:border-green text-gray-500 hover:text-green duration-300 rounded-full md:size-32 size-20 flex justify-center items-center cursor-pointer">
							<GiBaseballGlove className="md:text-6xl text-4xl" />
						</div>
						<h5 className="md:text-xl text-base font-semibold uppercase italic">
							Accessories
						</h5>
					</NavLink>
				</div>
			</div>
		</div>
	)
}

export default Categories
