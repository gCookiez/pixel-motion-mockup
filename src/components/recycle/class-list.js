export function multipleClassList(str, callback) {
    if (typeof str != 'string') return;
    const classList = str.trim() !== '' ? str.split(' ') : null
    classList !== null ? callback(classList) : null;
    return;
}

export function containerTemplate(type) {
    var strClass = 'p-4 pt-5 pb-5'
    switch (type) {
        case 'list' : strClass = strClass.split(" ");
                      break;
        case 'string' : ;
        case 'default': strClass;      
    }

    return strClass;

}