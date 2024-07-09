import CartIcon from "@/assets/icons/CartIcon"
import SearchIcon from "@/assets/icons/SearchIcon"
import WishList from "@/assets/icons/WishList"
import { Button } from "@/components/ui/button"
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
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
			<div className="mb-3 py-4">
				<div className="w-full container grid lg:grid-cols-3 sm:grid-cols-2 justify-between items-center align-middle xl:px-0 px-10">
					<div className="flex-1 flex justify-center lg:order-1 order-3 lg:col-span-1 sm:col-span-2 ">
						<div className="md:visible hidden">
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
							<Drawer>
								<DrawerTrigger>Open</DrawerTrigger>
								<DrawerContent>
									<DrawerHeader>
										<DrawerTitle>Are you absolutely sure?</DrawerTitle>
										<DrawerDescription>
											This action cannot be undone.
										</DrawerDescription>
									</DrawerHeader>
									<DrawerFooter>
										<Button>Submit</Button>
										<DrawerClose>
											<Button variant="outline">Cancel</Button>
										</DrawerClose>
									</DrawerFooter>
								</DrawerContent>
							</Drawer>
						</div>
					</div>
					<div className=" flex-1 flex lg:justify-center md:justify-start justify-center lg:order-2 order-1 ">
						<NavLink to={"/"}>
							<img src="https://i.ibb.co/kKMrGMn/logo1.png" alt="logo" />
						</NavLink>
					</div>
					<div className="flex-1 flex justify-end order-2">
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
// lg:col-span-1 sm:col-span-2
export default Header
