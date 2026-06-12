function printMessage() {
    console.log("Jai shree ram!");

    setTimeout(printMessage, 1000); // Run again after 1 second
}

printMessage();