## Basic Component

HTML is used for the content of a web page.

1. The `<canvas>` element is an HTML element that renders graphics created with JavaScript’s Canvas API.
1. CSS stylesheets are used to style HTML elements.
   JavaScript is used for adding functionality to a web application.
1. p5.js is a JavaScript library that contains built-in variables and functions to help you develop visual programs.

## p5 basic commands

- createCanvas() function dynamically creates an empty HTML `<canvas>` element to the web page. The function takes two arguments: the width and height of the canvas element in pixels.
- noCanvas() function to stop p5.js from creating a canvas at the start of the program. This is because p5.js will automatically create an HTML `<canvas>` element that is 100 pixels wide and 100 pixels tall.
- setup() function is a built-in p5.js function used to set the sketch’s initial state when the sketch begins. It is typically used to create the canvas, set the framerate, or set initial styles (such as stroke and fill color) for the shapes to be drawn in the sketch. It runs only once at the start of the sketch.
  - creating an HTML `<canvas>` element in our index.html.
- the background() function fills the canvas with a solid color
  - The background() function can be used in the setup() function to set the initial color of the canvas when the sketch begins.
  - The background() function can also be called in the draw() loop to clear the canvas at the beginning of each frame, which is useful for creating animations that will be introduced in a later lesson.
- The draw() function is similar to the setup() function in that p5.js will automatically execute it at the right time. The draw() function will run after all the code in the setup() function is complete. Note that like the setup() function, the draw() function should not be explicitly called.
  - Additionally, the functions placed inside the draw() function will be executed from the top-down.
  - Unlike the setup() function, the draw() function will repeatedly execute in what is known as the draw loop. The draw() function is also referred to as the draw() loop because the code block in the function will execute infinitely until the sketch ends by closing the browser window or navigating away from the sketch. The draw loop will also terminate when the noLoop() function is called.

### Shape Commands

- point(), which draws a single pixel to the canvas
- line() draws a direct path between two points
- rect(). The function has four parameters, the first and second parameters are the x and y coordinates for the top-left corner of the shape, and the third and fourth parameters set the width and height of the rectangle.
- square(). The function need three parameters: x and y coordinates for the top-left corner of the square and the width.

Note: The x and y coordinates for the rect() and square() functions are also known as the anchor point, which is the origin of all transformations

- ellipse(). The first and second parameters are the x and y location of where the ellipse is drawn to, but instead of the corner, ellipses are positioned by their center! The third parameter sets the width or the diameter along the x-axis of the canvas, and the fourth parameter is the diameter along the y-axis.
- The circle() function has three parameters: the x and y coordinates for the center, and the width, or the diameter of the circle.
- The triangle() function takes a total of six arguments or three pairs of x and y coordinates.
- The quadrilateral shape function, quad(), needs eight arguments, or four pairs of x and y coordinates for each of its four points

- The rectMode() and ellipseMode() functions allow you to modify the location from which the shape is drawn by changing how the x and y arguments passed to rect() and ellipse() functions are interpreted.
  - When the rectMode(CENTER) function is called, the x and y coordinates passed to the rect() function changes to represent the center of the rectangle, instead of the top left corner. Default is rectMode(CORNER)
  - In p5.js, ellipses are automatically drawn from the shape’s center.

Style setting functions such as fill(), stroke(), and strokeWeight() must be called before drawing a shape and will be active for subsequent shapes until the functions are called again to change the styles.

- stroke(). The stroke is the color used to draw lines or the borders around shapes.
- strokeWeight(). The thickness of strokes can be set with the strokeWeight() function.
- You can disable the stroke from being drawn by calling the noStroke() function.

#### Tanslate

There are two ways to move a shape across your canvas.

- Let’s say you wanted to move your rectangle 60 pixels right and down, you can add 60 pixels to the x and y coordinates given to the rect() function.
- move the p5.js coordinate system itself instead of moving the shape. The translate() function does exactly this—it changes the (0, 0) origin of the p5.js coordinate system to be the location specified as the function’s arguments.
  - Keep in mind that transformation functions, like translate(), accumulate. This means that the x and y values given to a second translate() function will not represent the exact position of the new origin.

