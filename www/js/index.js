$('#play-pause').click(function(){
  var classeAtual = $(this).attr('class');
  var v = document.getElementById('demo');
		
  
  if (classeAtual=='play'){
    v.play();
  } else
  {
    v.pause();
  }    
  $(this).toggleClass('play').toggleClass('pause');
  $(this).attr('title', classeAtual=='play'? 'Pause':'Play');
});