import { ContentContainer } from "./ContentContainer";
import Image from "next/image";

export default function Hero() {
    return (
        <div>
            <ContentContainer> 
                <Image
                    className="mb-5 size-16 rounded-full mask-auto  "
                    src="/avatar.jpeg"
                    alt="Andrei Hudovich"
                    width={64}
                    height={64}
                    loading="eager"
                />
                <h1 className="font-sans text-xl font-semibold text-foreground xs:text-2xl mb-4">Hey, I'm <span className="border-b-[0.09375rem] border-primary">Michael Ptáček</span>!</h1>
            </ContentContainer>
        </div>
    );
}
