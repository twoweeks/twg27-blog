type Donation = {
	dateIso: string;
	amountRoubles: number | `${number}.${number}`;
	nickname: string | null;
	comment: string | null;
};

export const donations = [
	{
		dateIso: '2025-01-23',
		amountRoubles: 2_000,
		nickname: null,
		comment: 'Добро пожаловать! Снова...',
	},
	{
		dateIso: '2025-01-22',
		amountRoubles: '523.14',
		nickname: null,
		comment:
			'На оглашение нормальной системы оценок(от первого до как минимум 6-го места с комментариями)',
	},
	{
		dateIso: '2025-01-15',
		amountRoubles: 10_000,
		nickname: null,
		comment: null,
	},
	{
		dateIso: '2025-01-11',
		amountRoubles: 20_000,
		nickname: 'Организатор',
		comment: 'Начальный призовой фонд',
	},
] as const satisfies Donation[];
