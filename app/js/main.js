(function() {

  fullyear = moment().format('YYYY');
  fulldate = moment().format('dddd, Do MMM, YYYY');

  $('.year').html(fullyear);
  $('.fulldate').html(fulldate);

})();
