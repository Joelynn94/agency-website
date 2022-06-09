import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="absolute top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
				<Navbar />
			</header>
			<main className="flex-grow">{children}</main>
			<Footer />
		</div>
	);
}
