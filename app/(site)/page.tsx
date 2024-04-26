import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center py-12 sm:px-6 lg:px-8 bg-gray-100 min-h-screen">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Image
                    src="/logo-chat.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="mx-auto w-auto"
                />
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                    Đăng nhập tài khoản
                </h2>
            </div>
            <AuthForm />
        </div>
    );
}
