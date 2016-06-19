const url = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json"
const HEIGHT = 600
const WIDTH = 1000
const MARGIN = 50

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
	return data.reduce((collect, element)=>{
		return Math.max(collect, element.data)
	}, 0)
}

function displayData(allData){
	const maxData = maxOfData(allData)
	const barWidth = (WIDTH-MARGIN) / allData.length

	let heightScale = d3.scale.linear()
	.domain([0, maxData])
	.range([HEIGHT-MARGIN, 0])

	let dateScale = d3.scale.linear()
	.domain([0, maxData])
	.range([HEIGHT-MARGIN, 0])

	let yAxis = d3.svg.axis()
	.scale(heightScale)
	.orient("left")

	let dateAxis = d3.svg.axis()
	.scale(dateScale)
	.orient("bottom")

	let canvas = d3.select('body')
	.append('svg')
	.attr('width', WIDTH)
	.attr('height', HEIGHT)

	let chart = canvas
	.append('g')
	.attr('transform', 'translate(40, 20)')

	let bars = chart
	.selectAll("rect")
	.data(allData)
	.enter()
	.append('rect')
	.attr('width', 3)
	.attr('height', d=>HEIGHT - MARGIN - heightScale(d.data))
	.attr('y', d=>heightScale(d.data))
	.attr('x', (d, i)=>i*barWidth)

	chart.append('g')
	.call(yAxis)
}

//tool test

