
let  elements = document.getElementsByName('cssProperty');
let div = document.getElementById('modify');

function set()
{
	console.log("hello");

for(let index = 0; index < elements.length; index++)
{
console.log("inside for loop");
let cssProperty = elements[index].getAttribute('id');
console.log(cssProperty);
let cssValue = elements[index].value;
div.style[cssProperty] = cssValue;

}
}

document.getElementById('Set').addEventListener('click',set);

