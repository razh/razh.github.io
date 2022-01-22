import { MDXProvider } from '@mdx-js/react';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <article className="mx-auto antialiased prose prose-invert lg:prose-xl">
      <MDXProvider components={{}}>{children}</MDXProvider>
    </article>
  );
}
