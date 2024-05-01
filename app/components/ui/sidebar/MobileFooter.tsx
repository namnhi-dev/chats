"use client";

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";

const MobileFooter = () => {
    const routes = useRoutes();
    const { isOpen } = useConversation();
    if (isOpen) {
        return null;
    }

    return (
        <div className="fixed flex justify-between items-center z-40 bottom-0 bg-white border-t-[1px] w-full lg:hidden">
            {routes.map((route) => (
                <MobileItem
                    key={route.href}
                    href={route.href}
                    icon={route.icon}
                    active={route.active}
                    onClick={route.onClick}
                />
            ))}
        </div>
    );
};

export default MobileFooter;
