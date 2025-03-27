import { FunnelChart as RechartFunnelChart, Funnel, LabelList, Cell } from "recharts";
import { baseChartProps, chartAnimationProps, chartColours, ChartProperties } from "../contants";
import { ChartContainer } from "../styles";



export function FunnelChart({ data }: ChartProperties) {
    
    return (
        <ChartContainer width="100%" height="100%">
            <RechartFunnelChart>
                <Funnel
                    {...baseChartProps}
                    {...chartAnimationProps}
                   
                    data={data}
                    dataKey="value"
                >

                    <LabelList
                        position="inside"
                        fill="#000000"
                        stroke="none"
                        dataKey="label"
                    />

                    {data.map((_entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={chartColours[index % chartColours.length].hex}
                        />
                    ))}



                </Funnel>
            </RechartFunnelChart>
        </ChartContainer>
    );
}
