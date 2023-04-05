import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

import type { NextApiRequest } from 'next';

export async function GET(_req: NextApiRequest, { params }: { params: { userId: string } }) {
  const data = await prisma.user.findUnique({
    where: {
      id: Number(params.userId),
    },
  });

  return NextResponse.json(data);
}
