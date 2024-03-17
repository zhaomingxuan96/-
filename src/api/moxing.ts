import { column } from '../Type/moxing'
import $ from 'jquery'

var zhutxt:column[] = []
export function zhuTxt() {
  $.ajax({
    async: false,
    url: "柱测试2010.txtslab.txt",
    success: function (data:any) {
      var tabledata = data.split('\r\n')
      var conunt = tabledata.length;
      for (var w = 0; w < conunt; w++) {
        var www = tabledata[w];
        var temdata = www.split('&');
        //b边纵筋
        var bzj=temdata[8].trim().split('/')
        var bzjzj=[]
        var bzjjj=[]
        var bzjnum = bzj.length
        for (var i =0;i<bzj.length;i++){
          var bzjfg = bzj[i].split('-')
          bzjzj.push(bzjfg[0])
          bzjjj.push(bzjfg[1])
        }
        //b边箍筋
        var bgj=temdata[9].trim().split(';')
        var bgjf=[]
        var bgjs=[]
        var bgjnum = bgj.length
        for (var i =0;i<bgj.length;i++){
          var bgjfg = bgj[i].split('-')
          bgjf.push(bgjfg[0])
          bgjs.push(bgjfg[1])
        }
        var gjzj = temdata[5].split('-')
        var gjjmq = gjzj[1].trim()
        var jmqjj,fjmqjj
        if (gjjmq.indexOf("/")!=-1){
          jmqjj = gjjmq.split('/')[0]
          fjmqjj = gjjmq.split('/')[1]
        }
        //h边纵筋
        var hzj=temdata[6].trim().split('/')
        var hzjzj=[]
        var hzjjj=[]
        var hzjnum = hzj.length
        for (var i =0;i<hzj.length;i++){
          var hzjfg = hzj[i].split('-')
          hzjzj.push(hzjfg[0])
          hzjjj.push(hzjfg[1])
        }
        //h边箍筋
        var hgj=temdata[7].trim().split(';')
        var hgjf=[]
        var hgjs=[]
        var hgjnum = hgj.length
        for (var i =0;i<hgj.length;i++){
          var hgjfg = hgj[i].split('-')
          hgjf.push(hgjfg[0])
          hgjs.push(hgjfg[1])
        }
        var gjzj = temdata[5].split('-')
        var gjjmq = gjzj[1].trim()
        var jmqjj,fjmqjj
        if (gjjmq.indexOf("/")!=-1){
          jmqjj = gjjmq.split('/')[0]
          fjmqjj = gjjmq.split('/')[1]
        }
        let zhutxt0:column={
        // 序号
        num:temdata[0].trim(),
        // b
        b:temdata[1].trim(),
        // h
        h:temdata[2].trim(),
        // 坐标
        zb1:temdata[3].trim(),
        // x坐标
        x:temdata[3].split(',')[0],
        // y坐标
        y:temdata[3].split(',')[1],
        // z坐标
        z:temdata[3].trim().split(',')[2],
        // 箍筋级别
        gjjb:temdata[4].trim(),
        // 箍筋直径
        gjzj:gjzj[0].substring(1,gjzj[0].length),
        bzjzj:bzjzj,
        bzjjj:bzjjj,
        bgjf:bgjf,
        bgjs:bgjs,
        hzjzj:hzjzj,
        hzjjj:hzjjj,
        hgjf:hgjf,
        hgjs:hgjs,
        bzjnum:bzjnum,
        hzjnum:hzjnum,
      }
        zhutxt.push(zhutxt0)
      }
    }
  })
  return zhutxt
}

