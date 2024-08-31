import * as core from "@actions/core";
import { Mock, vi } from "vitest";

import { CoreInputs } from "@/src/inputs/core-inputs";

vi.mock("@actions/core", () => ({
  getInput: vi.fn(),
}));

describe("CoreInputs", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("sourceDirectory", () => {
    it('should return the value of "source-directory" input', () => {
      const expectedSourceDirectory = "my-source-directory";
      (core.getInput as Mock).mockReturnValueOnce(expectedSourceDirectory);

      const inputs = new CoreInputs();
      const sourceDirectory = inputs.sourceDirectory;

      expect(sourceDirectory).toBe(expectedSourceDirectory);
      expect(core.getInput).toHaveBeenCalledWith("source-directory", {
        required: true,
      });
    });
  });

  describe("destinationDirectory", () => {
    it('should return the value of "destination-directory" input', () => {
      const expectedDestinationDirectory = "my-destination-directory";
      (core.getInput as Mock).mockReturnValueOnce(expectedDestinationDirectory);

      const inputs = new CoreInputs();
      const destinationDirectory = inputs.destinationDirectory;

      expect(destinationDirectory).toBe(expectedDestinationDirectory);
      expect(core.getInput).toHaveBeenCalledWith("destination-directory", {
        required: true,
      });
    });
  });

  describe("fileFilter", () => {
    it('should return the value of "file-filter" input', () => {
      const expectedFileFilter = String.raw`.*\.txt`;
      (core.getInput as Mock).mockReturnValueOnce(expectedFileFilter);

      const inputs = new CoreInputs();
      const fileFilter = inputs.fileFilter;

      expect(fileFilter).toBe(expectedFileFilter);
      expect(core.getInput).toHaveBeenCalledWith("file-filter");
    });

    it('should return undefined if "file-filter" input is not set', () => {
      (core.getInput as Mock).mockReturnValueOnce("");

      const inputs = new CoreInputs();
      const fileFilter = inputs.fileFilter;

      expect(fileFilter).toBeUndefined();
      expect(core.getInput).toHaveBeenCalledWith("file-filter");
    });
  });

  describe("flattenDirectories", () => {
    it('should return true if "flatten-directories" input is set to "true"', () => {
      (core.getInput as Mock).mockReturnValueOnce("true");

      const inputs = new CoreInputs();
      const flattenDirectories = inputs.flattenDirectories;

      expect(flattenDirectories).toBe(true);
      expect(core.getInput).toHaveBeenCalledWith("flatten-directories");
    });

    it('should return false if "flatten-directories" input is set to "false"', () => {
      (core.getInput as Mock).mockReturnValueOnce("false");

      const inputs = new CoreInputs();
      const flattenDirectories = inputs.flattenDirectories;

      expect(flattenDirectories).toBe(false);
      expect(core.getInput).toHaveBeenCalledWith("flatten-directories");
    });

    it('should return false if "flatten-directories" input is not set', () => {
      (core.getInput as Mock).mockReturnValueOnce("");

      const inputs = new CoreInputs();
      const flattenDirectories = inputs.flattenDirectories;

      expect(flattenDirectories).toBe(false);
      expect(core.getInput).toHaveBeenCalledWith("flatten-directories");
    });
  });
});
