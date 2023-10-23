// Correct import statement
const { PrismaClient } = require('@prisma/client');

// Create a new instance of the PrismaClient
const prisma = new PrismaClient();

async function main() {
    try {
        // Use await to wait for the upsert operation to complete
        const user = await prisma.user.upsert({
            where: { email: 'test@test.nl' },
            update: {},
            create: {
                email: 'test@test.nl',
                name: 'jan jansen',
                password: 'test',
            }, // Removed the extra comma here
        });
        console.log(user);
    } catch (e) {
        console.error(e);
        process.exit(1);
    } finally {
        // Disconnect the PrismaClient after the operation is done
        await prisma.$disconnect();
    }
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
