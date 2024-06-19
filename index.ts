/**
 * A company manufactures and sells two products, Product A and Product B.
 * The profit from each unit of Product A is $40 and from each unit of Product B is $30.
 * The company can produce a maximum of 80 units of Product A and 100 units of Product B per week due to limited resources.
 * Additionally, the production of these products requires certain hours of labor and machine time, which are limited per week.
 * Each unit of Product A requires 2 hours of labor and 1 hour of machine time. Each unit of Product B requires 1 hour of labor
 * and 2 hours of machine time. The company has a maximum of 160 labor hours and 180 machine hours available per week.
 * Maximize the company’s weekly profit. With 10 times of iteration.
 *
 * Function to calculate the maximum profit
 */

function calculateMaximumProfit(iterations: number): { bestA: number, bestB: number, bestProfit: number } {
    // Initialize constants for profit, production limits, and resource limits
    const [profitA, profitB, maxA, maxB, maxLaborHours, maxMachineHours]: number[] = [40, 30, 80, 100, 160, 180];
    // Initialize variables to store the best profit and the corresponding quantities of products A and B
    let [bestProfit, bestA, bestB]: number[] = [0, 0, 0];

    console.log(`Solving Problem #1 ...\n`)
    // Loop through the specified number of iterations
    for (let i = 0; i < iterations; i++) {
        // Randomly generate quantities for product A and B within their production limits
        let a = Math.floor(Math.random() * (maxA + 1));
        let b = Math.floor(Math.random() * (maxB + 1));

        // Calculate the required labor and machine hours for the generated quantities
        const laborHours = 2 * a + b;
        const machineHours = a + 2 * b;

        // Check if the generated quantities meet the resource constraints
        if (laborHours <= maxLaborHours && machineHours <= maxMachineHours) {
            // Calculate the profit for the generated quantities
            const profit = profitA * a + profitB * b;
            // If the calculated profit is greater than the current best profit, update the best profit and quantities
            if (profit > bestProfit) {
                bestProfit = profit;
                bestA = a;
                bestB = b;
            }
        }
        // Log the result of the current iteration
        console.log(`Iteration #${i+1} -> Product A: ${bestA}, Product B: ${bestB}, Profit: ${bestProfit}`)
    }

    // Return the best quantities and profit found
    return { bestA, bestB, bestProfit };
}

// Call the function with 10 iterations and store the result
const problemOne = calculateMaximumProfit(10);
// Log the final best quantities and profit
console.log(`\nResult => Product A: ${problemOne.bestA}, Product B: ${problemOne.bestB}, Profit: ${problemOne.bestProfit}\n`);


/**
 * A company produces two products, Premium Widgets (PW) and Standard Widgets (SW).
 * The company wants to maximize its total revenue, but the revenue functions for each product exhibit diminishing returns due to market saturation.
 * The revenue functions for the products are given as follows: The revenue for Premium Widgets is $100 per unit for the first 50 units,
 * but decreases by $1 per unit for each additional unit produced beyond 50. The revenue for Standard Widgets is $50 per unit for the first 100
 * units, but decreases by $0.5 per unit for each additional unit produced beyond 100.
 * 
 * Constraints: The production capacity for Premium Widgets is between 0 and 150 units. The production capacity for Standard Widgets
 * is between 0 and 200 units. The total production cost should not exceed $20,000, where the cost of producing each Premium Widget
 * is $80 and each Standard Widget is $30.
 * 
 * Objective: Determine the number of Premium Widgets and Standard Widgets to produce in order to maximize the total revenue.
 * With 10 times of iteration.
 * 
 */

function calculateWidgetRevenue(pw: number, sw: number): number {
    // Initialize revenue variables for Premium Widgets (pwRevenue) and Standard Widgets (swRevenue)
    let pwRevenue = 0;
    let swRevenue = 0;

    // Calculate revenue for Premium Widgets
    for (let i = 1; i <= pw; i++) {
        pwRevenue += 100 - (i > 50 ? i - 50 : 0);
    }

    // Calculate revenue for Standard Widgets
    for (let i = 1; i <= sw; i++) {
        swRevenue += 50 - (i > 100 ? (i - 100) * 0.5 : 0);
    }

    // Return the total revenue
    return pwRevenue + swRevenue;
}

