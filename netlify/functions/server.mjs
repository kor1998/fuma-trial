import { createRequestHandler } from "@react-router/node";

let handler;

export default async (req, context) => {
  if (!handler) {
    const build = await import("../../build/server/index.js");
    handler = createRequestHandler(build, process.env.NODE_ENV ?? "production");
  }
  return handler(req);
};

export const config = { path: "/*" };
