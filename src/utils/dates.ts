export function formatDateFriendly(date: Date) {
	return date.toLocaleDateString('en-CA', {
		year: 'numeric',
		month: 'long',
		weekday: 'long',
		day: 'numeric',
		timeZone: 'UTC'
	});
}

export function formatDateNumeric(date: Date) {
	return date.toLocaleDateString('en-CA', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		timeZone: 'UTC'
	});
}
