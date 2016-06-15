const url = "https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json"

fetch(url)
  .then(raw=>raw.json())
  .then(json=>json.data)
  .then(array=>converToUsableObjects(array))
  .then((arrayOfObjects)=>{displayData(arrayOfObjects)})

function converToUsableObjects(array){
  return array.map((element)=>{
    return {date: element[0], close: element[1]}
  })
}

