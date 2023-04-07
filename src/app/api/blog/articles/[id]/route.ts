import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function GET(_req: Request, { params }: { params: { id: string } }) {

  const data = await prisma.article.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json(data);
}
