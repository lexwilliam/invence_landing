import { cn } from '@/lib/utils';
import { useState } from 'react';
import { MenuItem, HoveredLink, ProductItem, Menu } from './navbar-menu';
import { assets } from '@/app/assets';
import Image from 'next/image';
import { span } from 'framer-motion/client';
import { DownloadIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn(
                'fixed top-10 inset-x-0 mx-4 sm:mx-8 lg:mx-16 z-50',
                className,
            )}>
            <Menu setActive={setActive}>
                <div className="flex flex-row gap-4 items-center w-16">
                    <img
                        className="w-10 h-10 rounded-lg"
                        src={assets.invenceLogo}
                        alt="invence logo"
                    />
                    <span className="text-lg font-bold">Invence</span>
                </div>
                <div className="hidden sm:block my-auto">
                    <div className="flex flex-row gap-8 items-center">
                        <MenuItem
                            setActive={setActive}
                            active={active}
                            item="Services">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/web-dev">
                                    Web Development
                                </HoveredLink>
                                <HoveredLink href="/interface-design">
                                    Interface Design
                                </HoveredLink>
                                <HoveredLink href="/seo">
                                    Search Engine Optimization
                                </HoveredLink>
                                <HoveredLink href="/branding">
                                    Branding
                                </HoveredLink>
                            </div>
                        </MenuItem>
                        <MenuItem
                            setActive={setActive}
                            active={active}
                            item="Products">
                            <div className="  text-sm grid grid-cols-2 gap-10 p-4"></div>
                        </MenuItem>
                        <MenuItem
                            setActive={setActive}
                            active={active}
                            item="Pricing">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink href="/hobby">Hobby</HoveredLink>
                                <HoveredLink href="/individual">
                                    Individual
                                </HoveredLink>
                                <HoveredLink href="/team">Team</HoveredLink>
                                <HoveredLink href="/enterprise">
                                    Enterprise
                                </HoveredLink>
                            </div>
                        </MenuItem>
                    </div>
                </div>
                <div className="hidden sm:block my-auto">
                    <div className="flex items-center w-16">
                        <MenuItem
                            setActive={setActive}
                            active={active}
                            item="Install"
                            itemChildren={
                                <div className="flex flex-row gap-4 items-center">
                                    <span>Install</span>
                                    <DownloadIcon />
                                </div>
                            }></MenuItem>
                    </div>
                </div>
                <div className="flex items-center sm:hidden">
                    <HamburgerMenuIcon className="block sm:hidden w-6 h-6" />
                </div>
            </Menu>
        </div>
    );
}
