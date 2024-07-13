import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

import { Textarea } from "@/components/ui/textarea"
import { removeAllCartData } from "@/redux/feature/productSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const Checkout = () => {
	const navigate = useNavigate()
	const { register, handleSubmit } = useForm()
	const dispatch = useAppDispatch()
	const cartData = useAppSelector((state) => state.product.data)
	const subTotal = cartData?.reduce(
		(subTotal, product2) => subTotal + product2.price,
		0
	)

	const totalVat = (subTotal * 15) / 100
	const total = subTotal + totalVat

	const onSubmit = () => {
		dispatch(removeAllCartData())
		navigate("/thank-you")
		toast.success("Order placed successfully!")
	}

	return (
		<div>
			<div className="bg-about-us h-64 flex justify-center items-center">
				<h1 className="text-5xl font-oswald text-white">Checkout</h1>
			</div>
			<div className="container my-20">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="grid lg:grid-cols-2 gap-10 lg:px-0 md:px-10 px-5"
				>
					<div>
						<div className="space-y-10">
							<div>
								<h2 className="text-2xl font-medium">
									Delivery Address Information
								</h2>
							</div>
							<div className="space-y-5">
								<div className="flex gap-5">
									<div className="grid w-full max-w-sm items-center gap-1.5">
										<Label htmlFor="firsName" className="font-normal">
											First Name
										</Label>
										<Input
											type="text"
											id="firsName"
											placeholder="First Name"
											{...register("firstName")}
										/>
									</div>
									<div className="grid w-full max-w-sm items-center gap-1.5">
										<Label htmlFor="lastName" className="font-normal">
											Last Name
										</Label>
										<Input
											type="text"
											id="lastName"
											placeholder="Last Name"
											{...register("lastName")}
										/>
									</div>
								</div>

								<div className="grid w-full gap-1.5">
									<Label htmlFor="street" className="font-normal">
										Address
									</Label>
									<Input
										type="text"
										id="street"
										placeholder="Address"
										{...register("address")}
									/>
								</div>

								<div className="grid  items-center gap-1.5">
									<Label htmlFor="phone" className="font-normal">
										Phone Number
									</Label>
									<Input
										type="phone"
										id="phone"
										placeholder="Phone Number"
										{...register("phoneNumber")}
									/>
								</div>
								<div className="grid items-center gap-1.5">
									<Label htmlFor="email" className="font-normal">
										Email
									</Label>
									<Input
										type="email"
										id="email"
										placeholder="Email"
										{...register("email")}
									/>
								</div>

								<div className="grid w-full gap-1.5">
									<Label htmlFor="message" className="font-normal">
										Order notes (optional)
									</Label>
									<Textarea
										placeholder="Notes about your order, e.g. special notes for delivery."
										id="message"
										{...register("message")}
									/>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="space-y-5 flex flex-col p-10 border-2">
							<h2 className="text-2xl font-oswald tracking-wider text-center">
								Your Order Details
							</h2>

							<div className="space-y-5 flex flex-col bg-slate-50 p-5">
								<Card
									className="overflow-hidden"
									x-chunk="dashboard-05-chunk-4"
								>
									<CardContent className="p-6 text-sm">
										<div className="grid gap-3">
											<div className="font-semibold"></div>
											<ul className="grid gap-3">
												{cartData.map((product) => (
													<li
														className="flex items-center justify-between"
														key={product._id}
													>
														<span className="text-muted-foreground">
															{product.name} x <span>{product.orderedQty}</span>
														</span>
														<span>${product.price}</span>
													</li>
												))}
											</ul>
											<Separator className="my-2" />
											<ul className="grid gap-3">
												<li className="flex items-center justify-between">
													<span className="text-muted-foreground">
														Subtotal
													</span>
													<span>${subTotal}</span>
												</li>
												<li className="flex items-center justify-between">
													<span className="text-muted-foreground">Tax</span>
													<span>${totalVat}</span>
												</li>
												<li className="flex items-center justify-between font-semibold">
													<span className="text-muted-foreground">Total</span>
													<span>${total}</span>
												</li>
											</ul>
										</div>
										<Separator className="my-4" />
									</CardContent>
								</Card>
							</div>
							<div>
								<RadioGroup
									defaultValue="cash-on"
									className="space-y-2"
									{...register("paymentOption")}
								>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="cash-on" id="cash-on" />
										<Label htmlFor="cash-on"> Cash on delivery</Label>
									</div>
									<div className="flex items-center space-x-2">
										<RadioGroupItem value="direct-bank" id="direct-bank" />
										<Label htmlFor="direct-bank">Direct bank transfer</Label>
									</div>
								</RadioGroup>
							</div>
							<Separator />
							<div>
								<p className="text-sm">
									Your personal data will be used to process your order, support
									your experience throughout this website, and for other
									purposes described in our{" "}
									<span className="font-medium cursor-pointer">
										privacy policy.
									</span>
								</p>
							</div>
							<Separator />
							<div className="flex items-center space-x-2">
								<Checkbox id="terms" />
								<label
									htmlFor="terms"
									className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									I have read and agree to the website{" "}
									<span className="font-medium cursor-pointer">
										terms and conditions
									</span>
								</label>
							</div>
							<div>
								<Button
									type="submit"
									className="w-full bg-green hover:bg-black"
								>
									Place Order
								</Button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default Checkout
