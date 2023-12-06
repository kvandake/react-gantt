import { GanttLocale } from "../Gantt";

function pluralizeRu(count: number, words: string[]) {
	const cases = [2, 0, 1, 1, 1, 2];
	return words[(count % 100 > 4 && count % 100 < 20) ? 2 : cases[Math.min(count % 10, 5)]];
}

export const ruRU: GanttLocale = Object.freeze({
	key: 'ru',
	emptyData: "Нет данных для отображения",
	today: 'Сегодня',
	dayUnit: 'д',
	day: 'День',
	week: 'Неделя',
	month: 'Месяц',
	quarter: 'Квартал',
	halfYear: 'Полугодие',
	firstHalf: 'Первая половина',
	secondHalf: 'Вторая половина',
	pluralizeDay: (daysWidth: number) => pluralizeRu(daysWidth, ['день', 'дня', 'дней']),
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
