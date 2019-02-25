function loadScript(src, callback) //define call back
{ 
  console.log('You see me first');
  var script = document.createElement('script');
  script.src = src;
    
  setTimeout(() => {
      console.log('I slept too much so I am the last in the queue');
  }, 2000);
    
  script.onload = () => callback(null, script); //call callback
  script.onerror = () => callback(new Error(`Error loading script ${src}`));
  console.log('You see me second. So you can see onload and onerror are async');
  document.head.append(script);
}

loadScript('loadedScript.js', (error, script) => {
    func1(error, script);
}); //passing callback