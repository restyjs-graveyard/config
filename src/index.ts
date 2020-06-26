import dotenv, { DotenvConfigOptions, DotenvConfigOutput } from "dotenv";
import { Provider, Service } from "@restyjs/core";

@Service()
class Configuration implements Provider {
  optional: boolean = false;

  private options?: DotenvConfigOptions;
  env?: DotenvConfigOutput;

  constructor(options?: DotenvConfigOptions) {
    this.options = options;
  }

  build() {
    this.env = dotenv.config(this.options);
    if (this.env.error) {
      throw this.env.error;
    }
  }
}

export { Configuration, DotenvConfigOptions, DotenvConfigOutput };
