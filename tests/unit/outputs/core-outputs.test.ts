// Copyright (C) 2024 actuarysailor
// For license information, see https://github.com/actuarysailor/github-action-nodejs-local-file-copy/blob/main/LICENSE
import * as core from "@actions/core";
import { vi } from "vitest";

import { CoreOutputs } from "@/src/outputs/core-outputs";

vi.mock("@actions/core", () => ({
  setOutput: vi.fn(),
}));

describe("CoreOutputs", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should set the output value correctly", () => {
    const expectedName = "outputName";
    const expectedValue = "outputValue";

    const outputs = new CoreOutputs();
    outputs.save(expectedName, expectedValue);

    expect(core.setOutput).toHaveBeenCalledWith(expectedName, expectedValue);
  });
});
