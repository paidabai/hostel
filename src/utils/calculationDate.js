// 计算2个时间戳之间的日期
export default (date1,date2) => {
    let max, min
    if(date1>date2){
        max = date1
        min = date2
    }else{
        max = date2
        min = date1
    }
    return Math.round((max-min)/(24*60*60*1000))
}