Both ways would change the position of your shape, but the main difference is that instead of moving the shape itself, the translate() function moves the entire sketch’s coordinate system to the new position specified within the parentheses.

#### Rotate

Rotating an element in p5.js means rotating the canvas from its top-left corner at (0, 0). Therefore, all the elements drawn on the coordinate system rotates together with the canvas.

The rotate() function takes one argument—the angle of rotation represented by the angle variable in the above code. By default, the angle of rotation is interpreted as a radian value—a unit of measuring angles. You can also convert a degree value into a radian value by calling the radians() function.

Alternatively, you can specify the unit of measurement of angles by calling the angleMode() function. the angleMode() determines if the value inside the rotate() function is interpreted as either degrees or radians.

- DEGREES
- RADIANS

#### Scale

scale() enlarges the whole p5.js coordinate system, not just the shape. In a sense, the scale() function is like zooming in and out of the canvas. Scale values are written in decimal percentages.

#### Shear

Shear functions skew a shape in a specific direction. The shape is sheared by the angle amount specified as the function’s argument. In p5.js, shapes are sheared in a clockwise direction. If the angle value is negative, the shape will shear in a counter-clockwise direction.

- The shearX() function angles a shape around the x-axis by the amount given as its argument.
- The shearY() function angles a shape around the y-axis by the amount specified as the argument.

Note that the arguments of the shearX() and shearY() functions are interpreted in radians by default but can be changed calling the angleMode() function before a shear function is called.

#### Push and Pop

By surrounding code blocks with the push() and pop() functions, you can isolate transformations to be applied to targeted elements and not affect any elements that come after it.

The push() function saves the current style settings and transformations, while pop() restores it back to the original settings. Sandwiched in-between push() and pop() are any style and transformation functions intended for one shape, but not for another.

ways to specify color:

- gray value (0 - 255)
- RGB values (0 - 255)
- Named CSS color (like 'purple' and 'yellow')
- 3 or 6 digit hexadecimal values (like '#FE0' and '#1557FF')

- fill() allows us to set the fill color, or the inside color of a shape. The fill() function must be called prior to calling the shape function.
- noFill(). To disable the fill of a shape and make the fill transparent, you can call the noFill() function.

## Flow of events

Let’s take a look at the order of events when an HTML page that includes the p5.js library and a p5.js sketch file is loaded:

1. Scripts in the <head> element of the HTML page are loaded.
1. The <body> element of the HTML page loads, and an onload event fires, which triggers the next step.
1. The p5.js library is started, and all built-in p5.js functions can be used in your sketch file.
1. The p5.js library will automatically call the setup() function and create an HTML <canvas> element.

## Animation

### Basic Info

- Frame
  - An animation is really just an illusion. Any time we see an animation, we are actually seeing a sequence of frames that give us the illusion of movement. Frames are individual pictures in a sequence of images. When multiple frames are shown at a fast enough rate, our eyes translate and blend them into a single moving image.
  - one frame is the equivalent to one loop through the draw() function.
  - Commands:
    - frameCount to count the number of frames that have been displayed since the program started.
- Frames Per Second (FPS)
  - specifies the number of frames displayed every second. When the FPS of animation is lower, it looks like it is in slow motion. When the frame rate is higher, the animation looks like it is being fast-forwarded.
  - p5.js will automatically run your code at 60 frames per second. A typical animation is between 24 to 30 frames per second.
  - Commands:
    - However, you can manipulate the FPS by using the frameRate() function, which will change the number of frames shown per second to the number specified as the function’s argument.
- Random
  - random() that includes the first number but exclude the max value.
  - The noise() function returns a random value based on the Perlin noise. When you call the noise() function, it generates a naturally ordered sequence of random numbers.

## Interaction

### Mouse Position

