function NowToDate(date1,date2)
{
    let d1 = new Date(date1)
    let d2 = new Date(date2)

    let s = Math.floor((d2-d1)/1000)
    let min = Math.floor((d2-d1)/1000/60)
    let h = Math.floor((d2-d1)/1000/60/60)
    let d = Math.floor((d2-d1)/1000/60/60/24)
    let m = Math.floor((d2-d1)/1000/60/60/24/30.44)
    let y = Math.floor(((d2-d1)/1000/60/60/24/30.44/12*10))/10

    return {
        s:s,
        min:min,
        h:h,
        d:d,
        m:m,
        y:y
    }
}