# Fumadocs MDX v11.2.2 - Regression error from v11.2.1

This repository was made using the command
```sh
pnpm create fumadocs-app
```
with all default settings.

The only change made was creating the file [./app/constants.ts](./app/constants.ts) with the following content:

```ts
export const SOME_VALUE = 'helloworld';
```

then attempting to import it in [./source.config.ts](./source.config.ts):
```ts
import { SOME_VALUE } from '@/app/constants'; // added this
import { defineDocs, defineConfig } from 'fumadocs-mdx/config';

console.log(SOME_VALUE); // added this

export const { docs, meta } = defineDocs({
  dir: 'content/docs',
});

export default defineConfig();
```

## Instructions

Observe that the following works on fumadocs-mdx@11.2.1

```sh
pnpm i
```

Update to fumadocs-mdx@11.2.2 and reinstall, then observe the error:

```
pnpm i fumadocs-mdx@11.2.2
pnpm i
```

Example error output:
```
$ pnpm i fumadocs-mdx@11.2.2

 WARN  deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.
 WARN  5 deprecated subdependencies found: @humanwhocodes/config-array@0.13.0, @humanwhocodes/object-schema@2.0.3, glob@7.2.3, inflight@1.0.6, rimraf@3.0.2
Packages: +2
++
Progress: resolved 617, reused 595, downloaded 0, added 0, done

dependencies:
- fumadocs-mdx 11.2.1
+ fumadocs-mdx 11.2.2

Done in 1.4s
fumadocs-mdx-11.2.2-error(main)$ pnpm i

Lockfile is up to date, resolution step is skipped
Already up to date

> fumadocs-mdx-11.2.2-error@0.0.0 postinstall /home/nktnet/.temp/fumadocs-mdx-11.2.2-error
> fumadocs-mdx

file:///home/nktnet/.temp/fumadocs-mdx-11.2.2-error/node_modules/.pnpm/fumadocs-mdx@11.2.2_acorn@8.14.0_fumadocs-core@14.7.0_@types+react@19.0.3_next@15.1.3_react-d_peytjl25ixtkepqlqnvgc545oq/node_modules/fumadocs-mdx/dist/chunk-2KEQHW7J.js:21
    throw new Error("failed to compile configuration file", e);
          ^

Error: failed to compile configuration file
    at file:///home/nktnet/.temp/fumadocs-mdx-11.2.2-error/node_modules/.pnpm/fumadocs-mdx@11.2.2_acorn@8.14.0_fumadocs-core@14.7.0_@types+react@19.0.3_next@15.1.3_react-d_peytjl25ixtkepqlqnvgc545oq/node_modules/fumadocs-mdx/dist/chunk-2KEQHW7J.js:21:11
    at async loadConfig (file:///home/nktnet/.temp/fumadocs-mdx-11.2.2-error/node_modules/.pnpm/fumadocs-mdx@11.2.2_acorn@8.14.0_fumadocs-core@14.7.0_@types+react@19.0.3_next@15.1.3_react-d_peytjl25ixtkepqlqnvgc545oq/node_modules/fumadocs-mdx/dist/chunk-2KEQHW7J.js:20:20)
    at async postInstall (file:///home/nktnet/.temp/fumadocs-mdx-11.2.2-error/node_modules/.pnpm/fumadocs-mdx@11.2.2_acorn@8.14.0_fumadocs-core@14.7.0_@types+react@19.0.3_next@15.1.3_react-d_peytjl25ixtkepqlqnvgc545oq/node_modules/fumadocs-mdx/dist/next/index.js:260:18)

Node.js v22.12.0
```
