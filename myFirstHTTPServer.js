var http = require('https');
var username = 'henryarbolaez'
function printMessage(username, badgeCount, points){
  var message = username + " has " + badgeCount + " badges and " + points + " points in Javascript."
  console.log(message);
}

var request = http.get('https://teamtreehouse.com/henryarbolaez.json', function(response){
  console.log(response.statusCode);
  var body = ""
  response.on('data', function(chunk){
    body += chunk
  });

  response.on('end', function(){
    var whoo = JSON.parse(body)
    // console.log(whoo.points.JavaScript);

    printMessage(whoo.name, whoo.badges.length, whoo.points.JavaScript)
  })
})

request.on('error', function(error){
    console.error(error.message);
});


// http.createServer(function(request, response){
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   var name = "salomon"
//   response.write("Salomon's first node program!")
//   http.get('')
//   response.write(name)
//   response.end()
// }).listen(8080)

//Problem: Need a simple way to look at user badge count and JS points

//Use Node JS to connect to treehouse API to get profile information

//COnnect to API, Parse Data, Print Data
