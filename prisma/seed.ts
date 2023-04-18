import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const users = [
    {id: 1, name: 'Anne Banane', username: 'annie.bananie', imageName: 'image-anne'},
    {id: 2, name: 'Elijah Moss', username: 'hexagon.bestagon', imageName: 'image-elijah'},
    {id: 3, name: 'George Partridge', username: 'soccerviewer8', imageName: 'image-george'},
    {id: 4, name: 'Suzanne Chang', username: 'upbeat1811', imageName: 'image-suzanne'},
    {id: 5, name: 'Thomas Hood', username: 'brawnybrave', imageName: 'image-thomas'},
    {id: 6, name: 'Zena Kelley', username: 'velvetround', imageName: 'image-zena'},
    
];

async function main() {
    for (const user of users) {
        await prisma.user.upsert({
            where: { id: user.id },
            update: {},
            create: {
                id: user.id,
                name: user.name,
                username: user.username,
                imageName: user.imageName,
            },
        });
    }
}

main()
    .then(async () => {
        console.log('Seeding complete');
        await prisma.$disconnect();
    }).catch(async (e) => {
        console.error(e);
        await prisma.$disconnect(); 
        process.exit(1);
    });
