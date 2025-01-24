import React from 'react';
import { AreaChart, Area, XAxis, Tooltip, Legend } from 'recharts';

const Chart = ({ data, renderTooltip }) => {
  return (
    <div className="flex items-center justify-center">
      <AreaChart
        strokeWidth={2}
        width={400}
        height={200}
        data={data}
        margin={{ top: 15, right: 30, left: 30, bottom: 0 }}
      >
        <defs>
          <linearGradient id="color1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1e0055" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#1e0055" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="color2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#00bf43" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#00bf43" stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis
          dataKey="date"
          ticks={[data[0]['date'], data[data.length - 1]['date']]}
          axisLine={false}
        />
        <Legend layout="horizontal" verticalAlign="top" align="left" />
        <Tooltip content={renderTooltip} />
        <Area
          type="monotone"
          dataKey="income"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#color1)"
        />
        <Area
          type="monotone"
          dataKey="expense"
          stroke="#82ca9d"
          fillOpacity={0.7}
          fill="url(#color2)"
        />
      </AreaChart>
    </div>
  );
};

export default Chart;
