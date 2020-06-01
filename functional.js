let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-")
}

function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(function(element) {
        urls.push(urlify(element));
    });
    return urls;
}

console.log(imperativeUrls(states));

function functionalUrls(elements) {
    return elements.map(element => urlify(element));
}

console.log(functionalUrls(states));

function functionalUrls(elements) {
    return elements.map(element => `https://example.com/${urlify(element)}`);
}

console.log(functionalUrls(states));

function dakotasStringIncludes(elements) {
    return elements.filter(element => element.includes("Dakota"));
}

function splitDakotas(elements) {
    return elements.filter(element => element.split(/\s+/).length === 2);
}

console.log(dakotasStringIncludes(states));
console.log(splitDakotas(states));

let nums = [1, 2, 3, 4, 5];

function products(elements) {
    return elements.reduce((total, n) => { return total *= n });
}

console.log(products(nums));