// Copyright (C) 2024 actuarysailor
// For license information, see https://github.com/actuarysailor/github-action-nodejs-local-file-copy/blob/main/LICENSE
import { createMock } from "@/tests/utils/mock";

import { Logger } from "@/src/logger/logger";

export class LoggerMock implements Logger {
  private readonly mock = createMock<Logger>();

  debug(message: string): void {
    this.mock.debug(message);
  }

  info(message: string): void {
    this.mock.info(message);
  }

  error(message: string): void {
    this.mock.error(message);
  }

  assertInfoToHaveBeenCalledWith(message: string): void {
    expect(this.mock.info).toHaveBeenCalledWith(message);
  }
}
