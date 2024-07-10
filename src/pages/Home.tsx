import Categories from "@/components/home/Categories"
import Collections from "@/components/home/Collections"
import FeatureProducts from "@/components/home/FeatureProducts"
import Slider from "@/components/home/Slider"

const Home = () => {
	return (
		<div>
			<Slider />
			<Collections />
			<FeatureProducts />
			<Categories />
		</div>
	)
}

export default Home
