import { PageConfig } from "../types";

export const mockPages: PageConfig[] = [
  {
    categories: ["Delivery", "Flow distribution"],
    id: "1",
    primaryElement: {
      type: "doughnut",
      title: "Overall flow distribution",
      data: [
        {
          label: "Keeping the lights on",
          value: 20,
        },
        {
          label: "Feature Enhancements",
          value: 10,
        },
        {
          label: "Developer Experience",
          value: 10,
        },
        {
          label: "New Value",
          value: 60,
        },
      ],
    },
    secondaryElement: [
      {
        type: "pie",
        title: "Team 1 Flow Distribution",
        data: [
          { label: "Keeping the lights on", value: 20 },
          { label: "Feature Enhancements", value: 10 },
          { label: "Developer Experience", value: 10 },
          { label: "New Value", value: 60 },
        ],
      },
      {
        type: "pie",
        title: "Team 2 Flow Distribution",
        data: [
          { label: "Keeping the lights on", value: 20 },
          { label: "Feature Enhancements", value: 10 },
          { label: "Developer Experience", value: 10 },
          { label: "New Value", value: 60 },
        ],
      },
      {
        type: "pie",
        title: "Team 3 Flow Distribution",
        data: [
          { label: "Keeping the lights on", value: 20 },
          { label: "Feature Enhancements", value: 10 },
          { label: "Developer Experience", value: 10 },
          { label: "New Value", value: 60 },
        ],
      },
      {
        type: "pie",
        title: "Team 4 Flow Distribution",
        data: [
          { label: "Keeping the lights on", value: 20 },
          { label: "Feature Enhancements", value: 10 },
          { label: "Developer Experience", value: 10 },
          { label: "New Value", value: 60 },
        ],
      },
    ],
  },
  {
    categories: ["Delivery", "Flow distribution"],
    id: "2",
    primaryElement: {
      type: "bar",
      title: "Overall flow distribution",
      data: [
        {
          label: "Keeping the lights on",
          value: 20,
        },
        {
          label: "Feature Enhancements",
          value: 10,
        },
        {
          label: "Developer Experience",
          value: 10,
        },
        {
          label: "New Value",
          value: 60,
        },
      ],
    },
    secondaryElement: {
      type: "bar",
      title: "Overall flow distribution",
      data: [
        {
          label: "Keeping the lights on",
          value: 20,
        },
        {
          label: "Feature Enhancements",
          value: 10,
        },
        {
          label: "Developer Experience",
          value: 10,
        },
        {
          label: "New Value",
          value: 60,
        },
      ],
    },
  },
  {
    categories: ["Delivery", "Flow distribution"],
    id: "3",
    primaryElement: {
      type: "doughnut",
      title: "Overall flow distribution",
      data: [
        {
          label: "Keeping the lights on",
          value: 20,
        },
        {
          label: "Feature Enhancements",
          value: 10,
        },
        {
          label: "Developer Experience",
          value: 10,
        },
        {
          label: "New Value",
          value: 60,
        },
      ],
    },
    secondaryElement: [
      {
        type: "bar",
        title: "Team 1 Flow Distribution",
        data: [
          { label: "Keeping the lights on", value: 20 },
          { label: "Feature Enhancements", value: 10 },
          { label: "Developer Experience", value: 10 },
          { label: "New Value", value: 60 },
        ],
      },
      {
        type: "bar",
        title: "Team 2 Flow Distribution",
        data: [
          { label: "Keeping the lights on", value: 20 },
          { label: "Feature Enhancements", value: 10 },
          { label: "Developer Experience", value: 10 },
          { label: "New Value", value: 60 },
        ],
      },
      {
        type: "bar",
        title: "Team 3 Flow Distribution",
        data: [
          { label: "Keeping the lights on", value: 20 },
          { label: "Feature Enhancements", value: 10 },
          { label: "Developer Experience", value: 10 },
          { label: "New Value", value: 60 },
        ],
      },
      {
        type: "bar",
        title: "Team 4 Flow Distribution",
        data: [
          { label: "Keeping the lights on", value: 20 },
          { label: "Feature Enhancements", value: 10 },
          { label: "Developer Experience", value: 10 },
          { label: "New Value", value: 60 },
        ],
      },
    ],
  },
  {
    categories: ["Delivery", "Velocity"],
    id: "4",
    primaryElement: {
      type: "line",
      title: "Overall Flow Distribution",
      data: [
        {
          label: "Keeping the lights on",
          Delivery: 20,
          Velocity: 15,
          value: 35,
        },
        {
          label: "Feature Enhancements",
          Delivery: 10,
          Velocity: 25,
          value: 30,
        },
        {
          label: "Developer Experience",
          Delivery: 10,
          Velocity: 30,
          value: 20,
        },
        { label: "New Value", Delivery: 60, Velocity: 50, value: 40 },
      ],
    },
  },
  {
    categories: ["Delivery", "Velocity"],
    id: "5",
    primaryElement: {
      type: "line",
      title: "Overall Flow Distribution",
      data: [
        {
          label: "Keeping the lights on",
          Delivery: 20,
          Velocity: 15,
          value: 40,
        },
        {
          label: "Feature Enhancements",
          Delivery: 10,
          Velocity: 25,
          value: 50,
        },
        {
          label: "Developer Experience",
          Delivery: 10,
          Velocity: 30,
          value: 80,
        },
        { label: "New Value", Delivery: 60, Velocity: 50, value: 100 },
      ],
    },
    secondaryElement: [
      {
        type: "pie",
        title: "Team 1 Flow Distribution",
        data: [
          { label: "Keeping the lights on", value: 20 },
          { label: "Feature Enhancements", value: 10 },
          { label: "Developer Experience", value: 10 },
          { label: "New Value", value: 60 },
        ],
      },
      {
        type: "pie",
        title: "Team 2 Flow Distribution",
        data: [
          { label: "Keeping the lights on", value: 20 },
          { label: "Feature Enhancements", value: 10 },
          { label: "Developer Experience", value: 10 },
          { label: "New Value", value: 60 },
        ],
      },
      {
        type: "pie",
        title: "Team 3 Flow Distribution",
        data: [
          { label: "Keeping the lights on", value: 20 },
          { label: "Feature Enhancements", value: 10 },
          { label: "Developer Experience", value: 10 },
          { label: "New Value", value: 60 },
        ],
      },
      {
        type: "pie",
        title: "Team 4 Flow Distribution",
        data: [
          { label: "Keeping the lights on", value: 20 },
          { label: "Feature Enhancements", value: 10 },
          { label: "Developer Experience", value: 10 },
          { label: "New Value", value: 60 },
        ],
      },
    ],
  },
  {
    categories: ["Delivery", "Velocity"],
    id: "velocity",
    primaryElement: {
      type: "radar",
      title: "Overall Flow Distribution",
      data: [
        {
          label: "Keeping the lights on",
          Delivery: 20,
          Velocity: 15,
          value: 35,
        },
        {
          label: "Feature Enhancements",
          Delivery: 10,
          Velocity: 25,
          value: 30,
        },
        {
          label: "Developer Experience",
          Delivery: 10,
          Velocity: 30,
          value: 20,
        },
        { label: "New Value", Delivery: 60, Velocity: 50, value: 40 },
      ],
    },
  },
];
