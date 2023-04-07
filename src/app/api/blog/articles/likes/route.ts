import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function GET(_req: Request) {
  const data = await prisma.article.findMany({
    where: {
      published: true,
      Like: {
        some: {
          userId: 1,
        },
      },
    },
    include: {
      tags: true,
    },
  });

  return NextResponse.json(data);
}
