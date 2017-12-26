export const declOfNum = (number, titles) => {
	const cases = [2, 0, 1, 1, 1, 2];
	return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};

export const declOfVacancy = (number, withoutNumber) => {
	const decl = declOfNum(number, ['вакансия', 'вакансии', 'вакансий']);
	return withoutNumber ? decl : `${number} ${decl}`;
};
