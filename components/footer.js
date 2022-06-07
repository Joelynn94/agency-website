export default function Footer({ config }) {
	return (
		<footer className="relative bg-gray-900 text-white py-4 px-4">
			<div className="flex w-full flex-col items-center text-xs">
				<a
					className="text-gray-400 hover:text-gray-300"
					href="/privacy_policy.html"
					rel="nofollow"
				>
					Privacy Policy
				</a>
				<a
					className="text-gray-400 hover:text-gray-300"
					href="/terms_and_conditions.html"
					rel="nofollow"
				>
					Terms &amp; Conditions
				</a>
			</div>
		</footer>
	);
}
