//chart
document.addEventListener('DOMContentLoaded', function () {
    var chart;

    var options = {
        series: [
            {
                name: "WPPOOL",
                data: []
            },
            {
                name: "Google",
                data: []
            },
            {
                name: "Microsoft",
                data: []
            },
            {
                name: 'Twitter',
                data: []
            }
        ],
        chart: {
            height: 420,
            type: 'line',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            }
        },
        colors: ['#FC714D', '#615DE3', '#AFCD80', '#6F34A1'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [2, 2, 2, 2],
            curve: 'straight',
        },
        legend: {
            tooltipHoverFormatter: function (val, opts) {
                return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>';
            }
        },
        markers: {
            size: 0,
            hover: {
                sizeOffset: 6
            }
        },
        xaxis: {
            type: 'datetime',
            labels: {
                datetimeFormatter: {
                    year: 'yyyy',
                    month: 'MMM \'yy',
                    day: 'dd MMM'
                }
            }
        },
        yaxis: {
            min: -10,
            max: 100,
            labels: {
                formatter: function (value) {
                    if (value % 1 === 0) {
                        return value.toFixed(0) + "%";
                    }
                    return value.toFixed(2).replace('.00', '') + "%";
                }
            }
        },
        tooltip: {
            x: {
                format: 'dd MMM yyyy'
            },
            y: {
                formatter: function (val) {
                    return val.toFixed(0).replace('.00', '') + "%";
                }
            }
        },
        grid: {
            borderColor: '#f1f1f1',
        }
    };

    // generate random data
    function generateDataInRange(startDate, endDate, minRange, maxRange) {
        var data = [];
        var currentDate = new Date(startDate);

        while (currentDate <= endDate) {
            var randomVal = Math.random() * (maxRange - minRange) + minRange;
            data.push({
                x: new Date(currentDate).getTime(),
                y: randomVal
            });
            currentDate.setDate(currentDate.getDate() + 1); // Increment date by 1 day
        }

        return data;
    }

    // set chart duration for different periods
    function setChartDuration(duration) {
        var currentDate = new Date();
        var endDate = new Date();
        endDate.setFullYear(currentDate.getFullYear() - 2);

        var categories = [];
        var data1 = [];
        var data2 = [];
        var data3 = [];
        var data4 = [];

        if (duration === '1week') {
            var startDate = new Date(currentDate);
            startDate.setDate(currentDate.getDate() - 7);

            categories = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            data1 = generateDataInRange(startDate, currentDate, -10, 100);
            data2 = generateDataInRange(startDate, currentDate, -10, 100);
            data3 = generateDataInRange(startDate, currentDate, -10, 100);
            data4 = generateDataInRange(startDate, currentDate, -10, 100);
        } else if (duration === '1month') {
            var startDate = new Date(currentDate);
            startDate.setMonth(currentDate.getMonth() - 1);

            startDate.setDate(1); // Start from the 1st day 
            var endDate = new Date(currentDate);
            var lastDayOfMonth = new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0).getDate(); // Get last day of the current month

            endDate.setDate(lastDayOfMonth); // Set end date to the last day of the month

            categories = Array.from({ length: lastDayOfMonth }, (_, i) => (i + 1).toString()); // Generate array of days in month

            data1 = generateDataInRange(startDate, endDate, -10, 100); // Generate data for the entire month 
            data2 = generateDataInRange(startDate, endDate, -10, 100);
            data3 = generateDataInRange(startDate, endDate, -10, 100);
            data4 = generateDataInRange(startDate, endDate, -10, 100);
        } else if (duration === '6months') {
            var startDate = new Date(currentDate);
            startDate.setMonth(currentDate.getMonth() - 6);
            startDate.setDate(1);
            var endDate = new Date(currentDate);
            var lastDayOfMonth = new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0).getDate();

            endDate.setDate(lastDayOfMonth); // Set end date to the last day of the month

            categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
            data1 = generateDataInRange(startDate, endDate, -10, 100); // Generate data for 6 months 
            data2 = generateDataInRange(startDate, endDate, -10, 100);
            data3 = generateDataInRange(startDate, endDate, -10, 100);
            data4 = generateDataInRange(startDate, endDate, -10, 100);

        } else if (duration === '1year') {
            var startDate = new Date(currentDate);
            startDate.setFullYear(currentDate.getFullYear() - 1);
            startDate.setMonth(0);
            startDate.setDate(1);

            var endDate = new Date(currentDate);
            endDate.setMonth(11);

            var lastDayOfMonth = new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0).getDate();

            endDate.setDate(lastDayOfMonth);

            categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

            data1 = generateDataInRange(startDate, endDate, -10, 100);

            data2 = generateDataInRange(startDate, endDate, -10, 100);
            data3 = generateDataInRange(startDate, endDate, -10, 100);
            data4 = generateDataInRange(startDate, endDate, -10, 100);
        } else if (duration === '2years') {
            var startDate = new Date(currentDate);
            startDate.setFullYear(currentDate.getFullYear() - 2);
            startDate.setMonth(0);
            startDate.setDate(1);
            var endDate = new Date(currentDate);
            endDate.setMonth(11);
            var lastDayOfMonth = new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0).getDate();
            endDate.setDate(lastDayOfMonth);
            categories = [startDate.getFullYear().toString(), endDate.getFullYear().toString()];
            data1 = generateDataInRange(startDate, endDate, -10, 100);
            data2 = generateDataInRange(startDate, endDate, -10, 100);
            data3 = generateDataInRange(startDate, endDate, -10, 100);
            data4 = generateDataInRange(startDate, endDate, -10, 100);
        }

        chart.updateOptions({
            xaxis: {
                categories: categories
            },
            series: [
                {
                    name: "WPPOOL",
                    data: data1
                },
                {
                    name: "Google",
                    data: data2
                },
                {
                    name: "Microsoft",
                    data: data3
                },
                {
                    name: 'Twitter',
                    data: data4
                }
            ]
        });
    }

    var buttons = document.querySelectorAll('.topic');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            buttons.forEach(function (btn) {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            var duration = this.id.replace('btn-', '');
            setChartDuration(duration);
        });
    });

    chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
    setChartDuration('1week');
});

