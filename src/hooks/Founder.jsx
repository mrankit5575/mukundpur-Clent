 // pages/about.js
import Head from 'next/head';
import FounderCard from '../components/FounderCard';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | Educational Marketplace</title>
        <meta name="description" content="Learn about our mission and team" />
      </Head>

      {/* ... other sections ... */}

      {/* Founders Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Founders</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <FounderCard
              name="Ankit Singh"
              role="Founder & Developer"
              bio="A student from Mukundpur, Delhi — passionate about solving real problems for students through technology."
              quote="Dream big and dare to fail, because great things never come from comfort zones."
              imageSrc="/ankit.jpg"
              twitterUrl="https://twitter.com/ankit"
              githubUrl="https://github.com/ankit"
              instagramUrl="https://instagram.com/ankit"
            />

            <FounderCard
              name="Gautam Pandey"
              role="Co-Founder & Designer"
              bio="A design enthusiast from Delhi with a vision to make education accessible through beautiful, intuitive platforms."
              quote="Design is not just what it looks like, it's how it works to solve real problems."
              imageSrc="/gautam.jpg"
              twitterUrl="https://twitter.com/gautam"
              dribbbleUrl="https://dribbble.com/gautam"
              instagramUrl="https://instagram.com/gautam"
              delay={0.1}
            />
          </div>
        </div>
      </section>

      {/* ... rest of the page ... */}
    </>
  );
}