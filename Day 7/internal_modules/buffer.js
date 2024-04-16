const b = new Buffer.from("abcxyz");
console.log(b.toString());
b.write("Other");
console.log(b.toString());