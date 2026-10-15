import uuid from "react-native-uuid";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { getExercises } from "@/utils";
import MockCycles from "./mock";

export interface IExerciseSet {
  id: string;
  weight: number;
  reps: number;
  rpe: number;
}

interface IPlannedExerciseSet {
  weight: number;
  reps: number;
  sets: number;
}

interface IExerciseAction {
  exerciseSet: IExerciseSet;
  exerciseId: string;
  weekId: string;
  cycleId: string;
  setId: string;
}

export interface IExercise {
  id: string;
  weekId: string;
  name: string;
  sets: IExerciseSet[];
  plannedSets: IPlannedExerciseSet;
  status: "not_started" | "active" | "finished";
  notes?: string;
}

export interface IWeek {
  weekId: string;
  exercises: IExercise[];
}

export interface ICycle {
  cycleId: string;
  activeWeek: string;
  name: string;
  weeks: IWeek[];
  cycleStatus: "completed" | "active" | "draft";
  cycleBeginDate: string;
  cycleEndDate: string;
}

interface ICycleStore {
  cycles: ICycle[];

  addCycles: () => void;

  addWeek: (week: IWeek) => void;

  addExerciseSet: ({
    exerciseSet,
    exerciseId,
    weekId,
    cycleId,
  }: IExerciseAction) => void;

  deleteExerciseSet: ({
    exerciseSet,
    weekId,
    cycleId,
    setId,
  }: IExerciseAction) => void;

  editExerciseSet: ({
    exerciseSet,
    exerciseId,
    weekId,
    cycleId,
  }: IExerciseAction) => void;
}

export const useCycleStore = create<ICycleStore>()(
  immer((set, get) => ({
    cycles: MockCycles,
    addCycles: () => {},
    addWeek: () => {},

    addExerciseSet: ({ exerciseSet, exerciseId, weekId, cycleId }) => {
      set((s) => {
        let exercises = getExercises(s.cycles, cycleId, weekId);

        if (exercises) {
          let targetExercise = exercises.find((i) => i.id === exerciseId);

          if (!targetExercise || !exerciseSet) return;

          targetExercise.sets.push({ ...exerciseSet, id: uuid.v4() });
        }
      });
    },

    deleteExerciseSet: ({ exerciseId, weekId, cycleId, setId }) => {
      set((s) => {
        let exercises = getExercises(s.cycles, cycleId, weekId);

        if (exercises) {
          let targetExercise = exercises.find((i) => i.id === exerciseId);

          if (!targetExercise) return;

          targetExercise.sets = targetExercise.sets.filter(
            (i) => i.id !== setId,
          );
        }
      });
    },

    editExerciseSet: ({ exerciseSet, exerciseId, weekId, cycleId }) => {
      set((s) => {
        let exercises = getExercises(s.cycles, cycleId, weekId);

        if (exercises) {
          let targetExercise = exercises.find((i) => i.id === exerciseId);

          if (!targetExercise) return;

          let targetSetIndex = targetExercise.sets.findIndex(
            (i) => i.id === exerciseSet.id,
          );

          targetExercise.sets[targetSetIndex] = exerciseSet;
        }
      });
    },
  })),
);
