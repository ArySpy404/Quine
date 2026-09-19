const x = "const x = placeholder;\n\nconst result = x.replace(\n  \"placeholder\",\n  JSON.stringify(x)\n);\n\nconsole.log(result);";



const result = x.replace(
    "placeholder",
  JSON.stringify(x)
);
console.log(result);