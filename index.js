const myImage = new Image();
myImage.src = 'data:image/png;base64,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';

myImage.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 706;
    
    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let particlesArray = [];
    const numberOfParticles = 5000;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    let mappedImage = [];
    for(let y = 0; y < canvas.height; y++){
        let row = [];

        for(let x = 0; x < canvas.width; x++){
              const red = pixels.data[(y * 4 * pixels.width) + (x*4)];
              const green = pixels.data[(y * 4 * pixels.width) + (x*4 + 1)];
              const blue = pixels.data[(y * 4 * pixels.width) + (x*4 + 2)];
              const brightness = calculateRelativeBrightness(red,green,blue);
              const cell = [
                  cellBrightness = brightness   
              ];
              row.push(cell);
        }
        mappedImage.push(row);
    }
    //console.log(mappedImage);
    
    function calculateRelativeBrightness(red, green,blue){
        return Math.sqrt(
            (red * red) * 0.299 +
            (green * green) * 0.587 +
            (blue * blue) * 0.114
        )/100;
    }
    
    const movementType = 0; // 0 = top/down; 1 = left/right; 2 = bottom/up; 3 = right/left
    class Particle{
        constructor(){
            if(movementType == 0){
                this.x = Math.random() * (canvas.width - 1); 
                this.y = 0;
            }
            else if(movementType == 1){
                this.x = canvas.width -1; 
                this.y = Math.random() * (canvas.height - 1);
            }
            else if(movementType == 2){
                this.x = Math.random() * (canvas.width - 1); 
                this.y = canvas.height - 1;
            }
            else if(movementType == 3){
                this.x = 0; 
                this.y = Math.random() * (canvas.height - 1);
            }
            this.speed = 0;
            this.velocity = Math.random() * 0.5;
            this.size = Math.random() * 1.5 + 1;
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);
            //this.prevMovement = 0;
        }

     
        update () {
            
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);

            this.speed = mappedImage[this.position1][this.position2][0];

            
            let movement = (2.5 - this.speed) + this.velocity ;
             /* to add some sparkle
            if(this.prevMovement > movement){
                ctx.fillStyle='blue';
                ctx.fill();

            }
            */

            this.prevMovement = movement;
            
            switch(movementType){
                case 0:
                    this.y += movement;
                    if(this.y >= canvas.height - 1){
                        this.y = 0 ;
                        this.x = Math.random() * (canvas.width - 1);
                    }
                break;
                case 1:
                    this.x -= movement;
                    if(this.x <= 0){
                        this.x = canvas.width - 1 ;
                        this.y = Math.random() * (canvas.height - 1);
                    }
                break;
                case 2:
                    this.y -= movement;
                    if(this.y <= 0){
                        this.y = canvas.height - 1 ;
                        this.x = Math.random() * (canvas.width - 1);
                    }
                break;
                case 3:
                    this.x += movement;
                    if(this.x >= canvas.width - 1){
                        this.x = 0 ;
                        this.y = Math.random() * (canvas.height - 1);
                    }
                
            }
            
        }

        move(){
            
        }
       draw(){
            ctx.beginPath();
            ctx.fillStyle = 'white';
            ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            ctx.fill();
        }

    }
    
    function init(){
        for(let i = 0; i < numberOfParticles; i++){
            particlesArray.push(new Particle());
            
        }
    }

    init();

   
    function animate () {
        
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = 'rgb(0, 0,0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.2; 
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            ctx.globalAlpha = particlesArray[i].speed * 0.5; 
            particlesArray[i].draw();
        }
        requestAnimationFrame( animate );
    }
    
    animate();

});



