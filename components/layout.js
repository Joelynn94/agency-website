import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }) {
	return (
		<div className="flex flex-col min-h-screen">
			<header>
				<Navbar />
			</header>
			<main className="flex-grow">{children}</main>
			<Footer />
		</div>
	);
}
