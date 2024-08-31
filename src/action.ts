import { Inputs } from "./inputs/inputs";
import { Logger } from "./logger/logger";
import { Outputs } from "./outputs/outputs";
import { sleep } from "./utils/sleep";
import * as fs from 'fs';
import * as path from 'path';
import * as glob from 'glob';

export class Action {
  private readonly logger;
  private readonly outputs;

  constructor(dependencies: { logger: Logger; outputs: Outputs }) {
    this.logger = dependencies.logger;
    this.outputs = dependencies.outputs;
  }

  async run(inputs: Inputs) {
    this.logger.info(`Copying files matching the pattern "${inputs.fileFilter || '**/*'}" from "${inputs.sourceDirectory}" to "${inputs.destinationDirectory}"`);

    const files = glob.sync(inputs.fileFilter || '**/*', { cwd: inputs.sourceDirectory });
    const copiedFiles: { destinationPath: string, count: number }[] = [];

    files.forEach(file => {
      const relativePath = path.relative(inputs.sourceDirectory, file);
      const destinationPath = inputs.flattenDirectories
        ? path.join(inputs.destinationDirectory, path.basename(file))
        : path.join(inputs.destinationDirectory, relativePath);

      const destinationDir = path.dirname(destinationPath);
      if (!fs.existsSync(destinationDir)) {
        fs.mkdirSync(destinationDir, { recursive: true });
      }

      fs.copyFileSync(file, destinationPath);
      this.logger.info(`Copied '${file}' to '${destinationPath}'`);

      const existingEntry = copiedFiles.find(entry => entry.destinationPath === destinationPath);
      if (existingEntry) {
        existingEntry.count += 1;
      } else {
        copiedFiles.push({ destinationPath: destinationPath, count: 1 });
      }
    });

    // Generate markdown table
    let markdownTable = "| Destination Path | Files Copied |\n| --- | --- |\n";
    copiedFiles.forEach(entry => {
      markdownTable += `| ${entry.destinationPath} | ${entry.count} |\n`;
    });

    this.outputs.save("copiedFiles", markdownTable);
    this.logger.info("Files copied:\n" + markdownTable);

    await sleep(3000);
    this.logger.info("Finished github-action-nodejs-template");
  }
}
