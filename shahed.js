let income = [900, 2700, 3400];
let living_cost = 10000;

const monthlySavings = (array, cost) => {
    if (Array.isArray(array) && typeof cost == 'number') {
        save = 0;
        array.forEach(element => {
            if (element >= 3000) {
                tmp = element * 0.8;
                save += tmp
            }
            else {
                save += element
            }
        });
        money_left = save - cost;
        if (money_left < 0) {
            return 'earn more';
        }
        else {
            return money_left;
        }
    }
    else {
        return 'invalid input';
    }
};

let result = monthlySavings(income, living_cost);

console.log(result);