const rehypeAutolinkHeadings = require('rehype-autolink-headings');
const rehypePrettyCode = require('rehype-pretty-code');
const rehypeSlug = require('rehype-slug');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
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
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
});

module.exports = nextConfig;
