let friends = ["rahim", "karim", "abdulkarimshekh", "sadsd", "heroAlom"];

let largest = '';

friends.forEach(friend => {
    if (friend.length > largest.length) {
        largest = friend
    }
});

console.log(largest);