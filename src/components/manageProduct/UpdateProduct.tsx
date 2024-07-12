import { FieldValues, useForm } from "react-hook-form"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Separator } from "../ui/separator"
import baseApi from "@/redux/api/baseApi"
import { Textarea } from "../ui/textarea"
import { useParams } from "react-router-dom"

const UpdateProduct = () => {
	const { id } = useParams()

	const { register, handleSubmit } = useForm()
	const [updateProduct] = baseApi.useUpdateProductMutation()
	const { data: singleProduct, isLoading } =
		baseApi.useGetSingleProductQuery(id)

	const onSubmit = async (data: FieldValues) => {
		const productInfo = { data, id }
		const res = await updateProduct(productInfo).unwrap()
		if (res.success) {
			console.log("product update successfully")
		}
	}
	if (isLoading) {
		return <p>Loading...</p>
	}
	const product = singleProduct?.data

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
								defaultValue={product?.name}
								{...register("name")}
								disabled
							/>
						</div>
						<div className="grid w-full gap-1.5">
							<Label htmlFor="description" className="font-normal">
								Product Description
							</Label>
							<Textarea
								id="description"
								defaultValue={product?.description}
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
									defaultValue={product.category}
									{...register("category")}
									disabled
								/>
							</div>
							<div className="grid w-full max-w-sm items-center gap-1.5">
								<Label htmlFor="brand" className="font-normal">
									Brand Name
								</Label>
								<Input
									type="text"
									id="brand"
									defaultValue={product.brand}
									{...register("brand")}
									disabled
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
									defaultValue={product.quantity}
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
									defaultValue={product.price}
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

export default UpdateProduct