/**
 * 
 *          CODE WITH COMMENTS 
 * 
 * const myImage = new Image();
//url to avoid missing pic errors
//now img, url string, is part of js file


myImage.src = 'data:image/png;base64,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';

myImage.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 706;
    
    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);

    //scans canvas for pixels
    // returns array like object that holds: r,g,b,a value for each pixel in scanned area
    // here we scan all of canvas
    // data is saved in fours (r,g,b,a) .
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    //console.log(pixels); to see pixel data in console
    let particlesArray = [];
    const numberOfParticles = 5000;
    
    // dont need image after it has been mapped
    ctx.clearRect(0,0,canvas.width,canvas.height);


    // will hold pixels brightness values; along with x and y coords 
    // can you so compare each partricles x and y, to control their movement
    let mappedImage = [];

    // cycle through each pixel and make it grayscale-------------------------
    for(let y = 0; y < canvas.height; y++){
        let row = [];

        for(let x = 0; x < canvas.width; x++){
            // skipping array index by four, can improve(maybe modlous?)
            // y section for row, x for current item in row
              const red = pixels.data[(y * 4 * pixels.width) + (x*4)];
              const green = pixels.data[(y * 4 * pixels.width) + (x*4 + 1)];
              const blue = pixels.data[(y * 4 * pixels.width) + (x*4 + 2)];
              //  const alpha = pixels.data[(y * 4 * pixels.width) + (x*4 + 3)];
              const brightness = calculateRelativeBrightness(red,green,blue);
              // we can add the colors to use in cell
              const cell = [
                  cellBrightness = brightness   
              ];
              row.push(cell);
        }
        mappedImage.push(row);
    }
    //console.log(mappedImage);
    


    // our eyes do not precieve the same of amount of brightness for each read, green, or blue
    // we will create utility function that will take rgb
    // and adjust based on human brightness perception
    // and return single digit for brightness
    // formula can be found online
    // another apporach is adding rgb and dividing to get average
    // but then you got to adjust rest of code, ie particle fall speed
    function calculateRelativeBrightness(red, green,blue){
        return Math.sqrt(
            (red * red) * 0.299 +
            (green * green) * 0.587 +
            (blue * blue) * 0.114
        )/100;
    }
    //--------------------------------------------------------------------------

    // will use to create 5000 similiary particle objects
    class Particle{
        // constructor is manadatory for js class
        constructor(){
            // to make them fall from top to bottom, can change
            // to up and down, bottom and up, or circles
            this.x = Math.random() * canvas.width; 
            this.y = 0;
            this.speed = 0;
            // will make particles fall in dark areas fast
            // and in brighter parts much slower
            this.velocity = Math.random() * 0.5;
            this.size = Math.random() * 1.5 + 1;

            // to ensure position with no decimal points
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);
        }

     
        update () {
            // to ensure position with no decimal points
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);

            this.speed = mappedImage[this.position1][this.position2][0];

            // bright particles will move slowly + randomization
            let movement = (2.5 - this.speed) + this.velocity ;

            this.y += movement;
            if(this.y >= canvas.height){
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }
        }
       draw(){
            ctx.beginPath();
            ctx.fillStyle = 'white';
            ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            ctx.fill();
        }

    }
    
    function init(){
        for(let i = 0; i < numberOfParticles; i++){
            particlesArray.push(new Particle());
            
        }
    }

    init();

    // main animation function
    function animate () {
        //ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = 'rgb(0, 0,0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.2; 
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            // more particles in image
            ctx.globalAlpha = particlesArray[i].speed * 0.5; // really cool
            particlesArray[i].draw();
        }
        requestAnimationFrame( animate );
    }
    
    animate();

});
 */


