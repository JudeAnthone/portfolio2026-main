/**
 * Left profile card:
 * - Mobile-first: regular block in page flow
 * - Desktop behavior (sticky) is controlled by parent container
 */
const StickyProfileCard = () => {
    return (
        <article className="rounded-2xl border border-border bg-surface/70 p-4 backdrop-blur-sm md:p-6">
            <div className="space-y-4">
                <div className="rounded-2xl border border-border bg-surface-2 p-4">
                    <img
                        src="/logo/logo.v4.png"
                        alt="JARD logo"
                        className="mx-auto h-24 w-24 rounded-2xl object-contain md:h-28 md:w-28"
                    />
                </div>

                <div className="space-y-2 text-center lg:text-left">
                    <h2 className="text-xl font-semibold text-foreground">JARD</h2>
                    <p className="text-sm text-muted">
                        Computer Science student building modern full-stack products.
                    </p>
                </div>
            </div>
        </article>
    );
};

export default StickyProfileCard;