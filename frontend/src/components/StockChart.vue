<script>
    import Spinner from "@/components/ui/spinner/Spinner.vue"

    export default {
        components: {
            Spinner
        }, 
        props: {
            loading: {
                required: true
            }
        }
    }

</script>


<template>

<div v-if="loading" class="bg-slate-700 rounded-2xl shadow-2xl p-6 text-slate-300 shadow-slate-800 border border-slate-200 border-opacity-50">
    
    <div class="grid place-items-center h-full">
        <Spinner/>
    </div>


</div>

<div v-else class="bg-slate-700 rounded-2xl shadow-2xl p-6 text-slate-300 shadow-slate-800 border border-slate-200 border-opacity-50">
    <slot/>

    <div class="flex items-center justify-center pt-3">
        <Button variant="outline" class="bg-slate-300 rounded-sm w-10 text-slate-600 mx-1 hover:bg-slate-600 hover:text-slate-300">1m</Button>
        <Button variant="outline" class="bg-slate-300 rounded-sm w-10 text-slate-600 mx-1 hover:bg-slate-600 hover:text-slate-300">10m</Button>
        <Button variant="outline" class="bg-slate-300 rounded-sm w-10 text-slate-600 mx-1 hover:bg-slate-600 hover:text-slate-300">30m</Button>
        <Button variant="outline" class="bg-slate-300 rounded-sm w-10 text-slate-600 mx-1 hover:bg-slate-600 hover:text-slate-300">1h</Button>
        <Button variant="outline" class="bg-slate-300 rounded-sm w-10 text-slate-600 mx-1 hover:bg-slate-600 hover:text-slate-300">3h</Button>
        <Button variant="outline" class="bg-slate-300 rounded-sm w-10 text-slate-600 mx-1 hover:bg-slate-600 hover:text-slate-300">5h</Button>
        <Button variant="outline" class="bg-slate-300 rounded-sm w-10 text-slate-600 mx-1 hover:bg-slate-600 hover:text-slate-300">10h</Button>
        <Button variant="outline" class="bg-slate-300 rounded-sm w-10 text-slate-600 mx-1 hover:bg-slate-600 hover:text-slate-300">1d</Button>
        <Button variant="outline" class="bg-slate-300 rounded-sm w-10 text-slate-600 mx-1 hover:bg-slate-600 hover:text-slate-300">10d</Button>
        <Button variant="outline" class="bg-slate-300 rounded-sm w-10 text-slate-600 mx-1 hover:bg-slate-600 hover:text-slate-300">30d</Button>


    </div>

    </div>

</template>