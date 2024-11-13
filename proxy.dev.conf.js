module.exports = {
    "/api/v1/pacientes/*": {
         "target": "http://localhost:8001/api/v1/pacientes/",
         "secure": false,
         "logLevel": "debug",
         "pathRewrite": {
           "^/api/v1/pacientes/": ""
         }
     }
 }