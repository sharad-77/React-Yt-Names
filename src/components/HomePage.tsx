import { Footer, Header } from './layout';
import {
  ClauserSection,
  ContactSection,
  CTASection,
  HeroSection,
  QNASection,
  ReasonsSection,
  WhyChooseSection,
} from './sections';

function HomePage() {
  return (
    <div className="flex min-h-screen w-full justify-center">
      <div className="flex min-h-screen w-full flex-col items-center bg-white">
        {/*Div For Header And HeroSection Along With Side SVGS*/}
        <div className="bg-bluewhitebg flex w-full flex-col">
          <div className="flex h-full w-full flex-col items-center justify-start gap-5 lg:mt-4">
            <Header />
            <HeroSection />
          </div>
        </div>

        {/*Why Choose Section*/}
        <div className="flex h-full w-full items-center justify-center py-10 lg:py-0">
          <WhyChooseSection />
        </div>

        {/*Reasons why YouTube channel names section*/}
        <div className="mt-10 mb-10 flex h-full w-full justify-center md:mb-10">
          <ReasonsSection />
        </div>

        {/*Clauser */}
        <div className="flex h-full w-full justify-center md:py-10 xl:pt-50 xl:pb-10">
          <ClauserSection />
        </div>

        {/*CTA Section*/}
        <div className="flex h-full w-full justify-center py-10">
          <CTASection />
        </div>

        {/*QNA Section */}
        <div className="flex h-full w-full flex-col justify-center py-10 sm:items-center sm:px-6 md:px-4">
          <QNASection />
        </div>

        {/*Contact Section */}
        <div className="flex h-full w-full flex-col justify-center py-5 sm:items-center sm:px-6 md:px-4">
          <ContactSection />
        </div>

        {/*Footer Section*/}
        <div className="flex h-full w-full items-center justify-center xl:pt-16">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
