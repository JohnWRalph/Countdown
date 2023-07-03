import { writable } from "svelte/store";

const daysStore = writable<number>(0);
const hoursStore = writable<number>(0);
const minutesStore = writable<number>(0);
const secondsStore = writable<number>(0);
const newCountdownMonth = writable<number>(0);
const newCountdownDay = writable<number>(0);
const newCountdownYear = writable<number>(0);
const newCountdownHour = writable<number>(0);
const newCountdownMinute = writable<number>(0);
const newCountdownSecond = writable<number>(0);
export { daysStore, hoursStore, minutesStore, secondsStore,
    newCountdownMonth, newCountdownDay, newCountdownYear,
    newCountdownHour, newCountdownMinute, newCountdownSecond}