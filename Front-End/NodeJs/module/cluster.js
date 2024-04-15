import * as cluster from 'cluster';

// Round Robin 방식으로 스케쥴링
cluster.schedualingPolicy = cluster.SCHED_RR;
