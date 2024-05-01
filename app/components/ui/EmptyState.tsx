import React from "react";

const EmptyState = () => {
    return (
        <div className="px-4 py-10 sm:px-6 lg:px-8 h-full flex justify-center items-center bg-gray-100">
            <div className="flex flex-col items-center text-center ">
                <h3 className="mt-2 text-gray-900 font-light text-2xl">
                    Chọn một cuộc trò chuyện hoặc tạo một cuộc trò chuyện mới?
                </h3>
            </div>
        </div>
    );
};

export default EmptyState;
