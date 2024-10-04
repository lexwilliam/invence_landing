import { cn } from '@/lib/utils';
import { useState } from 'react';
import { MenuItem, HoveredLink, Menu } from './navbar-menu';
import { assets } from '@/app/assets';
import {
    ArchiveIcon,
    ChartNoAxesCombinedIcon,
    CircleUserIcon,
    MenuIcon,
    NewspaperIcon,
    PlayIcon,
    ShoppingCartIcon,
    StoreIcon,
} from 'lucide-react';
import Link from 'next/link';

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
                        <MenuItem
                            setActive={setActive}
                            active={active}
                            item="Features">
                            <div className="flex flex-col gap-4 text-sm">
                                <HoveredLink href="/features/inventory">
                                    <div className="flex flex-row items-center gap-4">
                                        <ArchiveIcon />
                                        <span>Inventory Management</span>
                                    </div>
                                </HoveredLink>
                                <HoveredLink href="/features/ordering">
                                    <div className="flex flex-row items-center gap-4">
                                        <ShoppingCartIcon />
                                        <span>Ordering & Sales</span>
                                    </div>
                                </HoveredLink>
                                <HoveredLink
                                    href="/features/analytics"
                                    className="flex flex-row items-center">
                                    <div className="flex flex-row items-center gap-4">
                                        <ChartNoAxesCombinedIcon />
                                        <span>Analytics</span>
                                    </div>
                                </HoveredLink>
                            </div>
                        </MenuItem>
                        <MenuItem
                            setActive={setActive}
                            active={active}
                            item="Solution">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink
                                    href="/solution/online-shop"
                                    className="flex flex-row items-center">
                                    <div className="flex flex-row items-center gap-4">
                                        <ShoppingCartIcon />
                                        <span>Online Shop</span>
                                    </div>
                                </HoveredLink>
                                <HoveredLink
                                    href="/solution/"
                                    className="flex flex-row items-center">
                                    <div className="flex flex-row items-center gap-4">
                                        <StoreIcon />
                                        <span>Retail</span>
                                    </div>
                                </HoveredLink>
                            </div>
                        </MenuItem>
                        <MenuItem
                            setActive={setActive}
                            active={active}
                            item="Resources">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink
                                    href="/blog"
                                    className="flex flex-row items-center">
                                    <div className="flex flex-row items-center gap-4">
                                        <NewspaperIcon />
                                        <span>Blog</span>
                                    </div>
                                </HoveredLink>
                                <HoveredLink
                                    href="/guides"
                                    className="flex flex-row items-center">
                                    <div className="flex flex-row items-center gap-4">
                                        <PlayIcon />
                                        <span>Guides</span>
                                    </div>
                                </HoveredLink>
                                <HoveredLink
                                    href="/about-us"
                                    className="flex flex-row items-center">
                                    <div className="flex flex-row items-center gap-4">
                                        <CircleUserIcon />
                                        <span>About us</span>
                                    </div>
                                </HoveredLink>
                            </div>
                        </MenuItem>
                        <Link href={'/pricing'}>Pricing</Link>
                    </div>
                </div>
                <div className="hidden sm:block my-auto">
                    <div className="flex items-center w-20">
                        <MenuItem
                            setActive={setActive}
                            active={active}
                            item="Install now">
                            <div className="flex flex-col space-y-4 text-sm">
                                <HoveredLink
                                    href="/"
                                    className="flex flex-row items-center">
                                    <div className="flex flex-row items-center gap-4">
                                        <img
                                            src={assets.androidLogo}
                                            className="w-6 h-6"
                                        />
                                        <span>Android</span>
                                    </div>
                                </HoveredLink>
                                <HoveredLink
                                    href="/"
                                    className="flex flex-row items-center">
                                    <div className="flex flex-row items-center gap-4">
                                        <img
                                            src={assets.iosLogo}
                                            className="w-6 h-6 object-contain"
                                        />
                                        <span>IOS (Coming soon)</span>
                                    </div>
                                </HoveredLink>
                            </div>
                        </MenuItem>
                    </div>
                </div>
                <div className="flex items-center sm:hidden">
                    <MenuIcon className="block sm:hidden w-6 h-6" />
                </div>
            </Menu>
        </div>
    );
}
