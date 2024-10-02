'use client';

import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import Image from 'next/image';
import { assets } from './assets';
import { Navbar } from '@/components/ui/navbar';
import FeaturesSection from '@/components/blocks/features-section';
import { PlanCards } from '@/components/ui/plan_cards';
import { ContactUsFooter } from '@/components/ui/contact_us_footer';

export default function Home() {
    return (
        <div className="relative w-full flex flex-col items-center justify-center">
            <Navbar className="shadow-lg rounded-full" />
            <ContainerScroll
                titleComponent={
                    <h1 className="text-2xl sm:text-4xl font-semibold text-black dark:text-white">
                        Ease your business with our <br />
                        <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                            Inventory Management
                        </span>
                    </h1>
                }>
                <Image
                    src={assets.invence}
                    alt="hero"
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover h-full object-left-top"
                    draggable={false}
                />
            </ContainerScroll>
            <FeaturesSection />
            <PlanCards />
            <ContactUsFooter />
        </div>
    );
}
