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
    </div>
  );
}
