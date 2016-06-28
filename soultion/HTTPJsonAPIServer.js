

var http = require( 'http' ) ;
var url = require('url') ;



function returnIsoTime( time ) {
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds() 
	} ;

}

function returnUnixTime(time) {
	return { unixtime: time.getTime() } ;
}


var server = http.createServer( function ( req, res ) {
	var urlobj = url.parse( req.url, true ) ;
	var time = new Date( urlobj.query.iso );
	var result ;
	if ( urlobj.pathname == '/api/parsetime' ) {
		result = JSON.stringify(returnIsoTime(  time ) );
	} else if ( urlobj.pathname == '/api/unixtime' ) {
		result = JSON.stringify(returnUnixTime( time ) );

	}

	if ( result ) {
		res.writeHead( 200, {'Content-Type': 'application/json'} );
		res.write( result ) ;
	}

	res.end() ;

} ) ;
server.listen( process.argv[2] ) ;