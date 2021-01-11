/**
 * Info:
 *
 * We cannot use the native cypress types because it include mocha and that declares global
 * functions like `describe`, `test` or `it`. Those are exactly the same function as jest declares
 * globally, which results in an unresolvable type clash.
 *
 * Since the cypress typings are only used for the custom commands and not for the actual tests,
 * the types from cypress has been copied here and the import has been removed.
 */

// Project: https://www.cypress.io
// GitHub:  https://github.com/cypress-io/cypress
// Definitions by: Gert Hengeveld <https://github.com/ghengeveld>
//                 Mike Woudenberg <https://github.com/mikewoudenberg>
//                 Robbert van Markus <https://github.com/rvanmarkus>
//                 Nicholas Boll <https://github.com/nicholasboll>
// TypeScript Version: 3.4
// Updated by the Cypress team: https://www.cypress.io/about/

/// <reference path="../../node_modules/cypress/types/cy-blob-util.d.ts" />
/// <reference path="../../node_modules/cypress/types/cy-bluebird.d.ts" />
/// <reference path="../../node_modules/cypress/types/cy-moment.d.ts" />
/// <reference path="../../node_modules/cypress/types/cy-minimatch.d.ts" />
/// <reference path="../../node_modules/cypress/types/lodash/index.d.ts" />
/// <reference path="../../node_modules/cypress/types/jquery/index.d.ts" />
/// <reference path="../../node_modules/cypress/types/sinon/index.d.ts" />
/// <reference path="../../node_modules/cypress/types/cypress-type-helpers.d.ts" />
/// <reference path="../../node_modules/cypress/types/cypress-global-vars.d.ts" />
/// <reference path="../../node_modules/cypress/types/cypress.d.ts" />
