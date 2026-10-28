import { createLog } from "@trebired/logger";

const building = Bun.main.endsWith("/frontend/build.ts");

export const logger = createLog({
    console: { metadata: !building, timestamp: false },
    quiet: building,
    save: false,
    source: "mirmachynka-com",
});
