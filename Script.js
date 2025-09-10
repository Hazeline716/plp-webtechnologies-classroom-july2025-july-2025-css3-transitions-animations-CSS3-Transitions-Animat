<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Functions Demo</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body class="bg-gray-100 font-sans">
    <div class="container mx-auto p-8">
        <header class="text-center mb-12">
            <h1 class="text-4xl font-bold text-gray-800">JavaScript Functions: Scope, Parameters & Return Values</h1>
        </header>

        <!-- Function with Parameters and Return Value -->
        <section class="mb-12 p-6 bg-white rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold mb-4 text-gray-700">Calculate Area of a Rectangle</h2>
            <p class="text-gray-600 mb-6">Enter the dimensions below to calculate the area using a function that takes two parameters and returns a value.</p>
            <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <input type="number" id="lengthInput" placeholder="Length (e.g., 10)" class="w-full md:w-auto flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <input type="number" id="widthInput" placeholder="Width (e.g., 5)" class="w-full md:w-auto flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <button id="calculateBtn" class="w-full md:w-auto px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">Calculate</button>
            </div>
            <p id="resultOutput" class="mt-6 text-xl font-bold text-gray-800"></p>
        </section>

        <!-- Function Reusability & DOM Manipulation -->
        <section class="mb-12 p-6 bg-white rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold mb-4 text-gray-700">Dynamic Element Sizing</h2>
            <p class="text-gray-600 mb-6">Use a reusable function to change the size of the box below. The button passes a parameter to the function, which then updates the box's dimensions.</p>
            <div class="flex items-center space-x-4">
                <button id="smallBtn" class="px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300">Small</button>
                <button id="mediumBtn" class="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-300">Medium</button>
                <button id="largeBtn" class="px-6 py-3 bg-red-500 text-white font-bold rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300">Large</button>
            </div>
            <div id="dynamicBox" class="mt-6 bg-gray-300 rounded-lg transition-all duration-300 ease-in-out" style="width: 100px; height: 100px;"></div>
        </section>

        <!-- Global vs. Local Scope -->
        <section class="p-6 bg-white rounded-lg shadow-md">
            <h2 class="text-2xl font-semibold mb-4 text-gray-700">Understanding Scope</h2>
            <p class="text-gray-600 mb-6">Open the console (F12) and click the button to see the difference between global and local variables in action. The global variable is accessible everywhere, while the local one is confined to the function.</p>
            <div class="flex justify-center">
                <button id="scopeBtn" class="px-6 py-3 bg-indigo-500 text-white font-bold rounded-lg shadow-md hover:bg-indigo-600 transition-colors duration-300">Check Scope</button>
            </div>
        </section>
    </div>

    <script src="script.js"></script>
</body>
</html>

