/* eslint-disable react/prop-types */
import React from "react"

interface CircularProgressBarProps {
  sqSize?: number
  percentage?: number
  strokeWidth?: number
}

export const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  sqSize = 100,
  percentage = 25,
  strokeWidth = 5,
}) => {
  // Size of the enclosing square

  // SVG centers the stroke width on the radius, subtract out so circle fits in square
  const radius = (sqSize - strokeWidth) / 2
  // Enclose cicle in a circumscribing square
  const viewBox = `0 0 ${sqSize} ${sqSize}`
  // Arc length at 100% coverage is the circle circumference
  const dashArray = radius * Math.PI * 2
  // Scale 100% coverage overlay with the actual percent
  const dashOffset = dashArray - (dashArray * percentage) / 100

  return (
    <svg strokeLinecap="round" width={sqSize} height={sqSize} viewBox={viewBox}>
      <circle
        stroke="blue"
        fill="none"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        stroke="#d3e1ff"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        cx={sqSize / 2}
        cy={sqSize / 2}
        r={radius}
        strokeWidth={`${strokeWidth}.9px`}
        // Start progress marker at 12 O'Clock
        transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset * -1,
        }}
      />
      <text
        className="circle-text font-bold text-3xl"
        fill="blue"
        x="50%"
        y="50%"
        dy="0.35em"
        textAnchor="middle"
      >
        {`${percentage}`}
      </text>
    </svg>
  )
}
