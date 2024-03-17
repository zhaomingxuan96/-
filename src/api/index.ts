import {tyBuilding,tybeam,tyslab,tycolumn,tywall,ban,dm,ds,hnt,jd,fzq,qddk,qtdm,qtds,qtct,qddm,qdds,qdct} from '../Type'
import $ from 'jquery'

var buildingtxt:tyBuilding[]=[]
export function readBuildingTxt(){
    $.ajax({
        async:false,
        url:"/tkdata33(3).txt",
        success: function (data:any) {
            var tabledata = data.split('\r\n')
            var count = tabledata.length
            for (var w=0;w<count;w++){
                var www = tabledata[w]
                var temdata = www.split(',');
                let buildingtxt0:tyBuilding={
                    num :temdata[0].substring(0, temdata[0].length - 1),
                    xh :temdata[1].trim(),
                    floor:temdata[2].trim(),
                    botlevel:temdata[3].trim(),
                    height:temdata[4].trim(),
                    beamstd:temdata[5].trim(),
                    slabstd:temdata[6].trim(),
                    colstd:temdata[7].trim(),
                    wallstd:temdata[8].trim(),
                }
                buildingtxt.push(buildingtxt0);
            }
        }
    })
    return  buildingtxt
}
var beamtxt:tybeam[]=[]
export function readbeamTxt(){
    $.ajax({
        async:false,
        url:"/tkdata33(3).txt",
        success: function (data:any) {
            var tabledata = data.split('\r\n')
            var count = tabledata.length
            for (var w=0;w<count;w++){
                var www = tabledata[w]
                var temdata = www.split(',');
                let beamtxt0:tybeam={
                    num:temdata[0],
                    xh:temdata[1].trim(),
                    std:temdata[2].trim(),
                    name:temdata[3].trim(),
                    width:temdata[4].trim(),
                    size:temdata[5].trim(),
                    startx:temdata[6].trim().substring(1,temdata[6].length),
                    starty:temdata[7],
                    startz:temdata[8].trim().substring(0,temdata[8].length-1),
                    endx:temdata[9].trim().substring(1,temdata[6].length),
                    endy:temdata[10].trim(),
                    endz:temdata[11].trim().substring(0,temdata[8].length-1),
                    gjlx:"梁"
                }
                beamtxt.push(beamtxt0)
            }
        }
    })
    return  beamtxt
}
var slabtxt:tyslab[]=[]
export function readslabTxt(){
    $.ajax({
        async:false,
        url:"./测试/cs.txt",
        success: function (data:any) {
            var tabledata = data.split('\r\n')
            var count = tabledata.length
            for (var w=1;w<count;w++){
                var www = tabledata[w]
                var temdata = www.split('&');
                let slabtxt0:tyslab={
                    x:temdata[0].split(',')[0],
                    y:temdata[0].split(',')[1],
                    l:temdata[1],
                    b:temdata[2],
                    h:temdata[3],
                    r:temdata[4],
                    level:temdata[5]
                }
                slabtxt.push(slabtxt0)
            }
        }
    })
    return  slabtxt
}
var columntxt:tycolumn[]=[]
export function readcolumnTxt(){
    $.ajax({
        async:false,
        url:"./标准层建模/column.txt",
        success: function (data:any) {
            var tabledata = data.split('\r\n')
            var count = tabledata.length
            for (var w=0;w<count;w++){
                var www = tabledata[w]
                var temdata = www.split(',');
                let columntxt0:tycolumn={
                    num:temdata[0],
                    xh:temdata[1].trim(),
                    std:temdata[2].trim(),
                    name:temdata[3].trim(),
                    local:temdata[4].trim(),
                    jiaodian:temdata[5].trim(),
                }
                columntxt.push(columntxt0)
            }
        }
    })
    return  columntxt
}
var walltxt:tywall[]=[]
export function readwallTxt(){
    $.ajax({
        async:false,
        url:"./标准层建模/wall.txt",
        success: function (data:any) {
            var tabledata = data.split('\r\n')
            var count = tabledata.length
            for (var w=0;w<count;w++){
                var www = tabledata[w]
                var temdata = www.split(',');
                let walltxt0:tywall={
                    num:temdata[0],
                    xh:temdata[1].trim(),
                    std:temdata[2].trim(),
                    name:temdata[3].trim(),
                    width:temdata[4].trim(),
                    size:temdata[5].trim(),
                    start:temdata[6].trim(),
                    end:temdata[7].trim()
                }
                walltxt.push(walltxt0)
            }
        }
    })
    return  walltxt
}


