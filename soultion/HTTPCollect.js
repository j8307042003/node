



function httpGetCallBack(res) {
	var list = "" ;
	res.setEncoding( 'utf8' ) ;
	res.on( "data",  function(data) {
		list +=data  ;
	} ) ; 
	res.on("end", function() {

		console.log(list.length) ;
		console.log( list ) ;
		list = "" ;
	});


}





var http = require('http') ;
http.get(process.argv[2], httpGetCallBack) ;