import { ResponsivePie } from "@nivo/pie";

const NivoPi = () => {
  const pieData = [
    {
      id: "hack",
      label: "hack",
      value: 126,
      color: "hsl(101, 70%, 50%)",
    },
    {
      id: "go",
      label: "go",
      value: 104,
      color: "hsl(280, 70%, 50%)",
    },
    {
      id: "elixir",
      label: "elixir",
      value: 437,
      color: "hsl(298, 70%, 50%)",
    },
    {
      id: "sass",
      label: "sass",
      value: 557,
      color: "hsl(272, 70%, 50%)",
    },
    {
      id: "php",
      label: "php",
      value: 278,
      color: "hsl(156, 70%, 50%)",
    },
  ];

  const nivoTheme = {
    tooltip: {
      wrapper: {},
      container: {
        background: "#ffffff",
        color: "#333333",
        fontSize: 12,
      },
    },
  };

  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        // display: "flex",
        // justifyContent: "start",
        // flexDirection: "column",
      }}
    >
      <h1 style={{ paddingLeft: "2rem" }}>NivoPie</h1>
      <div
        style={{
          width: "500px",
          height: "500px",
        }}
      >
        <ResponsivePie
          theme={nivoTheme}
          data={pieData}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.2]],
          }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#dedede"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: "color" }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{
            from: "color",
            modifiers: [["darker", 7]],
          }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "ruby",
              },
              id: "dots",
            },
            {
              match: {
                id: "c",
              },
              id: "dots",
            },
            {
              match: {
                id: "go",
              },
              id: "dots",
            },
            {
              match: {
                id: "python",
              },
              id: "dots",
            },
            {
              match: {
                id: "scala",
              },
              id: "lines",
            },
            {
              match: {
                id: "lisp",
              },
              id: "lines",
            },
            {
              match: {
                id: "elixir",
              },
              id: "lines",
            },
            {
              match: {
                id: "javascript",
              },
              id: "lines",
            },
          ]}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#dedede",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default NivoPi;
