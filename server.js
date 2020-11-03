const moment = require('moment');

const http = require('http');
// Load built-in `url` module
const url = require('url');

const server = http.createServer(function(request,response) {
  // Convert the request URL into an object. This converts the request url into its component parts.
  const parsed = url.parse(request.url);
  console.log(parsed);

  if (parsed.path === '/' || parsed.path === `/index.html`) {

    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    response.end(`<h1>Home page</h1>`);

  } else if (parsed.path === '/contact' || parsed.path === `/contact/index.html`) {

    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    response.end(`<h1>Contact page</h1>`);

  } else if (parsed.path === '/team' || parsed.path === `/team/index.html`) {

    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    response.end(`<h1>Team page</h1>`);
  
  } else if (parsed.path === '/products' || parsed.path === `/products/index.html`) {

    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    response.end(`<h1>Product page</h1>`);
  
  } else if (parsed.path === '/gallery' || parsed.path === `/gallery/index.html`) {

    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    response.end(`<h1>Gallery page</h1>`);
  
  } else {

    response.writeHead(404, {"Content-Type": "text/html; charset=utf-8"});
    response.end(`<h1>Page Not Found</h1>`);
  }

});

server.listen(8080, function() {
    console.log(`Listening on port 8080`);
});

// Respond with today's date:
console.log(`Today's date is ${moment().format('ll')}`);