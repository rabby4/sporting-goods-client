import baseApi from "@/redux/api/baseApi"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Separator } from "../ui/separator"
import { Textarea } from "../ui/textarea"
import { useForm } from "react-hook-form"

const CreateProduct = () => {
	const { register, handleSubmit } = useForm()
	const [addProduct] = baseApi.usePostProductMutation()

	const onSubmit = async (data) => {
		console.log(data)
		const res = await addProduct(data).unwrap()
		if (res.success) {
			console.log("product post successfully")
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
							<Label htmlFor="description" className="font-normal">
								Product Description
							</Label>
							<Textarea
								placeholder="Write your product description."
								id="description"
								{...register("description")}
							/>
						</div>
						<div className="flex gap-5">
							<div className="grid w-full max-w-sm items-center gap-1.5">
								<Label htmlFor="category" className="font-normal">
									Category Name
								</Label>
								<Input
									type="text"
									id="category"
									placeholder="Category Name"
									{...register("category")}
								/>
							</div>
							<div className="grid w-full max-w-sm items-center gap-1.5">
								<Label htmlFor="brand" className="font-normal">
									Brand Name
								</Label>
								<Input
									type="text"
									id="brand"
									placeholder="Brand Name"
									{...register("brand")}
								/>
							</div>
						</div>
						<div className="flex gap-5">
							<div className="grid w-full max-w-sm items-center gap-1.5">
								<Label htmlFor="quantity" className="font-normal">
									Stock Quantity
								</Label>
								<Input
									type="text"
									id="quantity"
									placeholder="Stock Quantity"
									{...register("quantity")}
								/>
							</div>
							<div className="grid w-full max-w-sm items-center gap-1.5">
								<Label htmlFor="price" className="font-normal">
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
						<div className="grid w-full max-w-sm items-center gap-1.5">
							<Label htmlFor="image">Image</Label>
							<Input id="image" type="text" {...register("image")} />
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
