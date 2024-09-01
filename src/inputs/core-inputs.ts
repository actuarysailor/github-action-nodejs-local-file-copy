// Copyright (C) 2024 actuarysailor
// For license information, see https://github.com/actuarysailor/github-action-nodejs-local-file-copy/blob/main/LICENSE
import { getInput } from "@actions/core";

import { Inputs } from "./inputs";

export class CoreInputs implements Inputs {
  get sourceDirectory(): string {
    return getInput("source-directory", { required: true });
  }

  get destinationDirectory(): string {
    return getInput("destination-directory", { required: true });
  }

  get fileFilter(): string | undefined {
    return getInput("file-filter") || undefined;
  }

  get flattenDirectories(): boolean {
    const input = getInput("flatten-directories");
    return input ? input.toLowerCase() === "true" : false;
  }
}
