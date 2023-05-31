# crud-example-rn app

## Notice for the first time

- Run `npm install` to install all dependencies
- Run `npm start` to start the app
- Run `npm run android` to run the app on android device
- Do not run the `npm run generate` command, it will overwrite the `generated` folder
- `generated` folder has some modified files, so do not delete it. Those files are:
  - `generated/core/OpenAPI.ts` => Credentials
  - `generated/core/request.ts` => btoa (base64) error fixed
