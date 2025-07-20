export default function TopperHighlight() {
  return (
    <section className="bg-pink-50 py-12 px-4 rounded-2xl text-center shadow-lg max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        🎓 Meet Our Topper – Anjali Sharma
      </h2>
      <p className="mt-4 text-xl text-gray-700">
        Scored <span className="text-green-600 font-semibold">99%</span> in the 12th Board Exams (CBSE)
      </p>
      <p className="mt-2 text-md text-gray-600">
        We're proud to celebrate her outstanding achievement and dedication.
      </p>

      {/* Topper Photo (Optional) */}
      <img
        src="/anjali.jpg"
        alt="Anjali Sharma Topper"
        className="w-32 h-32 rounded-full mx-auto mt-6 border-4 border-pink-300 shadow-md"
      />
    </section>
  );
}
