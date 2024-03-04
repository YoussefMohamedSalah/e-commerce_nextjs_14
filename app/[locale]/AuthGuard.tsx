import { loginIsRequiredServer } from "@/lib/auth";

interface Props {
    children: React.ReactNode;
};

export default async function AuthGuard({
    children,
}: Props) {
	await loginIsRequiredServer();

    return (
        <>
            {children}
        </>
    );
}