import Categories from "@/components/home/Categories"
import Collections from "@/components/home/Collections"
import Contact from "@/components/home/Contact"
import FeatureProducts from "@/components/home/FeatureProducts"
import Slider from "@/components/home/Slider"

const Home = () => {
	return (
		<div>
			<Slider />
			<Categories />
			<Collections />
			<FeatureProducts />
			<Contact />
		</div>
	)
}

export default Home
