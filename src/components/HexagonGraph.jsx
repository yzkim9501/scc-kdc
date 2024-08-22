import React from "react";
import styled from "styled-components";

const GraphContainer = styled.div`
  width: 450px;
  height: 450px;
  margin: 20px auto;
`;

const HexagonGraph = ({ data }) => {
  const size = 150;
  const center = 225; // 중심점을 조정하여 텍스트를 위한 공간 확보

  const getPolygonPoints = (value) => {
    const angle = Math.PI / 3;
    return Array.from({ length: 6 }, (_, i) => {
      const adjustedValue = value / 5; // 0-1 범위로 정규화
      const r = size * adjustedValue;
      const x = center + r * Math.cos(angle * i - Math.PI / 2);
      const y = center + r * Math.sin(angle * i - Math.PI / 2);
      return `${x},${y}`;
    }).join(" ");
  };

  const getDataPoints = () => {
    const angle = Math.PI / 3;
    return data
      .map((item, i) => {
        const r = (size * item.value) / 5;
        const x = center + r * Math.cos(angle * i - Math.PI / 2);
        const y = center + r * Math.sin(angle * i - Math.PI / 2);
        return `${x},${y}`;
      })
      .join(" ");
  };

  return (
    <GraphContainer>
      <svg width="450" height="450">
        {/* 배경 육각형들 (1부터 5까지) */}
        {[1, 2, 3, 4, 5].map((value) => (
          <polygon
            key={value}
            points={getPolygonPoints(value)}
            fill="none"
            stroke="#ccc"
            strokeWidth="1"
          />
        ))}
        {/* 데이터 육각형 */}
        <polygon
          points={getDataPoints()}
          fill="#E8344E"
          fillOpacity="0.2"
          stroke="#E8344E"
          strokeWidth="2"
        />
        {/* 데이터 포인트와 라벨 */}
        {data.map((item, index) => {
          const angle = (Math.PI / 3) * index - Math.PI / 2;
          const r = (size * item.value) / 5;
          const x = center + r * Math.cos(angle);
          const y = center + r * Math.sin(angle);
          const labelX = center + size * 1.3 * Math.cos(angle);
          const labelY = center + size * 1.3 * Math.sin(angle);
          return (
            <g key={item.label}>
              <line
                x1={center}
                y1={center}
                x2={center + size * Math.cos(angle)}
                y2={center + size * Math.sin(angle)}
                stroke="#ccc"
                strokeWidth="1"
              />
              <circle cx={x} cy={y} r="4" fill="#E8344E" />
              <text
                x={labelX}
                y={labelY}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="12"
                fill="#333"
              >
                {item.label}
              </text>
              <text x={x} y={y} dx={5} dy={-5} fontSize="10" fill="#E8344E">
                {item.value}
              </text>
            </g>
          );
        })}
      </svg>
    </GraphContainer>
  );
};

export default HexagonGraph;