The mouseX and mouseY variables always contain the mouse’s current horizontal and vertical positions, relative to the origin of the canvas. p5.js will continuously check where the mouse is and update mouseX and mouseY to the latest position, making these variables ideal for manipulating elements on the canvas dynamically.

### Mouse Events

The mouse event functions in p5.js work like JavaScript DOM events behind the scenes, in which p5.js waits for an event to happen to run specific mouse event functions.

- The mousePressed() function is called once after every mouse button press over the canvas.
- We can also use the built-in mouseIsPressed variable to determine whether the mouse is pressed or not.
- The mouseMoved() function, which can be used to trigger an event every time the mouse moves while the mouse has not been pressed.
- The mouseClicked() function, which can be used to detect a mouse button press and release over an element.

### Distance

The dist() function is a powerful tool for calculating the distance between two points, stationary or dynamic. This function is oftentimes used in conjunction with mouse events. Understanding how and when to use dist() can simplify calculations and make fun and interesting sketches.

### Key Input

The built-in key variable stores alphanumeric characters. More specifically, it holds the value of the most recent key pressed.

The other important key input variable we are going to learn about is the keyCode variable. The keyCode variable stores the decimal value of the ASCII code of the most recently pressed key. It can also be used to detect special keys such as BACKSPACE, DELETE, ENTER, RETURN, TAB, and more.

While the key variable can detect both uppercase and lowercase characters, the keyCode variable is unable to differentiate the ASCII values from each other.

- The built-in variable keyIsPressed evaluates to true when any key is pressed and false otherwise.

- The keyPressed()function is called once every time a key is pressed. Since the function is only called once per key press the code will also only run once per press. Within the function block, it’s possible to test which key has been pressed and to use this value for any purpose.

- The keyReleased() function, which can be used to trigger an event every time a key release is detected.

- The keyTyped() function, which can be used to determine each time a specific key is pressed. Note that the function cannot detect special keys but can distinguish between lower-case and upper-case letters.

- The keyIsDown() function, which can be used to check if a key is currently being pressed.

### Media

#### Image

- To load an image, use the loadImage() function. It requires one argument—the path to the image in your working directory.
  - Loading images takes time. In most cases, the loadImage() function won’t finish loading an image before the next lines of code are run—including any code that is supposed to draw the image. Sometimes this is OK, but it can also potentially lead to unintended behavior.
- After loading an image, we use the image() function to draw it. The function requires three arguments: the p5.js Image element and the x and y positions where the image should be drawn on the canvas.
- You can also load and draw animated GIFs into the canvas using loadImage() and image(). To have them animate, you specifically need to put them inside the draw() loop. They’re essentially multiple images packed into one, so calling image() in the draw() loop will draw the latest frame of the GIF, allowing it to animate.
- To solve problems like this(image is not fully loaded before running the next command), p5.js includes the preload() function. Like the setup() and draw() functions, it’s a special function to hold specific kinds of code for our p5.js sketch. Specifically, the preload() function is meant for code that loads external assets, like the loadImage() function.

#### Videos

- To create a p5.js video element, use the createVideo() function. It requires the video file’s path in your working directory. Here, we’ll use a video with the .mp4 format, which is a video file format that’s well-supported across most browsers. Typically, we’ll do this in a place like the preload() function so that we can use it later on in our sketch.
  - To play a video, you can use the .play() method
  - To display the video directly within the p5 sketch, we can reuse the image() function
  - To hide the original HTML video element, we can use the .hide() method
  - Whereas the .play() method only plays a video once, the .loop() method will play a video and loop it infinitely.
    - One of them is that calling .play() or .loop() way too many times, such as in every iteration of the draw() loop, can cause errors. In general, it’s best to call them in setup(), or call them in response to user input, like mouse clicks.
  - To stop a playing or looping video, use the .stop() method.
  - To pause the video at the current frame—so that you can later resume it where you left off—use the .pause() method
  - To change the volume of the video’s sound, use the .volume() method. It takes in a decimal number ranging from 0 to 1, with 0 being no volume and 1 being maximum volume.
