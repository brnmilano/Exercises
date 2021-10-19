let num = [1,2,3,4,5,6,7,8,9]
console.log(`Nosso vetor é o ${num}`);

num[9] = 10

console.log(`Agora, o meu vetor é o ${num}`);

num.push(11)

console.log(`Agora, o meu vetor é o ${num}`);

console.log(num.length);

let pos = num.indexOf(3)
console.log(`O valor 3 está dentro da posição ${pos}`);