export function getInitialsFromName(name?: string, surname?: string) {
    if (name && surname)
        return name.slice(0, 1) + surname.slice(0, 1);
}