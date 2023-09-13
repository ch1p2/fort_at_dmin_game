'use strict';

console.log('devel');



gei('loadbox').value = '{"aw":5,"bd":7,"cm":2760,"dt":[{"name":"linked tag of 15 and 9","lnkfr":[[1,15,9]],"avl":1,"des":"15and9linked","eff":[]}],"eb":[{"xid":0,"aID":5,"effects":[],"cost":2,"price":2,"quality":30,"points":[0,0,0,1,0],"vol":10,"atkdef":[0,0,0,0,0,0],"used":[0,0,0],"givencat":[],"lvdown":0,"voltmp":0,"firstup":1,"lastup":1,"incr":false,"decr":false,"perp":false,"tagid":[0,6,12]},{"xid":1,"aID":9,"effects":[],"cost":2,"price":2,"quality":30,"points":[0,1,0,0,0],"vol":6,"atkdef":[0,0,0,0,0,0],"used":[0,0,0],"givencat":[],"lvdown":0,"voltmp":0,"firstup":1,"lastup":1,"incr":false,"decr":false,"perp":false,"tagid":[1,7,13]},{"xid":2,"aID":17,"effects":[],"cost":2,"price":2,"quality":30,"points":[1,0,0,0,0],"vol":1,"atkdef":[0,0,0,0,0,0],"used":[0,0,0],"givencat":[],"lvdown":0,"voltmp":0,"firstup":1,"lastup":1,"incr":false,"decr":false,"perp":false,"tagid":[2,8,14]},{"xid":3,"aID":18,"effects":[],"cost":2,"price":2,"quality":30,"points":[0,0,0,0,2],"vol":1,"atkdef":[0,0,0,0,0,0],"used":[0,0,0],"givencat":[],"lvdown":0,"voltmp":0,"firstup":1,"lastup":1,"incr":false,"decr":false,"perp":false,"tagid":[22,83,88]},{"xid":4,"aID":11,"effects":[],"cost":2,"price":2,"quality":30,"points":[0,1,0,0,0],"vol":4,"atkdef":[0,0,0,0,0,0],"used":[0,0,0],"givencat":[],"lvdown":0,"voltmp":0,"firstup":1,"lastup":1,"incr":false,"decr":false,"perp":false,"tagid":[23,84,92]},{"xid":5,"aID":12,"effects":[],"cost":2,"price":65,"quality":36,"points":[2,0,0,0,1],"vol":25,"atkdef":[0,0,0,0,0,0],"used":[3,0,0],"givencat":[],"lvdown":0,"voltmp":0,"firstup":10,"lastup":10,"incr":0,"decr":0,"perp":false,"tagid":[85,2,14]},{"xid":6,"aID":10,"effects":[[0,1],[1,2],[2,1]],"cost":1,"price":18,"quality":37,"points":[1,1,0,1,0],"vol":5,"atkdef":[0,0,0,0,0,0],"used":[0,0,0],"givencat":[24],"lvdown":0,"voltmp":0,"firstup":10,"lastup":10,"incr":0,"decr":0,"perp":false,"tagid":[3,9,15]},{"xid":7,"aID":0,"effects":[[0,2],[1,2],[2,1]],"cost":0,"price":30,"quality":40,"points":[3,2,1,0,0],"vol":18,"atkdef":[0,0,0,0,0,0],"used":[3,0,0],"givencat":[19],"lvdown":0,"voltmp":0,"firstup":10,"lastup":10,"incr":0,"decr":0,"perp":false,"tagid":[9,3,85]}],"ff":[{"2":-1,"3":-1,"4":-1,"5":3},{"0":-2,"1":-2,"6":4},{"0":-2,"2":-1,"3":-1,"5":-1,"6":-1,"7":6}]}'


let xxsa = false;



if(xxsa) {
let sa = new sAtelier();

let x = sa.sr(10);

x = sa.insert(0, 0);
x = sa.insert(0, 1);
x = sa.insert(1, 2);
x = sa.insert(1, 3);
x = sa.insertdone();

console.log(JSON.stringify(x));

sa.setlink([1, 6, 1]);

sa.linkTags(3, 4);
sa.linkTags(5, 11);
sa.linkTags(5, 17);
sa.linkTags(5, 17);
sa.linkTags(5, 20);
sa.linkTags(5, 20);
sa.linkTags(19, 21);
sa.linkTags(19, 21);
sa.unlinkTag(4);
sa.unlinkTag(-2);

sa.commitTag([21, 2, 3, 1, 1, 3, -2])

console.log(JSON.stringify(sa.commit()));


sfarm.newFarm(0, 'water well', 1, 1, [[5, 3, 1]]);
sfarm.newFarm(1, 'gas farm', 1, 1, [[9, 1, 1]]);


let x1a = 0;
eval('()=>{x1a=1000}')();

}