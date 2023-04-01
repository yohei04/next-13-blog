import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

import type { NextApiRequest } from 'next';

export async function GET(_req: NextApiRequest) {
  const data = await prisma.article.findMany({
    where: {
      published: true,
      // Like: {
      //   some: {
      //     userId: 1,
      //   },
      // },
    },
    // include: {
    //   tags: true,
    // },
  });

  return NextResponse.json(data);
}
