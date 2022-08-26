module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-custom`
  extends: ["custom"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
}

// {
//   "env": {"browser": true, "es6": true},
//   "extends": ["eslint:recommended", "next/core-web-vitals"]
// }
