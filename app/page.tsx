export default function Home() {
  return (
    <div>
      {/* Tailwind Color */}
      <div>
        <h1 className="text-yellow-600">Hello World</h1>
        <h1 className="bg-green-600 text-white">Hello World</h1>
        <h1 className="text-vuejs-200">Hello World</h1>
        <h1 className="text-vuejs-100">Hello World</h1>
      </div>
      {/* Tailwind text size */}
      <div>
        <h1 className="text-xs sm:text-base md:text-lg lg:text-3xl">
          Hello World
        </h1>
      </div>
      {/* Tailwind spacing */}
      <div>
        <h1 className="mt-2">Hello World</h1>
        <h1 className="mt-8">Hello World</h1>
      </div>
      {/* Tailwind layer background */}
      <div>
        <h1>Hello World</h1>
      </div>
      {/* Tailwind Typography Font Size base on config on tailwind.config.js */}
      <div>
        <p className="text-xs">Hello World</p>
        <p className="text-sm">Hello World</p>
        <p className="text-base">Hello World</p>
        <p className="text-lg">Hello World</p>
        <p className="text-xl">Hello World</p>
        <p className="text-2xl">Hello World</p>
        <p className="text-3xl">Hello World</p>
        <p className="text-4xl">Hello World</p>
      </div>
      {/* Tailwind Typography Font Style*/}
      <div>
        <p className="italic">Hello World</p>
      </div>
      {/* Tailwind Typography All Text Decoration*/}
      <div>
        <p className="underline">Hello World</p>
        <p className="line-through">Hello World</p>
        <p className="text-decoration-underline">Hello World</p>
        <p className="text-decoration-line-through">Hello World</p>
        <p className="decoration-solid">Hello World</p>
        <p className="decoration-dotted">Hello World</p>
        <p className="decoration-dashed">Hello World</p>
        <p className="decoration-double">Hello World</p>
      </div>
      {/* Tailwind Typography Line Height */}
      <div>
        <p className="leading-5">Hello World</p>
        <p className="leading-6">Hello World</p>
        <p className="leading-7">Hello World</p>
        <p className="leading-8">Hello World</p>
        <p className="leading-9">Hello World</p>
        <p className="leading-10">Hello World</p>
        <p className="leading-11">Hello World</p>
        <p className="leading-none">Hello World</p>
        <p className="leading-tight">Hello World</p>
        <p className="leading-snug">Hello World</p>
        <p className="leading-normal">Hello World</p>
      </div>
      {/* Tailwind Typography Text Transform */}
      <div>
        <p className="text-uppercase">Hello World</p>
        <p className="text-lowercase">Hello World</p>
        <p className="text-capitalize">Hello World</p>
        <p className="text-normal-case">Hello World</p>
      </div>
      {/* Tailwind Typography Text Overflow */}
      <div>
        <p className="text-ellipsis">Hello World</p>
        <p className="truncate">Hello World</p>
        <p className="text-clip">Hello World</p>
      </div>
      {/* Tailwind Typography Whitespace */}
      <div>
        <p className="whitespace-nowrap">Hello World</p>
        <p className="whitespace-nowrap break-spaces">Hello World</p>
        <p className="whitespace-nowrap break-all">Hello World</p>
        <p className="whitespace-nowrap break-words">Hello World</p>
        <p className="whitespace-normal">Hello World</p>
        <p className="whitespace-pre">Hello World</p>
        <p className="whitespace-pre-wrap">Hello World</p>
        <p className="whitespace-pre-line">Hello World</p>
      </div>
      {/* Tailwind Typography Word Break */}
      <div>
        <p className="break-normal">Hello World</p>
        <p className="break-words">Hello World</p>
        <p className="break-all">Hello World</p>
        <p className="break-keep">Hello World</p>
      </div>
      {/*---------------------------------------*/}
      {/* Tailwind Spaces & Sizes */}
      {/* Tailwind Padding */}
      <div>
        <p className="p-0">Hello World</p>
        <p className="pt-0">Hello World</p>
        <p className="pr-0">Hello World</p>
        <p className="pb-0">Hello World</p>
        <p className="pl-0">Hello World</p>
        <p className="px-0">Hello World</p>
        <p className="py-0">Hello World</p>
      </div>
      {/* Tailwind Margin */}
      <div>
        <p className="m-0">Hello World</p>
        <p className="mt-0">Hello World</p>
        <p className="mr-0">Hello World</p>
        <p className="mb-0">Hello World</p>
        <p className="ml-0">Hello World</p>
        <p className="mx-0">Hello World</p>
        <p className="my-0">Hello World</p>
      </div>
      {/* Tailwind Width */}
      <div>
        <p className="w-0">Hello World</p>
        <p className="w-px">Hello World</p>
        <p className="w-0.5">Hello World</p>
        <p className="w-1">Hello World</p>
        <p className="w-1.5">Hello World</p>
      </div>
      <div className="flex w-full">
        <p className="w-1/2">Hello World</p>
        <p className="w-1/3">Hello World</p>
        <p className="w-1/4">Hello World</p>
        <p className="w-1/5">Hello World</p>
        <p className="w-2/5">Hello World</p>
      </div>
      {/* Tailwind Height */}
      <div>
        <p className="h-0">Hello World</p>
        <p className="h-px">Hello World</p>
        <p className="h-0.5">Hello World</p>
        <p className="h-1">Hello World</p>
        <p className="h-1.5">Hello World</p>
        <p className="h-auto">Hello World</p>
      </div>
      {/* Tailwind Min & Max Width */}
      <div>
        <p className="min-w-0">Hello World</p>
        <p className="min-w-full">Hello World</p>
        <p className="min-w-min">Hello World</p>
        <p className="min-w-max">Hello World</p>
        <p className="max-w-0">Hello World</p>
        <p className="max-w-full">Hello World</p>
        <p className="max-w-min">Hello World</p>
        <p className="max-w-max">Hello World</p>
      </div>
      {/* Tailwind Min & Max Height */}
      <div>
        <p className="min-h-0">Hello World</p>
        <p className="min-h-full">Hello World</p>
        <p className="min-h-min">Hello World</p>
        <p className="min-h-max">Hello World</p>
        <p className="max-h-0">Hello World</p>
        <p className="max-h-full">Hello World</p>
        <p className="max-h-min">Hello World</p>
        <p className="max-h-max">Hello World</p>
      </div>
      {/* Tailwind Space Between */}
      <div>
        <p className="space-x-0">Hello World</p>
        <p className="space-x-0.5">Hello World</p>
        <p className="space-x-1">Hello World</p>
        <p className="space-x-1.5">Hello World</p>
        <p className="space-x-2">Hello World</p>
        <p className="space-x-2.5">Hello World</p>
        <p className="space-x-3">Hello World</p>
        <p className="space-x-3.5">Hello World</p>
        <p className="space-y-0">Hello World</p>
        <p className="space-y-0.5">Hello World</p>
        <p className="space-y-1">Hello World</p>
        <p className="space-y-1.5">Hello World</p>
        <p className="space-y-2">Hello World</p>
        <p className="space-y-2.5">Hello World</p>
        <p className="space-y-3">Hello World</p>
        <p className="space-y-3.5">Hello World</p>
      </div>
      {/*---------------------------------------*/}
      {/* Tailwind Flexbox & Grid */}
      {/* Tailwind Flexbox */}
      <div className="flex">
        <p className="flex-1">Hello World</p>
        <p className="flex-2">Hello World</p>
        <p className="flex-3">Hello World</p>
        <p className="flex-4">Hello World</p>
        <p className="flex-5">Hello World</p>
        <p className="flex-6">Hello World</p>
      </div>
      {/* Tailwind Flex Direction */}
      <div className="flex">
        <p className="flex-row">Hello World</p>
        <p className="flex-row-reverse">Hello World</p>
        <p className="flex-col">Hello World</p>
        <p className="flex-col-reverse">Hello World</p>
      </div>
      {/* Tailwind Flex Wrap */}
      <div className="flex">
        <p className="flex-wrap">Hello World</p>
        <p className="flex-wrap-reverse">Hello World</p>
        <p className="flex-nowrap">Hello World</p>
      </div>
      {/* Tailwind Justify Content */}
      <div className="flex">
        <p className="justify-start">Hello World</p>
        <p className="justify-end">Hello World</p>
        <p className="justify-center">Hello World</p>
        <p className="justify-between">Hello World</p>
        <p className="justify-around">Hello World</p>
        <p className="justify-evenly">Hello World</p>
      </div>
      {/* Tailwind Align Items */}
      <div className="flex">
        <p className="items-start">Hello World</p>
        <p className="items-end">Hello World</p>
        <p className="items-center">Hello World</p>
      </div>
      {/* Tailwind Flex Grow */}
      <div className="flex">
        <p className="grow">Hello World</p>
        <p className="grow-0">Hello World</p>
      </div>
      {/* Tailwind Flex Basis */}
      <div className="flex">
        <p className="basis-0">Hello World</p>
        <p className="basis-auto">Hello World</p>
        <p className="basis-100">Hello World</p>
        <p className="basis-1fr">Hello World</p>
      </div>

      {/*---------------------------------------*/}
      {/* Tailwind Grid */}
      <div className="grid">
        <p className="grid-cols-1">Hello World</p>
        <p className="grid-cols-2">Hello World</p>
        <p className="grid-cols-3">Hello World</p>
        <p className="grid-cols-4">Hello World</p>
        <p className="grid-cols-5">Hello World</p>
        <p className="grid-cols-6">Hello World</p>
      </div>
      {/* Tailwind Grid Template */}
      <div className="grid">
        <p className="grid-cols-1 grid-rows-1">Hello World</p>
        <p className="grid-cols-2 grid-rows-2">Hello World</p>
        <p className="grid-cols-3 grid-rows-3">Hello World</p>
        <p className="grid-cols-4 grid-rows-4">Hello World</p>
        <p className="grid-cols-5 grid-rows-5">Hello World</p>
        <p className="grid-cols-6 grid-rows-6">Hello World</p>
      </div>
      {/* Tailwind Grid Screen */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        <div className="col-span-1 col-start-2 p-3">1</div>
        <div className="col-span-1 p-3">2</div>
        <div className="col-span-1 p-3">3</div>
        <div className="col-span-1 p-3">4</div>
        <div className="col-start-1 p-3">5</div>
        <div className="col-end-3 p-3">6</div>
      </div>
      {/*Tailwind Grid Auto Columns*/}
      <div className="grid grid-flow-col auto-cols-max">
        <div className="p-3">1</div>
        <div className="p-3">2</div>
        <div className="p-3">3</div>
        <div className="p-3">4</div>
        <div className="p-3">5</div>
        <div className="p-3">6</div>
      </div>
      {/*Tailwind Grid Auto Rows*/}
      <div className="grid grid-flow-row auto-rows-max">
        <div className="p-3">1</div>
        <div className="p-3">2</div>
        <div className="p-3">3</div>
        <div className="p-3">4</div>
        <div className="p-3">5</div>
        <div className="p-3">6</div>
      </div>
      {/*---------------------------------------*/}
      {/* Tailwind Layout */}
      {/*Tailwind Container*/}
      <div className="container mx-auto">
        <div className="p-3">1</div>
        <div className="p-3">2</div>
      </div>
      {/*Tailwind Columns*/}
      <div className="container px-2 columns-3">
        <p>Column 1</p>
        <p>Column 2</p>
        <p>Column 3</p>
      </div>
      {/*Tailwind Display*/}
      <div className="block">
        <p>Block</p>
      </div>
      <div className="inline">
        <p>Inline</p>
      </div>
      <div className="hidden">
        <p>Hidden</p>
      </div>
      <div className="inline-block">
        <p>Inline-Block</p>
      </div>
      <div className="flex flex-col">
        <p>Flex Column</p>
      </div>
      {/*Tailwind Floats*/}
      <div className="float-left">
        <p>Float Left</p>
      </div>
      <div className="float-right">
        <p>Float Right</p>
      </div>
      <div className="float-none">
        <p>Float None</p>
      </div>
      {/*Tailwind Clear*/}
      <div className="clear-both">
        <p>Clear Both</p>
      </div>
      <div className="clear-left">
        <p>Clear Left</p>
      </div>
      <div className="clear-right">
        <p>Clear Right</p>
      </div>
      <div className="clear-none">
        <p>Clear None</p>
      </div>
      {/*Tailwind Position*/}
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <p>Absolute</p>
        </div>
      </div>
      <div className="relative">
        <div className="fixed">
          <p>Fixed</p>
        </div>
      </div>
      {/*Tailwind Overflow*/}
      <div className="overflow-auto">
        <div className="overflow-y-hidden">
          <p>Overflow Y Hidden</p>
        </div>
      </div>
      {/*Tailwind Visibility*/}
      <div className="visible">
        <p>Visible</p>
      </div>
      <div className="invisible">
        <p>Invisible</p>
      </div>
      <div className="collapse">
        <p>Collapse</p>
      </div>
      {/*Tailwind Z-Index*/}
      <div className="z-10">
        <p>Z-Index 10</p>
      </div>
      {/*Tailwind Object Position*/}
      <div className="object-cover">
        <img src="https://example.com/image.jpg" alt="Example Image" />
      </div>
      {/*Tailwind Break After*/}
      <div className="break-after-auto">
        <p>Break After Auto</p>
      </div>
      {/*Tailwind Break Before*/}
      <div className="break-before-auto">
        <p>Break Before Auto</p>
      </div>
      {/*Tailwind Breakinside*/}
      <div className="break-inside-auto">
        <p>Break Inside Auto</p>
      </div>
      {/*---------------------------------------*/}
      {/* Tailwind Border */}
      <div className="border">
        <p>Border</p>
      </div>
      <div className="border-t">
        <p>Border Top</p>
      </div>
      <div className="border-r">
        <p>Border Right</p>
      </div>
      <div className="border-b">
        <p>Border Bottom</p>
      </div>
      <div className="border-l">
        <p>Border Left</p>
      </div>
      <div className="border-y">
        <p>Border Y</p>
      </div>
      <div className="border-x">
        <p>Border X</p>
      </div>
      <div className="border-t-2 border-blue-500">
        <p>Border Top 2</p>
      </div>
      <div className="divide-y">
        <p>Divide Y</p>
      </div>
      <div className="divide-x">
        <p>Divide X</p>
      </div>
      <div className="divide-y-2 divide-blue-500">
        <p>Divide Y 2</p>
      </div>
      <div className="divide-x-2 divide-blue-500">
        <p>Divide X 2</p>
      </div>
      {/*Tailwind Border Style */}
      <div className="border-solid border-blue-500">
        <p>Border Solid</p>
      </div>
      <div className="border-dashed border-blue-500">
        <p>Border Dashed</p>
      </div>
      <div className="border-dotted border-blue-500">
        <p>Border Dotted</p>
      </div>
      <div className="border-double border-blue-500">
        <p>Border Double</p>
      </div>
      <div className="border-hidden border-blue-500">
        <p>Border Hidden</p>
      </div>
      <div className="border-none border-blue-500">
        <p>Border None</p>
      </div>
      {/*Tailwind Border Width */}
      <div className="border-2 border-blue-500">
        <p>Border 2</p>
      </div>
      <div className="border-4 border-blue-500">
        <p>Border 4</p>
      </div>
      <div className="border-8 border-blue-500">
        <p>Border 8</p>
      </div>
      {/*Tailwind Border Outline */}
      <div className="outline-none">
        <p>Outline None</p>
      </div>
      <div className="outline outline-2 outline-blue-500">
        <p>Outline 2</p>
      </div>
      <div className="outline outline-4 outline-blue-500">
        <p>Outline 4</p>
      </div>
      <div className="outline outline-8 outline-blue-500">
        <p>Outline 8</p>
      </div>
      {/*---------------------------------------*/}
      {/* Tailwind Hover */}
      <div className="hover:bg-gray-100">
        <p>Hover Background</p>
      </div>
      <div className="focus:bg-gray-100">
        <p>Focus Background</p>
      </div>
      <div className="active:bg-gray-100">
        <p>Active Background</p>
      </div>
      <div className="disabled:bg-gray-100">
        <p>Disabled Background</p>
      </div>
      <div className="group-hover:bg-gray-100">
        <p>Group Hover Background</p>
      </div>
      <div className="peer-hover:bg-gray-100">
        <p>Peer Hover Background</p>
      </div>
      {/*---------------------------------------*/}
      {/* Tailwind Effect */}
      {/*Tailwind Box Shadow*/}
      <div className="shadow-md">
        <p>Shadow</p>
      </div>
      <div className="shadow-inner">
        <p>Shadow Inner</p>
      </div>
      <div className="shadow-lg">
        <p>Shadow Lg</p>
      </div>
      <div className="shadow-xl">
        <p>Shadow Xl</p>
      </div>
      <div className="shadow-2xl">
        <p>Shadow 2xl</p>
      </div>
      <div className="shadow-none">
        <p>Shadow None</p>
      </div>
      {/*Tailwind Opacity*/}
      <div className="opacity-0">
        <p>Opacity 0</p>
      </div>
      <div className="opacity-25">
        <p>Opacity 25</p>
      </div>
      <div className="opacity-50">
        <p>Opacity 50</p>
      </div>
      {/*Tailwind Mix Blend Mode*/}
      <div className="mix-blend-normal">
        <p>Mix Blend Normal</p>
      </div>
      <div className="mix-blend-multiply">
        <p>Mix Blend Multiply</p>
      </div>
      {/*---------------------------------------*/}
      {/* Tailwind Animation */}
      {/*Tailwind Transition Property*/}
      <div className="transition-all duration-300">
        <p>Transition All</p>
      </div>
      <div className="transition-colors duration-300">
        <p>Transition Colors</p>
      </div>
      <div className="transition-opacity duration-300">
        <p>Transition Opacity</p>
      </div>
      <div className="transition duration-300">
        <p>Transition</p>
      </div>
      {/*Tailwind Transition Duration*/}
      <div className="duration-300">
        <p>Duration 300</p>
      </div>
      {/*Tailwind Transition Timing Function*/}
      <div className="ease-in-out duration-300">
        <p>Ease In Out</p>
      </div>
      {/*Tailwind Transition Delay*/}
      <div className="delay-300">
        <p>Delay 300</p>
      </div>
      {/*Tailwind Transition Animation*/}
      <div className="animation-spin duration-300 infinite ease-in-out">
        <p>Animation Spin</p>
      </div>
      {/*---------------------------------------*/}
    </div>
  );
}
