
var http = require('http') ;
var http2 = require('http') ;
var http3 = require('http') ;

var checkList= [ false, false, false ] ;
var strList = [ "","","" ] ;

function httpGetCallBack1(res) {
	var list = "" ;
	res.setEncoding( 'utf8' ) ;
	res.on( "data",  function(data) {
		strList[0] +=data  ;
	} ) ; 
	res.on("end", function() {
		checkList[0] = true ;
		if ( checkList[0] == true && checkList[1] == true && checkList[2] == true ) {
			console.log( strList[0] ) ;
			console.log( strList[1] ) ;
			console.log( strList[2] ) ;
		}
		//strList[0] = "" ;
	});
}

function httpGetCallBack2(res) {
	var list = "" ;
	res.setEncoding( 'utf8' ) ;
	res.on( "data",  function(data) {
		strList[1] +=data  ;
	} ) ; 
	res.on("end", function() {
		checkList[1] = true ;
		if ( checkList[0] == true && checkList[1] == true && checkList[2] == true ) {
			console.log( strList[0] ) ;
			console.log( strList[1] ) ;
			console.log( strList[2] ) ;
		}
		//strList[1] = "" ;
	});
}
function httpGetCallBack3(res) {
	var list = "" ;
	res.setEncoding( 'utf8' ) ;
	res.on( "data",  function(data) {
		strList[2] +=data  ;
	} ) ; 
	res.on("end", function() {
		checkList[2] = true ;
		if ( checkList[0] == true && checkList[1] == true && checkList[2] == true ) {
			console.log( strList[0] ) ;
			console.log( strList[1] ) ;
			console.log( strList[2] ) ;
		}
		//strList[2] = "" ;
	});
}


var http = require('http') ;
http.get(process.argv[2], httpGetCallBack1) ;
http2.get(process.argv[3], httpGetCallBack2);
http3.get(process.argv[4], httpGetCallBack3);






