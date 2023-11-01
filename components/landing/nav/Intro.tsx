import { PageTitle, SubTitle } from "@/components/core/Typography";
import SwappingWords from "@/components/effects/SwappingWords";

export default function Intro() {
    return (
        <header className="flex flex-col gap-2 px-8 text-center justify-center">
            <PageTitle>This is a Page Title</PageTitle>
            <SubTitle>
                <SwappingWords
                    words={[
                        'Frontend developer!',
                        'Divjesschuiver',
                        'Aspiring fullstacks',
                        'Decent guy',
                    ]}
                    interval={2000} />            </SubTitle>
        </header>
    )
}