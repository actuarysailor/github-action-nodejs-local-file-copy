import { default as fs } from "node:fs";
import { default as path } from "node:path";

import { Inputs } from "./inputs/inputs";
import { Logger } from "./logger/logger";
import { Outputs } from "./outputs/outputs";
import { sleep } from "./utils/sleep";

export class Action {
  private readonly logger;
  private readonly outputs;

  constructor(dependencies: { logger: Logger; outputs: Outputs }) {
    this.logger = dependencies.logger;
    this.outputs = dependencies.outputs;
  }

  async run(inputs: Inputs) {
    const fileFilter = inputs.fileFilter || "**/*";
    const sourceDirectory = inputs.sourceDirectory;
    const destinationDirectory = inputs.destinationDirectory;

    this.logger.info(
      `Copying files matching the pattern "${fileFilter}" from "${sourceDirectory}" to "${destinationDirectory}"`,
    );

    const files = fs.readdirSync(inputs.sourceDirectory, {
      withFileTypes: true,
    });
    const copiedFiles: { destinationPath: string; count: number }[] = [];

    for (const file of files) {
      if (
        file.isFile() &&
        (!inputs.fileFilter || new RegExp(inputs.fileFilter).test(file.name))
      ) {
        const destinationPath = inputs.flattenDirectories
          ? path.join(inputs.destinationDirectory, file.name)
          : path.join(
              inputs.destinationDirectory,
              path.relative(inputs.sourceDirectory, file.path),
            );

        const destinationDir = path.dirname(destinationPath);
        if (!fs.existsSync(destinationDir)) {
          fs.mkdirSync(destinationDir, { recursive: true });
        }

        fs.copyFileSync(file.path, destinationPath);
        this.logger.info(`Copied '${file.path}' to '${destinationPath}'`);

        const existingEntry = copiedFiles.find(
          entry => entry.destinationPath === destinationPath,
        );
        if (existingEntry) {
          existingEntry.count += 1;
        } else {
          copiedFiles.push({ destinationPath: destinationPath, count: 1 });
        }
      }
    }

    // Generate markdown table
    let markdownTable = "| Destination Path | Files Copied |\n| --- | --- |\n";
    for (const entry of copiedFiles) {
      markdownTable += `| ${entry.destinationPath} | ${entry.count} |\n`;
    }

    this.outputs.save("copiedFiles", markdownTable);
    this.logger.info("Files copied:\n" + markdownTable);

    await sleep(3000);
    this.logger.info("Finished github-action-nodejs-template");
  }
}
