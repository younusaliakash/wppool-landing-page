// //chart
// var options = {
//     series: [
//     {
//       name: "WPPOOL",
//       data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
//     },
//     {
//       name: "Google",
//       data: [40, 50, 30, 2, 30, 22, 29, 25, 60, 3, 12, 19]
//     },
//     {
//       name: "Microsoft",
//       data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
//     },
//     {
//       name: 'Twitter',
//       data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
//     }
//   ],
//     chart: {
//     height: 400,
//     type: 'line',
//     zoom: {
//       enabled: false
//     },
//     toolbar: {
//         show: false
//     }
//   },
//   colors: ['#FC714D', '#615DE3', '#AFCD80', '#6F34A1'],
//   dataLabels: {
//     enabled: false
//   },
//   stroke: {
//     width: [2, 2, 2, 2],
//     curve: 'straight',

//   },
//   legend: {
//     tooltipHoverFormatter: function(val, opts) {
//       return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>'
//     }
//   },
//   markers: {
//     size: 0,
//     hover: {
//       sizeOffset: 6
//     }
//   },
//   xaxis: {
//     categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
//       '10 Jan', '11 Jan', '12 Jan'
//     ],
//   },
//   tooltip: {
//     y: [
//       {
//         title: {
//           formatter: function (val) {
//             return val + " (mins)"
//           }
//         }
//       },
//       {
//         title: {
//           formatter: function (val) {
//             return val + " per session"
//           }
//         }
//       },
//       {
//         title: {
//           formatter: function (val) {
//             return val;
//           }
//         }
//       }
//     ]
//   },
//   grid: {
//     borderColor: '#f1f1f1',
//   }
//   };

//   var chart = new ApexCharts(document.querySelector("#chart"), options);
//   chart.render();

// var chart;
// var options = {
//     series: [
//         {
//             name: "WPPOOL",
//             data: []
//         },
//         {
//             name: "Google",
//             data: []
//         },
//         {
//             name: "Microsoft",
//             data: []
//         },
//         {
//             name: 'Twitter',
//             data: []
//         }
//     ],
//     chart: {
//         height: 400,
//         type: 'line',
//         zoom: {
//             enabled: false
//         },
//         toolbar: {
//             show: false
//         }
//     },
//     colors: ['#FC714D', '#615DE3', '#AFCD80', '#6F34A1'],
//     dataLabels: {
//         enabled: false
//     },
//     stroke: {
//         width: [2, 2, 2, 2],
//         curve: 'straight',
//     },
//     legend: {
//         tooltipHoverFormatter: function (val, opts) {
//             return val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>';
//         }
//     },
//     markers: {
//         size: 0,
//         hover: {
//             sizeOffset: 6
//         }
//     },
//     xaxis: {
//         categories: [],
//     },
//     tooltip: {
//         y: [
//             {
//                 title: {
//                     formatter: function (val) {
//                         return val + ":";
//                     }
//                 }
//             },
//             {
//                 title: {
//                     formatter: function (val) {
//                         return val + ":";
//                     }
//                 }
//             },
//             {
//                 title: {
//                     formatter: function (val) {
//                         return val + ":";
//                     }
//                 }
//             },
//             {
//                 title: {
//                     formatter: function (val) {
//                         return val + ":";
//                     }
//                 }
//             },
//         ]
//     },
//     grid: {
//         borderColor: '#f1f1f1',
//     }
// };

// function setChartDuration(duration) {
//     var categories = [];
//     var data1 = [];
//     var data2 = [];
//     var data3 = [];
//     var data4 = [];

//     if (duration === '1week') {
//         categories = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
//         data1 = [10, 41, 35, 51, 49, 62, 69];
//         data2 = [23, 12, 54, 61, 32, 56, 81];
//         data3 = [34, 44, 54, 21, 12, 43, 78];
//         data4 = [12, 44, 43, 21, 32, 55, 78];
//     } else if (duration === '1month') {
//         categories = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
//         data1 = [23, 44, 56, 78];
//         data2 = [34, 45, 67, 89];
//         data3 = [45, 56, 78, 90];
//         data4 = [56, 67, 89, 101];
//     } else if (duration === '6months') {
//         categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
//         data1 = [23, 44, 56, 78, 89, 90];
//         data2 = [34, 45, 67, 89, 90, 101];
//         data3 = [45, 56, 78, 90, 101, 112];
//         data4 = [56, 67, 89, 101, 112, 123];
//     } else if (duration === '1year') {
//         categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
//         data1 = [23, 44, 56, 78, 89, 90, 101, 112, 123, 134, 145, 156];
//         data2 = [34, 45, 67, 89, 90, 101, 112, 123, 134, 145, 156, 167];
//         data3 = [45, 56, 78, 90, 101, 112, 123, 134, 145, 156, 167, 178];
//         data4 = [56, 67, 89, 101, 112, 123, 134, 145, 156, 167, 178, 189];
//     } else if (duration === '2years') {
//         categories = ['Year 1', 'Year 2'];
//         data1 = [1234, 5678];
//         data2 = [2345, 6789];
//         data3 = [3456, 7890];
//         data4 = [4567, 8901];
//     }

//     chart.updateOptions({
//         xaxis: {
//             categories: categories
//         },
//         series: [
//             {
//                 name: "WPPOOL",
//                 data: data1
//             },
//             {
//                 name: "Google",
//                 data: data2
//             },
//             {
//                 name: "Google",
//                 data: data3
//             },
//             {
//                 name: 'Twitter',
//                 data: data4
//             }
//         ]
//     });
// }

