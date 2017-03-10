function getAnnyang(){
  console.log("we have annyang", annyang)
  var commands = {
    'alohomora': function() { alert('open!'); },
    'stupefy': function() { alert('freeze!'); },
    'expelliarmus': function() { alert('foosh'); },
    'expecto patronum': function() { alert('patronus'); },
    'red': function() { alert('red'); }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();

  // Tell KITT to use annyang
  SpeechKITT.annyang();

  // Define a stylesheet for KITT to use
  SpeechKITT.setStylesheet('//cdnjs.cloudflare.com/ajax/libs/SpeechKITT/0.3.0/themes/flat.css');

  // Render KITT's interface
  SpeechKITT.vroom();
  return annyang;
}

annyang.addCallback('result', function(phrases) {
  console.log("I think the user said::: ", phrases[0]);
  console.log("But then again, it could be any of the following: ", phrases);
});
