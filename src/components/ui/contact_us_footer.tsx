import { assets } from '@/app/assets';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { Card, CardDescription, CardHeader, CardTitle } from './card';
import {
    EnvelopeClosedIcon,
    InstagramLogoIcon,
    TwitterLogoIcon,
} from '@radix-ui/react-icons';

export function ContactUsFooter() {
    return (
        <div className="flex flex-col w-screen">
            <div className="flex flex-col  bg-secondary py-16 px-10 gap-10">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label>Get the latest news from us</Label>
                    <div className="flex w-full max-w-sm items-center space-x-2">
                        <Input placeholder="Email" />
                        <Button className="bg-primary" type="submit">
                            Subscribe
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
                    <Card>
                        <CardHeader className="gap-4">
                            <div className="flex flex-row gap-4 items-center">
                                <img
                                    src={assets.invenceLogo}
                                    className="w-16 h-16 rounded-lg"
                                />
                                <CardTitle>Invence</CardTitle>
                            </div>
                            <CardTitle>
                                We make managing inventory as <br /> easy as
                                possible
                            </CardTitle>
                            <CardDescription>Invence, 2024</CardDescription>
                        </CardHeader>
                    </Card>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                        <div className="flex flex-col gap-4">
                            <span className="font-bold">Contact us</span>
                            <div className="flex items-center gap-2">
                                <EnvelopeClosedIcon className="w-6 h-6" />
                                <span>invence@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <TwitterLogoIcon className="w-6 h-6" />
                                <span>@invence_app</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <InstagramLogoIcon className="w-6 h-6" />
                                <span>Invence</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <span className="font-bold">Legal</span>
                            <span>Terms of Service</span>
                            <span>Privacy Policy</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-10 py-4 w-full bg-primary">
                <span className="text-white">
                    © 2024 Invence. All rights reserved.
                </span>
            </div>
        </div>
    );
}
