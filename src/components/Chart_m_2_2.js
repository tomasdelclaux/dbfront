import { LineChart } from '@mui/x-charts';

function Chart_m_2_2(props) {
    console.log("chart data: ", props)
  if(props.x.length <=0 || props.y1.length <=0 || props.y2.length <=0 || props.y3.length <=0){
    return(<div>
      <p>Change parameters on the left to obtain graph</p>
    </div>)
  }
  else{
    return(
    <LineChart
      xAxis={[{ data: props.x , scaleType: 'band'}]}
      yAxis={[
        { id: 'y1', scaleType: 'linear' },
        { id: 'y2', scaleType: 'linear' },
        { id: 'y3', scaleType: 'linear' },
      ]}
      series={[
        { yAxisKey: 'y1', data: props.y1, label: 'total co2_emissions' },
        { yAxisKey: 'y2', data: props.y2, label: 'GDP in billions' },
        { yAxisKey: 'y3', data: props.y2, label: 'surface temperature' },
      ]}
      leftAxis="y1"
      rightAxis="y3"
      height={400}
    />
    )
  }
  }

  export default Chart_m_2_2;