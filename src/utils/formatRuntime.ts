export function formatRuntime(minutes: number | undefined | null): string {
    if (!minutes || minutes <= 0) {
        return '0 мин';
    }
    
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    
    if (hours === 0) {
        return `${remainingMinutes} мин`;
    }
    
    if (remainingMinutes === 0) {
        return `${hours} ч`;
    }
    
    return `${hours} ч ${remainingMinutes} мин`;
}