import * as core from "@actions/core";
import { beforeEach, describe, expect, it } from "vitest";

import { buildAction } from "../../src/build-action";
import { run } from "../../src/index"; // Assuming you export the run function for testing
import { CoreInputs } from "../../src/inputs/core-inputs";

vi.mock("@actions/core", () => ({
  setFailed: vi.fn(),
}));

vi.mock("./build-action", () => ({
  buildAction: vi.fn(),
}));

vi.mock("./inputs/core-inputs");

describe("run function", () => {
  let actionMock: { run: vi.Mock };

  beforeEach(() => {
    vi.clearAllMocks();
    actionMock = { run: vi.fn() };
    (buildAction as vi.Mock).mockReturnValue(actionMock);
  });

  it("should execute successfully", async () => {
    await run();

    expect(buildAction).toHaveBeenCalled();
    expect(actionMock.run).toHaveBeenCalledWith(expect.any(CoreInputs));
    expect(core.setFailed).not.toHaveBeenCalled();
  });

  it("should handle Error instance", async () => {
    const error = new Error("Test error");
    actionMock.run.mockRejectedValueOnce(error);

    await run();

    expect(core.setFailed).toHaveBeenCalledWith(error);
  });

  it("should handle string error", async () => {
    const error = "Test error";
    actionMock.run.mockRejectedValueOnce(error);

    await run();

    expect(core.setFailed).toHaveBeenCalledWith(error);
  });

  it("should handle unknown error", async () => {
    const error = { unexpected: "error" };
    actionMock.run.mockRejectedValueOnce(error);

    await run();

    expect(core.setFailed).toHaveBeenCalledWith(
      "Unexpected error happened when running github-action-nodejs-template"
    );
  });
});