var lyrics = `abcdef
gffffff`;
var h = `<div>${lyrics}</div>`;
console.log(h);
console.log(`1 + 1 = ${1 + 1}`);

var say = "a bir'<d in hand > two in the bush";
var html = htmlEscape `<div>--- I would just like to say : ${say}</div>`;
console.log(say);
console.log(html);
// a sample tag function
function htmlEscape(literals, ...placeholders) {
    let result = "";
    // interleave the literals with the placeholders
    for (let i = 0; i < placeholders.length; i++) {
        result += literals[i];
        result += placeholders[i]
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    // add the last literal
    result += literals[literals.length - 1];
    return result;
}
