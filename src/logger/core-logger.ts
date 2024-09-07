// Copyright (C) 2024 actuarysailor
// For license information, see https://github.com/actuarysailor/github-action-nodejs-local-file-copy/blob/main/LICENSE
import { debug, error, info } from "@actions/core";

import { Logger } from "./logger";

export class CoreLogger implements Logger {
  debug(message: string): void {
    debug(message);
  }

  info(message: string): void {
    info(message);
  }

  error(message: string): void {
    error(message);
  }
}
