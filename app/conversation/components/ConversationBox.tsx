"use client";

import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { Conversation, Message, User } from "@prisma/client";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import { FullConversationType } from "@/app/types";

interface ConversationBoxProps {
    data: FullConversationType;
    selected?: boolean;
}

const ConversationBox = ({ data, selected }: ConversationBoxProps) => {
    return <div>ConversationBox</div>;
};

export default ConversationBox;
