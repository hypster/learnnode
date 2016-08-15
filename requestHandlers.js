function start(res,data){
    console.log('start handler called');
    res.writeHead(200,{'content-type':'text/html'});
    var body='<h1>form</h1>'
    +'<form action="/upload" method="post"><textarea cols="40" width="60"></textarea><input type="submit" value="submit"></form>';
    res.write(body);
    res.end();
}
function upload(res,data){
    console.log('upload handler called');
    console.log(data);
    res.writeHead(200,{'content-type':'text/plain'});
    res.write(data);
    res.end();
}
exports.start=start;
exports.upload=upload;