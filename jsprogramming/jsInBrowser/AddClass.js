let head1 = document.getElementById('heading');

console.log(head1.classList.add('red'));
console.log(head1.classList.add('yellow'));
console.log(head1.className);

console.log(head1.classList.add('remove'));
console.log(head1.classList.remove('remove'));

head1.classList.toggle('blue');

console.log(head1.classList.contains("blue"));