function calculateWidget(iterations: number): { bestPW: number, bestSW: number, bestRevenue: number} {
    // Define constants for maximum units and costs
    const [maxPW, maxSW, maxCost, costPW, costSW]: number[] = [150, 200, 20000, 80, 30];
    // Initialize variables to track the best revenue and corresponding units of PW and SW
    let [bestRevenue, bestPW, bestSW]: number[] = [0, 0, 0];

    // Print starting message
    console.log(`Solving problem #2 ...\n`);

    // Loop through the specified number of iterations
    for (let i = 0; i < iterations; i++) {
        // Generate random production amounts for PW and SW within their respective limits
        let pw = Math.floor(Math.random() * (maxPW + 1));
        let sw = Math.floor(Math.random() * (maxSW + 1));

        // Calculate the total production cost
        const cost = pw * costPW + sw * costSW;

        // Check if the cost is within the budget
        if (cost <= maxCost) {
            // Calculate the revenue for the current production amounts
            const revenue = calculateWidgetRevenue(pw, sw);

            // Update the best revenue and corresponding production amounts if current revenue is higher
            if (revenue > bestRevenue) {
                bestRevenue = revenue;
                bestPW = pw;
                bestSW = sw;
            }
        }

        // Print the result of the current iteration
        console.log(`Iteration #${i + 1} -> PW: ${bestPW}, SW: ${bestSW}, Revenue: ${bestRevenue}`);
    }

    // Return the best production amounts and the best revenue
    return { bestPW, bestSW, bestRevenue };
}

// Call the function with 10 iterations and store the result
const widgetRevenue = calculateWidget(10);

// Print the final result
console.log(`\nResult => Premium Widgets: ${widgetRevenue.bestPW}, Standard Widgets: ${widgetRevenue.bestSW}, Revenue: ${widgetRevenue.bestRevenue}\n`);


function calculateTeamRevenue(teamA: number, teamB: number): number {
    // This function calculates the revenue generated by Team A and Team B
    // based on the number of developers assigned to each team.

    let teamARevenue = 0; // Initialize revenue for Team A
    let teamBRevenue = 0; // Initialize revenue for Team B

    // Calculate revenue for Team A
    for (let i = 1; i <= teamA * 4; i++) {
        // Iterate over the number of features developed by Team A (4 features per developer)
        teamARevenue += 120 - (i > 40 ? (i - 40) * 2 : 0);
        // For the first 40 features, revenue is $120 per feature.
        // For each feature beyond 40, reduce the revenue by $2 per feature.
    }

    // Calculate revenue for Team B
    for (let i = 1; i <= teamB * 4; i++) {
        // Iterate over the number of features developed by Team B (4 features per developer)
        teamBRevenue += 60 - (i > 80 ? (i - 80) : 0);
        // For the first 80 features, revenue is $60 per feature.
        // For each feature beyond 80, reduce the revenue by $1 per feature.
    }

    return teamARevenue + teamBRevenue;
    // Return the total revenue from both teams
}

function calculateDevTeamRevenue(iterations: number): { bestA: number, bestB: number, bestRevenue: number} {
    // This function determines the optimal number of developers for Team A and Team B
    // to maximize total revenue, based on a given number of iterations.

    // Define constraints and costs
    const [minA, maxA, minB, maxB, maxCost, costA, costB]: number[] = [5, 15, 10, 20, 100000, 5000, 4000];
    let [bestRevenue, bestA, bestB]: number[] = [0, 0, 0]; // Initialize the best revenue and the best number of developers for both teams

    console.log(`Solving problme #3 ...\n`)

    for (let i = 0; i < iterations; i++) {
        // Loop through the number of iterations to find the best configuration
        let a = Math.floor(minA + Math.random() * (maxA - minA + 1));
        // Randomly select a number of developers for Team A within the allowed range
        let b = Math.floor(minB + Math.random() * (maxB - minB + 1));
        // Randomly select a number of developers for Team B within the allowed range

        const cost = a * costA + b * costB;
        // Calculate the total cost for the selected number of developers

        if (cost <= maxCost) {
            // Check if the total cost is within the budget
            const revenue = calculateTeamRevenue(a, b);
            // Calculate the total revenue for the current configuration
            if (revenue > bestRevenue) {
                // If the current revenue is better than the best recorded revenue
                bestRevenue = revenue;
                bestA = a;
                bestB = b;
                // Update the best revenue and the best number of developers for both teams
            }
        }
        console.log(`Iteration #${i + 1} -> Team A: ${bestA}, Team B: ${bestB}, Revenue: ${bestRevenue}`);
        // Output the results of the current iteration
    }

    return { bestA, bestB, bestRevenue };
    // Return the best configuration found
}

// Run the function with 10 iterations to find the optimal number of developers for each team
const teamRevenue = calculateDevTeamRevenue(10);
console.log(`\nResult => Team A developers: ${teamRevenue.bestA}, Team B developers: ${teamRevenue.bestB}, Revenue: ${teamRevenue.bestRevenue}`);


