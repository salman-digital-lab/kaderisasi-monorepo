/*
|--------------------------------------------------------------------------
| JavaScript entrypoint for running ace commands
|--------------------------------------------------------------------------
|
| Since, we cannot run TypeScript source code using "node" binary, we need
| a JavaScript entrypoint to run ace commands.
|
| This file registers the "ts-node-maintained/register/esm" hook with the Node.js module system
| and then imports the "bin/console.ts" file.
|
*/

/**
 * Register hook to process TypeScript files using ts-node
 */
import 'ts-node-maintained/register/esm'

/**
 * Import ace console entrypoint
 */
await import('./bin/console.js')