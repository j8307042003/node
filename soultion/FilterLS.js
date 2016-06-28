

var targetName = "." + process.argv[3].toString() ;

function callBackFunc( err, list  ) {
	if ( err == true ) throw err ;

	var path = require('path') ;
	for ( var i = 0 ; i < list.length ; i++ ) {
		if ( path.extname( list[i] ) == targetName)  {
			console.log( list[i]) ;

		}
	}


}



var fs = require('fs') ;

fs.readdir(process.argv[2], callBackFunc) ;