// 板
var bantxt:ban[]=[]
export function readbanTxt(){
    $.ajax({
        async:false,
        url:"/tkdata33.txt",
        success: function (data:any) {
            var tabledata = data.split('\r\n')
            for (var i= 0; i<tabledata.length;i++)
            {
                if (tabledata[i].indexOf("桥预制板")!=-1)
                {
                    var temdata = tabledata[i].split(',');
                    let bantxt0:ban={
                                name:temdata[0],
                                x1:Number(temdata[1]),
                                y1:Number(temdata[2]),
                                z1:Number(Number(temdata[3])+Number(100000)),
                                x2:Number(temdata[4]),
                                y2:Number(temdata[5]),
                                z2:Number(Number(temdata[6])+Number(100000)),
                                x3:Number(temdata[7]),
                                y3:Number(temdata[8]),
                                z3:Number(Number(temdata[9])+Number(100000)),
                                x4:Number(temdata[10]),
                                y4:Number(temdata[11]),
                                z4:Number(Number(temdata[12])+Number(100000)),
                                x5:Number(temdata[13]),
                                y5:Number(temdata[14]),
                                z5:Number(Number(temdata[15])+Number(100000)),
                                x6:Number(temdata[16]),
                                y6:Number(temdata[17]),
                                z6:Number(Number(temdata[18])+Number(100000)),
                                x7:Number(temdata[19]),
                                y7:Number(temdata[20]),
                                z7:Number(Number(temdata[21])+Number(100000)),
                                x8:Number(temdata[22]),
                                y8:Number(temdata[23]),
                                z8:Number(Number(temdata[24])+Number(100000))
                            }
                            bantxt.push(bantxt0)
                }
            }
        }
    })
    return  bantxt
}
// 混凝土
var hnttxt:hnt[]=[]
export function readhntTxt(){
    $.ajax({
        async:false,
        url:"/tkdata33.txt",
        success: function (data:any) {
            var tabledata = data.split('\r\n')
            for (var i= 0; i<tabledata.length;i++)
            {
                if (tabledata[i].indexOf("混凝土")!=-1)
                {
                    var temdata = tabledata[i].split(',');
                    let hnttxt1:hnt={
                        name:temdata[0],
                        x1:Number(temdata[1]),
                        y1:Number(temdata[2]),
                        z1:Number(Number(temdata[3])+Number(100000)),
                        x2:Number(temdata[4]),
                        y2:Number(temdata[5]),
                        z2:Number(Number(temdata[6])+Number(100000)),
                        x3:Number(temdata[7]),
                        y3:Number(temdata[8]),
                        z3:Number(Number(temdata[9])+Number(100000)),
                        x4:Number(temdata[10]),
                        y4:Number(temdata[11]),
                        z4:Number(Number(temdata[12])+Number(100000)),
                        x5:Number(temdata[13]),
                        y5:Number(temdata[14]),
                        z5:Number(Number(temdata[15])+Number(100000)),
                        x6:Number(temdata[16]),
                        y6:Number(temdata[17]),
                        z6:Number(Number(temdata[18])+Number(100000)),
                        x7:Number(temdata[19]),
                        y7:Number(temdata[20]),
                        z7:Number(Number(temdata[21])+Number(100000)),
                        x8:Number(temdata[22]),
                        y8:Number(temdata[23]),
                        z8:Number(Number(temdata[24])+Number(100000))
                    }
                    hnttxt.push(hnttxt1)
                }

            }
        }
    })
    return  hnttxt
}
// 垫石
var dstxt:ds[]=[]
export function readdsTxt(){
    $.ajax({
        async:false,
        url:"/tkdata33.txt",
        success: function (data:any) {
            var tabledata = data.split('\r\n')
            for (var i= 0; i<tabledata.length;i++)
            {
                if (tabledata[i].indexOf("垫石")!=-1)
                {
                    var temdata = tabledata[i].split(',');
                    let dstxt0:ds= {
                        name:temdata[0],
                        x1:Number(temdata[1]),
                        y1:Number(temdata[2]),
                        z1:Number(Number(temdata[3])+Number(100000)),
                        x2:Number(temdata[4]),
                        y2:Number(temdata[5]),
                        z2:Number(Number(temdata[6])+Number(100000)),
                        x3:Number(temdata[7]),
                        y3:Number(temdata[8]),
                        z3:Number(Number(temdata[9])+Number(100000)),
                        x4:Number(temdata[10]),
                        y4:Number(temdata[11]),
                        z4:Number(Number(temdata[12])+Number(100000)),
                        x5:Number(temdata[13]),
                        y5:Number(temdata[14]),
                        z5:Number(Number(temdata[15])+Number(100000)),
                        x6:Number(temdata[16]),
                        y6:Number(temdata[17]),
                        z6:Number(Number(temdata[18])+Number(100000)),
                        x7:Number(temdata[19]),
                        y7:Number(temdata[20]),
                        z7:Number(Number(temdata[21])+Number(100000)),
                        x8:Number(temdata[22]),
                        y8:Number(temdata[23]),
                        z8:Number(Number(temdata[24])+Number(100000))
                    }
                    dstxt.push(dstxt0)
                    }

                }
            }
    })
    return  dstxt
}
// 墩帽
// var dmtxt:dm[]=[]
// export function readdmTxt(){
//     $.ajax({
//         async:false,
//         url:"./桥梁/tkdata33.txt",
//         success: function (data:any) {
//             var tabledata = data.split('\r\n')
//             for (var i= 0; i<tabledata.length;i++)
//             {
//                 if (tabledata[i].indexOf("桥台墩帽")!=-1) {
//                     var temdata = tabledata[i].split(',');
//                     let dmtxt0: dm = {
//                         name: temdata[0],
//                         x1: temdata[1],
//                         y1: temdata[2],
//                         z1: temdata[3],
//                         x2: temdata[4],
//                         y2: temdata[5],
//                         z2: temdata[6],
//                         x3: temdata[7],
//                         y3: temdata[8],
//                         z3: temdata[9],
//                         x4: temdata[10],
//                         y4: temdata[11],
//                         z4: temdata[12],
//                         x5: temdata[13],
//                         y5: temdata[14],
//                         z5: temdata[15],
//                         x6: temdata[16],
//                         y6: temdata[17],
//                         z6: temdata[18],
//                         x7: temdata[19],
//                         y7: temdata[20],
//                         z7: temdata[21],
//                         x8: temdata[22],
//                         y8: temdata[23],
//                         z8: temdata[24]
//                     }
//                     dmtxt.push(dmtxt0)
//                 }
//             }
//         }
//     })
//     return  dmtxt
// }
// 胶垫
// 桥橡胶垫
var jdtxt:jd[]=[]
export function readjdTxt(){
    $.ajax({
        async:false,
        url:"/tkdata33.txt",
        success: function (data:any) {
        var tabledata = data.split('\r\n')
        for (var i= 0; i<tabledata.length;i++)
        {
            if (tabledata[i].indexOf("桥橡胶垫")!=-1) {
                var temdata = tabledata[i].split(',');
                let jdtxt0: jd = {
                    name:temdata[0],
                    x1: Number(temdata[1]),
                    y1: Number(temdata[2]),
                    z1: Number(temdata[3]),
                    hei: Number(temdata[4])
                }
                jdtxt.push(jdtxt0)
             }
            }
        }
    })
    return  jdtxt
}
// 防撞墙
var fzqtxt:fzq[]=[]
export function readfzqTxt(){
    $.ajax({
        async:false,
        url:"/tkdata33.txt",
        success: function (data:any) {
            var tabledata = data.split('\r\n')
            for (var i= 0; i<tabledata.length;i++)
            {
                if (tabledata[i].indexOf("桥防撞墙")!=-1)
                {
                    var temdata = tabledata[i].split(',');
                    let fzqtxt0:fzq= {
                        name:temdata[0],
                        x1:Number(temdata[1]),
                        y1:Number(temdata[2]),
                        z1:Number(Number(temdata[3])+Number(100000)),
                        x2:Number(temdata[4]),
                        y2:Number(temdata[5]),
                        z2:Number(Number(temdata[6])+Number(100000)),
                        x3:Number(temdata[7]),
                        y3:Number(temdata[8]),
                        z3:Number(Number(temdata[9])+Number(100000)),
                        x4:Number(temdata[10]),
                        y4:Number(temdata[11]),
                        z4:Number(Number(temdata[12])+Number(100000)),
                        x5:Number(temdata[13]),
                        y5:Number(temdata[14]),
                        z5:Number(Number(temdata[15])+Number(100000)),
                        x6:Number(temdata[16]),
                        y6:Number(temdata[17]),
                        z6:Number(Number(temdata[18])+Number(100000)),
                        x7:Number(temdata[19]),
                        y7:Number(temdata[20]),
                        z7:Number(Number(temdata[21])+Number(100000)),
                        x8:Number(temdata[22]),
                        y8:Number(temdata[23]),
                        z8:Number(Number(temdata[24])+Number(100000))
                    }
                    fzqtxt.push(fzqtxt0)
                }

            }
        }
    })
    return  fzqtxt
}
// 桥墩挡块
var qddktxt:qddk[]=[]
export function readqddkTxt(){
    $.ajax({
        async:false,
        url:"/tkdata33.txt",
        success: function (data:any) {
            var tabledata = data.split('\r\n')
            for (var i= 0; i<tabledata.length;i++)
            {
                if (tabledata[i].indexOf("桥墩挡块")!=-1) {
                    var temdata = tabledata[i].split(',');
                    let qddktxt0: qddk = {
                        name: temdata[0],
                        x1:Number(temdata[1]),
                        y1:Number(temdata[2]),
                        z1:Number(Number(temdata[3])+Number(100000)),
                        x2:Number(temdata[4]),
                        y2:Number(temdata[5]),
                        z2:Number(Number(temdata[6])+Number(100000)),
                        x3:Number(temdata[7]),
                        y3:Number(temdata[8]),
                        z3:Number(Number(temdata[9])+Number(100000)),
                        x4:Number(temdata[10]),
                        y4:Number(temdata[11]),
                        z4:Number(Number(temdata[12])+Number(100000)),
                        x5:Number(temdata[13]),
                        y5:Number(temdata[14]),
                        z5:Number(Number(temdata[15])+Number(100000)),
                        x6:Number(temdata[16]),
                        y6:Number(temdata[17]),
                        z6:Number(Number(temdata[18])+Number(100000)),
                        x7:Number(temdata[19]),
                        y7:Number(temdata[20]),
                        z7:Number(Number(temdata[21])+Number(100000)),
                        x8:Number(temdata[22]),
                        y8:Number(temdata[23]),
                        z8:Number(Number(temdata[24])+Number(100000))
                    }
                    qddktxt.push(qddktxt0)
                }
            }
        }
    })
    return  qddktxt
}
// 桥台墩帽
var qtdmtxt:qtdm[]=[]
export function readqtdmTxt(){
    $.ajax({
        async:false,
        url:"/tkdata33.txt",
        success: function (data:any) {
            var tabledata = data.split('\r\n')
            for (var i= 0; i<tabledata.length;i++)
            {
                if (tabledata[i].indexOf("桥台墩帽")!=-1) {
                    var temdata = tabledata[i].split(',');
                    let qtdmtxt0: qtdm = {
                        name: temdata[0],
                        x1:Number(temdata[1]),
                        y1:Number(temdata[2]),
                        z1:Number(Number(temdata[3])+Number(100000)),
                        x2:Number(temdata[4]),
                        y2:Number(temdata[5]),
                        z2:Number(Number(temdata[6])+Number(100000)),
                        x3:Number(temdata[7]),
                        y3:Number(temdata[8]),
                        z3:Number(Number(temdata[9])+Number(100000)),
                        x4:Number(temdata[10]),
                        y4:Number(temdata[11]),
                        z4:Number(Number(temdata[12])+Number(100000)),
                        x5:Number(temdata[13]),
                        y5:Number(temdata[14]),
                        z5:Number(Number(temdata[15])+Number(100000)),
                        x6:Number(temdata[16]),
                        y6:Number(temdata[17]),
                        z6:Number(Number(temdata[18])+Number(100000)),
                        x7:Number(temdata[19]),
                        y7:Number(temdata[20]),
                        z7:Number(Number(temdata[21])+Number(100000)),
                        x8:Number(temdata[22]),
                        y8:Number(temdata[23]),
                        z8:Number(Number(temdata[24])+Number(100000))
                    }
                    qtdmtxt.push(qtdmtxt0)
                }
            }
        }
    })
    return  qtdmtxt
}
// 桥台墩身
var qtdstxt:qtds[]=[]
export function readqtdsTxt(){
    $.ajax({
        async:false,
        url:"/tkdata33.txt",
        success: function (data:any) {
            var tabledata = data.split('\r\n')
            for (var i= 0; i<tabledata.length;i++)
            {
                if (tabledata[i].indexOf("桥台墩身")!=-1) {
                    var temdata = tabledata[i].split(',');
                    let qtdstxt0: qtds = {
                        name: temdata[0],
                        x1:Number(temdata[1]),
                        y1:Number(temdata[2]),
                        z1:Number(Number(temdata[3])+Number(100000)),
                        x2:Number(temdata[4]),
                        y2:Number(temdata[5]),
                        z2:Number(Number(temdata[6])+Number(100000)),
                        x3:Number(temdata[7]),
                        y3:Number(temdata[8]),
                        z3:Number(Number(temdata[9])+Number(100000)),
                        x4:Number(temdata[10]),
                        y4:Number(temdata[11]),
                        z4:Number(Number(temdata[12])+Number(100000)),
                        x5:Number(temdata[13]),
                        y5:Number(temdata[14]),
                        z5:Number(Number(temdata[15])+Number(100000)),
                        x6:Number(temdata[16]),
                        y6:Number(temdata[17]),
                        z6:Number(Number(temdata[18])+Number(100000)),
                        x7:Number(temdata[19]),
                        y7:Number(temdata[20]),
                        z7:Number(Number(temdata[21])+Number(100000)),
                        x8:Number(temdata[22]),
                        y8:Number(temdata[23]),
                        z8:Number(Number(temdata[24])+Number(100000))
                    }
                    qtdstxt.push(qtdstxt0)
                }
            }
        }
    })
    return  qtdstxt
}
// 桥台承台
var qtcttxt:qtct[]=[]
export function readqtctTxt(){
    $.ajax({
        async:false,
        url:"/tkdata33.txt",
        success: function (data:any) {
            var tabledata = data.split('\r\n')
            for (var i= 0; i<tabledata.length;i++)
            {
                if (tabledata[i].indexOf("桥台承台")!=-1) {
                    var temdata = tabledata[i].split(',');
                    let qtcttxt0: qtct = {
                        name: temdata[0],
                        x1:Number(temdata[1]),
                        y1:Number(temdata[2]),
                        z1:Number(Number(temdata[3])+Number(100000)),
                        x2:Number(temdata[4]),
                        y2:Number(temdata[5]),
                        z2:Number(Number(temdata[6])+Number(100000)),
                        x3:Number(temdata[7]),
                        y3:Number(temdata[8]),
                        z3:Number(Number(temdata[9])+Number(100000)),
                        x4:Number(temdata[10]),
                        y4:Number(temdata[11]),
                        z4:Number(Number(temdata[12])+Number(100000)),
                        x5:Number(temdata[13]),
                        y5:Number(temdata[14]),
                        z5:Number(Number(temdata[15])+Number(100000)),
                        x6:Number(temdata[16]),
                        y6:Number(temdata[17]),
                        z6:Number(Number(temdata[18])+Number(100000)),
                        x7:Number(temdata[19]),
                        y7:Number(temdata[20]),
                        z7:Number(Number(temdata[21])+Number(100000)),
                        x8:Number(temdata[22]),
                        y8:Number(temdata[23]),
                        z8:Number(Number(temdata[24])+Number(100000))
                    }
                    qtcttxt.push(qtcttxt0)
                }
            }
        }
    })
    return  qtcttxt
}
// 桥墩墩帽
var qddmtxt:qddm[]=[]
export function readqddmTxt(){
    $.ajax({
        async:false,
        url:"/tkdata33.txt",
        success: function (data:any) {
            var tabledata = data.split('\r\n')
            for (var i= 0; i<tabledata.length;i++)
            {
                if (tabledata[i].indexOf("桥墩墩帽")!=-1) {
                    var temdata = tabledata[i].split(',');
                    let qddmtxt0: qddm = {
                        name: temdata[0],
                        x1:Number(temdata[1]),
                        y1:Number(temdata[2]),
                        z1:Number(Number(temdata[3])+Number(100000)),
                        x2:Number(temdata[4]),
                        y2:Number(temdata[5]),
                        z2:Number(Number(temdata[6])+Number(100000)),
                        x3:Number(temdata[7]),
                        y3:Number(temdata[8]),
                        z3:Number(Number(temdata[9])+Number(100000)),
                        x4:Number(temdata[10]),
                        y4:Number(temdata[11]),
                        z4:Number(Number(temdata[12])+Number(100000)),
                        x5:Number(temdata[13]),
                        y5:Number(temdata[14]),
                        z5:Number(Number(temdata[15])+Number(100000)),
                        x6:Number(temdata[16]),
                        y6:Number(temdata[17]),
                        z6:Number(Number(temdata[18])+Number(100000)),
                        x7:Number(temdata[19]),
                        y7:Number(temdata[20]),
                        z7:Number(Number(temdata[21])+Number(100000)),
                        x8:Number(temdata[22]),
                        y8:Number(temdata[23]),
                        z8:Number(Number(temdata[24])+Number(100000))
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
        url:"/tkdata33.txt",
        success: function (data:any) {
            var tabledata = data.split('\r\n')
            for (var i= 0; i<tabledata.length;i++)
            {
                if (tabledata[i].indexOf("桥墩墩身")!=-1) {
                    var temdata = tabledata[i].split(',');
                    let qddstxt0: qdds = {
                        name: temdata[0],
                        x1:Number(temdata[1]),
                        y1:Number(temdata[2]),
                        z1:Number(Number(temdata[3])+Number(100000)),
                        x2:Number(temdata[4]),
                        y2:Number(temdata[5]),
                        z2:Number(Number(temdata[6])+Number(100000)),
                        x3:Number(temdata[7]),
                        y3:Number(temdata[8]),
                        z3:Number(Number(temdata[9])+Number(100000)),
                        x4:Number(temdata[10]),
                        y4:Number(temdata[11]),
                        z4:Number(Number(temdata[12])+Number(100000)),
                        x5:Number(temdata[13]),
                        y5:Number(temdata[14]),
                        z5:Number(Number(temdata[15])+Number(100000)),
                        x6:Number(temdata[16]),
                        y6:Number(temdata[17]),
                        z6:Number(Number(temdata[18])+Number(100000)),
                        x7:Number(temdata[19]),
                        y7:Number(temdata[20]),
                        z7:Number(Number(temdata[21])+Number(100000)),
                        x8:Number(temdata[22]),
                        y8:Number(temdata[23]),
                        z8:Number(Number(temdata[24])+Number(100000))
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
        url:"/tkdata33.txt",
        success: function (data:any) {
            var tabledata = data.split('\r\n')
            for (var i= 0; i<tabledata.length;i++)
            {
                if (tabledata[i].indexOf("桥墩承台")!=-1) {
                    var temdata = tabledata[i].split(',');
                    let qdcttxt0: qdct = {
                        name: temdata[0],
                        x1:Number(temdata[1]),
                        y1:Number(temdata[2]),
                        z1:Number(Number(temdata[3])+Number(100000)),
                        x2:Number(temdata[4]),
                        y2:Number(temdata[5]),
                        z2:Number(Number(temdata[6])+Number(100000)),
                        x3:Number(temdata[7]),
                        y3:Number(temdata[8]),
                        z3:Number(Number(temdata[9])+Number(100000)),
                        x4:Number(temdata[10]),
                        y4:Number(temdata[11]),
                        z4:Number(Number(temdata[12])+Number(100000)),
                        x5:Number(temdata[13]),
                        y5:Number(temdata[14]),
                        z5:Number(Number(temdata[15])+Number(100000)),
                        x6:Number(temdata[16]),
                        y6:Number(temdata[17]),
                        z6:Number(Number(temdata[18])+Number(100000)),
                        x7:Number(temdata[19]),
                        y7:Number(temdata[20]),
                        z7:Number(Number(temdata[21])+Number(100000)),
                        x8:Number(temdata[22]),
                        y8:Number(temdata[23]),
                        z8:Number(Number(temdata[24])+Number(100000))
                    }
                    qdcttxt.push(qdcttxt0)
                }
            }
        }
    })
    return  qdcttxt
}
