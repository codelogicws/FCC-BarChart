const url = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json"

fetch(url)
  .then(raw=>raw.json())
  .then(json=>json.data)
  .then(array=>converToUsableObjects(array))
  .then((arrayOfObjects)=>{displayData(arrayOfObjects)})

function converToUsableObjects(array){
  return array.map((element)=>{
    return {date: element[0], data: element[1]}
  })
}

console.log("Hello")

function displayData(allData){
	var canvas = d3.select('body')
	.append('svg')
	.attr('width', 500)
	.attr('height', 500)

	var bars = canvas
	.selectAll("rect")
	.data(allData)
	.enter()
	.append('rect')
	.attr('width', 5)
	.attr('height', d=>d.data)
	.attr('x', (d, i)=>i*10)
	.attr('y', 10)
}

