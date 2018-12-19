const appInsights = require("applicationinsights");

// This can be moved to an environment variable on Azure.
// APPINSIGHTS_INSTRUMENTATIONKEY
appInsights.setup(process.env.APPINSIGHTS_INSTRUMENTATIONKEY)
    .setAutoDependencyCorrelation(true)
    .setAutoCollectRequests(true)
    .setAutoCollectPerformance(true)
    .setAutoCollectExceptions(true)
    .setAutoCollectDependencies(true)
    .setAutoCollectConsole(true)
    .setUseDiskRetryCaching(true)
    .start();

require("babel-register")({
    presets: ["env"],
});
require("./src/server");