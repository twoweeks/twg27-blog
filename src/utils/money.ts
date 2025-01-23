export const parseRoubles = (amountRoubles: number | `${number}.${number}`): number => {
	if (typeof amountRoubles === 'number') return amountRoubles;
	const [roubles, kopecks] = amountRoubles.split('.').map(value => Number.parseInt(value));
	if (kopecks >= 100) throw new Error('Wrong value for kopecks');
	return roubles + kopecks * 0.01;
};

export const formatRoubles = (
	amountRoubles: number,
	format: 'short' | 'long' = 'short', // with 'long' we show kopecks
): string => {
	const resolvedFormat = format === 'short' ? ROUBLES_FORMAT : ROUBLES_FORMAT_LONG;
	return resolvedFormat.format(amountRoubles);
};

const ROUBLES_FORMAT = new Intl.NumberFormat('ru', {
	style: 'currency',
	currency: 'RUB',
	minimumFractionDigits: 0,
	maximumFractionDigits: 0,
});

const ROUBLES_FORMAT_LONG = new Intl.NumberFormat('ru', {
	style: 'currency',
	currency: 'RUB',
	minimumFractionDigits: 0,
	maximumFractionDigits: 2,
});
