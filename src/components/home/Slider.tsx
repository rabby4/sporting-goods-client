import { NavLink } from "react-router-dom"
import { Button } from "../ui/button"
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
						<div className="p-1 lg:h-[calc(100vh-110px)] md:h-[500px] h-[300px] w-full flex items-center bg-carousel-1 bg-cover bg-no-repeat md:px-10 px-5">
							<div className="container md:space-y-5">
								<div className="flex gap-2">
									<h1 className="md:text-2xl text-lg text-white md:font-bold font-normal font-oswald uppercase ">
										Upto
									</h1>
									<h2 className="md:text-6xl text-4xl text-yellow-400 font-bold font-oswald uppercase ">
										50
									</h2>
									<div className="flex flex-col items-center">
										<p className="md:text-4xl text-base text-yellow-400 font-bold font-oswald uppercase">
											%
										</p>
										<p className="text-yellow-400 font-bold font-oswald uppercase">
											OFF
										</p>
									</div>
								</div>
								<h1 className="md:text-8xl text-6xl text-white font-oswald">
									<span className="font-light">RUGBY</span> <br />
									<span className="font-bold">FOOTBALL</span>
								</h1>
								<Button className="bg-white text-black rounded-full hover:text-white md:px-8 px-6 md:font-bold md:text-sm md:mt-0 mt-5">
									<NavLink to={"/products"}>Shop Now</NavLink>
								</Button>
							</div>
						</div>
					</CarouselItem>
					<CarouselItem>
						<div className="p-1 lg:h-[calc(100vh-110px)] md:h-[500px] h-[300px] w-full flex items-center bg-carousel-2 bg-cover bg-no-repeat md:px-10 px-5">
							<div className="container md:space-y-5">
								<div className="flex gap-2">
									<h1 className="md:text-2xl text-lg text-white md:font-bold font-normal font-oswald uppercase  ">
										Upto
									</h1>
									<h2 className="md:text-6xl text-4xl text-yellow-400 font-bold font-oswald uppercase ">
										40
									</h2>
									<div className="flex flex-col items-center">
										<p className="md:text-4xl text-base text-yellow-400 font-bold font-oswald uppercase">
											%
										</p>
										<p className="text-yellow-400 font-bold font-oswald uppercase">
											OFF
										</p>
									</div>
								</div>
								<h1 className="md:text-8xl text-6xl text-white font-oswald">
									<span className="font-light">TENNIS</span>
									<span className="font-bold">BAT</span>
								</h1>
								<Button className="bg-white text-black rounded-full hover:text-white md:px-8 px-6 md:font-bold md:text-sm md:mt-0 mt-5">
									<NavLink to={"/products"}>Shop Now</NavLink>
								</Button>
							</div>
						</div>
					</CarouselItem>
					<CarouselItem>
						<div className="p-1 lg:h-[calc(100vh-110px)] md:h-[500px] h-[300px] w-full flex items-center bg-carousel-3 bg-cover bg-no-repeat md:px-10 px-5">
							<div className="container md:space-y-5">
								<div className="flex gap-2">
									<h1 className="md:text-2xl text-lg text-white md:font-bold font-normal font-oswald uppercase  ">
										Upto
									</h1>
									<h2 className="md:text-6xl text-4xl text-yellow-400 font-bold font-oswald uppercase ">
										40
									</h2>
									<div className="flex flex-col items-center">
										<p className="md:text-4xl text-base text-yellow-400 font-bold font-oswald uppercase">
											%
										</p>
										<p className="text-yellow-400 font-bold font-oswald uppercase">
											OFF
										</p>
									</div>
								</div>
								<h1 className="md:text-8xl text-6xl text-white font-oswald">
									<span className="font-light">RUGBY</span> <br />
									<span className="font-bold">HELMET</span>
								</h1>
								<Button className="bg-white text-black rounded-full hover:text-white md:px-8 px-6 md:font-bold md:text-sm md:mt-0 mt-5">
									<NavLink to={"/products"}>Shop Now</NavLink>
								</Button>
							</div>
						</div>
					</CarouselItem>
				</CarouselContent>
			</Carousel>
		</div>
	)
}

export default Slider
