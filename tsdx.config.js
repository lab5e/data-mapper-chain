/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
const replace = require("@rollup/plugin-replace");

module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, opts) {
    if (config.output.format === "umd") {
      delete config.external;
    }
    config.plugins = config.plugins.map((p) =>
      p.name === "replace"
        ? replace({
            "process.env.NODE_ENV": JSON.stringify(opts.env),
            preventAssignment: true,
          })
        : p,
    );
    return config; // always return a config.
  },
};
