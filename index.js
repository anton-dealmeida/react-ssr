const appInsights = require( "applicationinsights" );

appInsights.setup( "9de1df93-a5cf-45c7-9d8a-0fa0228ecd78" );
appInsights.start();

require( "babel-register" )( {
    presets: [ "env" ],
} );
require( "./src/server" );
