const cursor = document.querySelector('.cursor');
let cursorLeft = 0;
let cursorTop = 0;

window.addEventListener('mousemove', e => {
	// console.log(e);
	const momentum = Math.max(Math.max(e.movementX, e.movementY) / 10, 1);
	cursorLeft = e.clientX;
	cursorTop = e.clientY;
	cursor.style.left = `${cursorLeft}px`;
	cursor.style.top = `${cursorTop}px`;
	cursor.style.transform = `translate(-50%,-50%) scale(${momentum})`;
});




const ctx1 = document.getElementById('myChart1');

new Chart(ctx1, {
type: 'bar',
data: {
  labels: ['Brooklyn', 'Queens', 'Manhattan', 'Bronx', 'Staten Islanc'],
  datasets: [{
    label: '#/Borough',
    data: [2300, 920, 805, 460, 115],
    backgroundColor:[
		'rgba(255, 0, 0)',
		'rgba(255, 106, 106)',
		'rgba(255, 166, 166)',
		'rgba(255, 217, 217)',
		'rgba(255, 237, 237)',
	],
	borderColor: ['rgba(255, 0, 0)'],
  }]
},
options: {
	indexAxis: 'y',
  }

});


const ctx2 = document.getElementById('myChart2');

new Chart(ctx2, {
type: 'pie',
data: {
  labels: ['Site Downloaded for Cleaning', 'Graffiti Reported', 'Cleaning Crew Dispatched, Graffiti Removed'],
  datasets: [{
    label: '#/Resolutions',
    data: [200, 100, 30],
    backgroundColor:[
		'rgba(255, 0, 0)',
		'rgba(255, 166, 166)',
		'rgba(255, 217, 217)',
	],
	hoverOffset: 4,
  }]
},
options: {
	indexAxis: 'x',
  }

});




const ctx3 = document.getElementById('myChart3');

new Chart(ctx3, {
type: 'bar',
data: {
  labels: ['Open', 'Closed'],
  datasets: [{
    label: '# of Open & Closed Statuses',
    data: [1100, 200],
    backgroundColor:['rgba(255, 0, 0)'],
	borderColor: ['rgba(255, 0, 0)'],
  }]
},
options: {
	indexAxis: 'x',
  }

});






Chart.defaults.font.size = 16;
let chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 14, 
						family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                    }
                }
            }
        }
    }
});
