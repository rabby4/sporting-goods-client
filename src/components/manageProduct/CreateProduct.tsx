import baseApi from "@/redux/api/baseApi"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Separator } from "../ui/separator"
import { Textarea } from "../ui/textarea"
import { FieldValues, useForm } from "react-hook-form"
import { toast } from "react-hot-toast"

const CreateProduct = () => {
	const { register, handleSubmit } = useForm()
	const [addProduct] = baseApi.usePostProductMutation()

	const onSubmit = async (data: FieldValues) => {
		const res = await addProduct(data).unwrap()
		if (res.success) {
			toast.success("Product post successfully")
		}
	}
	return (
		<div>
			<main className="flex flex-1 min-h-screen flex-col gap-4 p-4 lg:gap-6 lg:p-6">
				<div
					className="flex flex-1 flex-col gap-10 rounded-lg border border-dashed shadow-sm p-10"
					x-chunk="dashboard-02-chunk-1"
				>
					<div>
						<h2 className="text-2xl font-medium pb-3">Create A Product</h2>
						<Separator />
					</div>

					<form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-full">
						<div className="grid w-full items-center gap-1.5">
							<Label htmlFor="firsName" className="font-medium">
								Product Title
							</Label>
							<Input
								type="text"
								id="name"
								placeholder="Product title"
								{...register("name")}
							/>
						</div>
						<div className="grid w-full gap-1.5">
							<Label htmlFor="description" className="font-medium">
								Product Description
							</Label>
							<Textarea
								placeholder="Write your product description."
								id="description"
								{...register("description")}
							/>
						</div>
						<div className="flex gap-5 justify-between">
							<div className="grid w-full items-center gap-1.5">
								<Label htmlFor="category" className="font-medium">
									Category Name
								</Label>
								<select
									className="border py-2 px-4 w-full "
									defaultValue={"football"}
									{...register("category")}
								>
									<option disabled value="all">
										All Sports
									</option>
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
							<div className="grid w-full items-center gap-1.5">
								<Label htmlFor="brand" className="font-medium">
									Brand Name
								</Label>
								<select
									className="border py-2 px-4 w-full cursor-pointer"
									defaultValue={"nike"}
									{...register("brand")}
								>
									<option disabled value="all">
										All Brands
									</option>
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
						<div className="flex gap-5">
							<div className="grid w-full items-center gap-1.5">
								<Label htmlFor="quantity" className="font-medium">
									Stock Quantity
								</Label>
								<Input
									type="text"
									id="quantity"
									placeholder="Stock Quantity"
									{...register("quantity")}
								/>
							</div>
							<div className="grid w-full items-center gap-1.5">
								<Label htmlFor="price" className="font-medium">
									Price
								</Label>
								<Input
									type="text"
									id="price"
									placeholder="Price"
									{...register("price")}
								/>
							</div>
						</div>
						<div className="flex justify-between gap-5">
							<div className="grid w-full  items-center gap-1.5">
								<Label htmlFor="image">Image</Label>
								<Input id="image" type="text" {...register("image")} />
							</div>
							<div className="grid w-full  items-center gap-1.5">
								<Label htmlFor="rating">Rating</Label>
								<Input id="rating" type="number" {...register("rating")} />
							</div>
						</div>
						<Button type="submit" className="bg-green">
							Upload Product
						</Button>
					</form>
				</div>
			</main>
		</div>
	)
}

export default CreateProduct
