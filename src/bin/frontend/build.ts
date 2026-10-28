#!/usr/bin/env bun

import { buildSite } from "./site_build";
import { siteOrigin } from "./options";
import { logger } from "./../shared/logger";

const { build, seoNotes, shell } = await buildSite({ development: false, logger, origin: siteOrigin(), rootDir: process.cwd() });

for (const note of seoNotes) logger.warn("website.seo", note);
logger.success("website.build", `client_files=${build.client?.outputs.length ?? 0} route_shells=${shell.files.length}`);
