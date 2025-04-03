import{
    AreaChart as RechartsAreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

import{
    baseChartProps,
    chartAnimationProps,
    chartColours,
    ChartProperties,
} from "../contants";

import { ChartContainer } from "../styles";

export function AreaChart({ data, animate }: ChartProperties) {
    if (!data || data.length === 0) return null;

    const keys = Object.keys(data[0]).filter((key) => key !== "label");

    return (
        <ChartContainer width="100%" height="100%">
            <RechartsAreaChart {...baseChartProps} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <Legend />
                {keys.map((key, index) => (
                    <Area
                        isAnimationActive={animate}
                        {...chartAnimationProps}
                        key={key}
                        type="monotone"
                        dataKey={key}
                        stroke={
                            chartColours[index % chartColours.length].hex
                        }
                        fill={
                            chartColours[index % chartColours.length].hex
                        }
                        fillOpacity={0.6}
                    />
                ))}
            </RechartsAreaChart>
        </ChartContainer>
    );
}