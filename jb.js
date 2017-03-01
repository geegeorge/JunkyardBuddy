$(document).ready(function() {


var vin = $('#vin').val();
    var infoPull = function(vin) {
        console.log(vin);
        var results = $('#results');
        var vinReturn = vin.results;
    };

    $('#submit').click(function(){
      // let search = $(search).val();
      console.log($('#vin').val())


      $.ajax({
        //Request type
        method: "GET",
        //DATA TYPE BACK FROM API
        dataType: "JSON",
        //API END POINT
        url: `https://api.edmunds.com/api/vehicle/v2/vins/${vin}?fmt=json&api_key=62kt264x2ewr8twtfdnt9jn4`,
        //IF IT WORKS DO THIS

        success: function(data) {console.log(data);
          console.log(infoPull(vin));
        },
        //ELSE
        error: function(){
          console.log("error")
        }
      })
    })
    //YOUR INFO FOR CALLS
    // curl --get --include 'https://vindecoder.p.mashape.com/decode_vin?vin=4F2YU09161KM33122' \
    //   -H 'X-Mashape-Key: o3x6uMRqccmshUafrrx697nZuGcPp1Sp6IbjsnNmI8qPLz7RWE' \
    //   -H 'Accept: application/json'
})
