# Tutorial9
## The classes
- In general, computer-based shapes are defined based on an essential point, for example, if the shape is a circle then the center would be the essential point and if the shape is a rectangle, then the top-left corner is the essential point.

- We would like to define the x and y coordinates in a generic Shape class that would be the parent of all other shapes that we allow in our system

- We want to allow only positive values to be used for the coordinates, so in order to avoid setting negative values by mistake, we would like to have both x and y defined as private members that can only be set after the value was checked, if the value sent to the setter was negative, the coordinate will be set to 0.

- The coordinates can also be sent as arguments to the constructor, which is capable of setting the private variables directly, however, in order to make sure the proper check is performed before setting the values the constructor will call the setter functions instead.

- The two shapes that we have in our system (so far) are the Square and the Triangle. In addition to the x and y coordinates inherited from the parent Shape class, the square would have a length property, and the triangle should have a height property.

## The drawing
- Often in graphics applications, the upper-left corner is considered the origin point (0,0), so when we get to draw our shapes, we’d need to create a horizontal offset by printing a number of empty lines equal to the value of the y coordinate and a vertical offset by printing a number of spaces equal to the value of the x coordinate. For simplicity, we’ll assume that every shape is drawn starting from the origin.

- Because the use of the horizontal offset would be different in the Square and Triangle classes, we’d have its implementation separate from the general draw function in the Shape class. So, the body of the draw function in the shape class would only print the vertical offset, and each of Square and the Triangle would override it to add the actual shape drawing.
