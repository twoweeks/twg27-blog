type Donation = {
	dateIso: string;
	amountRoubles: number | `${number}.${number}`;
	nickname: string | null;
	comment: string | null;
};

export const donations = [
	{
		dateIso: '2025-01-26',
		amountRoubles: 10_000,
		nickname: 'Хихихихахаха',
		comment: 'Make twg great again',
	},
	{
		dateIso: '2025-01-26',
		amountRoubles: 5_000,
		nickname: null,
		comment: 'На конкурс по поеданию бургеров',
	},
	{
		dateIso: '2025-01-25',
		amountRoubles: '2476.86',
		nickname: 'Организатор',
		comment: 'Для круглой суммы',
	},
	{
		dateIso: '2025-01-25',
		amountRoubles: 10_000,
		nickname: 'Нульч',
		comment: 'На фонд конкурса',
	},
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
