

var sum = 0 ;

function dataCallBack( err, data ) {
	if ( err == true)  throw err; // somthing wrong

	console.log(data.toString().split('\n').length -1) ;


}

var fs = require('fs') ;

fs.readFile( process.argv[2], dataCallBack ) ;


