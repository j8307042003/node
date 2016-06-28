

var fs = require( 'fs' ) ;

var buf = fs.readFileSync( process.argv[2] ) ;
var strs = buf.toString() ;
strs = strs.split( '\n' ) ;

console.log( strs.length-1 ) ;


//console.log( process.argv[2] ) ;