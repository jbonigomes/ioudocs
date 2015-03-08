(function () {

  fulldate = moment().format('dddd, D MMM, YYYY');
  fullyear = moment().format('YYYY');
  $('.fulldate').html(fulldate);
  $('.year').html(fullyear);

})();
