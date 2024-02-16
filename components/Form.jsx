'use client';

import { ArrowRightIcon, MailIcon, MessageSquare, User } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const Form = () => {
    return (
        <form className="flex flex-col gap-y-4">
            {/* input */}
            <div className="relative flex items-center">
                <Input type="name" id="name" placeholder="Name" />
                <User className="absolute right-6" size={20} />
            </div>
            {/* input */}
            <div className="relative flex items-center">
                <Input type="email" id="email" placeholder="Email" />
                <MailIcon className="absolute right-6" size={20} />
            </div>
            {/* textarea */}
            <div className="relative flex items-center">
                <Textarea placeholder="Type Your Message Here" />
                <MessageSquare className="absolute top-4 right-6" size={20} />
            </div>
            <Button className="flex items-center gap-x-1 max-w-[166px]">
                Let's Talk
                <ArrowRightIcon size={20} />
            </Button>
        </form>
    );
}
 
export default Form
