"use client";
import { signOut } from "next-auth/react";
import React from "react";
import EmptyState from "../components/ui/EmptyState";

const UsersPage = () => {
    return (
        <div className="hidden lg:block lg:pl-80 h-full">
            <EmptyState />
        </div>
    );
};

export default UsersPage;
