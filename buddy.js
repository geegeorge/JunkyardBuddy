$(document).ready(function() {
    var vin = $('#vin').val();
    $('#submit').click(function functionName() {
        $.ajax(`https://api.edmunds.com/api/vehicle/v2/vins/${vin}?fmt=json&api_key=62kt264x2ewr8twtfdnt9jn4`)
            .then(function(data) {
              var years = data.years;
              var engine = data.engine;
              var transmisson = data.transmisson;
              var make = data.make.name;
              var rpm = data.rpm
              var year = data.years[0].year;
              var drivet = data.drivenWheels;
              var valve = data.valve;
              var engtype = engine.type
              var cylinder = engine.cylinder;
              var config = engine.configuration;
              var compression = engine.compressionRatio;
              var displacement = engine.displacement;
              var hp = engine.horsepower + " @ " + engine.rpm.horsepower;
              var gear = engine.valve.gear;
              var timing = engine.valve.timing;
              var torque = engine.torque + " @ " + engine.rpm.torque;
              var trans = data.transmission.transmissionType;
              var speed = data.transmission.numberOfSpeeds;
              var model = data.model.name;


              $('.mover').append(`<li><p class="special"><b>YEAR:   </b><em>${year}</em></p></li>`);
              $('.mover').append(`<li><p class="special"><b>MAKE:    </b><em>${make}</em></p></li>`);
              $('.mover').append(`<li><p class="special"><b>DRIVETRAIN:   </b><em>${drivet}</em></p></li>`);
              $('.mover').append(`<li><p class="special"><b>FUEL:   </b><em>${engtype}</em></p></li>`);
              $('.mover').append(`<li><p class="special"><b>ENGINE STYLE:    </b><em>${config}</em></p></li>`);
              $('.mover').append(`<li><p class="special"><b>COMPRESSION:    </b><em>${compression}</em></p></li>`);
              $('.mover').append(`<li><p class="special"><b>#OF CYLINDERS:    </b><em>${cylinder}</em></p></li>`);
              $('.mover').append(`<li><p class="special"><b>CAM STYLE:    </b><em>${gear}</em></p></li>`);
              $('.mover').append(`<li><p class="special"><b>YEAR:    </b><em>${timing}</em></p></li>`);
              $('.mover').append(`<li><p class="special"><b>TORQUE:    </b><em>${torque}</em></p></li>`);
              $('.mover').append(`<li><p class="special"><b>SAE HORSEPOWER:    </b><em>${hp}</em></p></li>`);
              $('.shaker').append(`<li><p class="special"><b>TRANSMISSION:    </b><em>${trans}</em></p></li>`);
              $('.shaker').append(`<li><p class="special"><b># OF FWD GEARS:    </b><em>${speed}</em></p></li>`);

              return data;
            }).then((data) => {
              var styleId = data.years[0]['styles'][0]['id'];

              $.ajax(`https://api.edmunds.com/api/media/v2/styles/${styleId}/photos?shottype=E&pagenum=1&pagesize=1&view=basic&fmt=json&api_key=62kt264x2ewr8twtfdnt9jn4`).then((data1) => {
                    var photos = data1.photos[0];
                    var href1 = photos.sources[0].link.href;

                $('.engine').append('<img src="https://media.ed.edmunds-media.com' + href1 + '">');

                return data1
              }).then((data) => {
                $.ajax(`https://api.edmunds.com/api/media/v2/styles/${styleId}/photos?shottype=FQ&pagenum=1&pagesize=1&view=basic&fmt=json&api_key=62kt264x2ewr8twtfdnt9jn4`).then((data2) => {
                        var photos = data2.photos[0];
                        var href1 = photos.sources[0].link.href;
                  $('.front').append('<img src="https://media.ed.edmunds-media.com' + href1 + '">')

                  return data2
                }).then((data) => {
                  $.ajax(`https://api.edmunds.com/api/media/v2/styles/${styleId}/photos?category=exterior&width=131&shottype=RQ&pagenum=1&pagesize=1&view=basic&fmt=json&api_key=62kt264x2ewr8twtfdnt9jn4`).then((data3) => {
                            var photos = data3.photos[0];
                            var href1 = photos.sources[0].link.href;
                    $('.rear').append('<img src="https://media.ed.edmunds-media.com' + href1 + '">')

                    return data3
                  })
                })
              })
            })
    })
});


// key2 kfzxy7a96tqskj6xtvyev7up
// key1 62kt264x2ewr8twtfdnt9jn4
// success: function(data) {console.log(data);
//   console.log(infoPull(vin));
