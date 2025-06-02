import * as React from "react";

// Types pour les axes et séries de graphiques
interface ChartAxisConfig {
  dataKey?: string;
  type?: "number" | "category";
  domain?: [number | string, number | string];
  tickFormatter?: (value: unknown) => string;
  label?: string;
}

interface ChartSeriesConfig {
  dataKey: string;
  name?: string;
  color?: string;
  type?: "line" | "bar" | "area" | "pie";
}

type ChartProps = {
  children: React.ReactNode;
  xAxis?: ChartAxisConfig;
  yAxis?: ChartAxisConfig;
  series?: ChartSeriesConfig[];
  className?: string;
};

export const Chart = React.forwardRef<HTMLDivElement, ChartProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    );
  }
);
Chart.displayName = "Chart";

type ChartContainerProps = {
  children: React.ReactNode;
  xAxis?: ChartAxisConfig;
  yAxis?: ChartAxisConfig;
  className?: string;
};

export const ChartContainer = React.forwardRef<
  HTMLDivElement,
  ChartContainerProps
>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
});
ChartContainer.displayName = "ChartContainer";

type ChartLegendProps = {
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  direction?: "row" | "column";
  className?: string;
};

export const ChartLegend = React.forwardRef<HTMLDivElement, ChartLegendProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    );
  }
);
ChartLegend.displayName = "ChartLegend";

type ChartLegendItemProps = {
  name: string;
  color: string;
};

export const ChartLegendItem: React.FC<ChartLegendItemProps> = ({
  name,
  color,
}) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: color }}
      ></div>
      <span>{name}</span>
    </div>
  );
};

interface ChartTooltipItem {
  name: string;
  value: string | number;
  color: string;
}

type ChartTooltipProps = {
  children: (props: {
    x: string;
    y: number;
    items: ChartTooltipItem[];
  }) => React.ReactNode;
};

export const ChartTooltip: React.FC<ChartTooltipProps> = ({ children }) => {
  return <>{children({ x: "", y: 0, items: [] })}</>;
};

type ChartTooltipItemProps = {
  name: string;
  value: string | number;
  color: string;
};

export const ChartTooltipItem: React.FC<ChartTooltipItemProps> = ({
  name,
  value,
  color,
}) => {
  return (
    <div className="flex items-center gap-2">
      <div
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
      ></div>
      <span>
        {name}: {value}
      </span>
    </div>
  );
};

interface ChartDataPoint {
  [key: string]: string | number;
}

interface ChartAreaConfig {
  fill?: string;
  fillOpacity?: number;
  stroke?: string;
  strokeWidth?: number;
}

interface ChartLineConfig {
  stroke?: string;
  strokeWidth?: number;
  strokeDasharray?: string;
}

type ChartAreaSeriesProps = {
  data: ChartDataPoint[];
  xAxisKey: string;
  yAxisKey: string;
  area?: ChartAreaConfig;
  line?: ChartLineConfig;
  children: React.ReactNode;
};

export const ChartAreaSeries: React.FC<ChartAreaSeriesProps> = ({
  children,
}) => {
  return <>{children}</>;
};

type ChartAreaSeriesItemProps = {
  x: string;
  y: number;
};

export const ChartAreaSeriesItem: React.FC<ChartAreaSeriesItemProps> = () => {
  return null;
};

interface ChartHighlightScope {
  highlighted?: "item" | "series";
  faded?: "global" | "series";
}

type ChartPieSeriesProps = {
  data: ChartDataPoint[];
  valueKey: string;
  cornerRadius?: number;
  innerRadius?: number;
  paddingAngle?: number;
  highlightScope?: ChartHighlightScope;
  children: React.ReactNode;
};

export const ChartPieSeries: React.FC<ChartPieSeriesProps> = ({ children }) => {
  return <>{children}</>;
};

type ChartPieSeriesItemProps = {
  id: string;
  value: number;
  color: string;
  label: string;
};

export const ChartPieSeriesItem: React.FC<ChartPieSeriesItemProps> = () => {
  return null;
};

type ChartBarSeriesProps = {
  data: ChartDataPoint[];
  xAxisKey: string;
  yAxisKey: string;
  children: React.ReactNode;
};

export const ChartBarSeries: React.FC<ChartBarSeriesProps> = ({ children }) => {
  return <>{children}</>;
};

type ChartBarSeriesItemProps = {
  x: string;
  y: number;
  color: string;
};

export const ChartBarSeriesItem: React.FC<ChartBarSeriesItemProps> = () => {
  return null;
};
