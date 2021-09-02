# Three.js

Basics

- scene
- camera
- renderer

We will use renderer to render the scene with camera

### Camera

1. PerspectiveCamera
   1. The field of View(FOV): extent of the scene that is seen on the display at any given moment. The value is in degrees.
   1. The aspect ratio: Almost always want to use the width of the element divided by the height, or you'll get the same result as when you play old movies on a widescreen TV - the image looks squished
   1. near and far clipping plane: objects further away from the camera than the value of far or closer than near won't be rendered.

### Renderer

1. WebGLRenderer is the most common one. The others are often used as fallbacks for users with older browsers or for those who don't have WebGL support for some reason.
   1. Need to also set the size which we want the render instance to render our app. Generally, it's a good idea to use the width and height of the area we want to fill with our app
      1. For performance intensive apps, you can also give setSize smaller values, like window.innerWidth/2 and window.innerHeight/2, which will make the app render at quarter size.
      2. Keep the size of your app but render it at a lower resolution, call setSize with false as updateStyle (the third argument). For example, setSize(window.innerWidth/2, window.innerHeight/2, false) will render your app at half resolution, given that your <canvas> has 100% width and height.
1. Render wih render or animate loop
   This will create a loop that causes the renderer to draw the scene every time the screen is refreshed (on a typical screen this means 60 times per second)
   1. requestAnimationFrame
      - it pauses when the user navigates to another browser tab, hence not wasting their precious processing power and battery life.

### Scene

By default, when we call scene.add(), the thing we add will be added to the coordinates (0,0,0). This would cause both the camera and the cube to be inside each other. To avoid this, we simply move the camera out a bit.

For creating an object:

- Geometry
- Material
- Mesh

### Shapes

1. Cube: BoxGeometry
   This is an object that contains all the points (vertices) and fill (faces) of the cube.

### Colour

1. Colour: Material
   All materials take an object of properties which will be applied to them.
   1. MeshBasicMaterial

### Mesh

A mesh is an object that takes a geometry, and applies a material to it, which we then can insert to our scene, and move freely around.
