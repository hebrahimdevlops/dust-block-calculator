function calculateBlocks() {
    // Get input values
    const bagsOfCement = parseInt(document.getElementById("bags").value);
    const blockSize = document.getElementById("blockSize").value;

    // Determine blocks per bag
    let blocksPerBag;
    let quarryDustKg;

    switch (blockSize) {
        case "4x16x9":
            blocksPerBag = 22;
            break;
        case "5x16x9":
            blocksPerBag = 18;
            break;
        case "6x16x9":
            blocksPerBag = 15;
            break;
        default:
            alert("Invalid block size.");
            return;
    }

    // Calculate total number of blocks
    const totalBlocks = bagsOfCement * blocksPerBag;

    // Calculate the amount of quarry dust required
    const cementKg = bagsOfCement * 50; // each bag is 50 kg
    quarryDustKg = (cementKg / 1) * 6; // 6 parts of quarry dust for each part of cement

    // Display results
    document.getElementById("results").innerHTML =
    `
        <h2>Results:</h2>
        <p>Total number of blocks: <strong>${totalBlocks}</strong></p>
        <p>Mix ratio: <strong>1 part cement to 6 parts quarry dust</strong></p>
        <p>Quantity of quarry dust required: <strong>${quarryDustKg.toFixed(2)} kg</strong></p>
    `
}