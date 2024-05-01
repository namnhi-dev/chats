"use client";
import { User } from "@prisma/client";
import React from "react";
import { UserBox } from "./UserBox";

interface UserListProps {
    users: User[];
}

const UserList = ({ users }: UserListProps) => {
    return (
        <aside className="fixed inset-y-0 pb-20 lg:left-20 lg:w-80 lg:block overflow-y-auto border-r border-gray-200 block w-full left-0">
            <div className="px-5">
                <div className="flex-col">
                    <div className="text-xl font-bold text-neutral-800 py-4">
                        Đoạn chat
                    </div>
                </div>
                {users.map((user) => (
                    <UserBox key={user.id} data={user} />
                ))}
            </div>
        </aside>
    );
};

export default UserList;
