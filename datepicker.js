var getDates = function(startDate, endDate) {
    var dates = [],
        currentDate = startDate,
        addDays = function(days) {
          var date = new Date(this.valueOf());
          date.setDate(date.getDate() + days);
          return date;
        };
    while (currentDate <= endDate) {
      dates.push(currentDate);
      currentDate = addDays.call(currentDate, 1);
    }
    return dates;
  };


  var date1=new Date("2017-11-05T22:00:00.000Z");
  var date2=new Date("2017-11-07T22:00:00.000Z");
  var dates = getDates(date1, date2);                                                                                                           
  dates.forEach(function(date) {
    console.log(date);
  });