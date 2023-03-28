const zobraz = (data) => {
	const url = `https://czechitas-podklady.cz/vizualizace-sachovnice/?s=${JSON.stringify(
		data
	)}`
	document.body.innerHTML += `
		<div>
			<pre>${JSON.stringify(data)
				.replace('[[', '[<br/>\t[')
				.replace(']]', ']<br/>]')
				.replaceAll(',[', ',<br/>\t[')
				.replaceAll(',', ',\t')}</pre>
			<iframe src="${url}" width="550" height="420" frameBorder="0"></iframe>
			<hr/>
		</div>
		`
}

const sachovnice = [
[0,0,0,0,0,-4,-6,0],
[0,0,0,0,0,-1,-1,-1],
[0,0,-1,0,0,0,0,0],
[0,-1,1,0,-1,0,0,0],
[0,1,0,0,1,0,0,0],
[0,0,0,0,0,3,0,1],
[0,0,0,0,5,1,1,0],
[0,0,0,0,0,0,6,0],
]


console.log(zobraz(sachovnice))

const sachovnice2 = [
	[0,0,0,0,0,-4,-6,0],
	[0,0,0,0,0,-1,-1,-1],
	[0,0,-1,0,0,0,0,0],
	[0,-1,1,0,3,0,0,0],
	[0,1,0,0,1,0,0,0],
	[0,0,0,0,0,0,0,1],
	[0,0,0,0,5,1,1,0],
	[0,0,0,0,0,0,6,0],
	]
	
console.log(zobraz(sachovnice2))