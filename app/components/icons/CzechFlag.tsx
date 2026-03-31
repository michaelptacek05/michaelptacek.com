export function CzechFlag(props: React.ComponentProps<"svg">) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 9" {...props}>
            <rect width="12" height="9" fill="#d7141a"/>
            <rect width="12" height="4.5" fill="#fff"/>
            <path d="M 6,4.5 0,0 V 9 z" fill="#11457e"/>
        </svg>
    );
}