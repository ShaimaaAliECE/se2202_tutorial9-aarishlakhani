class Shape
{
    constructor(newX,newY)
    {
        /*
        Implement the constructor so that the variables to hold the constructor are hidden and can only be accessed through the setters and getters. 
        The setters of the coordinate would replace the given value with zero if it was negative.
        */
    }
   

    createHorizontalOffset (offset)
    {
        if (offset === undefined)
            offset = this.getX();
        let emptySpace = "";
        for (let i=0;i<offset;i++)
        {
            emptySpace += " ";
        }
        return emptySpace;
    }

    draw()
    {
        for (let i=0; i<this.getY(); i++)
            console.log("");
    }
};

class Square // set this class to be a child of Shape
{
    
    constructor(x,y,newLength)
    {
        /*
        Implement this constructor so that the length property would be hidden accessible only through the setters and getters, not allowing negative values.
       */
        
    }

    draw() {
         // call the draw function defined in the parent class to draw the vertical offset
        let offset =  // call the createHorizontalOffset defined in the parent class with an empty argument list
        let square = "";
        for (let i = 0; i < this.getLength(); i++) {
            let line = "\n" + offset;
            for (let j = 0; j < this.getLength(); j++)
                line += "*";

            square += line;
        }

        console.log(square);
    }

};


class Triangle // set this class to be a child of Shape
{
    constructor(x,y,newHeight)
    {
        /**Implement this constructor so that the height property 
         * would be hidden accessible only through the setters and getters, not allowing negative values. 
         * */
     }
    draw()
    {
         // call the draw function defined in the parent class to draw the vertical offset
        let triangle = "";
        for (let i=0;i<this.getHeight() ;i++)
        {
            let line="\n" +  // call the createHorizontalOffset defined in the parent class with x - i as an argument

            for (let j=0;j<((i*2) + 1);j++)
                line += "*";

            triangle += line;
        }
        console.log(triangle);
    }

};


// Please don't change these lines
let sq = new Square(3, 3, 5);
sq.draw();

let t = new Triangle(5,2,5);
t.draw();
