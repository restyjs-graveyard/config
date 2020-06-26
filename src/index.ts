import dotenv, { DotenvConfigOptions, DotenvConfigOutput } from "dotenv";
import { Provider, Service } from "@restyjs/core";

@Service()
class ConfigurationProvider implements Provider {
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

function Configuration(
  options?: DotenvConfigOptions,
  optional?: boolean
): ConfigurationProvider {
  return new ConfigurationProvider(options, optional);
}

export { Configuration, DotenvConfigOptions, DotenvConfigOutput };
