import { createLog } from "@trebired/logger";
import { readProductIdentity } from "@trebired/utils";

const logger = createLog({
    console: {
      metadata: false,
      timestamp: false,
    },
    quiet: false,
    save: false,
    source: readProductIdentity().slug,
});

export { logger };
