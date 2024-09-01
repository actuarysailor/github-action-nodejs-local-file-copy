// Copyright (C) 2024 actuarysailor
// For license information, see https://github.com/actuarysailor/github-action-nodejs-local-file-copy/blob/main/LICENSE
import { setOutput } from "@actions/core";

import { Outputs } from "./outputs";

export class CoreOutputs implements Outputs {
  save(name: string, value: unknown): void {
    setOutput(name, value);
  }
}
