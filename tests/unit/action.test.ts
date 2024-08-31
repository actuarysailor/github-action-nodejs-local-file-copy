import { vi } from "vitest";
import * as fs from "node:fs";
import * as glob from 'glob';

import { Action } from "@/src/action";
import { Inputs } from "@/src/inputs/inputs";

import { LoggerMock } from "./logger/logger-mock";
import { OutputsMock } from "./outputs/outputs-mock";

vi.mock("../../../src/utils/sleep");

describe("Action", () => {
  let logger: LoggerMock;
  let outputs: OutputsMock;
  let action: Action;

  beforeEach(() => {
    logger = new LoggerMock();
    outputs = new OutputsMock();
    action = new Action({
      logger,
      outputs,
    });
  });

  describe("When the fileFilter input is provided", () => {
    it("should copy files matching the pattern", async () => {
      const inputs: Inputs = {
        sourceDirectory: "test/source",
        destinationDirectory: "test/destination",
        fileFilter: "*.txt",
        flattenDirectories: false,
      };

      // Mock the file system
      vi.spyOn(glob, "sync").mockReturnValue(["file1.txt", "file2.txt"]);
      vi.spyOn(fs, "existsSync").mockReturnValue(true);
      vi.spyOn(fs, "mkdirSync").mockImplementation(() => undefined);
      vi.spyOn(fs, "copyFileSync").mockImplementation(() => {});

      await action.run(inputs);

      // Validate copied files
      const copiedFiles = outputs.getSavedOutput("copiedFiles");
      const copiedFilesArray = copiedFiles.split('\n').slice(2).map(line => line.split('|').map(cell => cell.trim()));
      const totalFilesCopied = copiedFilesArray.reduce((sum, entry) => sum + parseInt(entry[1]), 0);

      // Ensure no file has a count more than 1
      for (const entry of copiedFilesArray) {
        expect(parseInt(entry[1])).toBeLessThanOrEqual(1);
      }

      // Ensure total number of files copied matches the number of files discovered
      expect(totalFilesCopied).toBe(2);
    });
  });

  describe("When the fileFilter input is not provided", () => {
    it("should copy all files beneath source directory", async () => {
      const inputs: Inputs = {
        sourceDirectory: "test/source",
        destinationDirectory: "test/destination",
        flattenDirectories: false,
      };

      // Mock the file system
      vi.spyOn(glob, "sync").mockReturnValue(["file1.txt", "file2.txt", "file3.js"]);
      vi.spyOn(fs, "existsSync").mockReturnValue(true);
      vi.spyOn(fs, "mkdirSync").mockImplementation(() => undefined);
      vi.spyOn(fs, "copyFileSync").mockImplementation(() => {});

      await action.run(inputs);

      // Validate copied files
      const copiedFiles = outputs.getSavedOutput("copiedFiles");
      const copiedFilesArray = copiedFiles.split('\n').slice(2).map(line => line.split('|').map(cell => cell.trim()));
      const totalFilesCopied = copiedFilesArray.reduce((sum, entry) => sum + parseInt(entry[1]), 0);

      // Ensure no file has a count more than 1
      for (const entry of copiedFilesArray) {
        expect(parseInt(entry[1])).toBeLessThanOrEqual(1);
      }

      // Ensure total number of files copied matches the number of files discovered
      expect(totalFilesCopied).toBe(3);
    });
  });
});
