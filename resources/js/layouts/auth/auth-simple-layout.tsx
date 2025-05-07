import { ReactNode } from 'react';

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: {
    children: ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
            <div className="w-full max-w-md bg-[#141212] p-8 rounded-2xl shadow-lg">
                <div className="text-center space-y-2">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <p className="text-sm text-gray-400">{description}</p>
                </div>
                <div className="mt-6">{children}</div>
            </div>
        </div>
    );
}
