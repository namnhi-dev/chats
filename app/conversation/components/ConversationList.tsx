"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LuUserPlus } from "react-icons/lu";

import { FullConversationType } from "@/app/types";
import useConversation from "@/app/hooks/useConversation";
import clsx from "clsx";
import ConversationBox from "./ConversationBox";

interface ConversationListProps {
    initialItem: FullConversationType[];
}

const ConversationList = ({ initialItem }: ConversationListProps) => {
    const [items, setItems] = useState(initialItem);

    const router = useRouter();

    const { conversationId, isOpen } = useConversation();

    return (
        <aside
            className={clsx(
                "fixed inset-y-0 pb-20 lg:pb-0 lg:left-20  lg:w-80 lg:block overflow-y-auto border-r border-gray-200",
                isOpen ? "hidden" : " block w-full left-0"
            )}
        >
            <div className="px-5">
                <div className="flex items-center justify-between mb-4 pt-4">
                    <div className="text-xl font-semibold text-neutral-800">
                        Tin nhắn
                    </div>
                    <div className="rounded-full p-2 bg-gray-100 text-gray-600 cursor-pointer hover:opacity-75 transition">
                        <LuUserPlus size={20} />
                    </div>
                </div>
                {items.map((item) => (
                    <ConversationBox
                        key={item.id}
                        data={item}
                        selected={conversationId === item.id}
                    />
                ))}
            </div>
        </aside>
    );
};

export default ConversationList;
