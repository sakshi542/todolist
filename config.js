module.exports=getDay
function getDay(){

    let date=new Date();
        const options={
            weekday: "long",
            day: "numeric",
            month: "long"
        }
        let day=date.toLocaleDateString("en-US",options);
        return day;
    }