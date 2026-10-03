import { create } from 'zustand'

interface IWorkoutSet {
    id: string
    weight: string
    reps: string
    rpe: string
}

interface IWorkout {
    id: string
    name: string
    sets: IWorkoutSet[] 
    status: "not_started" | "active" | "finished" 
    notes?: string
}

interface IWorkoutStore {
    workouts: IWorkout[]
    activeWorkoutId: string | null

    startWorkout: (workoutId: string) => void
    addSet: (workoutId: string, workoutSet: IWorkoutSet) => void
    updateSet: (
        workoutId: string, 
        setId: string,
        updatedSet: IWorkoutSet
    ) => void
    removeSet: (workoutId: string, setId: string) => void
    finishWorkout: (workoutId: string, notes: string) => void
}

export const useWorkoutStore = create<IWorkoutStore>()((set) => ({
    workouts: [],
    activeWorkoutId: null,
    startWorkout: (workoutId: string) => {},
    addSet: (workoutId: string, workoutSet: IWorkoutSet) => { },
    updateSet: (
        workoutId: string,
        setId: string,
        updatedSet: IWorkoutSet,
    ) => { },    
    removeSet: (workoutId: string, setId: string) => { },
    finishWorkout: (workoutId: string, notes: string) => { }
}))