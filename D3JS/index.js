
// TESTER = document.getElementById('tester');

// Plotly.newPlot( TESTER, [{
// x: [1, 2, 3, 4, 5,30,40,52],
// y: [1, 2, 4, 8, 16,20,15,12] }], {
// margin: { t: 0 } } );



var tableData = data;

console.log(tableData);
var year1=[];
var birth1=[];
// var year=[];
// var birth=[];
for (let i=0;i<tableData.length;i++){
  year1.push(tableData[i].year)
  birth1.push(tableData[i].births)
}


var tableData2 = data2;
var year2=[];
var birth2=[];

for (let i=0;i<tableData2.length;i++){
  year2.push(tableData2[i].year)
  birth2.push(tableData2[i].births)
}

var lowestElement=document.getElementById("Lowest")
lowestElement.addEventListener("click", function(){
  
  barchart(year2,birth2);
})

var highestelement=document.getElementById("Highest")
highestelement.addEventListener("click", function(){

  barchart(year1,birth1);
  
  
})
function barchart(year,birth){

var data1 = [
  {
    x: year,
    y: birth,
    type: 'bar'
  }
];

Plotly.newPlot("myDiv", data1);
}

barchart(year1,birth1);


/* line graph */
var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter'
};

var trace2 = {
  x: [1, 2, 3, 4],
  y: [16, 5, 11, 9],
  type: 'scatter'
};

var data = [trace1, trace2];

Plotly.newPlot('myLine', data);


/*Radio Button Functionality*/
const btn = document.querySelector('#btn');
        // handle click button
        btn.onclick = function () {
            const rbs = document.querySelectorAll('input[name="choice"]');
            let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            alert(selectedValue);
        };