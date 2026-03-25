import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { SectionHeader } from "../layout/SectionContainer";

const socialItems = [
	{
		label: "LinkedIn",
		icon: <LinkedInIcon fontSize="inherit" />,
		url: "https://www.linkedin.com/in/jude-anthone-duarte-750288326/",
		handle: "@jude-anthone-duarte-750288326",
	},
	{
		label: "Instagram",
		icon: <InstagramIcon fontSize="inherit" />,
		url: "https://www.instagram.com/jardurf/",
		handle: "@jardurf",
	},
	{
		label: "Facebook",
		icon: <FacebookRoundedIcon fontSize="inherit" />,
		url: "https://www.facebook.com/jude.anthone.duarte.2024",
		handle: "Jude Anthone Duarte",
	},
];

const Socials = () => {
	return (
		<article aria-labelledby="socials-title" className="space-y-6 md:space-y-8">
			<SectionHeader
				id="socials-title"
				tag="/04 Socials"
				lines={["Let's", "Connect."]}
				description="Reach me for opportunities, collaborations, and tech conversations."
			/>

			<section aria-label="Social links" className="grid grid-cols-1 gap-3 md:grid-cols-3">
				{socialItems.map((item) => (
					<article
						key={item.label}
						className="rounded-2xl border border-border bg-surface/70 p-4 backdrop-blur-sm md:p-5"
					>
						<div className="flex items-center gap-2">
							<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-2 text-lg text-foreground">
								{item.icon}
							</span>
							<h3 className="text-base font-semibold text-foreground">
								{item.label}
							</h3>
						</div>

						<p className="mt-3 text-xs text-muted">{item.handle}</p>

						<a
							href={item.url}
							target="_blank"
							rel="noreferrer"
							className="mt-4 inline-flex rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-xs font-medium text-foreground hover:bg-surface"
						>
							Open {item.label}
						</a>
					</article>
				))}
			</section>
		</article>
	);
};

export default Socials;
