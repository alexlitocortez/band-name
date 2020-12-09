
const bands = [
    'The Plot In You', 'The Devil Wears Prads', 'Pierce The Veil',
    'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
    'We Came As Romans', 'Counterparts', 'Oh, Sleeper',
    'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

function strip(bandName) {
    return bandName.replace(/^(a | the |an )/i, '').trim();
}

const sortedBands = bands.sort(function (a,b) {
    if(strip(a) > strip(b)) {
        return 1;
    } else {
        return -1;
    }
});

document.querySelector('#bands').innerHTML =
    sortedBands
    .map(band => `<li>${band}</li>`)
    .join('');

console.log(sortedBands);