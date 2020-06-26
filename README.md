# @restyjs/config
Configuration module for resty.js.

```ts
import resty from "@restyjs/core";
import { Configuration } from "@restyjs/config";

const app = resty({
  controllers: [],
  providers: [
    // will load .env file. for custom env file pass options param.
    Configuration(),
  ],
});

app.listen(8080);
```
