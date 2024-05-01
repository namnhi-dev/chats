import React from "react";
import Sidebar from "../components/ui/sidebar/Sidebar";
import getUsers from "../actions/getUsers";
import UserList from "./components/UserList";

const UserLayout = async ({ children }: { children: React.ReactNode }) => {
    const users = await getUsers();

    return (
        <Sidebar>
            <div className="h-full">
                <UserList users={users} />
                {children}
            </div>
        </Sidebar>
    );
};

export default UserLayout;
