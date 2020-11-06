// 返回时间差
function datedifference(sDate1, sDate2) { 
    let dateSpan,
        tempDate,
        iDays;
    sDate1 = Date.parse(sDate1);
    sDate2 = Date.parse(sDate2);
    dateSpan = sDate2 - sDate1;
    dateSpan = Math.abs(dateSpan);
    iDays = Math.floor(dateSpan / (24 * 3600 * 1000));
    return iDays
};
// 返回当前时间 yera-month-day
let mydate=new Date();
let dateYear=mydate.getFullYear();
let dateDate=mydate.getDate();
let dateMonth=mydate.getMonth();
let dateNow=dateYear+'-'+dateMonth+'-'+dateDate;
// 获取对象
let date_list= document.getElementsByClassName('Article_PublishDate');

for(let i=0;i<date_list.length;i++){
    let date_list_value=date_list[i].innerText;
    let days=datedifference(dateNow,date_list_value);
    if(days<=7){
        let parentele=date_list[1].parentElement.parentElement;
        parentele.setAttribute("class",parentele.getAttribute("class")+" "+color_red);
    }
}
