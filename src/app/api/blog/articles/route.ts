import { NextResponse } from 'next/server';

import prisma from '@/lib/prisma';
import { Article, Tag } from '@prisma/client';

export type ArticleWithTags = Article & {
  tags: Tag[];
};

export async function GET() {
  const articles = await prisma.article.findMany({
    where: {
      published: true,
    },
    include: {
      tags: true,
    },
  });

  return NextResponse.json(articles);
}
