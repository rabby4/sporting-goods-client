import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const Slider = () => {
	return (
		<div className="">
			<Carousel
				className="w-full"
				plugins={[
					Autoplay({
						delay: 5000,
					}),
				]}
			>
				<CarouselContent>
					<CarouselItem>
						<div
							className="p-1 h-[calc(100vh-110px)] w-full  bg-carousel-1 bg-center bg-cover"
							// style={{
							// 	backgroundImage: new URL(
							// 		"https://i.ibb.co/wwZdj9B/showcace-home-img-5.jpg"
							// 	),
							// }}
						>
							<div className="container">
								<h1>this is heading</h1>
								<h1>this is heading</h1>
								<h1>this is heading</h1>
								<h1>this is heading</h1>
								<h1>this is heading</h1>
								<h1>this is heading</h1>
								<h1>this is heading</h1>
							</div>
						</div>
					</CarouselItem>
					{/* <CarouselItem>
						<div className="p-1 h-[calc(100vh-110px)] flex justify-center items-center ">
							<img
								src="https://i.ibb.co/wwZdj9B/showcace-home-img-5.jpg"
								alt=""
							/>
						</div>
					</CarouselItem>
					<CarouselItem>
						<div className="p-1 h-[calc(100vh-110px)] flex justify-center items-center ">
							<img
								src="https://i.ibb.co/wwZdj9B/showcace-home-img-5.jpg"
								alt=""
							/>
						</div>
					</CarouselItem> */}
				</CarouselContent>
			</Carousel>
		</div>
	)
}

export default Slider
