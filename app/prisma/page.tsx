import { prisma } from "@/lib/prisma";

export default async function Home() {
    const user = await prisma.user.findFirst({
        where: {
            id: 1,
        },
    });

    return (
        <>
            <h2>hello, {user?.name}</h2>
        </>
    )
}