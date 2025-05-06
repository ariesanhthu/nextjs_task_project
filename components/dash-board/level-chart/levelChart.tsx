"use client"

import { Chart, useChart } from "@chakra-ui/charts"
import { Cell, Label, Pie, PieChart, Tooltip } from "recharts"

const LevelChart = () => {
  const chart = useChart({
    data: [
        // xp
      { name: "windows", value: 300, color: "blue.solid" },
        // non
      { name: "mac", value: 300 },
    ],
  })

  return (
    <Chart.Root boxSize="200px" chart={chart} mx="auto">
      <PieChart>
        <Tooltip
          cursor={false}
          animationDuration={100}
          content={<Chart.Tooltip hideLabel />}
        />
        <Pie
          innerRadius={80}
          outerRadius={100}
          startAngle={90}
          endAngle={450}
          isAnimationActive={false}
          data={chart.data}
          dataKey={chart.key("value")}
          nameKey="name"
        >
          <Label
            content={({ viewBox }) => (
              <Chart.RadialText
                viewBox={viewBox}
                title={chart.getTotal("value").toLocaleString()}
                description="exp"
              />
            )}
          />
          {chart.data.map((item) => (
            <Cell key={item.color} fill={chart.color(item.color)} />
          ))}
        </Pie>
      </PieChart>
    </Chart.Root>
  )
}

export default LevelChart;