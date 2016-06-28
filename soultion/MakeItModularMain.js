

var fs = require( 'fs' ) ;
var path = require('path') ;
var myModule = require( './MakeItModular.js') ;
var targetName = "." + process.argv[3].toString() ;

function callBackF( err, list ) {
	if ( err == true ) throw err ;

	for ( var i = 0 ; i < list.length ; i++ ) {
		console.log( list[i]) ;
	}


}


myModule( process.argv[2].toString(), process.argv[3].toString(), callBackF) ;







