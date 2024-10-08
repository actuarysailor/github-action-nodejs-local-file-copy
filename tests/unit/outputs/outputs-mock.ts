// Copyright (C) 2024 actuarysailor
// For license information, see https://github.com/actuarysailor/github-action-nodejs-local-file-copy/blob/main/LICENSE
import { Outputs } from "@/src/outputs/outputs";

export class OutputsMock implements Outputs {
  private outputs: { [key: string]: string } = {};

  save(key: string, value: string) {
    this.outputs[key] = value;
  }

  getSavedOutput(key: string): string {
    return this.outputs[key];
  }
}
