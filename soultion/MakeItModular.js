









function MyModule( dir, targetName, callBack  ) {
	var fs = require('fs') ;
	var path = require('path') ;
	fs.readdir( dir, function ( err, list) {
		if ( err  )  callBack( err );
		else {
			list = list.filter( function (file) {  return ( path.extname( file )  == "." + targetName ) ; }  ) ;
			callBack(err, list) ;
		}
	} );

}




module.exports = MyModule ;



