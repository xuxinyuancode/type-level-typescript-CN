/** @type {import('next').NextConfig} */
import withMDX from '@next/mdx';
import mdxPrism from 'mdx-prism';
// import rehypeHighlight from 'rehype-highlight';

const MDX = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [mdxPrism],
    // If you use `MDXProvider`, uncomment the following line.
    providerImportSource: '@mdx-js/react',
  },
});

const config = MDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});
export default config;
