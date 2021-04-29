module.exports = {
    rules: {
        "at-rule-no-unknown": [
            true,
            {
                ignoreAtRules: [
                    "tailwind",
                    "apply",
                    "variants",
                    "responsive",
                    "screen",
                ],
            },
        ],
        "declaration-block-trailing-semicolon": null,
        "no-descending-specificity": null,
    },
    theme: {
        colors: {
          green: {
            light: '#85d7ff',
            DEFAULT: '#1fb6ff',
            dark: '#009eeb',
          },
        }
      }
};
