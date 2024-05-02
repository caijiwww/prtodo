import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";


export default [
  { languageOptions: { 
    globals: { 
      globalVar1: "writable",
      globalVar2: "readonly",
    ...globals.browser, 
    ...globals.node 
  } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
];