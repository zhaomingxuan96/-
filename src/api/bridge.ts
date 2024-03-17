import {qddm,qdds,qdct,yzlbxj,yzlbyz,qtdb,xwhnt,qfzq,lqhnt,xjzz,qds} from '../Type/bridge'
import $ from 'jquery'

// 桥墩墩帽
var qddmtxt:qddm[]=[]
export function readqddmTxt(){
    $.ajax({
        async:false,
        url:"./桥梁/桥数据.txt",
        success: function (data:any) {
            var tabledata = data.split('\r\n')
            for (var i=0;i<tabledata.length;i++)
            {
                if (tabledata[i].indexOf("桥墩墩帽")!=-1) {
                    var temdata = tabledata[i].split(',');
                    let qddmtxt0:qddm={
                        xh:Number(temdata[0]),
                        num:Number(temdata[2].trim()),
                        name: temdata[4],
                        x1:Number(temdata[7]),
                        y1:Number(temdata[8]),
                        z1:Number(Number(temdata[9])),
                        x2:Number(temdata[10]),
                        y2:Number(temdata[11]),
                        z2:Number(Number(temdata[12])),
                        x3:Number(temdata[13]),
                        y3:Number(temdata[14]),
                        z3:Number(Number(temdata[15])),
                        x4:Number(temdata[16]),
                        y4:Number(temdata[17]),
                        z4:Number(Number(temdata[18])),
                        x5:Number(temdata[19]),
                        y5:Number(temdata[20]),
                        z5:Number(Number(temdata[21])),
                        x6:Number(temdata[22]),
                        y6:Number(temdata[23]),
                        z6:Number(Number(temdata[24])),
                        x7:Number(temdata[25]),
                        y7:Number(temdata[26]),
                        z7:Number(Number(temdata[27])),
                        x8:Number(temdata[28]),
                        y8:Number(temdata[29]),
                        z8:Number(Number(temdata[30]))
                    }
                    qddmtxt.push(qddmtxt0)
                }
            }
        }
    })
    return  qddmtxt
}
// 桥墩墩身
var qddstxt:qdds[]=[]
export function readqddsTxt(){
    $.ajax({
        async:false,
        url:"./桥梁/桥数据.txt",
        success: function (data:any) {
            var tabledata = data.split('\r\n')
            for (var i= 0; i<tabledata.length;i++)
            {
                if (tabledata[i].indexOf("桥墩墩身")!=-1) {
                    var temdata = tabledata[i].split(',');
                    let qddstxt0: qdds = {
                        xh:temdata[0],
                        name: temdata[4],
                        x1:Number(temdata[7]),
                        y1:Number(temdata[8]),
                        z1:Number(Number(temdata[9])),
                        x2:Number(temdata[10]),
                        y2:Number(temdata[11]),
                        z2:Number(Number(temdata[12])),
                        x3:Number(temdata[13]),
                        y3:Number(temdata[14]),
                        z3:Number(Number(temdata[15])),
                        x4:Number(temdata[16]),
                        y4:Number(temdata[17]),
                        z4:Number(Number(temdata[18])),
                        x5:Number(temdata[19]),
                        y5:Number(temdata[20]),
                        z5:Number(Number(temdata[21])),
                        x6:Number(temdata[22]),
                        y6:Number(temdata[23]),
                        z6:Number(Number(temdata[24])),
                        x7:Number(temdata[25]),
                        y7:Number(temdata[26]),
                        z7:Number(Number(temdata[27])),
                        x8:Number(temdata[28]),
                        y8:Number(temdata[29]),
                        z8:Number(Number(temdata[30]))
                    }
                    qddstxt.push(qddstxt0)
                }
            }
        }
    })
    return  qddstxt
}
// 桥墩承台
var qdcttxt:qdct[]=[]
export function readqdctTxt(){
    $.ajax({
        async:false,
        url:"./桥梁/桥数据.txt",
        success: function (data:any) {
            var tabledata = data.split('\r\n')
            for (var i= 0; i<tabledata.length;i++)
            {
                if (tabledata[i].indexOf("桥墩承台")!=-1) {
                    var temdata = tabledata[i].split(',');
                    let qdcttxt0: qdct = {
                        xh:temdata[0],
                        name:temdata[4],
                        x1:Number(temdata[7]),
                        y1:Number(temdata[8]),
                        z1:Number(Number(temdata[9])),
                        x2:Number(temdata[10]),
                        y2:Number(temdata[11]),
                        z2:Number(Number(temdata[12])),
                        x3:Number(temdata[13]),
                        y3:Number(temdata[14]),
                        z3:Number(Number(temdata[15])),
                        x4:Number(temdata[16]),
                        y4:Number(temdata[17]),
                        z4:Number(Number(temdata[18])),
                        x5:Number(temdata[19]),
                        y5:Number(temdata[20]),
                        z5:Number(Number(temdata[21])),
                        x6:Number(temdata[22]),
                        y6:Number(temdata[23]),
                        z6:Number(Number(temdata[24])),
                        x7:Number(temdata[25]),
                        y7:Number(temdata[26]),
                        z7:Number(Number(temdata[27])),
                        x8:Number(temdata[28]),
                        y8:Number(temdata[29]),
                        z8:Number(Number(temdata[30]))
                    }
                    qdcttxt.push(qdcttxt0)
                }
            }
        }
    })
    return  qdcttxt
}
// 预制梁板(预制)
var yzlbyztxt:yzlbyz[]=[]
export function readyzlbyzTxt(){
    $.ajax({
        async:false,
        url:"./桥梁/桥数据.txt",
        success: function (data:any) {
            var tabledata = data.split('\r\n')
            for (var i= 0; i<tabledata.length;i++)
            {
                if (tabledata[i].indexOf("预制梁板(预制)")!=-1) {
                    var temdata = tabledata[i].split(',');
                    let yzlbyztxt0: yzlbyz = {
                        xh:temdata[0],
                        name: temdata[4],
                        x1:Number(temdata[7]),
                        y1:Number(temdata[8]),
                        z1:Number(Number(temdata[9])),
                        x2:Number(temdata[10]),
                        y2:Number(temdata[11]),
                        z2:Number(Number(temdata[12])),
                        x3:Number(temdata[13]),
                        y3:Number(temdata[14]),
                        z3:Number(Number(temdata[15])),
                        x4:Number(temdata[16]),
                        y4:Number(temdata[17]),
                        z4:Number(Number(temdata[18])),
                        x5:Number(temdata[19]),
                        y5:Number(temdata[20]),
                        z5:Number(Number(temdata[21])),
                        x6:Number(temdata[22]),
                        y6:Number(temdata[23]),
                        z6:Number(Number(temdata[24])),
                        x7:Number(temdata[25]),
                        y7:Number(temdata[26]),
                        z7:Number(Number(temdata[27])),
                        x8:Number(temdata[28]),
                        y8:Number(temdata[29]),
                        z8:Number(Number(temdata[30]))
                    }
                    yzlbyztxt.push(yzlbyztxt0)
                }
            }
        }
    })
    return  yzlbyztxt
}
// 预制梁板(预制)
var yzlbxjtxt:yzlbxj[]=[]
export function readyzlbxjTxt(){
    $.ajax({
        async:false,
        url:"./桥梁/桥数据.txt",
        success: function (data:any) {
            var tabledata = data.split('\r\n')
            for (var i= 0; i<tabledata.length;i++)
            {
                if (tabledata[i].indexOf("预制梁板(现浇)")!=-1) {
                    var temdata = tabledata[i].split(',');
                    let yzlbxjtxt0: yzlbxj = {
                        xh:temdata[0],
                        name: temdata[4],
                        x1:Number(temdata[7]),
                        y1:Number(temdata[8]),
                        z1:Number(Number(temdata[9])),
                        x2:Number(temdata[10]),
                        y2:Number(temdata[11]),
                        z2:Number(Number(temdata[12])),
                        x3:Number(temdata[13]),
                        y3:Number(temdata[14]),
                        z3:Number(Number(temdata[15])),
                        x4:Number(temdata[16]),
                        y4:Number(temdata[17]),
                        z4:Number(Number(temdata[18])),
                        x5:Number(temdata[19]),
                        y5:Number(temdata[20]),
                        z5:Number(Number(temdata[21])),
                        x6:Number(temdata[22]),
                        y6:Number(temdata[23]),
                        z6:Number(Number(temdata[24])),
                        x7:Number(temdata[25]),
                        y7:Number(temdata[26]),
                        z7:Number(Number(temdata[27])),
                        x8:Number(temdata[28]),
                        y8:Number(temdata[29]),
                        z8:Number(Number(temdata[30]))
                    }
                    yzlbxjtxt.push(yzlbxjtxt0)
                }
            }
        }
    })
    return  yzlbxjtxt
}
// 桥头搭板
var qtdbtxt:qtdb[]=[]
export function readqtdbTxt(){
    $.ajax({
        async:false,
        url:"./桥梁/桥数据.txt",
        success: function (data:any) {
            var tabledata = data.split('\r\n')
            for (var i= 0; i<tabledata.length;i++)
            {
                if (tabledata[i].indexOf("桥头搭板")!=-1) {
                    var temdata = tabledata[i].split(',');
                    let qtdbtxt0: qtdb = {
                        xh:temdata[0],
                        name: temdata[4],
                        x1:Number(temdata[7]),
                        y1:Number(temdata[8]),
                        z1:Number(Number(temdata[9])),
                        x2:Number(temdata[10]),
                        y2:Number(temdata[11]),
                        z2:Number(Number(temdata[12])),
                        x3:Number(temdata[13]),
                        y3:Number(temdata[14]),
                        z3:Number(Number(temdata[15])),
                        x4:Number(temdata[16]),
                        y4:Number(temdata[17]),
                        z4:Number(Number(temdata[18])),
                        x5:Number(temdata[19]),
                        y5:Number(temdata[20]),
                        z5:Number(Number(temdata[21])),
                        x6:Number(temdata[22]),
                        y6:Number(temdata[23]),
                        z6:Number(Number(temdata[24])),
                        x7:Number(temdata[25]),
                        y7:Number(temdata[26]),
                        z7:Number(Number(temdata[27])),
                        x8:Number(temdata[28]),
                        y8:Number(temdata[29]),
                        z8:Number(Number(temdata[30]))
                    }
                    qtdbtxt.push(qtdbtxt0)
                }
            }
        }
    })
    return  qtdbtxt
}
// 纤维混凝土
var xwhnttxt:xwhnt[]=[]
export function readxwhntTxt(){
    $.ajax({
        async:false,
        url:"./桥梁/桥数据.txt",
        success: function (data:any) {
            var tabledata = data.split('\r\n')
            for (var i= 0; i<tabledata.length;i++)
            {
                if (tabledata[i].indexOf("纤维混凝土")!=-1)
                {
                    var temdata = tabledata[i].split(',');
                    let xwhnttxt1:xwhnt={
                        xh:temdata[0],
                        name: temdata[4],
                        x1:Number(temdata[7]),
                        y1:Number(temdata[8]),
                        z1:Number(Number(temdata[9])),
                        x2:Number(temdata[10]),
                        y2:Number(temdata[11]),
                        z2:Number(Number(temdata[12])),
                        x3:Number(temdata[13]),
                        y3:Number(temdata[14]),
                        z3:Number(Number(temdata[15])),
                        x4:Number(temdata[16]),
                        y4:Number(temdata[17]),
                        z4:Number(Number(temdata[18])),
                        x5:Number(temdata[19]),
                        y5:Number(temdata[20]),
                        z5:Number(Number(temdata[21])),
                        x6:Number(temdata[22]),
                        y6:Number(temdata[23]),
                        z6:Number(Number(temdata[24])),
                        x7:Number(temdata[25]),
                        y7:Number(temdata[26]),
                        z7:Number(Number(temdata[27])),
                        x8:Number(temdata[28]),
                        y8:Number(temdata[29]),
                        z8:Number(Number(temdata[30]))
                    }
                    xwhnttxt.push(xwhnttxt1)
                }

            }
        }
    })
    return  xwhnttxt
}
// 沥青混凝土
var lqhnttxt:lqhnt[]=[]
export function readlqhntTxt(){
    $.ajax({
        async:false,
        url:"./桥梁/桥数据.txt",
        success: function (data:any) {
            var tabledata = data.split('\r\n')
            for (var i= 0; i<tabledata.length;i++)
            {
                if (tabledata[i].indexOf("沥青混凝土")!=-1)
                {
                    var temdata = tabledata[i].split(',');
                    let lqhnttxt1:lqhnt={
                        xh:temdata[0],
                        name: temdata[4],
                        x1:Number(temdata[7]),
                        y1:Number(temdata[8]),
                        z1:Number(Number(temdata[9])),
                        x2:Number(temdata[10]),
                        y2:Number(temdata[11]),
                        z2:Number(Number(temdata[12])),
                        x3:Number(temdata[13]),
                        y3:Number(temdata[14]),
                        z3:Number(Number(temdata[15])),
                        x4:Number(temdata[16]),
                        y4:Number(temdata[17]),
                        z4:Number(Number(temdata[18])),
                        x5:Number(temdata[19]),
                        y5:Number(temdata[20]),
                        z5:Number(Number(temdata[21])),
                        x6:Number(temdata[22]),
                        y6:Number(temdata[23]),
                        z6:Number(Number(temdata[24])),
                        x7:Number(temdata[25]),
                        y7:Number(temdata[26]),
                        z7:Number(Number(temdata[27])),
                        x8:Number(temdata[28]),
                        y8:Number(temdata[29]),
                        z8:Number(Number(temdata[30]))
                    }
                    lqhnttxt.push(lqhnttxt1)
                }

            }
        }
    })
    return  lqhnttxt
}
// 防撞墙
var qfzqtxt:qfzq[]=[]
export function readqfzqTxt(){
    $.ajax({
        async:false,
        url:"./桥梁/桥数据.txt",
        success: function (data:any) {
            var tabledata = data.split('\r\n')
            for (var i= 0; i<tabledata.length;i++)
            {
                if (tabledata[i].indexOf("桥防撞墙")!=-1)
                {
                    var temdata = tabledata[i].split(',');
                    let qfzqtxt0:qfzq= {
                        xh:temdata[0],
                        name: temdata[4],
                        x1:Number(temdata[7]),
                        y1:Number(temdata[8]),
                        z1:Number(Number(temdata[9])),
                        x2:Number(temdata[10]),
                        y2:Number(temdata[11]),
                        z2:Number(Number(temdata[12])),
                        x3:Number(temdata[13]),
                        y3:Number(temdata[14]),
                        z3:Number(Number(temdata[15])),
                        x4:Number(temdata[16]),
                        y4:Number(temdata[17]),
                        z4:Number(Number(temdata[18])),
                        x5:Number(temdata[19]),
                        y5:Number(temdata[20]),
                        z5:Number(Number(temdata[21])),
                        x6:Number(temdata[22]),
                        y6:Number(temdata[23]),
                        z6:Number(Number(temdata[24])),
                        x7:Number(temdata[25]),
                        y7:Number(temdata[26]),
                        z7:Number(Number(temdata[27])),
                        x8:Number(temdata[28]),
                        y8:Number(temdata[29]),
                        z8:Number(Number(temdata[30]))
                    }
                    qfzqtxt.push(qfzqtxt0)
                }

            }
        }
    })
    return  qfzqtxt
}
// 橡胶支座
var xjzztxt:xjzz[]=[]
export function readxjzzTxt(){
    $.ajax({
        async:false,
        url:"./桥梁/桥数据.txt",
        success: function (data:any) {
            var tabledata = data.split('\r\n')
            for (var i= 0; i<tabledata.length;i++)
            {
                if (tabledata[i].indexOf("橡胶支座")!=-1)
                {
                    var temdata = tabledata[i].split(',');
                    let xjzztxt0:xjzz= {
                        xh:temdata[0],
                        name:temdata[4].trim(),
                        x1:Number(temdata[8]),
                        y1:Number(temdata[9]),
                        z1:Number(Number(temdata[10]))
                    }
                    xjzztxt.push(xjzztxt0)
                }

            }
        }
    })
    return  xjzztxt
}
// 桥垫石
var qdstxt:qds[]=[]
export function readqdsTxt(){
    $.ajax({
        async:false,
        url:"./桥梁/桥数据.txt",
        success: function (data:any) {
            var tabledata = data.split('\r\n')
            for (var i= 0; i<tabledata.length;i++)
            {
                if (tabledata[i].indexOf("桥垫石")!=-1)
                {
                    var temdata = tabledata[i].split(',');
                    let qdstxt0:qds= {
                        xh:temdata[0],
                        name: temdata[4],
                        x1:Number(temdata[7]),
                        y1:Number(temdata[8]),
                        z1:Number(Number(temdata[9])),
                        x2:Number(temdata[10]),
                        y2:Number(temdata[11]),
                        z2:Number(Number(temdata[12])),
                        x3:Number(temdata[13]),
                        y3:Number(temdata[14]),
                        z3:Number(Number(temdata[15])),
                        x4:Number(temdata[16]),
                        y4:Number(temdata[17]),
                        z4:Number(Number(temdata[18])),
                        x5:Number(temdata[19]),
                        y5:Number(temdata[20]),
                        z5:Number(Number(temdata[21])),
                        x6:Number(temdata[22]),
                        y6:Number(temdata[23]),
                        z6:Number(Number(temdata[24])),
                        x7:Number(temdata[25]),
                        y7:Number(temdata[26]),
                        z7:Number(Number(temdata[27])),
                        x8:Number(temdata[28]),
                        y8:Number(temdata[29]),
                        z8:Number(Number(temdata[30]))
                    }
                    qdstxt.push(qdstxt0)
                }

            }
        }
    })
    return  qdstxt
}