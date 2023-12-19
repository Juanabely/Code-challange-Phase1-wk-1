function paye_calculate(salary) {
    var total_tax = 0
    var remaining_salary = salary
    if(remaining_salary > 24000) {
        remaining_salary = remaining_salary - 24000
        total_tax = 2400
    } else {
        total_tax = (10 * remaining_salary ) / 100
    }
    if (remaining_salary > 8,333) {
        remaining_salary = remaining_salary - 8333
        total_tax = total_tax + 2083
    } else {
        total_tax = (25 * remaining_salary ) / 100
    }
    if (remaining_salary > 467667){
remaining_salary = remaining_salary - 467667
        total_tax = total_tax + 140300}
    else {
        total_tax = (30 * remaining_salary ) / 100
    }
    console.log("Total Salary: " + salary)
    console.log("Total Tax: " + total_tax)
    console.log("Net Salary: " + (salary - total_tax))
}