import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../ui/accordion"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"

const Contact = () => {
	return (
		<div>
			<div className="container my-20">
				<div className="md:w-2/4 mx-auto text-center space-y-3 md:px-0 px-5">
					<h1 className="text-4xl font-bold">Contact Us</h1>
					<p className="italic ">
						If you have any Questions or query then you can contact with us.
					</p>
				</div>
				<div className="grid lg:grid-cols-2 grid-cols-1 gap-20 mt-10 lg:px-0 md:px-10 px-5">
					<div className="space-y-10">
						<div>
							<h2 className="text-2xl font-medium">
								Contact Us for Any Questions
							</h2>
						</div>
						<div>
							<Accordion type="single" collapsible>
								<AccordionItem value="item-1">
									<AccordionTrigger>
										What types of sporting goods do you offer?
									</AccordionTrigger>
									<AccordionContent>
										We offer a wide range of sporting goods, including equipment
										and apparel for sports like soccer, basketball, running,
										yoga, tennis, and more. Our products are sourced from top
										brands known for their quality and performance.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-2">
									<AccordionTrigger>How can I place an order?</AccordionTrigger>
									<AccordionContent>
										Placing an order is simple! Browse our online store, add
										your desired items to the cart, and proceed to checkout.
										Follow the prompts to complete your purchase securely.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-3">
									<AccordionTrigger>
										Can I return or exchange an item?
									</AccordionTrigger>
									<AccordionContent>
										Yes, we have a hassle-free return and exchange policy. If
										you’re not satisfied with your purchase, you can return or
										exchange it within 7 days of receiving your order. Please
										ensure the item is unused and in its original packaging.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value="item-4">
									<AccordionTrigger>
										How do I initiate a return or exchange?
									</AccordionTrigger>
									<AccordionContent>
										To initiate a return or exchange, please contact our
										customer support team at support@ornald.com. Provide your
										order number and the reason for the return/exchange, and we
										will guide you through the process.
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</div>
					</div>
					<div className="space-y-10">
						<div>
							<h2 className="text-2xl font-medium">
								Contact Us for Any Questions
							</h2>
						</div>
						<form className="space-y-5">
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
							<div className="flex gap-5">
								<div className="grid w-full max-w-sm items-center gap-1.5">
									<Label htmlFor="phone" className="font-normal">
										Phone Number
									</Label>
									<Input type="phone" id="phone" placeholder="Phone Number" />
								</div>
								<div className="grid w-full max-w-sm items-center gap-1.5">
									<Label htmlFor="email" className="font-normal">
										Email
									</Label>
									<Input type="email" id="email" placeholder="Email" />
								</div>
							</div>
							<div className="grid w-full gap-1.5">
								<Label htmlFor="message" className="font-normal">
									Your message
								</Label>
								<Textarea placeholder="Type your message here." id="message" />
							</div>
							<div>
								<Button className="bg-green hover:bg-black">
									Send Message
								</Button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
