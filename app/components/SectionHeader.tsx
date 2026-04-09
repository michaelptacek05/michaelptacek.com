export function SectionHeader({
    heading,
    text,
}: {
    heading: string;
    text?: string;
}) {
    return (
        <div className={text ? "mb-6" : "mb-2"}> 
            <h2 className="font-sans font-medium text-xs text-muted-foreground uppercase">
                {heading}
            </h2>
            {text && (
                <p className="mt-2 font-mono text-md text-gray-600 dark:text-gray-300">
                    {text}
                </p>
            )}
        </div>
    );
}