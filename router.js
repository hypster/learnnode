function route(handlers,pathname,res,data){
    console.log('about to route');
    if(typeof handlers[pathname]==='function'){
        var data='';
        req.setEncoding('utf8');
        req.on('data',function(chunk){
            data+=chunk;
        })
        req.on('end',function(){
            handlers[pathname](res,data);
        })
        
    }else{
        res.writeHead(500,{'content-type':'text/plain'});
        res.end('server can\"t handle the request');
    }
}
exports.route=route;