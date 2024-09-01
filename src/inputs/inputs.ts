// Copyright (C) 2024 actuarysailor
// For license information, see https://github.com/actuarysailor/github-action-nodejs-local-file-copy/blob/main/LICENSE
export interface Inputs {
  readonly sourceDirectory: string;
  readonly destinationDirectory: string;
  readonly fileFilter?: string;
  readonly flattenDirectories?: boolean;
}
