import * as cluster from 'cluster';

// let cluster = require('cluster');
// Round Robin 방식으로 스케쥴링
cluster.schedulingPolicy = cluster.SCHED_RR;

if (cluster.isMaster === true) {
}
