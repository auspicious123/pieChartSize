import React from 'react';
import {VictoryPie} from 'victory-native';

const sampleData = [
  {x: 'Label 1', y: 35},
  {x: 'Label 2', y: 40},
  {x: 'Label 3', y: 55},
];

const MyPieComponent = () => {
  return (
    <VictoryPie
      data={sampleData}
      labelRadius={({innerRadius}) => innerRadius + 5}
      radius={({datum}) => 50 + datum.y * 20}
      innerRadius={50}
      style={{
        labels: {fill: 'black', fontSize: 20, fontWeight: 'bold'},
        data: {fillOpacity: 0.9}, // Optional: Added to make the pie slices more distinguishable
      }}
      colorScale={['#0088FE', '#00C49F', '#FFBB28']}
    />
  );
};

export default MyPieComponent;
