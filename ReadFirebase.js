/*var myDataRef = new Firebase('https://hackmit.firebaseio.com');
var facebookID = JSON.parse(myDataRef);
for user in facebookID[hackmit]{
	alert(user.id);
	
}
*/
//python -m SimpleHTTPServer

//curl -X PUT -d "@/test.json" https://hackmit.firebaseio.com/ .json

//curl -X PUT -d "@test.json" https://hackmit.firebaseio.com/.json


var listRef = new Firebase('https://hackmit.firebaseio.com');
listRef.on('child_added', function(snapshot) {
  var idList = snapshot.val();
  for each (key in idList.hackmit){
  	alert(key.id);
  }
});