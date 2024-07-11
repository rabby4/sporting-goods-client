import CartIcon from "@/assets/icons/CartIcon"
import Hamburg from "@/assets/icons/Hamburg"
import SearchIcon from "@/assets/icons/SearchIcon"
import WishList from "@/assets/icons/WishList"
import {
	Drawer,
	DrawerContent,
	DrawerFooter,
	DrawerTrigger,
} from "@/components/ui/drawer"
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { NavLink } from "react-router-dom"

const Header = () => {
	return (
		<>
			<div className="py-4">
				<div className="w-full container grid lg:grid-cols-3 grid-cols-2 justify-between items-center align-middle xl:px-0 md:px-10 px-5">
					<div className="flex-1 flex lg:justify-start md:justify-center justify-start lg:order-1 order-3 lg:col-span-1 sm:col-span-2 md:bg-black lg:bg-transparent md:rounded-full md:text-white lg:text-black py-2">
						<div className="md:block hidden">
							<NavigationMenu>
								<NavigationMenuList className="font-ralway">
									<NavigationMenuItem>
										<NavLink to={"/"} className={navigationMenuTriggerStyle()}>
											Home
										</NavLink>
									</NavigationMenuItem>
									<NavigationMenuItem>
										<NavLink
											to={"/about-us"}
											className={navigationMenuTriggerStyle()}
										>
											About Us
										</NavLink>
									</NavigationMenuItem>
									<NavigationMenuItem>
										<NavLink
											to={"/products"}
											className={navigationMenuTriggerStyle()}
										>
											Products
										</NavLink>
									</NavigationMenuItem>
									<NavigationMenuItem>
										<NavLink
											to={"/products"}
											className={navigationMenuTriggerStyle()}
										>
											Manage Product
										</NavLink>
									</NavigationMenuItem>
								</NavigationMenuList>
							</NavigationMenu>
						</div>
						<div className="md:hidden visible">
							<Drawer direction="left">
								<DrawerTrigger>
									<Hamburg />
								</DrawerTrigger>
								<DrawerContent>
									<NavigationMenu>
										<NavigationMenuList className="font-ralway flex-col text-left">
											<NavigationMenuItem className="w-full">
												<NavLink
													to={"/"}
													className={navigationMenuTriggerStyle()}
												>
													<img
														src="https://i.ibb.co/kKMrGMn/logo1.png"
														alt="logo"
														className="w-32"
													/>
												</NavLink>
											</NavigationMenuItem>
											<NavigationMenuItem className="w-full">
												<NavLink
													to={"/"}
													className={navigationMenuTriggerStyle()}
												>
													Home
												</NavLink>
											</NavigationMenuItem>
											<NavigationMenuItem>
												<NavLink
													to={"/about-us"}
													className={navigationMenuTriggerStyle()}
												>
													About Us
												</NavLink>
											</NavigationMenuItem>
											<NavigationMenuItem>
												<NavLink
													to={"/products"}
													className={navigationMenuTriggerStyle()}
												>
													Products
												</NavLink>
											</NavigationMenuItem>
											<NavigationMenuItem>
												<NavLink
													to={"/products"}
													className={navigationMenuTriggerStyle()}
												>
													Manage Product
												</NavLink>
											</NavigationMenuItem>
										</NavigationMenuList>
									</NavigationMenu>
									<DrawerFooter>
										<div>
											<WishList />
										</div>
									</DrawerFooter>
								</DrawerContent>
							</Drawer>
						</div>
					</div>
					<div className=" flex-1 flex lg:justify-center md:justify-start justify-center col-span-2 md:col-span-1 lg:order-2 order-1 lg:mb-0 mb-3">
						<NavLink to={"/"}>
							<img src="https://i.ibb.co/kKMrGMn/logo1.png" alt="logo" />
						</NavLink>
					</div>
					<div className="flex-1 flex justify-end order-3 md:order-2 ">
						<NavigationMenu>
							<NavigationMenuList className="font-ralway">
								<NavigationMenuItem>
									<NavLink to={"/"} className={navigationMenuTriggerStyle()}>
										<SearchIcon />
										Search
									</NavLink>
								</NavigationMenuItem>
								<NavigationMenuItem className="relative">
									<NavLink to={"/"} className={navigationMenuTriggerStyle()}>
										<WishList />
										<span className="size-5 flex items-center justify-center rounded-full text-sm text-white bg-green absolute right-2 -top-[2px]">
											0
										</span>
									</NavLink>
								</NavigationMenuItem>
								<NavigationMenuItem className="relative">
									<NavLink
										to={"/cart"}
										className={navigationMenuTriggerStyle()}
									>
										<CartIcon />
										<span className="size-5 flex items-center justify-center rounded-full text-sm text-white bg-green absolute right-2 -top-[2px]">
											0
										</span>
									</NavLink>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
					</div>
				</div>
			</div>
		</>
	)
}
// lg:col-span-1 sm:col-span-2
export default Header
