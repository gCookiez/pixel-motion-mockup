export function multipleClassList(str, callback) {
    if (typeof str != 'string') return;
    const classList = str.trim() !== '' ? str.split(' ') : null
    classList !== null ? callback(classList) : null;
    return;
}