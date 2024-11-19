<template>
    <div class="overflow-scroll bg-gradient-to-tl from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-6 text-gray-100 shadow-gray-800 border border-gray-200 border-opacity-50mr-4 w-1/5 h-[500px]">
      <!-- Header -->
      <div class="bg-gray-700 rounded-lg px-4 py-2 mb-4 shadow-md">
        <h2 class="text-lg font-semibold text-gray-200 text-center">Order Book</h2>
      </div>
  
      <!-- Card Body -->
      <div class="bg-gray-800 py-4 rounded-xl shadow-lg mb-4">
        <div class="grid grid-cols-5 gap-0 text-sm font-medium text-gray-400">
          <span class="text-center">Size</span>
          <span class="text-center">Bid</span>
          <span></span>
          <span class="text-center">Ask</span>
          <span class="text-center">Size</span>
        </div>
      </div>
  
      <!-- Order Columns -->
      <div class="grid grid-cols-2 gap-4">
        <!-- Left Column -->
        <div class="overflow-scroll bg-green-900/20 p-4 rounded-lg shadow-inner">
          <div class="grid grid-cols-2 gap-y-2 place-items-center text-center text-green-400">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>9</span>
            <span>9</span>
            <span>9</span>
            <span>9</span>
            <span>9</span>
            <span>9</span>
            <span>9</span>
            <span>9</span>
            <span>9</span>
            <span>9</span>
            <span>10</span>
            <span>11</span>
            <span>12</span>
            <span>12</span>
            <span>12</span>
            <span>12</span>
            <span>12</span>
          </div>
        </div>
  
        <!-- Right Column -->
        <div class=" bg-red-900/20 p-4 rounded-lg shadow-inner">
          <div class="grid grid-cols-2 gap-y-2 place-items-center text-center text-red-400">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
            <span>8</span>
            <span>9</span>
            <span>10</span>
            <span>11</span>
            <span>12</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  