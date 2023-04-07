import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const data = await prisma.comment.findMany({
    where: {
      articleId: Number(params.id),
    },
  });

  return NextResponse.json(data);
}

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const { content } = await req.json();

  const comment = await prisma.comment.create({
    data: {
      userId: 1,
      articleId: Number(params.id),
      content,
    },
  });

  return NextResponse.json(comment);
}
