export default function TopperHighlight() {
  return (
    <section className="bg-pink-50 py-12 px-4 rounded-2xl text-center shadow-lg max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        🎓 Meet Our Topper – Anjali Pandey
      </h2>

      <p className="mt-4 text-xl text-gray-700">
        Scored <span className="text-green-600 font-semibold">99%</span> in the 12th Board Exams (CBSE)
      </p>

      <p className="mt-2 text-md text-gray-600">
        From <span className="font-medium text-blue-700">Mukundpur</span> – we proudly celebrate her dedication and hard work!
      </p>

      {/* Topper Photo */}
      <img
        src="/didi.jpg" // Make sure this file is in your /public folder
        alt="Anjali Pandey - Topper from Mukundpur"
        className="w-32 h-32 rounded-full mx-auto mt-6 border-4 border-pink-300 shadow-md"
      />
<a href="https://drive.google.com/file/d/1bcNw_B0l_N-QSaaAnOLbsMYpvh63zQlQ/view?usp=sharing">
<button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg mt-5 transition duration-200 shadow-md">
  See Result
</button>

      </a>
      {/* Result Card Image */}
      
    </section>
  );
}
