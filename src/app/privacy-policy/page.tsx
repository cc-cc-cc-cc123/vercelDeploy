import { readFileSync } from 'fs';
import { join } from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import React from 'react';

export default async function TermsPage() {
  const source = readFileSync(join(process.cwd(), 'content', 'terms-us.mdx'), 'utf-8');

  const { content } = await compileMDX({
    source,
    options: {
      parseFrontmatter: true,
    },
  });

  return <article className="container mx-auto px-4 py-8 prose max-w-7xl prose-slate">{content}</article>;
}
