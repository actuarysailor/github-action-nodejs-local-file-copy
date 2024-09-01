export interface Inputs {
  readonly sourceDirectory: string;
  readonly destinationDirectory: string;
  readonly fileFilter?: string;
  readonly flattenDirectories?: boolean;
}
