var func1 = (error,script) => {
    console.log('Hello from loaded script. I am available after the onload is complete');
        
    if (error) {
        console.log(error);
    } else {
        console.log(script);
    }
};