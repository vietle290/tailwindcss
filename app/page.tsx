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
        <h1 className="text-xs sm:text-base md:text-lg lg:text-3xl">Hello World</h1>
      </div>
      {/* Tailwind spacing */}
      <div>
        <h1 className="mt-2">Hello World</h1>
        <h1 className="mt-8">Hello World</h1>
      </div>
      {/* Tailwind layer background */}
      <div>
        <h1>
          Hello World
        </h1>
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
    </div>
  );
}
