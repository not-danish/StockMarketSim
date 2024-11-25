<script>
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
} from '@/components/ui/number-field'




export default {
    props: ["stock"],
    components: {
      ToggleGroup, ToggleGroupItem,
      NumberField,
      NumberFieldContent,
      NumberFieldDecrement,
      NumberFieldIncrement,
      NumberFieldInput,
      Label,
      Button
    }
  }
</script>

<template>
    <div class="bg-gradient-to-tl from-gray-800 to-gray-900 rounded-2xl shadow-2xl p-6 text-gray-100 shadow-gray-800 border border-gray-200 border-opacity-50 w-[350px] mr-4 lg:h-[500px] xl:h-[900px]">
      <!-- Header -->
      <div class="bg-gray-700 rounded-lg px-4 py-2 mb-4 shadow-md">
        <h2 class="text-lg font-semibold text-gray-200 text-center">Trade {{ stock }}</h2>
      </div>
  
      <!-- Card Body -->
      <!--<div class="bg-gray-800 py-4 rounded-xl shadow-lg mb-4 pl-4 font-bold text-red-400 bg-red-900/20 text-center" >Login to trade AAPL Stock</div>-->

      <ToggleGroup type="single" class="pt-5">
        <ToggleGroupItem value="BUY" defaultValue="true">
          BUY
        </ToggleGroupItem>
        <ToggleGroupItem value="SELL">
          SELL
        </ToggleGroupItem>
        </ToggleGroup>

        <div class="grid grid-cols-2 gap-2">

          
          <NumberField default-value="1" step="1" class="pt-5">
            <Label>Amount</Label>
            <NumberFieldContent class="text-slate-900" >
              <NumberFieldDecrement />
              <NumberFieldInput />
              <NumberFieldIncrement />
            </NumberFieldContent>
          </NumberField>
          
          <NumberField default-value="0.00" step="0.01" class="pt-5">
            <Label>Price</Label>
            <NumberFieldContent class="text-slate-900" >
              <NumberFieldDecrement />
              <NumberFieldInput />
              <NumberFieldIncrement />
            </NumberFieldContent>
          </NumberField>
          
        </div>

        <Button class="bg-slate-200 text-slate-900 mt-5 ml-20 hover:bg-slate-900 hover:text-slate-200">Submit Order</Button>
    </div>
  </template>
  