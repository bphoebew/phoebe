

var profile = $('.profile');
var pass = $('.hide');
var track = 0;

profile.on("click", showPass);

function showPass(){
  if (track == 0){
    pass.css('visibility', 'visible');
    track++;
  }else if (track == 1){
    pass.css('visibility', 'hidden');
    track--;
  }
}
