


var http = require('http') ;
var fs = require('fs') ;
var context = "" ;
var rs = fs.createReadStream( process.argv[3], { encoding: 'utf8'} ) ; 

rs.on( "data", function (data) {
	context += data ;
}  ) ;


var server = http.createServer( function (req, res) {
	res.write( context ) ;
	res.end() ;

} ) ;

server.listen( process.argv[2] ) ;