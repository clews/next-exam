# next-exam
A next-generation digital examination environment for the secure administration of tests, school assignments, and final exams.

# technologies used
* electron
* vite
* node
* node-express
* vue
* bootstrap


## download latest builds
https://next-exam.at


![screenshot](/info/documentation/img/hb_teacher_dashboard.png)


## backend protection pipeline

- `student/scripts/protect-main.mjs` obfuscates `dist/main/main.mjs`, transpiles it to CommonJS, compiles it to V8 bytecode via `bytenode`, and replaces the entry file with a loader that only boots the `.jsc`.
- Release scripts (`npm run build:*`) automatically run `npm run protect:main` after the Vite bundles are created; you can execute the step manually for smoke-tests.
- Tweak `student/obfuscator.config.json` if you need to relax or tighten specific `javascript-obfuscator` settings (e.g. string array encoding, control flow flattening).
- The final artifacts consist of the loader (`dist/main/main.mjs`) and the bytecode blob (`dist/main/main.jsc`); the original source map is removed to avoid leaking unobfuscated code.



