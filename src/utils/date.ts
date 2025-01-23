export const formatDate = (
	date: string | Date,
	dateStyle?: Intl.DateTimeFormatOptions['dateStyle'],
) => {
	const jsDate = typeof date === 'string' ? new Date(date) : date;
	return jsDate.toLocaleDateString('ru', {
		dateStyle: dateStyle || 'medium',
	});
};
