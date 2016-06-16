const url = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json"
const HEIGHT = 500
const WIDTH = 1000

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

function maxOfData(data){
	return data.reduce((colect, element)=>{
		return Math.max(colect, element.data)
	}, 0)
}

function displayData(allData){
	const maxData = maxOfData(allData)

	let heightScale = d3.scale.linear()
	.domain([0, maxData])
	.range([0, HEIGHT])

	let canvas = d3.select('body')
	.append('svg')
	.attr('width', WIDTH)
	.attr('height', HEIGHT)

	let bars = canvas
	.selectAll("rect")
	.data(allData)
	.enter()
	.append('rect')
	.attr('width', 2)
	.attr('height', d=>heightScale(d.data))
	.attr('y', d=>HEIGHT - heightScale(d.data))
	.attr('x', (d, i)=>i*2)
}

