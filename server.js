var http=require('http')
var url=require('url')
function start(route,handlers){
    var server=http.createServer(function(req,res){
        console.log('connected');
        var pathname=url.parse(req.url).pathname;
        console.log('pathname parsed: '+pathname);
        route(handlers,pathname,res,req);
    })
    server.listen(8888);
    console.log('start listening on port 8888')
}
exports.start=start