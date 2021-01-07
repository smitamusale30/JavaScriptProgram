const x=10;
const color= x>10? 'red' : 'blue';

switch(color)
{
    case 'red':
        console.log("color is red");
        break;

    case 'blue':
        console.log("Color is blue");
        break;
    
    default:
        console.log("Color id not red and blue");
        break;
}