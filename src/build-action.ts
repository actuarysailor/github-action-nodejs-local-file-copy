// Copyright (C) 2024 actuarysailor
// For license information, see https://github.com/actuarysailor/github-action-nodejs-local-file-copy/blob/main/LICENSE
import { Action } from "./action";
import { CoreLogger } from "./logger/core-logger";
import { CoreOutputs } from "./outputs/core-outputs";

export const buildAction = (): Action => {
  const logger = new CoreLogger();
  const outputs = new CoreOutputs();

  return new Action({
    logger,
    outputs,
  });
};
