let valores = [8, 3, 11, 5, 9, 1, 7, 23, 58, 111]

/*
for (let pos=0; pos < valores.length; pos++) {
  console.log(`A posição ${pos} tem o valor ${valores[pos ]}`);
}
*/

for(let pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}