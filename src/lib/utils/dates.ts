export function formatDate(date: string) {
	return new Date(date).toLocaleDateString('en-CA', {
		year: 'numeric',
		month: 'long',
		weekday: 'long',
		day: 'numeric',
		timeZone: 'UTC'
	});
}
