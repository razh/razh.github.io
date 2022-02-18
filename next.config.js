module.exports = async () => {
  const rehypeAutolinkHeadings = await import('rehype-autolink-headings');
  const rehypeSlug = await import('rehype-slug');
  const { default: rehypePrettyCode } = await import('rehype-pretty-code');
  const { default: remarkGfm } = await import('remark-gfm');

  const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeAutolinkHeadings,
        [
          rehypePrettyCode,
          {
            theme: 'one-dark-pro',
            onVisitHighlightedLine(node) {
              node.properties.className.push('highlighted');
            },
            onVisitHighlightedWord(node) {
              node.properties.className = ['word'];
            },
          },
        ],
      ],
      providerImportSource: '@mdx-js/react',
    },
  });

  /** @type {import('next').NextConfig} */
  const nextConfig = withMDX({
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  });

  return nextConfig;
};
