interface SensorChartType {
    label?: string;
    color?: string;
    data: SensorChartItemType[]
}
interface SensorChartItemType {
    label?: string;
    value: string | number;
}
