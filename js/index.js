let cluster = require('cluster');
let os = require('os');
let argv = require('minimist')(process.argv.slice(2), {
    boolean: true
});

let isInstanceMaster = cluster && cluster.isMaster;

if (isInstanceMaster) {
    let cpus = os.cpus();
    let totalNoOfCpus = cpus.length;
    let instanceCount = parseInt(argv["instance-count"]) || totalNoOfCpus;

    if (instanceCount > totalNoOfCpus) {
        instanceCount = totalNoOfCpus;
    }

    for (let index = 1; index <= instanceCount; index++) {
        cluster.fork();

        console.log(`Instance ${index} Started ...`);
    };

    cluster.on('exit', (instance) => {
        console.log('Instance ... ' + instance.id + ' Exited ...');

        cluster.fork();
    });
} else {
    require('./rest-service');

    console.log('Cluster Initialized Successfully!');
}