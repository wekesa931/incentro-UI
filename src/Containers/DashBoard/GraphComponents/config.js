const width = 850;
const height = 450;
const colors = ['#BAA6CA', '#B7DCFA', '#FFE69A', '#788195'];
const datas = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];
const SimpleLineCharts = {
    componentName: 'SimpleLineCharts',
    key: 'SimpleLineCharts',
    title: 'Simple Line Charts',
    width,
    height,
    colors,
    datas,
  };

  export {
    SimpleLineCharts
  }