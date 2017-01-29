// Not transpiled -> CommonJS

require('babel-register')();

// Disable webpack features that mocha does not understand.
require.extensions['.css'] = function() {};
