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
	let heightScale = d3.scale.linear()
	.domain([0, 30000])
	.range([0, 500])

	let canvas = d3.select('body')
	.append('svg')
	.attr('width', 500)
	.attr('height', 500)

	let bars = canvas
	.selectAll("rect")
	.data(allData)
	.enter()
	.append('rect')
	.attr('width', 2)
	.attr('height', d=>heightScale(d.data))
	.attr('y', 0)
	.attr('x', (d, i)=>i*2)
}

