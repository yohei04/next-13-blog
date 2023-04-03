import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

import type { NextApiRequest } from 'next';

export async function GET(_req: NextApiRequest, { params }: { params: { id: string } }) {
  const data = await prisma.comment.findMany({
    where: {
      articleId: Number(params.id),
    },
  });

  return NextResponse.json(data);
}
