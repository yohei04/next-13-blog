import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function GET(_req: Request, { params }: { params: { userId: string } }) {
  const data = await prisma.user.findUnique({
    where: {
      id: Number(params.userId),
    },
  });

  return NextResponse.json(data);
}
