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

Style setting functions such as fill(), stroke(), and strokeWeight() must be called before drawing a shape and will be active for subsequent shapes until the functions are called again to change the styles.

- stroke(). The stroke is the color used to draw lines or the borders around shapes.
- strokeWeight(). The thickness of strokes can be set with the strokeWeight() function.
- You can disable the stroke from being drawn by calling the noStroke() function.

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

Learnings: codeacademy
