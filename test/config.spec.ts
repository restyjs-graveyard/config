import resty from "@restyjs/core";
import { Configuration } from "../src";

describe("resty config", () => {
  it("test config provider", async () => {
    resty({
      controllers: [],
      providers: [
        new Configuration({
          path: "example.env",
        }),
      ],
    });
  });
});
