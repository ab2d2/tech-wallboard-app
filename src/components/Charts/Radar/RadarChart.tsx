import{
    RadarChart as RechartsRadarChart,
    Radar,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Legend,
    Tooltip,
} from "recharts";

import{
    baseChartProps,
    chartAnimationProps,
    chartColours,
    ChartProperties,
} from "../contants";

import { ChartContainer } from "../styles";

export function RadarChart({ data, animate }: ChartProperties) {
    if (!data || data.length === 0) return null;

    const keys = Object.keys(data[0]).filter((key) => key !== "label");

    return (
        <ChartContainer width="100%" height="100%">
            <RechartsRadarChart {...baseChartProps} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="label" />
                <PolarRadiusAxis />
                <Tooltip />
                <Legend />
                {keys.map((key, index) => (
                    <Radar
                        isAnimationActive={animate}
                        {...chartAnimationProps}
                        key={key}
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
            </RechartsRadarChart>
        </ChartContainer>
    );
}