// document.addEventListener('DOMContentLoaded', function () {
//     chart = new ApexCharts(document.querySelector("#chart"), options);
//     chart.render();
//     setChartDuration('1week'); // Default to 1 week

//     document.getElementById('btn-1week').addEventListener('click', function () {
//         setChartDuration('1week');
//     });

//     document.getElementById('btn-1month').addEventListener('click', function () {
//         setChartDuration('1month');
//     });

//     document.getElementById('btn-6months').addEventListener('click', function () {
//         setChartDuration('6months');
//     });

//     document.getElementById('btn-1year').addEventListener('click', function () {
//         setChartDuration('1year');
//     });

//     document.getElementById('btn-2years').addEventListener('click', function () {
//         setChartDuration('2years');
//     });
// });

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

    // Function to generate random data for a given series within range
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

    // Function to set chart duration for different periods
    function setChartDuration(duration) {
        var currentDate = new Date();
        var endDate = new Date();
        endDate.setFullYear(currentDate.getFullYear() - 2); // Set end date to 2 years ago

        var categories = [];
        var data1 = [];
        var data2 = [];
        var data3 = [];
        var data4 = [];

        if (duration === '1week') {
            var startDate = new Date(currentDate);
            startDate.setDate(currentDate.getDate() - 7); // Set start date to 1 week ago
            categories = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            data1 = generateDataInRange(startDate, currentDate, -10, 100); // Generate 1 week (7 days) of data within range
            data2 = generateDataInRange(startDate, currentDate, -10, 100);
            data3 = generateDataInRange(startDate, currentDate, -10, 100);
            data4 = generateDataInRange(startDate, currentDate, -10, 100);
        } else if (duration === '1month') {
            var startDate = new Date(currentDate);
            startDate.setMonth(currentDate.getMonth() - 1); // Set start date to 1 month ago
            startDate.setDate(1); // Start from the 1st day of the month
            var endDate = new Date(currentDate);
            var lastDayOfMonth = new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0).getDate(); // Get last day of the current month
            endDate.setDate(lastDayOfMonth); // Set end date to the last day of the month
            categories = Array.from({ length: lastDayOfMonth }, (_, i) => (i + 1).toString()); // Generate array of days in month
            data1 = generateDataInRange(startDate, endDate, -10, 100); // Generate data for the entire month within range
            data2 = generateDataInRange(startDate, endDate, -10, 100);
            data3 = generateDataInRange(startDate, endDate, -10, 100);
            data4 = generateDataInRange(startDate, endDate, -10, 100);
        } else if (duration === '6months') {
            var startDate = new Date(currentDate);
            startDate.setMonth(currentDate.getMonth() - 6); // Set start date to 6 months ago
            startDate.setDate(1); // Start from the 1st day of the month
            var endDate = new Date(currentDate);
            var lastDayOfMonth = new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0).getDate(); // Get last day of the current month
            endDate.setDate(lastDayOfMonth); // Set end date to the last day of the month
            categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
            data1 = generateDataInRange(startDate, endDate, -10, 100); // Generate data for 6 months within range
            data2 = generateDataInRange(startDate, endDate, -10, 100);
            data3 = generateDataInRange(startDate, endDate, -10, 100);
            data4 = generateDataInRange(startDate, endDate, -10, 100);
        } else if (duration === '1year') {
            var startDate = new Date(currentDate);
            startDate.setFullYear(currentDate.getFullYear() - 1); // Set start date to 1 year ago
            startDate.setMonth(0); // Start from January
            startDate.setDate(1); // Start from the 1st day of January
            var endDate = new Date(currentDate);
            endDate.setMonth(11); // End at December
            var lastDayOfMonth = new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0).getDate(); // Get last day of December
            endDate.setDate(lastDayOfMonth); // Set end date to the last day of December
            categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            data1 = generateDataInRange(startDate, endDate, -10, 100); // Generate data for 1 year within range
            data2 = generateDataInRange(startDate, endDate, -10, 100);
            data3 = generateDataInRange(startDate, endDate, -10, 100);
            data4 = generateDataInRange(startDate, endDate, -10, 100);
        } else if (duration === '2years') {
            var startDate = new Date(currentDate);
            startDate.setFullYear(currentDate.getFullYear() - 2); // Set start date to 2 years ago
            startDate.setMonth(0); // Start from January
            startDate.setDate(1); // Start from the 1st day of January
            var endDate = new Date(currentDate);
            endDate.setMonth(11); // End at December of the current year (2 years ago)
            var lastDayOfMonth = new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0).getDate(); // Get last day of December
            endDate.setDate(lastDayOfMonth); // Set end date to the last day of December
            categories = [startDate.getFullYear().toString(), endDate.getFullYear().toString()]; // Display the year
            data1 = generateDataInRange(startDate, endDate, -10, 100); // Generate data for 2 years within range
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

    // Event listener for buttons
    var buttons = document.querySelectorAll('.topic');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            buttons.forEach(function (btn) {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            var duration = this.id.replace('btn-', ''); // Extract duration from button id
            setChartDuration(duration); // Update chart with selected duration
        });
    });

    // Initialize chart on page load
    chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
    setChartDuration('1week'); // Default to 6 months
});

