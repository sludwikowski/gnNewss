/**
 * Formats a date string in the format used in Polish language.
 * @param dateStr The date string to format.
 * @returns The formatted date string.
 */
export function formatPolishDateTime(dateStr: string): string {
  const date = new Date(dateStr)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear()
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')
  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`
}
