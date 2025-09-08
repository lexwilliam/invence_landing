import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
        const navbarHeight = 80; // Approximate navbar height in pixels
        const elementPosition = element.offsetTop - navbarHeight;

        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth',
        });
    }
}
