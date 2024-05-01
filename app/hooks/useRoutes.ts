import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { PiChatCircleDotsLight } from "react-icons/pi";
import { HiArrowSmLeft } from "react-icons/hi";
import { CiUser, CiLogout } from "react-icons/ci";
import { signOut } from "next-auth/react";

import useConversation from "./useConversation";

const useRoutes = () => {
    const pathname = usePathname();
    const { conversationId } = useConversation();

    const routes = useMemo(
        () => [
            {
                label: "Chat",
                href: "/conversation",
                icon: PiChatCircleDotsLight,
                active: pathname === "/conversation" || !!conversationId,
            },
            {
                label: "Users",
                href: "/users",
                icon: CiUser,
                active: pathname === "/users",
            },
            {
                label: "Logout",
                href: "#",
                onClick: () => signOut(),
                icon: CiLogout,
            },
        ],
        [pathname, conversationId]
    );

    return routes;
};

export default useRoutes;
