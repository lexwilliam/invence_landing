import { cn, scrollToSection } from '@/lib/utils';
import { useState } from 'react';
import { MenuItem, HoveredLink, Menu } from './navbar-menu';
import { assets } from '@/app/assets';
import Image from 'next/image';
import { span } from 'framer-motion/client';
import { DownloadIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import { Button } from './button';

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn(
                'fixed top-10 inset-x-0 mx-4 sm:mx-8 lg:mx-16 z-50',
                className,
            )}>
            <Menu setActive={setActive}>
                <div className="flex flex-row gap-4 items-center w-20">
                    <img
                        className="w-10 h-10 rounded-lg"
                        src={assets.invenceLogo}
                        alt="invence logo"
                    />
                    <span className="text-lg font-bold">Invence</span>
                </div>
                <div className="hidden sm:block my-auto">
                    <div className="flex flex-row gap-8 items-center">
                        <button
                            onClick={() => scrollToSection('features')}
                            className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white transition-opacity">
                            Features
                        </button>
                        <button
                            onClick={() => scrollToSection('pricing')}
                            className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white transition-opacity">
                            Pricing
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white transition-opacity">
                            Contact
                        </button>
                    </div>
                </div>
                <div className="hidden sm:block my-auto">
                    <div className="flex items-center w-16">
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="flex flex-row gap-4 items-center cursor-pointer text-black hover:opacity-[0.9] dark:text-white transition-opacity">
                            <span>Install</span>
                            <DownloadIcon />
                        </button>
                    </div>
                </div>
                <div className="flex items-center sm:hidden">
                    <MenuIcon className="block sm:hidden w-6 h-6" />
                </div>
            </Menu>
        </div>
    );
}
