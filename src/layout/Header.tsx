import CartIcon from "@/assets/icons/CartIcon"
import SearchIcon from "@/assets/icons/SearchIcon"
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
			<div className="h-20 mb-3">
				<div className="h-full container flex justify-between items-center">
					<div className="flex-1">
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
					<div className="flex-1 flex justify-center">
						<NavLink to={"/"}>
							<img src="https://i.ibb.co/kKMrGMn/logo1.png" alt="logo" />
						</NavLink>
					</div>
					<div className="flex-1 flex justify-end">
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

export default Header
