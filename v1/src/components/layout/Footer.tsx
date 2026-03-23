const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer className="border-t border-border py-6">
			<div className="mx-auto w-full text-center items max-w-6xl px-4 text-sm text-muted md:px-8">
				<p>© {year} JARD. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
