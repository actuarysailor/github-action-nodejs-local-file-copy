// Copyright (C) 2024 actuarysailor
// For license information, see https://github.com/actuarysailor/github-action-nodejs-local-file-copy/blob/main/LICENSE
import * as core from "@actions/core";

import { buildAction } from "./build-action";
import { CoreInputs } from "./inputs/core-inputs";

const run = async () => {
  try {
    const action = buildAction();
    const inputs = new CoreInputs();
    await action.run(inputs);
  } catch (error: unknown) {
    if (error instanceof Error || typeof error === "string") {
      core.setFailed(error);
    } else {
      core.setFailed(
        "Unexpected error happened when running github-action-nodejs-template",
      );
    }
  }
};

void run();
