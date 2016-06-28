

function httpGetCallBack(res) {

	res.setEncoding( 'utf8' ) ;
	res.on( "data",  function(data) {
		console.log( data ) ;
	} ) ; 



}





var http = require('http') ;
http.get(process.argv[2], httpGetCallBack) ;