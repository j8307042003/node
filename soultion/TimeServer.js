


var net = require('net') ;
var date = new Date() ;
var server = net.createServer( function ( socket ){

	var month = ((date.getMonth()+1).toString().length > 1 )? (date.getMonth()+1).toString() : "0"+(date.getMonth()+1).toString()  ;
	var d = (date.getDate() > 10 )? date.getDate().toString() : "0" + date.getDate().toString() ;
	var h = (date.getHours() > 10) ? date.getHours().toString() : "0" + date.getHours().toString() ;
	var m = (date.getMinutes() > 10) ? date.getMinutes().toString() : "0" + date.getMinutes().toString() ;


	var timeStr = date.getFullYear().toString() + "-" + month+ "-" + d ;
	timeStr += " " + h + ":" + m ;

	socket.write( timeStr + "\n") ;
	socket.end() ;



} ) ;

server.listen( process.argv[2] ) ;
