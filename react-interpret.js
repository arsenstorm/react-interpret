// react-interpret.js

/*
text: string (text to be interpreted)
interpreters: object (key: string, value: string, function, or component)
*/
export default function interpret(text, interpreters) {
    const regex = /\/?(.*?)/g;
    let parts = text.split(regex);
    let inTag = false;

    parts = parts.map((part, index) => {
        if (interpreters[part] !== undefined) {
            inTag = !inTag;
            return interpreters[part];
        } else if (inTag) {
            return part;
        } else {
            return part;
        }
    });

    return parts;
}
