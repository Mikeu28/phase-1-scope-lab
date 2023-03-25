var customerName = `bob`;
const leastFavoriteCustomer = `mike`;
function upperCaseCustomerName () {
    customerName = `BOB`;
} 

function setBestCustomer () {
    bestCustomer = `not bob`;
    return bestCustomer;
}

var overwriteBestCustomer = () => bestCustomer = `maybe bob`;

function changeLeastFavoriteCustomer () {
    leastFavoriteCustomer = `something not mike`;
}
