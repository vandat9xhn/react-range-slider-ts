//
export function getClassModuleCss(className: string = '', styles: object) {
    return `${className} ${styles[className] || ''}`;
}
