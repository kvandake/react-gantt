import { GanttLocale } from "../Gantt";

export const ruRU: GanttLocale = Object.freeze({
	key: 'ru',
	emptyData: "Нет данных для отображения",
	today: 'Сегодня',
	dayUnit: 'д',
	day: 'День',
	days: 'Дни',
	week: 'Неделя',
	month: 'Месяц',
	quarter: 'Квартал',
	halfYear: 'Полугодие',
	firstHalf: 'Первая половина',
	secondHalf: 'Вторая половина',
	majorFormat: {
		day: "YYYY, MMMM",
		week: "YYYY, MMMM",
		month: "YYYY",
		quarter: "YYYY",
		halfYear: "YYYY",
	},
	minorFormat: {
		day: "D",
		week: "wo [нед.]",
		month: "MMMM",
		quarter: "[КВ]Q",
		halfYear: "YYYY-",
	}
});
