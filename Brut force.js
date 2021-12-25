let s = 'ababbbbabbbbba';
let p = 'aba';
let phe = new Array();
function h(s) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        sum += (s.charCodeAt(i) * Math.pow(2, s.length - i - 1))
    }
    return sum;
}
let k = 0;
let heshSubstr = h(s.substr(0, p.length))
for (let i = 0; i < s.length; i++) {
    if (heshSubstr === h(p)) {
        k = 0;
           while (k < p.length && s[i + k] === p[k])
               k++;
           if (k === p.length)
               phe.push(i);
        }
        heshSubstr = (heshSubstr - s.charCodeAt(i) * Math.pow(2, p.length - 1)) * 2 + s.charCodeAt(i + p.length);
}
let result = '';
if (phe.length !== 0) {
    for (let i = 0; i < phe.length; i++) {
        result += phe[i] + ' ';
        k++;
    }
    console.log(result);
}else
    console.log("подстроки не в строке");
