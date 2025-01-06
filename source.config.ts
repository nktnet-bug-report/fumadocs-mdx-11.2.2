import { SOME_VALUE } from '@/app/constants';
import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

console.log(SOME_VALUE);

export const { docs, meta } = defineDocs({
  dir: 'content/docs',
});

export default defineConfig();
