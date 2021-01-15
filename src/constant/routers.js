import Home from "../components/home/Home.jsx";
import About from "../components/about/About.jsx";

export const routers = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: About,
	}
];
