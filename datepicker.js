// var getDates = function(startDate, endDate) {
//     var dates = [],
//         currentDate = startDate,
//         addDays = function(days) {
//           var date = new Date(this.valueOf());
//           date.setDate(date.getDate() + days);
//           return date;
//         };
//     while (currentDate <= endDate) {
//       dates.push(currentDate);
//       currentDate = addDays.call(currentDate, 1);
//     }
//     return dates;
//   };


//   var date1=new Date("2017-11-05T22:00:00.000Z");
//   var date2=new Date("2017-11-07T22:00:00.000Z");
//   var dates = getDates(date1, date2);                                                                                                           
//   dates.forEach(function(date) {
//     console.log(date);
//   });



// a.forEach(function(element) {
//   return element.find(el=>el==b[el]);
// }, this);
// var av = false;
// for(var i=0; i<b.length; i++){
//   console.log('b='+b[i]);
// for(var index=0; index<a.length; index++){
//     if(a[index][a[index].length-1]==b[i]){

//       console.log('ima');
//       av=true;
//     }
//   }
// }




var a = [[1], [2], [3]];
var b = [5, 1, 6];

var getResult = function () {

  a.forEach(function (element) {
    element.forEach(function (el) {
      console.log(el)
      
      return b.some(e=> e===el);

    });
  });
}
var ad=getResult();
console.log(ad)
b.forEach(function(e){
  console.log(e);
})