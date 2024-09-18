export const diffucultyCard = (props, id) => {

    const { name, text, lines, icons, color, point } = props

    return `
        <div  class="flex flex-col gap-3 relative bg-white rounded-md border-2 border-[${color}] p-4 h-[400px] z-[10] overflow-hidden" key=${id}>
            <div class="flex flex-col gap-1 z-[2]">
                <p class="text-center text-sm text-black">${lines}</p>
                <h1 class="font-bold text-2xl">${name}</h1>
                <p class="text-[12px] text-stone-400">${text}</p>
            </div>
            <h1 class="font-bold absolute bottom-5 right-5">${point}</h1>
            <img src=${icons} alt=${name} class="absolute z-[1] opacity-75 blur-lg bottom-0"/>
        </div>
    
    `
}