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

Learnings: codeacademy

Wall Drawing Projects:
https://publicdelivery.org/sol-lewitt-wall-drawings/

Generative art:
https://aiartists.org/generative-art-design