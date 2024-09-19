import Bash from "./Bash";
import Docker from "./Docker";
import Git from "./Git";
import GitHub from "./GitHub";
import JavaScript from "./JavaScript";
import Liquid from "./Liquid";
import Markdown from "./Markdown";
import MongoDB from "./MongoDB";
import NestJS from "./NestJS";
import Nextjs from "./Nextjs";
import Nodejs from "./Nodejs";
import PostgreSQL from "./PostgreSQL";
import Prisma from "./Prisma";
import Railway from "./Railway";
import React from "./React";
import Remix from "./Remix";
import Spotify from "./Spotify";
import TailwindCSS from "./TailwindCSS";
import TypeScript from "./TypeScript";
import Umami from "./Umami";
import Vercel from "./Vercel";
import X from "./X";

export type BrandType =
  | typeof Bash
  | typeof Docker
  | typeof Git
  | typeof GitHub
  | typeof JavaScript
  | typeof Liquid
  | typeof Markdown
  | typeof MongoDB
  | typeof NestJS
  | typeof Nextjs
  | typeof Nodejs
  | typeof PostgreSQL
  | typeof Prisma
  | typeof Railway
  | typeof React
  | typeof Remix
  | typeof Spotify
  | typeof TailwindCSS
  | typeof TypeScript
  | typeof Umami
  | typeof Vercel
  | typeof X;

const Brand = {
  Bash,
  Docker,
  Git,
  GitHub,
  JavaScript,
  Liquid,
  Markdown,
  MongoDB,
  NestJS,
  Nextjs,
  Nodejs,
  PostgreSQL,
  Prisma,
  Railway,
  React,
  Remix,
  Spotify,
  TailwindCSS,
  TypeScript,
  Umami,
  Vercel,
  X,
};

export default Brand;
