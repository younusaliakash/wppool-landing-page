document.addEventListener('DOMContentLoaded', () => {
    let chart;

    const options = {
        series: [
            { name: "WPPOOL", data: [] },
            { name: "Google", data: [] },
            { name: "Microsoft", data: [] },
            { name: 'Twitter', data: [] }
        ],
        chart: {
            height: 420,
            type: 'line',
            zoom: { enabled: false },
            toolbar: { show: false }
        },
        colors: ['#FC714D', '#615DE3', '#AFCD80', '#6F34A1'],
        dataLabels: { enabled: false },
        stroke: {
            width: [2, 2, 2, 2],
            curve: 'straight',
        },
        legend: {
            tooltipHoverFormatter: (val, opts) => `${val} - <strong>${opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex]}</strong>`
        },
        markers: {
            size: 0,
            hover: { sizeOffset: 6 }
        },
        xaxis: {
            type: 'datetime',
            labels: {
                datetimeFormatter: {
                    year: 'yyyy',
                    month: "MMM 'yy",
                    day: 'dd MMM'
                }
            }
        },
        yaxis: {
            min: -10,
            max: 100,
            labels: {
                formatter: value => value % 1 === 0 ? `${value.toFixed(0)}%` : `${value.toFixed(2).replace('.00', '')}%`
            }
        },
        tooltip: {
            x: { format: 'dd MMM yyyy' },
            y: { formatter: val => `${val.toFixed(0).replace('.00', '')}%` }
        },
        grid: { borderColor: '#f1f1f1' }
    };

    const generateDataInRange = (startDate, endDate, minRange, maxRange) => {
        const data = [];
        let currentDate = new Date(startDate);

        while (currentDate <= endDate) {
            const randomVal = Math.random() * (maxRange - minRange) + minRange;
            data.push({ x: new Date(currentDate).getTime(), y: randomVal });
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return data;
    };

    const setChartDuration = duration => {
        const currentDate = new Date();
        const endDate = new Date();
        endDate.setFullYear(currentDate.getFullYear() - 2);

        let categories = [];
        let data1 = [];
        let data2 = [];
        let data3 = [];
        let data4 = [];

        if (duration === '1week') {
            const startDate = new Date(currentDate);
            startDate.setDate(currentDate.getDate() - 7);

            categories = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            data1 = generateDataInRange(startDate, currentDate, -10, 100);
            data2 = generateDataInRange(startDate, currentDate, -10, 100);
            data3 = generateDataInRange(startDate, currentDate, -10, 100);
            data4 = generateDataInRange(startDate, currentDate, -10, 100);
        } else if (duration === '1month') {
            const startDate = new Date(currentDate);
            startDate.setMonth(currentDate.getMonth() - 1);
            startDate.setDate(1);
            const endDate = new Date(currentDate);
            const lastDayOfMonth = new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0).getDate();
            endDate.setDate(lastDayOfMonth);

            categories = Array.from({ length: lastDayOfMonth }, (_, i) => (i + 1).toString());
            data1 = generateDataInRange(startDate, endDate, -10, 100);
            data2 = generateDataInRange(startDate, endDate, -10, 100);
            data3 = generateDataInRange(startDate, endDate, -10, 100);
            data4 = generateDataInRange(startDate, endDate, -10, 100);
        } else if (duration === '6months') {
            const startDate = new Date(currentDate);
            startDate.setMonth(currentDate.getMonth() - 6);
            startDate.setDate(1);
            const endDate = new Date(currentDate);
            const lastDayOfMonth = new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0).getDate();
            endDate.setDate(lastDayOfMonth);

            categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
            data1 = generateDataInRange(startDate, endDate, -10, 100);
            data2 = generateDataInRange(startDate, endDate, -10, 100);
            data3 = generateDataInRange(startDate, endDate, -10, 100);
            data4 = generateDataInRange(startDate, endDate, -10, 100);
        } else if (duration === '1year') {
            const startDate = new Date(currentDate);
            startDate.setFullYear(currentDate.getFullYear() - 1);
            startDate.setMonth(0);
            startDate.setDate(1);
            const endDate = new Date(currentDate);
            endDate.setMonth(11);
            const lastDayOfMonth = new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0).getDate();
            endDate.setDate(lastDayOfMonth);

            categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            data1 = generateDataInRange(startDate, endDate, -10, 100);
            data2 = generateDataInRange(startDate, endDate, -10, 100);
            data3 = generateDataInRange(startDate, endDate, -10, 100);
            data4 = generateDataInRange(startDate, endDate, -10, 100);
        } else if (duration === '2years') {
            const startDate = new Date(currentDate);
            startDate.setFullYear(currentDate.getFullYear() - 2);
            startDate.setMonth(0);
            startDate.setDate(1);
            const endDate = new Date(currentDate);
            endDate.setMonth(11);
            const lastDayOfMonth = new Date(endDate.getFullYear(), endDate.getMonth() + 1, 0).getDate();
            endDate.setDate(lastDayOfMonth);

            categories = [startDate.getFullYear().toString(), endDate.getFullYear().toString()];
            data1 = generateDataInRange(startDate, endDate, -10, 100);
            data2 = generateDataInRange(startDate, endDate, -10, 100);
            data3 = generateDataInRange(startDate, endDate, -10, 100);
            data4 = generateDataInRange(startDate, endDate, -10, 100);
        }

        chart.updateOptions({
            xaxis: { categories },
            series: [
                { name: "WPPOOL", data: data1 },
                { name: "Google", data: data2 },
                { name: "Microsoft", data: data3 },
                { name: 'Twitter', data: data4 }
            ]
        });
    };

    const buttons = document.querySelectorAll('.topic');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const duration = this.id.replace('btn-', '');
            setChartDuration(duration);
        });
    });

    chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
    setChartDuration('1week');
});