- Filters in p5.js work in two ways: across the entire canvas and applied to individual images.To apply a filter across the canvas, use the filter() function. It requires the type of filter, which can be one of eight different types as defined by p5.js. We can’t, however, apply filters to individual video elements (though you could instead draw a video to the canvas, then add a filter to the entire canvas).
  - GRAY
  - POSTERIZE (2,255)
  - INVERT
  - A weakness of the filter() function is its slow performance—especially when called frequently.

Pixel Manipulation

- get() : The get() function accesses the color of a specific pixel on the canvas. When given a pixel location, it returns the color of that pixel as an array of four numbers, representing the red, green, blue, and alpha (RGBA) values.
  - Alternatively, the get() function also can retrieve regions of the canvas, returning them as a p5.js image element.
  - When provided no arguments, it retrieves the entire canvas as a p5.js image element.
- set(): The set() function sets a pixel at a given location on the canvas to a new color.
  - Just calling the set() function doesn’t change what you see—to reflect changes onto the canvas, you need to use the updatePixels() function after the set() call.

Pixel Array

The pixels array is a special data structure that enables us to access and manipulate pixel data—whether in the canvas or in individual images or videos. The get() and set() functions are actually functions that make working with pixels array easier, but slower.

We normally think of an image as a two-dimensional matrix—an array of arrays—with each pixel having a red, green, blue, and alpha (RGBA) value.

The pixels array is a representation of all those pixels, flattened down to a single list. Starting from the first pixel and moving left-to-right by rows to the last pixel, pixels stores the RGBA values for each pixel into one, single array. The one-dimensional array format, while harder to work with, makes accessing the data fast.

In some cases, the pixels array will be affected by pixel density. The pixel density in a p5.js sketch depends on your computer monitor—many high-resolution monitors treat a single pixel on the screen as multiple smaller pixels, creating a sharper image—accordingly, the number of elements in the pixels array factors in that density.

    - pixelDensity()
      - One quirk of setting a different pixel density using the pixelDensity() function is that it erases everything you drew on the canvas before calling it. In most cases, it’s a good idea to call it first thing in the setup() function, before any other code.

    - loadPixels()
      - loads the pixels in a canvas, populating the built-in pixels variable.
      - Note that when dealing with videos (or animated GIFs), it’s better to call the loadPixels() function in the draw() loop—you likely want to work with the latest frame.

    Loading the data in the pixels array takes time—which can explain why the pixels array isn’t just available by default. In fact, the get() and set() functions both load the pixels every single time they’re called—which is why calling them a lot slows down the sketch significantly.

    In contrast, accessing the entire pixels array requires loading pixels just once—which speeds up the process a lot and will allow us to do more wide-scale manipulations!

    working with the pixels array can potentially slow down your sketch, especially if you:

      - Load and manipulate the pixels array of high-resolution images or videos
      - Load and manipulate the pixels array in the draw() loop.
      - Print the pixels array to the console (we did it as a demonstration above, but this can really affect performance!)

Manipulating Pixel Array

Once we have the pixels array, we need to know how to read and write to it. That requires correctly indexing into it to get the color values for each pixel.

Because each pixel has four color values—starting with red—we can use the following equation to find the index of the red value for a pixel at location (x,y), on a canvas that’s width pixels wide.

`let indexOfRed = (x + y * width) * 4;` //TODO: WHY

With the index of the red value, we can then get each color value, keeping in mind the R-G-B-A sequence.

Again, we must call the .updatePixels() method (or updatePixels() function, if we’re manipulating the canvas) to reflect changes.

Learnings: codeacademy

Wall Drawing Projects:
https://publicdelivery.org/sol-lewitt-wall-drawings/

Generative art:
https://aiartists.org/generative-art-design

Animation Exercise:
Bouncing a ball and change colour, size etc

Projects/Exercises to find information about:
Creative coding with webcams:

Interactive Video Sculture
