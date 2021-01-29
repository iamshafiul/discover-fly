// handle ticket change function
function handleProductChange(price, ticket, isIncrease) {
    let ticketCount = document.getElementById(ticket).value;
    let ticketCountNumber = parseInt(ticketCount);
    let ticketCountNewNumber = ticketCountNumber;
    if (isIncrease == true && ticketCount < 20) {
        ticketCountNewNumber = ticketCountNumber + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketCountNewNumber = ticketCountNumber - 1;
    }
    document.getElementById(ticket).value = ticketCountNewNumber;
    let total = 0;
    if (ticket == 'first-class') {
        total = ticketCountNewNumber * 150
    }
    if (ticket == 'economy') {
        total = ticketCountNewNumber * 100;
    }
    // document.getElementById(price).innerText = "$" + total;
    calculateTotal()
}


// calculate function
function calculateTotal() {
    let firstClassTicketCalculate = document.getElementById('first-class').value;
    let firstClassTicketCalculateNumber = parseInt(firstClassTicketCalculate);

    let economyTicketCalculate = document.getElementById('economy').value;
    let economyTicketCalculateNumber = parseInt(economyTicketCalculate);

    let totalAmount = firstClassTicketCalculateNumber * 150 + economyTicketCalculateNumber * 100;
    document.getElementById('subtotal').innerText = "$" + totalAmount;

    let tax = Math.round(totalAmount * 0.1);
    document.getElementById('tax').innerText = "$" + tax;

    let totalPrice = totalAmount + tax;
    document.getElementById('total').innerHTML = "$" + totalPrice;

}