year = 2003;

if (((year % 400) == 0) || ((year % 4 == 0) && (year % 100) != 0)) {
    console.log('Leap year');
}

else {
    console.log('Not leap year');
}