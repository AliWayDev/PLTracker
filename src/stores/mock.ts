import { ICycle } from "./cycle";

const MockCycles: ICycle[] = [
  {
    cycleId: "0",
    name: "Berlin block",
    activeWeek: "1",
    weeks: [
      {
        weekId: "1",
        exercises: [
          {
            id: "1",
            weekId: "1",
            name: "Squat",
            sets: [
              {
                id: "1",
                weight: 90,
                reps: 4,
                rpe: 8,
              },
            ],
            plannedSets: {
              weight: 90,
              reps: 4,
              sets: 3,
            },
            status: "active",
            notes: "",
          },
          {
            id: "2",
            weekId: "1",
            name: "Bench Press",
            sets: [],
            plannedSets: {
              weight: 75,
              reps: 5,
              sets: 4,
            },
            status: "not_started",
            notes: "",
          },
          {
            id: "3",
            weekId: "1",
            name: "Deadlift",
            sets: [],
            plannedSets: {
              weight: 100,
              reps: 4,
              sets: 4,
            },
            status: "not_started",
            notes: "",
          },
        ],
      },
      {
        weekId: "2",
        exercises: [
          {
            id: "1",
            weekId: "2",
            name: "Squat",
            sets: [],
            plannedSets: {
              weight: 95,
              reps: 4,
              sets: 3,
            },
            status: "not_started",
            notes: "",
          },
          {
            id: "2",
            weekId: "2",
            name: "Bench Press",
            sets: [],
            plannedSets: {
              weight: 77.5,
              reps: 4,
              sets: 4,
            },
            status: "not_started",
            notes: "",
          },
          {
            id: "3",
            weekId: "2",
            name: "Deadlift",
            sets: [],
            plannedSets: {
              weight: 110,
              reps: 4,
              sets: 3,
            },
            status: "not_started",
            notes: "",
          },
        ],
      },
      {
        weekId: "3",
        exercises: [
          {
            id: "1",
            weekId: "3",
            name: "Squat",
            sets: [],
            plannedSets: {
              weight: 100,
              reps: 3,
              sets: 3,
            },
            status: "not_started",
            notes: "",
          },
          {
            id: "2",
            weekId: "3",
            name: "Bench Press",
            sets: [],
            plannedSets: {
              weight: 80,
              reps: 3,
              sets: 4,
            },
            status: "not_started",
            notes: "",
          },
          {
            id: "3",
            weekId: "3",
            name: "Deadlift",
            sets: [],
            plannedSets: {
              weight: 115,
              reps: 3,
              sets: 3,
            },
            status: "not_started",
            notes: "",
          },
        ],
      },
      {
        weekId: "4",
        exercises: [
          {
            id: "1",
            weekId: "4",
            name: "Squat",
            sets: [],
            plannedSets: {
              weight: 105,
              reps: 3,
              sets: 3,
            },
            status: "not_started",
            notes: "",
          },
          {
            id: "2",
            weekId: "4",
            name: "Bench Press",
            sets: [],
            plannedSets: {
              weight: 82.5,
              reps: 3,
              sets: 4,
            },
            status: "not_started",
            notes: "",
          },
          {
            id: "3",
            weekId: "4",
            name: "Deadlift",
            sets: [],
            plannedSets: {
              weight: 120,
              reps: 3,
              sets: 3,
            },
            status: "not_started",
            notes: "",
          },
        ],
      },
    ],
    cycleStatus: "active",
    cycleBeginDate: "10.10.2026",
    cycleEndDate: "10.11.2026",
  },
];

export default MockCycles;
