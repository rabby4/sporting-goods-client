import {
	MdOutlineSportsCricket,
	MdOutlineSportsFootball,
	MdOutlineSportsTennis,
} from "react-icons/md"
import { IoIosFootball } from "react-icons/io"

import { NavLink } from "react-router-dom"

const Categories = () => {
	return (
		<div>
			<div className="container py-20 space-y-10">
				<div className="w-2/4 mx-auto text-center space-y-3">
					<h1 className="text-4xl font-bold">Featured Categories</h1>
					<p className="italic ">
						These are our popular categories. You can choose you products within
						few moment by clicking these categories
					</p>
				</div>
				<div className="grid grid-cols-5 gap-10 ">
					<NavLink to={"/"} className="flex flex-col items-center space-y-4">
						<div className=" border-2 border-gray-400 hover:border-green text-gray-500 hover:text-green duration-300 rounded-full size-32 flex justify-center items-center cursor-pointer">
							<MdOutlineSportsTennis className="text-6xl" />
						</div>
						<h5 className="text-xl font-semibold uppercase italic">Tennis</h5>
					</NavLink>
					<NavLink to={"/"} className="flex flex-col items-center space-y-4">
						<div className=" border-2 border-gray-400 hover:border-green text-gray-500 hover:text-green duration-300 rounded-full size-32 flex justify-center items-center cursor-pointer">
							<MdOutlineSportsFootball className="text-6xl" />
						</div>
						<h5 className="text-xl font-semibold uppercase italic">Rugby</h5>
					</NavLink>
					<NavLink to={"/"} className="flex flex-col items-center space-y-4">
						<div className=" border-2 border-gray-400 hover:border-green text-gray-500 hover:text-green duration-300 rounded-full size-32 flex justify-center items-center cursor-pointer">
							<IoIosFootball className="text-6xl" />
						</div>
						<h5 className="text-xl font-semibold uppercase italic">Football</h5>
					</NavLink>
					<NavLink to={"/"} className="flex flex-col items-center space-y-4">
						<div className=" border-2 border-gray-400 hover:border-green text-gray-500 hover:text-green duration-300 rounded-full size-32 flex justify-center items-center cursor-pointer">
							<MdOutlineSportsCricket className="text-6xl" />
						</div>
						<h5 className="text-xl font-semibold uppercase italic">Cricket</h5>
					</NavLink>
					<NavLink to={"/"} className="flex flex-col items-center space-y-4">
						<div className=" border-2 border-gray-400 hover:border-green text-gray-500 hover:text-green duration-300 rounded-full size-32 flex justify-center items-center cursor-pointer">
							<MdOutlineSportsTennis className="text-6xl" />
						</div>
						<h5 className="text-xl font-semibold uppercase italic">
							Accessories
						</h5>
					</NavLink>
				</div>
			</div>
		</div>
	)
}

export default Categories
