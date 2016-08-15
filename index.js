var server=require('./server');
var router=require('./router');
var requestHandlers=require('./requestHandlers');
handlers={}
handlers['/']=requestHandlers.start;
handlers['/start']=requestHandlers.start;
handlers['/upload']=requestHandlers.upload;
server.start(router.route,handlers)