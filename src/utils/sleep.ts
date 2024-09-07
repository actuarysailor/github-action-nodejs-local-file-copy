// Copyright (C) 2024 actuarysailor
// For license information, see https://github.com/actuarysailor/github-action-nodejs-local-file-copy/blob/main/LICENSE
export const sleep = (milliseconds: number) => {
  return new Promise<void>(resolve => {
    setTimeout(() => resolve(), milliseconds);
  });
};
