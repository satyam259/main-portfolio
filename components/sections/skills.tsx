"use client";

import { IconCloud } from "../animations";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "linux",
  "postgresql",
  "vercel",
  "supabase",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "mongodb",
  "python"
];

export function Skills() {
  return (
    <div className="my-30 py-10 ">
      <h1 className="heading">
        Skills &amp; <span className="text-purple">Technologies</span>
      </h1>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
