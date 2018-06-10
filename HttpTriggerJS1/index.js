require('appdynamics').profile({
    controllerHostName: 'https://baseball2018060813032310.saas.appdynamics.com',
    controllerPort: 443,
    controllerSslEnabled: true,  // Set to true if controllerPort is SSL
    accountName: 'baseball2018060813032310',
    accountAccessKey: 'ykcrqnioj76i',
    applicationName: 'node-js-sample',
    libagent:true,
    tierName: 'LPtier',
    nodeName: 'process'
   });
module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.name || req.body.name)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    context.done();
};
