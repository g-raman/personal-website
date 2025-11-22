export function formatDateFriendly(date: string) {
	return new Date(date).toLocaleDateString('en-CA', {
		year: 'numeric',
		month: 'long',
		weekday: 'long',
		day: 'numeric',
		timeZone: 'UTC'
	});
}

export function formatDateNumeric(date: string) {
	return new Date(date).toLocaleDateString('en-CA', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		timeZone: 'UTC'
	});
}
