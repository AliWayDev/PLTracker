import { ICycle, IExercise } from "@/stores/cycle";

export const getExercises = (
  cycles: ICycle[],
  cycleId: string,
  weekId: string,
): IExercise[] | null => {
  if (!cycleId) return null;
  let newCycle = cycles.find((i) => i.cycleId === cycleId);

  if (!newCycle) return null;
  let weeks = newCycle.weeks.find((i) => i.weekId === weekId);

  return weeks ? weeks.exercises : null;
};
