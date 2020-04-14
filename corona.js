window.addEventListener('load', function(){

    fetch("https://pomber.github.io/covid19/timeseries.json")
    .then(response => response.json())
    .then(data => {
        var data_covid = [];
        data["Spain"].forEach(element => {
            data_covid = data_covid.concat(element);
        });

        var ctx = document.getElementById('myChart2').getContext('2d');
        var chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: fechas(),
                datasets: [{
                label: 'Progresión casos de covid-19 España',
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 99, 132)',
                data: infectados()
                }]
            },
                options: {}
        });

        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: fech_contagios(),
                datasets: [{
                label: 'Progresión contagios de covid-19 España',
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 99, 132)',
                data: contagios()
                }]
            },
                options: {}
        });
        this.console.log(fech_contagios());
        this.console.log(contagios());

        function fechas(){

            var list = [];
            data_covid.forEach(element =>{
                list = list.concat(String(element.date));
            })

            return list;
        }

        function infectados(){
            let list = [];
            data_covid.forEach(element=>{
                list = list.concat(element.confirmed);
            })
            
            return list;
        }

        function contagios(){
            let list = [];
            
            for(let i = 1; i < data_covid.length; i++){
                list = list.concat(Math.abs(data_covid[i].confirmed - data_covid[i - 1].confirmed));
            }

            return list;
        }

        function fech_contagios(){
            let list = [];

            for(let i = 1; i < data_covid.length; i++){
                list = list.concat(String(data_covid[i].date));
            }

            return list;
        }

    });


    // var ctx = document.getElementById('myChart').getContext('2d');
    // var chart = new Chart(ctx, {
    // // The type of chart we want to create
    // type: 'line',

    // // The data for our dataset
    // data: {
    //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    //     datasets: [{
    //         label: 'mis datos',
    //         backgroundColor: 'rgb(255, 255, 255)',
    //         borderColor: 'rgb(255, 99, 132)',
    //         data: [0, 10, 5, 2, 20, 30, 45]
    //     }]
    // },

    // // Configuration options go here
    // options: {}
    // });

    
});

