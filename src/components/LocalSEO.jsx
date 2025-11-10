import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

const LocalSEO = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create('#local-seo h2', {
      type: 'words'
    });

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#local-seo',
        start: 'top center'
      }
    });

    scrollTimeline
      .from(titleSplit.words, {
        opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
      })
      .from('.local-seo-content p', {
        opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.1,
      }, '-=0.5');
  });

  return (
    <section id="local-seo" 
      data-keyword="best-digital-marketing-agency-in-narnaul" className="py-20 md:px-0 px-5">
      <div className="content max-w-5xl mx-auto">
        <div className="md:col-span-8">
          <p className="badge">Local Excellence</p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Why We Are the Best Digital Marketing Agency in Narnaul
          </h2>
        </div>

        <div className="local-seo-content mt-8 space-y-6">
          <p className="text-lg leading-relaxed opacity-90">
            When Narnaul businesses need a marketing agency that delivers real results, they choose Reworks Studio. As the leading digital marketing agency in Narnaul, we understand the unique challenges and opportunities facing local businesses in Haryana. Our proven track record includes helping gyms, cafes, coaching centers, salons, and retail shops achieve remarkable growth through strategic digital marketing.
          </p>

          <p className="text-lg leading-relaxed opacity-90">
            What sets us apart as the best Narnaul marketing agency is our combination of local market knowledge and cutting-edge digital strategies. We don't just create content—we build complete online ecosystems that drive traffic, generate leads, and convert visitors into loyal customers. From Instagram reels that go viral to high-converting Google and Meta ads, we specialize in performance marketing that moves the needle.
          </p>

          <p className="text-lg leading-relaxed opacity-90">
            Our comprehensive digital marketing services in Narnaul include social media management, paid advertising campaigns, SEO optimization, website development, and AI-powered video creation. Every strategy is backed by data, optimized for conversions, and tailored to help your business stand out in Narnaul's competitive market. Partner with Reworks Studio and experience why we're recognized as the top digital marketing agency in Narnaul, Haryana.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocalSEO;

