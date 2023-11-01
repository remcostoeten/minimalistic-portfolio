import db from '@/lib/db';
import { faker } from '@faker-js/faker';
import { revalidatePath } from 'next/cache';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react';

export default async function Home() {
  const posts = await db.post.findMany({ orderBy: { createdAt: 'desc' } });

  const generatePosts = async () => {
    'use server';

    await db.post.createMany({
      data: [
        { content: faker.lorem.sentence() },
        { content: faker.lorem.sentence() },
        { content: faker.lorem.sentence() },
      ],
    });
    revalidatePath('/');
  };

  return (
    <main className="flex min-h-screen flex-col items-start p-24">
      <form action={generatePosts}>
        <button className="bg-black text-white p-5 mb-5 rounded-lg">
          Generate Posts
        </button>
      </form>

      {posts.map((post: { id: Key | null | undefined; content: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) => (
        <div key={post.id} className="bg-white mb-3 px-5 py-3 rounded-md">
          {post.content}
        </div>
      ))}
    </main>
  );
}