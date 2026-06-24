import { ContentContainer } from "../../ContentContainer";
import Image from "next/image";
import { CzechFlag } from "../../icons/CzechFlag";
import { cn } from "../../../lib/utils";
import { Button } from "@/components/ui/button";
import { IoDocumentTextOutline } from "react-icons/io5";
import { CopyEmailButton } from "../../CopyEmailButton";




export default function Hero() {
    return (
        <section>
            <ContentContainer> 
                <Image
                    className="mb-5 size-16 rounded-full mask-auto  "
                    src="/avatar.jpeg"
                    alt="Michael Ptáček"
                    width={64}
                    height={64}
                    loading="eager"
                />
                <h1 className="font-mono text-2xl font-semibold text-foreground xs:text-2xl mb-4">Hey, I'm <span className="border-b-2 border-primary">Michael</span>!</h1>
                <div className="mb-5 space-y-3 leading-relaxed text-pretty text-foreground sm:space-y-2">
                    <p className="font-mono">
                        A software engineer based in Prague, Czechia
                        <CzechFlag
                            className={cn(
                            'ml-2 inline-block h-2.25 w-3 shrink-0 -translate-y-0.5 rounded-xs',
                            'drop-shadow-[0_0_1px_rgba(0,0,0,0.1)]'
                            )}
                        />
                    </p>
                </div>
                <p className="font-mono">
                    I build fast, accessible web products — from UI design in Figma to deployment on my own VPS.
                </p>
                <div className="flex pt-5 gap-4">
                    <CopyEmailButton />
                    <Button className="font-mono" variant="secondary" asChild>
                        <a href="/api/cv" target="_blank" rel="noopener noreferrer">
                            <IoDocumentTextOutline />
                            Show CV
                        </a>
                    </Button>
                </div>
                
            </ContentContainer>
        </section>
    );
}