/** original working
 * 
 * myImage.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 706;
    
    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);

    //scans canvas for pixels
    // returns array like object that holds: r,g,b,a value for each pixel in scanned area
    // here we scan all of canvas
    // data is saved in fours (r,g,b,a) .
    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
    //console.log(pixels); to see pixel data in console
    let particlesArray = [];
    const numberOfParticles = 5000;
    
    // will hold pixels brightness values; along with x and y coords 
    // can you so compare each partricles x and y, to control their movement
    let mappedImage = [];

    // cycle through each pixel and make it grayscale-------------------------
    for(let y = 0; y < canvas.height; y++){
        let row = [];

        for(let x = 0; x < canvas.width; x++){
            // skipping array index by four, can improve(maybe modlous?)
            // y section for row, x for current item in row
              const red = pixels.data[(y * 4 * pixels.width) + (x*4)];
              const green = pixels.data[(y * 4 * pixels.width) + (x*4 + 1)];
              const blue = pixels.data[(y * 4 * pixels.width) + (x*4 + 2)];
              //  const alpha = pixels.data[(y * 4 * pixels.width) + (x*4 + 3)];
              const brightness = calculateRelativeBrightness(red,green,blue);
              // we can add the colors to use in cell
              const cell = [
                  cellBrightness = brightness   
              ];
              row.push(cell);
        }
        mappedImage.push(row);
    }
    //console.log(mappedImage);
    


    // our eyes do not precieve the same of amount of brightness for each read, green, or blue
    // we will create utility function that will take rgb
    // and adjust based on human brightness perception
    // and return single digit for brightness
    // formula can be found online
    // another apporach is adding rgb and dividing to get average
    // but then you got to adjust rest of code, ie particle fall speed
    function calculateRelativeBrightness(red, green,blue){
        return Math.sqrt(
            (red * red) * 0.299 +
            (green * green) * 0.587 +
            (blue * blue) * 0.114
        )/100;
    }
    //--------------------------------------------------------------------------

    // will use to create 5000 similiary particle objects
    class Particle{
        // constructor is manadatory for js class
        constructor(){
            // to make them fall from top to bottom, can change
            // to up and down, bottom and up, or circles
            this.x = Math.random() * canvas.width; 
            this.y = 0;
            this.speed = 0;
            // will make particles fall in dark areas fast
            // and in brighter parts much slower
            this.velocity = Math.random() * 0.5;
            this.size = Math.random() * 1.5 + 1;

            // to ensure position with no decimal points
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);
        }

     
        update () {
            // to ensure position with no decimal points
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);

            this.speed = mappedImage[this.position1][this.position2][0];

            // bright particles will move slowly + randomization
            let movement = (2.5 - this.speed) + this.velocity ;

            this.y += movement;
            if(this.y >= canvas.height){
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }
        }
       draw(){
            ctx.beginPath();
            ctx.fillStyle = 'white';
            ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            ctx.fill();
        }

    }
    
    function init(){
        for(let i = 0; i < numberOfParticles; i++){
            particlesArray.push(new Particle());
            
        }
    }

    init();

    // main animation function
    function animate () {
        //ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = 'rgb(0, 0,0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            
            particlesArray[i].draw();
        }
        requestAnimationFrame( animate );
    }
    
    animate();

});

 */



/* Cool snow falling affect


const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 706;
    
    ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);


    let particlesArray = [];
    const numberOfParticles = 5000;
    


    // will use to create 5000 similiary particle objects
    class Particle{
        // constructor is manadatory for js class
        constructor(){
            // to make them fall from top to bottom, can change
            // to up and down, bottom and up, or circles
            this.x = Math.random() * canvas.width; 
            this.y = 0;
            this.speed = 0;
            // will make particles fall in dark areas fast
            // and in brighter parts much slower
            this.velocity = Math.random() * 5;
            this.size = Math.random() * 1.5 + 1;
        }

     
        update () {
            this.y += this.velocity;
            if(this.y >= canvas.height){
                this.y = 0;
                this.x = Math.random() * canvas.width;
            }
        }
       draw(){
            ctx.beginPath();
            ctx.fillStyle = 'white';
            ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            ctx.fill();
        }

    }
    
    function init(){
        for(let i = 0; i < numberOfParticles; i++){
            particlesArray.push(new Particle());
            
        }
    }

    init();

    // main animation function
    function animate () {
        //ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.05;
        ctx.fillStyle = 'rgb(0, 0,0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            
            particlesArray[i].draw();
        }
        requestAnimationFrame( animate );
    }
    
    animate();



*/