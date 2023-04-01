import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';
import { Article } from '@prisma/client';

import type { NextApiRequest, NextApiResponse } from 'next';

export type ArticleWithTags = Article & {
  // tags: Tag[];
};

export async function GET(_req: NextApiRequest) {
  const articles = await prisma.article.findMany({
    where: {
      published: true,
    },
    // include: {
    //   tags: true,
    // },
  });

  return NextResponse.json(articles);
}
