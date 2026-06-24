"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoCheckmarkOutline } from "react-icons/io5";

export function CopyEmailButton() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        await navigator.clipboard.writeText("mptacek005@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Button className="font-mono" onClick={handleCopy}>
            {copied ? <IoCheckmarkOutline /> : <HiOutlineMailOpen />}
            {copied ? "Copied!" : "Contact me"}
        </Button>
    );
}
