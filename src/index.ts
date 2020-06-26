import dotenv, { DotenvConfigOptions, DotenvConfigOutput } from "dotenv";
import { Provider, Service } from "@restyjs/core";

@Service()
class Configuration implements Provider {
  optional: boolean = false;

  private options?: DotenvConfigOptions;
  env?: DotenvConfigOutput;

  constructor(options?: DotenvConfigOptions, optional?: boolean) {
    this.options = options;
    if (optional) {
      this.optional = optional;
    }
  }

  build() {
    this.env = dotenv.config(this.options);
    if (this.env.error) {
      throw this.env.error;
    }
  }
}

export { Configuration, DotenvConfigOptions, DotenvConfigOutput };
