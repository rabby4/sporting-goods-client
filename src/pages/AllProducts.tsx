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
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import baseApi from "@/redux/api/baseApi"
import { Star } from "lucide-react"
import { SetStateAction, useState } from "react"
import { NavLink } from "react-router-dom"

const AllProducts = () => {
	const [selectedSort, setSelectedSort] = useState("all")
	const [searchTerm, setSearchTerm] = useState("")
	const [selectedCategory, setSelectedCategory] = useState("all")
	const [selectedBrand, setSelectedBrand] = useState("all")
	const [selectedPriceRange, setSelectedPriceRange] = useState("all")
	const [selectedRating, setSelectedRating] = useState("all")

	const getMinPrice = (range: string) => {
		switch (range) {
			case "under50":
				return 0
			case "50to100":
				return 50
			case "over100":
				return 100
			default:
				return undefined
		}
	}

	const getMaxPrice = (range: string) => {
		switch (range) {
			case "under50":
				return 50
			case "50to100":
				return 100
			case "over100":
				return undefined
			default:
				return undefined
		}
	}

	const { data: products } = baseApi.useGetProductQuery({
		sort: selectedSort,
		searchTerm: searchTerm,
		category: selectedCategory !== "all" ? selectedCategory : undefined,
		brand: selectedBrand !== "all" ? selectedBrand : undefined,
		minPrice: getMinPrice(selectedPriceRange),
		maxPrice: getMaxPrice(selectedPriceRange),
		minRating: selectedRating !== "all" ? parseInt(selectedRating) : undefined,
	})

	const handleSelectChange = (event: { target: { value: any } }) => {
		const sortValue = event.target.value
		setSelectedSort(sortValue)
	}

	const handleInputChange = (event: {
		target: { value: SetStateAction<string> }
	}) => {
		setSearchTerm(event.target.value)
	}

	const filterProducts = (products: any) => {
		let filteredProducts = [...products]

		if (selectedCategory !== "all") {
			filteredProducts = filteredProducts.filter(
				(product) => product.category === selectedCategory
			)
		}

		if (selectedBrand !== "all") {
			filteredProducts = filteredProducts.filter(
				(product) => product.brand === selectedBrand
			)
		}

		if (selectedPriceRange !== "all") {
			const minPrice = getMinPrice(selectedPriceRange)
			const maxPrice = getMaxPrice(selectedPriceRange)
			filteredProducts = filteredProducts.filter((product) => {
				const price = product.price
				return (
					(!minPrice || price >= minPrice) && (!maxPrice || price <= maxPrice)
				)
			})
		}

		if (selectedRating !== "all") {
			filteredProducts = filteredProducts.filter((product) => {
				const rating = product.rating
				return rating === parseInt(selectedRating)
			})
		}

		return filteredProducts
	}

	const sortProducts = (products: any[], sortCriteria: string) => {
		const sortedProducts = [...products]

		switch (sortCriteria) {
			case "priceLow":
				sortedProducts.sort((a, b) => a.price - b.price)
				break
			case "priceHigh":
				sortedProducts.sort((a, b) => b.price - a.price)
				break
			default:
				break
		}

		return sortedProducts
	}

	const filteredAndSortedProducts = sortProducts(
		filterProducts(products?.data || []),
		selectedSort
	)

	const clearFilters = () => {
		setSelectedCategory("all")
		setSelectedBrand("all")
		setSelectedPriceRange("all")
		setSelectedRating("all")
		setSearchTerm("")
		setSelectedSort("all")
	}

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
							<div className="w-full md:w-auto mb-2 md:mb-0 rounded-full">
								<select
									value={selectedSort}
									onChange={handleSelectChange}
									className="border py-2 px-4 w-full"
								>
									<option value="all">Sort by...</option>
									<option value="priceLow">Price: Low to High</option>
									<option value="priceHigh">Price: High to Low</option>
								</select>
							</div>
						</div>
						<Separator />
						<div className="flex flex-col gap-3">
							<h2 className="text-lg self-start font-medium">
								Product Categories
							</h2>

							<div className="w-full rounded-full md:w-auto mb-2 md:mb-0">
								<select
									value={selectedCategory}
									onChange={(e) => setSelectedCategory(e.target.value)}
									className="border py-2 px-4 w-full "
								>
									<option value="all">All Sports</option>
									<option value="fitness">Fitness</option>
									<option value="football">Football</option>
									<option value="accessories">Accessories</option>
									<option value="running">Running</option>
									<option value="soccer">Soccer</option>
									<option value="tennis">Tennis</option>
									<option value="basketball">Basketball</option>
									<option value="cycling">Cycling</option>
									<option value="golf">Golf</option>
									<option value="swimming">Swimming</option>
									<option value="cricket">Cricket</option>
									<option value="badminton">Badminton</option>
								</select>
							</div>
						</div>
						<Separator />
						<div className="flex flex-col gap-3">
							<h2 className="text-lg self-start font-medium">Product Brands</h2>

							<div className="w-full md:w-auto mb-2 md:mb-0">
								<select
									value={selectedBrand}
									onChange={(e) => setSelectedBrand(e.target.value)}
									className="border py-2 px-4 w-full cursor-pointer"
								>
									<option value="all">All Brands</option>
									<option value="nike">Nike</option>
									<option value="adidas">Adidas</option>
									<option value="puma">Puma</option>
									<option value="under-armour">Under Armour</option>
									<option value="reebok">Reebok</option>
									<option value="asics">Asics</option>
									<option value="new-balance">New Balance</option>
									<option value="fila">Fila</option>
									<option value="mizuno">Mizuno</option>
									<option value="salomon">Salomon</option>
									<option value="oakley">Oakley</option>
									<option value="umbro">Umbro</option>
								</select>
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

						<Button onClick={clearFilters} className="w-full bg-green">
							Reset Filter
						</Button>
					</div>
					<div className="lg:col-span-3 col-span-2">
						<div className="mb-5 flex items-end justify-between md:mt-0 mt-5">
							<div>
								<h2 className="text-lg self-start font-medium">
									Product by Search
								</h2>

								<form
									onSubmit={(e) => e.preventDefault()}
									className="flex w-full max-w-sm items-center space-x-2 mt-2"
								>
									<Input
										type="text"
										placeholder="Search Products..."
										value={searchTerm}
										onChange={handleInputChange}
									/>
									<Button className="bg-green ">Search</Button>
								</form>
							</div>
							<div>
								<select
									value={selectedSort}
									onChange={handleSelectChange}
									className="border py-2 px-4 w-full"
								>
									<option value="all">Sort by...</option>
									<option value="priceLow">Price: Low to High</option>
									<option value="priceHigh">Price: High to Low</option>
								</select>
							</div>
						</div>
						<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
							{filteredAndSortedProducts?.map((product: any) => (
								<Card
									className="action-hover overflow-hidden"
									key={product._id}
								>
									<CardHeader className="p-0 relative ">
										<Badge className="bg-green justify-center italic tracking-wider -rotate-45 rotate-badge">
											<strong>Brand: </strong> <span>{product.brand}</span>
										</Badge>
										<img src={product.image} alt="" />
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
										<CardDescription>
											{product.description.length > 60
												? product.description.slice(0, 60)
												: product.description}
											...
										</CardDescription>
										<div className="flex flex-col justify-center gap-3">
											<div>
												<div className="flex w-full justify-center">
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
