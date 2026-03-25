export type SocialPlatform = "LinkedIn" | "Instagram" | "Facebook";

export interface SocialLink {
    platform: SocialPlatform;
    handle: string;
    url: string;
    description: string;
}

export const socialsData: ReadonlyArray<SocialLink> = [
    // CHANGE START: typed social data for Socials section
    {
        platform: "LinkedIn",
        handle: "@jude-anthone-duarte-750288326",
        url: "https://www.linkedin.com/in/jude-anthone-duarte-750288326/",
        description: "Professional updates, projects, and career milestones.",
    },
    {
        platform: "Instagram",
        handle: "@jardurf",
        url: "https://www.instagram.com/jardurf/",
        description: "Creative snapshots and personal side of my journey.",
    },
    {
        platform: "Facebook",
        handle: "Jude Anthone Duarte",
        url: "https://www.facebook.com/jude.anthone.duarte.2024",
        description: "Community connections and updates.",
    },
    // CHANGE END
];