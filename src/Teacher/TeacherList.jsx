import { tutors } from '@/teacherData/teacher';
import TeacherCard from './TeacherCard';

export default function TeacherList() {
  return (
    <section id="tutor" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Hire Top Tutors in <span className="text-blue-600">Mukundpur</span>
          </h2>
          <p className="text-lg text-gray-600">
            For Home Tuition & Personal Training – Learn Better, Score Higher
          </p>
          <p className="mt-4 text-xl font-semibold text-red-600">
            Get  <span className="underline">99%</span>  results with tutors who’ve done it before — no hype, just help..
          </p>
        </div>

        {/* Tutor Cards Grid (Responsive) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {tutors.map((tutor) => (
            <TeacherCard key={tutor.id} tutor={tutor} />
          ))}
        </div>
      </div>
    </section>
  );
}
