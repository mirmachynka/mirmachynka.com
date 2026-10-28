const BRANCH = "main";
const TIMEOUT = 15000;

type BrandTone = "dark" | "light";

type BrandLogoOptions = { dir: string; kind: string; org: string; repo: string; tone: BrandTone };

type BrandManifest = { logos?: Record<string, Partial<Record<BrandTone, string>>> };

function fileUrl(options: BrandLogoOptions, file: string): string {
  return `https://raw.githubusercontent.com/${options.org}/${options.repo}/${BRANCH}/${options.dir}/${file}`;
}

async function readText(options: BrandLogoOptions, file: string): Promise<string> {
  const response = await fetch(fileUrl(options, file), { signal: AbortSignal.timeout(TIMEOUT) });
  if (!response.ok) throw new Error(`${options.dir}/${file} answered ${response.status}`);
  return response.text();
}

async function readLogo(options: BrandLogoOptions) {
  const manifest = JSON.parse(await readText(options, "brand.json")) as BrandManifest;
  const file = manifest.logos?.[options.kind]?.[options.tone];
  if (!file) throw new Error(`${options.dir}/brand.json names no ${options.kind} logo for ${options.tone} surfaces`);
  return { detail: `the ${options.kind} logo from ${options.org}/${options.repo}`, value: { svg: await readText(options, file) } };
}

export function brandLogoSource(options: BrandLogoOptions) {
  return { fetch: () => readLogo(options) };
}
