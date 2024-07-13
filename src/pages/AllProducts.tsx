/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import baseApi from "@/redux/api/baseApi"
import { ListFilter, Star } from "lucide-react"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"
import { NavLink } from "react-router-dom"

// const renderStars = (rating: number) => {
// 	const stars = []
// 	for (let i = 1; i <= 10; i++) {
// 		stars.push(
// 			i <= rating ? (
// 				<Star key={i} className="text-yellow-500" />
// 			) : (
// 				<StarIcon key={i} className="text-gray-500" />
// 			)
// 		)
// 	}
// 	return stars
// }

const AllProducts = () => {
	const [search, setSearch] = useState("")
	const [sorting, setSorting] = useState("ascending")
	const { data: products, isLoading } = baseApi.useGetProductQuery(search)

	const { register, handleSubmit } = useForm()
	const onSubmit = async (data: FieldValues) => {
		console.log(data)
		setSearch(data.searchTerms)
	}
	if (isLoading) {
		return <p>loading...</p>
	}

	const productData = products?.data ?? []
	const sortProduct = [...productData]
	console.log(sortProduct)

	sortProduct?.sort((a: any, b: any) => {
		if (sorting === "ascending") {
			return a.name > b.name ? 1 : -1
		} else {
			return a.name < b.name ? 1 : -1
		}
	})

	return (
		<div className="mb-20">
			<div className="bg-about-us h-64 flex justify-center items-center">
				<h1 className="text-5xl font-oswald text-white">Shop Page</h1>
			</div>
			<div className="container lg:px-0 md:px-10 px-5">
				<div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-10 mt-10">
					<div className="col-span-1 lg:space-y-5 space-y-3">
						<div className="flex flex-col gap-3">
							<h2 className="text-lg self-start font-medium">
								Filter by Price
							</h2>
							<div className="flex gap-4">
								<p>0</p>
								<Slider defaultValue={[33]} max={100} step={1} />
								<p>100</p>
							</div>
						</div>
						<Separator />
						<div className="flex flex-col gap-3">
							<h2 className="text-lg self-start font-medium">
								Product Categories
							</h2>
							<div>
								<ul className="grid gap-2">
									<li className="flex items-center justify-between">
										<span className="text-muted-foreground">Apple</span>
										<Badge variant={"outline"}>5</Badge>
									</li>
								</ul>
							</div>
						</div>
						<Separator />
						<div className="flex flex-col gap-3">
							<h2 className="text-lg self-start font-medium">Product Brands</h2>
							<div>
								<ul className="grid gap-2">
									<li className="flex items-center justify-between">
										<span className="text-muted-foreground">Apple</span>
										<Badge variant={"outline"}>5</Badge>
									</li>
								</ul>
							</div>
						</div>
						<Separator />
						<div className="flex flex-col gap-3">
							<h2 className="text-lg self-start font-medium">
								Filter by Rating
							</h2>
							<div>
								<ul className="grid gap-2">
									<li className="flex items-center">
										<Star className="text-yellow-500" />
										<Star className="text-yellow-500" />
										<Star className="text-yellow-500" />
										<Star className="text-yellow-500" />
										<Star className="text-yellow-500" />
									</li>
									<li className="flex items-center">
										<Star className="text-yellow-500" />
										<Star className="text-yellow-500" />
										<Star className="text-yellow-500" />
										<Star className="text-yellow-500" />
									</li>
								</ul>
							</div>
						</div>
						<Button className="w-full bg-green">Reset Filter</Button>
					</div>
					<div className="lg:col-span-3 col-span-2">
						<div className="mb-5 flex items-end justify-between md:mt-0 mt-5">
							<div>
								<h2 className="text-lg self-start font-medium">
									Product by Search
								</h2>
								<form
									onSubmit={handleSubmit(onSubmit)}
									className="flex w-full max-w-sm items-center space-x-2 mt-2"
								>
									<Input
										type="text"
										placeholder="Search Products..."
										{...register("searchTerms")}
									/>
									<Button type="submit" className="bg-green ">
										Search
									</Button>
								</form>
							</div>
							<div>
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button variant="outline" size="lg" className="h-10 gap-1">
											<ListFilter className="h-3.5 w-3.5" />
											<span className="sr-only sm:not-sr-only sm:whitespace-nowrap text-md">
												Sort Product
											</span>
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent align="end">
										<DropdownMenuLabel>Sort by</DropdownMenuLabel>
										<DropdownMenuSeparator />
										<DropdownMenuCheckboxItem
											checked={sorting === "ascending"}
											onCheckedChange={() => setSorting("ascending")}
										>
											Ascending To Descending
										</DropdownMenuCheckboxItem>
										<DropdownMenuCheckboxItem
											checked={sorting === "descending"}
											onCheckedChange={() => setSorting("descending")}
										>
											Descending To Ascending
										</DropdownMenuCheckboxItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
						</div>
						<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
							{sortProduct?.map((product: any) => (
								<Card
									className="action-hover overflow-hidden"
									key={product._id}
								>
									<CardHeader className="p-0 relative ">
										<Badge className="bg-green justify-center italic tracking-wider -rotate-45 rotate-badge">
											<strong>Brand: </strong> <span>{product.brand}</span>
										</Badge>
										<img
											src="https://ornaldo.themeftc.com/wp-content/uploads/2021/03/19-2-548x548.jpg"
											alt=""
										/>
										<div className="action-buttons flex justify-between px-5 z-0 absolute bottom-0 ">
											<Button className="flex-1 rounded-none gap-3 w-full">
												Add To Cart
											</Button>
											<Button className="flex-1 rounded-none gap-3">
												<NavLink to={`/product-details/${product._id}`}>
													Details View
												</NavLink>
											</Button>
										</div>
									</CardHeader>
									<CardContent className="space-y-2 mt-2 z-10 relative bg-white">
										<p className=" text-gray-400 italic tracking-wider">Golf</p>
										<CardTitle className="text-lg font-bold">
											{product.name}
										</CardTitle>
										<CardDescription>{product.description}</CardDescription>
										<div className="flex flex-col justify-center gap-3">
											<div>
												<div className="flex w-full justify-center">
													{/* {renderStars} */}
													<Star className="text-yellow-500" />
													<Star className="text-yellow-500" />
													<Star className="text-yellow-500" />
													<Star className="text-yellow-500" />
													<Star className="text-yellow-500" />
												</div>
											</div>
											<div className="flex justify-between">
												<p className=" tracking-wider">
													<strong>Quantity: </strong>
													<span>{product.quantity}</span>
												</p>
												<p className="text-green tracking-wider">
													<strong>$</strong> <span>{product.price}</span>
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AllProducts
