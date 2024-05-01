"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { User } from "@prisma/client";

interface AvatarProps {
    user?: User;
}

const Avatars = ({ user }: AvatarProps) => {
    return (
        <div className="flex ">
            <div className="relative">
                <Avatar className="cursor-pointer ">
                    <AvatarImage src={user?.image || "/avatar.jpg"} />
                </Avatar>
                <span className="absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0 h-2 w-2 md:h-3 md:w-3" />
            </div>
        </div>
    );
};

export default Avatars;
