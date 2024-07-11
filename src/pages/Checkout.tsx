import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"

const Checkout = () => {
	return (
		<div>
			<div className="bg-about-us h-64 flex justify-center items-center">
				<h1 className="text-5xl font-oswald text-white">Checkout</h1>
			</div>
			<div className="container my-20">
				<form className="grid grid-cols-2 gap-10">
					<div>
						<div className="space-y-10">
							<div>
								<h2 className="text-2xl font-medium">
									Contact Us for Any Questions
								</h2>
							</div>
							<div className="space-y-5">
								<div className="flex gap-5">
									<div className="grid w-full max-w-sm items-center gap-1.5">
										<Label htmlFor="firsName" className="font-normal">
											First Name
										</Label>
										<Input type="text" id="firsName" placeholder="First Name" />
									</div>
									<div className="grid w-full max-w-sm items-center gap-1.5">
										<Label htmlFor="lastName" className="font-normal">
											Last Name
										</Label>
										<Input type="text" id="lastName" placeholder="Last Name" />
									</div>
								</div>

								<div className="grid w-full gap-1.5">
									<Label htmlFor="street" className="font-normal">
										Address
									</Label>
									<Input
										type="text"
										id="street"
										placeholder="House number and street name"
									/>
									<Input
										type="text"
										id="street"
										placeholder="Apartment, suite, unit, etc. (optional)"
									/>
								</div>

								<div className="grid  items-center gap-1.5">
									<Label htmlFor="phone" className="font-normal">
										Phone Number
									</Label>
									<Input type="phone" id="phone" placeholder="Phone Number" />
								</div>
								<div className="grid items-center gap-1.5">
									<Label htmlFor="email" className="font-normal">
										Email
									</Label>
									<Input type="email" id="email" placeholder="Email" />
								</div>

								<div className="grid w-full gap-1.5">
									<Label htmlFor="message" className="font-normal">
										Order notes (optional)
									</Label>
									<Textarea
										placeholder="Notes about your order, e.g. special notes for delivery."
										id="message"
									/>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="space-y-5 flex flex-col p-10 border-2">
							<h2 className="text-2xl font-oswald tracking-wider text-center">
								Your Order
							</h2>

							<div className="space-y-5 flex flex-col bg-slate-50 p-5">
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>Image</TableHead>
											<TableHead>Product</TableHead>

											<TableHead className="text-right">Sub Total</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										<TableRow>
											<TableCell>
												<img
													src="https://ornaldo.themeftc.com/wp-content/uploads/2021/03/19-2-548x548.jpg"
													alt=""
													className="size-20"
												/>
											</TableCell>
											<TableCell className="font-medium">
												<p className="mb-2">Golf hand gloves</p>
												<Input className="w-[100px]" type="number" />
											</TableCell>

											<TableCell className="text-right">$250.00</TableCell>
										</TableRow>
									</TableBody>
								</Table>
								<Separator />
								<p className="tracking-wider flex justify-between">
									<strong>Subtotal: </strong> <span>$999</span>
								</p>
								<p className="tracking-wider flex justify-between">
									<strong>VAT 15%: </strong> <span>$15</span>
								</p>
								<Separator />
								<p className="tracking-wider flex justify-between">
									<strong>Total: </strong> <span>$1000</span>
								</p>
							</div>
							<div>
								<RadioGroup defaultValue="cash-on" className="space-y-2">
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
								<Button className="w-full bg-green hover:bg-black">
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
