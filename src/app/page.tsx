"use client"
import Image from "next/image"
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import Button from "@/components/ui/Button"
import EditText from "@/components/ui/EditText"
import TextArea from "@/components/ui/TextArea"

export default function SquidLandingPage() {
  return (
    <div className="flex flex-col justify-start items-center w-full bg-[#000000] font-poppins overflow-hidden relative">
      {/* Blurred Background Circles - Fixed z-index to be behind content */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top left blurred circle */}
        <div className="absolute top-[10%] left-[-5%] w-[300px] h-[300px] bg-black/20 rounded-full blur-[150px] sm:w-[400px] sm:h-[400px] sm:blur-[180px] md:w-[500px] md:h-[500px] md:blur-[220px]"></div>
        {/* Top right blurred circle */}
        <div className="absolute top-[5%] right-[-8%] w-[250px] h-[250px] bg-black/25 rounded-full blur-[120px] sm:w-[350px] sm:h-[350px] sm:blur-[160px] md:w-[450px] md:h-[450px] md:blur-[200px]"></div>
        {/* Center left blurred circle */}
        <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-black/15 rounded-full blur-[180px] sm:w-[500px] sm:h-[500px] sm:blur-[220px] md:w-[600px] md:h-[600px] md:blur-[260px]"></div>
        {/* Bottom center blurred circle */}
        <div className="absolute bottom-[20%] left-[50%] transform -translate-x-1/2 w-[350px] h-[350px] bg-black/20 rounded-full blur-[170px] sm:w-[450px] sm:h-[450px] sm:blur-[200px] md:w-[550px] md:h-[550px] md:blur-[240px]"></div>
        {/* Bottom right blurred circle */}
        <div className="absolute bottom-[10%] right-[-5%] w-[300px] h-[300px] bg-black/25 rounded-full blur-[140px] sm:w-[400px] sm:h-[400px] sm:blur-[180px] md:w-[500px] md:h-[500px] md:blur-[220px]"></div>
      </div>

      {/* Main Container */}
      <div className="flex flex-col justify-start items-center w-full relative z-10">
        {/* Hero Section with Background */}
        <div className="relative flex justify-center w-full h-[700px] sm:h-[850px] md:h-[1000px] lg:h-[1200px]">
          {/* Gradient Line */}
          <div className="absolute right-[54px] sm:right-[80px] md:right-[107px] lg:right-[130px] top-0 w-[1px] h-[300px] sm:h-[450px] md:h-[600px] lg:h-[768px] bg-[linear-gradient(180deg,#404047_0%,_#40404700_100%)]"></div>

          {/* Background Image - Fixed positioning to show full edges */}
          <div className="absolute bottom-0 left-0 right-0 w-screen overflow-visible mt-[40px] sm:mt-[60px] md:mt-[80px] lg:mt-[100px]">
            <Image
              src="/images/img_subtract.png"
              alt="Background"
              width={1440}
              height={474}
              className="w-screen h-[200px] sm:h-[280px] md:h-[360px] lg:h-[500px] object-cover"
              style={{ objectPosition: "center bottom" }}
            />
          </div>

          {/* Header */}
          <Header className="absolute top-0 w-full z-20" />

          {/* Hero Content */}
          <div className="absolute top-[140px] sm:top-[170px] md:top-[200px] lg:top-[230px] w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="flex flex-col justify-start items-center text-center">
              <h1 className="text-[32px] sm:text-[42px] md:text-[54px] lg:text-[66px] font-poppins font-semibold leading-[1.15] text-[#ffffff] mb-[12px] sm:mb-[16px] md:mb-[20px] lg:mb-[24px] max-w-[90%] sm:max-w-[85%] md:max-w-[80%] mt-[40px] sm:mt-[50px] md:mt-[60px] lg:mt-[70px]">
                Beautiful Landing Page Design for You
              </h1>
              <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] font-poppins font-normal leading-[1.4] text-[#9e9e9e] w-full sm:w-[75%] md:w-[55%] lg:w-[45%] mb-[24px] sm:mb-[28px] md:mb-[32px] lg:mb-[36px]">
                A good design is not only aesthetically pleasing, but also functional. It should be able to solve the
                problem
              </p>

              {/* Center Download Button */}
              <Button
                variant="primary"
                size="md"
                className="px-[28px] py-[8px] sm:px-[36px] sm:py-[10px] md:px-[44px] md:py-[12px] text-[12px] sm:text-[13px] md:text-[14px] font-medium mb-[40px] sm:mb-[60px] md:mb-[80px] lg:mb-[100px]"
              >
                Download Template
              </Button>
            </div>
          </div>

          {/* Hero Image - Fixed responsive positioning to align with subtract background */}
          <div className="absolute bottom-[20px] sm:bottom-[40px] md:bottom-[60px] lg:bottom-[80px] w-full max-w-[280px] sm:max-w-[450px] md:max-w-[650px] lg:max-w-[850px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 z-10 left-1/2 transform -translate-x-1/2">
            <div className="relative w-full">
              <Image
                src="/images/hero-img.png"
                alt="Hero Dashboard"
                width={900}
                height={600}
                className="w-full h-auto rounded-[8px] sm:rounded-[12px] md:rounded-[16px] lg:rounded-[20px] shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Floating Elements - Only 3 images (left, right, middle) without shadows */}
          {/* Left Image - Ellipse 5 */}
          <Image
            src="/images/Ellipse 5.png"
            alt="Floating Element Left"
            width={130}
            height={130}
            className="absolute top-[180px] sm:top-[240px] md:top-[300px] lg:top-[360px] left-[50px] sm:left-[70px] md:left-[90px] lg:left-[110px] w-[76px] sm:w-[92px] md:w-[110px] lg:w-[130px] h-[76px] sm:h-[92px] md:h-[110px] lg:h-[130px] z-10"
          />

          {/* Right Image - Ellipse 3 */}
          <Image
            src="/images/Ellipse 3.png"
            alt="Floating Element Right"
            width={96}
            height={96}
            className="absolute top-[140px] sm:top-[180px] md:top-[220px] lg:top-[280px] right-[80px] sm:right-[120px] md:right-[160px] lg:right-[200px] w-[56px] sm:w-[68px] md:w-[80px] lg:w-[96px] h-[56px] sm:h-[68px] md:h-[80px] lg:h-[96px] z-10"
          />

          {/* Middle Image - Ellipse 14 */}
          <Image
            src="/images/Ellipse 14.png"
            alt="Floating Element Middle"
            width={64}
            height={64}
            className="absolute top-[100px] sm:top-[140px] md:top-[180px] lg:top-[220px] left-[50%] transform -translate-x-1/2 w-[48px] sm:w-[56px] md:w-[64px] lg:w-[72px] h-[48px] sm:h-[56px] md:h-[64px] lg:h-[72px] z-10"
          />
        </div>

        {/* Feature Boxes Title - Improved spacing and typography */}
        <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-[40px] sm:mt-[50px] md:mt-[60px] lg:mt-[80px]">
          <h2 className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[52px] font-poppins font-semibold leading-[1.15] text-[#ffffff] mb-[4px] sm:mb-[8px] md:mb-[12px] text-left">
            Feature Boxes
          </h2>
          <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] font-poppins font-normal leading-[1.4] text-left text-[#9e9e9e] w-full sm:w-[70%] md:w-[55%] lg:w-[45%]">
            A good design is not only aesthetically pleasing, but also functional. It should be able to solve the
            problem
          </p>
        </div>

        {/* Feature Grid - Enhanced responsive spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px] sm:gap-[24px] md:gap-[28px] lg:gap-[32px] w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-[24px] sm:mt-[32px] md:mt-[40px] lg:mt-[48px]">
          {/* Feature Box 1 - Fixed icon color with main theme color */}
          <div className="bg-[#17171b] rounded-[14px] sm:rounded-[16px] md:rounded-[18px] lg:rounded-[20px] p-[28px] sm:p-[36px] md:p-[42px] lg:p-[48px] flex flex-col justify-center items-center transition-all duration-300 hover:bg-[#1a1a1f] hover:scale-105">
            <div className="bg-[#222228] rounded-[18px] sm:rounded-[22px] md:rounded-[26px] lg:rounded-[30px] p-[16px] sm:p-[20px] md:p-[24px] lg:p-[28px] flex justify-start items-center mb-[22px] sm:mb-[26px] md:mb-[32px] lg:mb-[38px]">
              <Image
                src="/images/img_vector.svg"
                alt="Feature Icon"
                width={26}
                height={26}
                className="sm:w-[30px] sm:h-[30px] md:w-[36px] md:h-[36px] lg:w-[44px] lg:h-[44px] brightness-0 invert"
              />
            </div>

            <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-poppins font-semibold leading-[1.2] text-center text-[#ffffff] mb-[6px] sm:mb-[8px] md:mb-[10px] lg:mb-[12px]">
              Fully Customizable
            </h3>
            <p className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[12px] font-poppins font-normal leading-[1.5] text-center text-[#9e9e9e]">
              A good design is not only aesthetically pleasing, but also functional. It should be able to solve the
              problem
            </p>
          </div>

          {/* Feature Box 2 */}
          <div className="bg-[#17171b] rounded-[14px] sm:rounded-[16px] md:rounded-[18px] lg:rounded-[20px] p-[28px] sm:p-[36px] md:p-[42px] lg:p-[48px] flex flex-col justify-center items-center transition-all duration-300 hover:bg-[#1a1a1f] hover:scale-105">
            <div className="bg-[#222228] rounded-[18px] sm:rounded-[22px] md:rounded-[26px] lg:rounded-[30px] p-[16px] sm:p-[20px] md:p-[24px] lg:p-[28px] flex justify-start items-center mb-[22px] sm:mb-[26px] md:mb-[32px] lg:mb-[38px]">
              <Image
                src="/images/img_vector_white_a700.svg"
                alt="Feature Icon"
                width={26}
                height={26}
                className="sm:w-[30px] sm:h-[30px] md:w-[36px] md:h-[36px] lg:w-[44px] lg:h-[44px]"
              />
            </div>

            <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-poppins font-semibold leading-[1.2] text-center text-[#ffffff] mb-[6px] sm:mb-[8px] md:mb-[10px] lg:mb-[12px]">
              Fully Customizable
            </h3>
            <p className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[12px] font-poppins font-normal leading-[1.5] text-center text-[#9e9e9e]">
              A good design is not only aesthetically pleasing, but also functional. It should be able to solve the
              problem
            </p>
          </div>

          {/* Feature Box 3 */}
          <div className="bg-[#17171b] rounded-[14px] sm:rounded-[16px] md:rounded-[18px] lg:rounded-[20px] p-[28px] sm:p-[36px] md:p-[42px] lg:p-[48px] flex flex-col justify-center items-center transition-all duration-300 hover:bg-[#1a1a1f] hover:scale-105">
            <div className="bg-[linear-gradient(131deg,#ff9797_0%,_#8053ff_100%)] rounded-[18px] sm:rounded-[22px] md:rounded-[26px] lg:rounded-[30px] p-[16px] sm:p-[20px] md:p-[24px] lg:p-[28px] flex justify-start items-center mb-[22px] sm:mb-[26px] md:mb-[32px] lg:mb-[38px]">
              <Image
                src="/images/img_vector_white_a700_46x44.svg"
                alt="Feature Icon"
                width={26}
                height={27}
                className="sm:w-[30px] sm:h-[30px] md:w-[36px] md:h-[36px] lg:w-[44px] lg:h-[46px]"
              />
            </div>
            <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-poppins font-semibold leading-[1.2] text-center text-[#ffffff] mb-[6px] sm:mb-[8px] md:mb-[10px] lg:mb-[12px]">
              Fully Customizable
            </h3>
            <p className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[12px] font-poppins font-normal leading-[1.5] text-center text-[#9e9e9e]">
              A good design is not only aesthetically pleasing, but also functional. It should be able to solve the
              problem
            </p>
          </div>

          {/* Feature Box 4 */}
          <div className="bg-[#17171b] rounded-[14px] sm:rounded-[16px] md:rounded-[18px] lg:rounded-[20px] p-[28px] sm:p-[36px] md:p-[42px] lg:p-[48px] flex flex-col justify-center items-center transition-all duration-300 hover:bg-[#1a1a1f] hover:scale-105">
            <div className="bg-[#222228] rounded-[18px] sm:rounded-[22px] md:rounded-[26px] lg:rounded-[30px] p-[16px] sm:p-[20px] md:p-[24px] lg:p-[28px] flex justify-center items-center mb-[22px] sm:mb-[26px] md:mb-[32px] lg:mb-[38px]">
              <Image
                src="/images/img_vector_white_a700_44x44.svg"
                alt="Feature Icon"
                width={26}
                height={26}
                className="sm:w-[30px] sm:h-[30px] md:w-[36px] md:h-[36px] lg:w-[44px] lg:h-[44px]"
              />
            </div>
            <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-poppins font-semibold leading-[1.2] text-center text-[#ffffff] mb-[6px] sm:mb-[8px] md:mb-[10px] lg:mb-[12px]">
              Fully Customizable
            </h3>
            <p className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[12px] font-poppins font-normal leading-[1.5] text-center text-[#9e9e9e]">
              A good design is not only aesthetically pleasing, but also functional. It should be able to solve the
              problem
            </p>
          </div>

          {/* Feature Box 5 */}
          <div className="bg-[#17171b] rounded-[14px] sm:rounded-[16px] md:rounded-[18px] lg:rounded-[20px] p-[28px] sm:p-[36px] md:p-[42px] lg:p-[48px] flex flex-col justify-center items-center transition-all duration-300 hover:bg-[#1a1a1f] hover:scale-105">
            <div className="bg-[#222228] rounded-[18px] sm:rounded-[22px] md:rounded-[26px] lg:rounded-[30px] p-[16px] sm:p-[20px] md:p-[24px] lg:p-[28px] flex justify-start items-center mb-[22px] sm:mb-[26px] md:mb-[32px] lg:mb-[38px]">
              <Image
                src="/images/img_vector_46x44.svg"
                alt="Feature Icon"
                width={26}
                height={27}
                className="sm:w-[30px] sm:h-[31px] md:w-[36px] md:h-[37px] lg:w-[44px] lg:h-[46px]"
              />
            </div>
            <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-poppins font-semibold leading-[1.2] text-center text-[#ffffff] mb-[6px] sm:mb-[8px] md:mb-[10px] lg:mb-[12px]">
              Fully Customizable
            </h3>
            <p className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[12px] font-poppins font-normal leading-[1.5] text-center text-[#9e9e9e]">
              A good design is not only aesthetically pleasing, but also functional. It should be able to solve the
              problem
            </p>
          </div>

          {/* Feature Box 6 */}
          <div className="bg-[#17171b] rounded-[14px] sm:rounded-[16px] md:rounded-[18px] lg:rounded-[20px] p-[28px] sm:p-[36px] md:p-[42px] lg:p-[48px] flex flex-col justify-center items-center transition-all duration-300 hover:bg-[#1a1a1f] hover:scale-105">
            <div className="bg-[#222228] rounded-[18px] sm:rounded-[22px] md:rounded-[26px] lg:rounded-[30px] p-[18px] sm:p-[22px] md:p-[26px] lg:p-[30px] flex justify-start items-center mb-[22px] sm:mb-[26px] md:mb-[32px] lg:mb-[38px]">
              <Image
                src="/images/img_vector_white_a700_42x44.svg"
                alt="Feature Icon"
                width={26}
                height={25}
                className="sm:w-[30px] sm:h-[28px] md:w-[36px] md:h-[34px] lg:w-[44px] lg:h-[42px]"
              />
            </div>
            <h3 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-poppins font-semibold leading-[1.2] text-center text-[#ffffff] mb-[6px] sm:mb-[8px] md:mb-[10px] lg:mb-[12px]">
              Fully Customizable
            </h3>
            <p className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[12px] font-poppins font-normal leading-[1.5] text-center text-[#9e9e9e]">
              A good design is not only aesthetically pleasing, but also functional. It should be able to solve the
              problem
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-[16px] sm:gap-[20px] md:gap-[24px] lg:gap-[28px] justify-center items-center w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-[40px] sm:mt-[50px] md:mt-[60px] lg:mt-[80px] relative">
          {/* Left Side - Orbital Animation */}
          <div className="flex justify-center items-center w-full lg:w-[55%] p-[20px] sm:p-[30px] md:p-[40px] lg:p-[50px]">
            <div className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[550px] aspect-square">
              <Image
                src="/images/guide-img.png"
                alt="Orbital Animation with Brand Icons"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-start items-center lg:items-start w-full lg:w-[45%] text-center lg:text-left">
            <h2 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[46px] font-poppins font-semibold leading-[1.1] text-center lg:text-left text-[#ffffff]">
              We are here to guide and help you at all times
            </h2>
            <p className="text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-poppins font-normal leading-[1.4] text-center lg:text-left text-[#9e9e9e] w-[90%] mt-[12px] sm:mt-[14px] md:mt-[16px] lg:mt-[18px]">
              A good design is not only aesthetically pleasing, but also functional. It should be able to solve the
              problem
            </p>
            <Button
              variant="primary"
              size="md"
              className="mt-[28px] sm:mt-[32px] md:mt-[38px] lg:mt-[46px] px-[28px] py-[12px] text-[16px] font-medium"
            >
              Download
            </Button>
          </div>
        </div>

        {/* Companies Section - Clean section without overlapping trial cards */}
        <div className="relative flex justify-center w-full mt-[50px] sm:mt-[60px] md:mt-[70px] lg:mt-[80px]">
          <div className="w-full bg-[#17171b] p-[40px] sm:p-[50px] md:p-[60px] lg:p-[80px] pb-[100px] sm:pb-[110px] md:pb-[120px] lg:pb-[130px]">
            <div className="flex justify-center items-start w-full">
              <div className="flex flex-col gap-[24px] sm:gap-[32px] md:gap-[40px] lg:gap-[48px] justify-start items-center w-[90%]">
                <h2 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] font-poppins font-semibold leading-[1.15] text-center text-[#ffffff] my-2">
                  Companies we Worked With Since 2015
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-[8px] sm:gap-[12px] md:gap-[16px] lg:gap-[20px] w-full max-w-[1000px] justify-items-center">
                  {/* Company Logo 1 */}
                  <div className="bg-[#000000] rounded-[6px] sm:rounded-[7px] md:rounded-[8px] lg:rounded-[9px] p-[8px] sm:p-[12px] md:p-[14px] lg:p-[16px] flex justify-center items-center w-full max-w-[120px] h-[40px] sm:h-[45px] md:h-[50px] lg:h-[56px] transition-all duration-300 hover:bg-[#111111]">
                    <Image
                      src="/images/img_frame.svg"
                      alt="Company Logo"
                      width={58}
                      height={21}
                      className="w-[40px] h-[15px] sm:w-[45px] sm:h-[17px] md:w-[50px] md:h-[19px] lg:w-[58px] lg:h-[21px]"
                    />
                  </div>
                  {/* Company Logo 2 */}
                  <div className="bg-[#000000] rounded-[6px] sm:rounded-[7px] md:rounded-[8px] lg:rounded-[9px] p-[8px] sm:p-[12px] md:p-[14px] lg:p-[16px] flex justify-center items-center w-full max-w-[120px] h-[40px] sm:h-[45px] md:h-[50px] lg:h-[56px] transition-all duration-300 hover:bg-[#111111]">
                    <Image
                      src="/images/img_group_96.svg"
                      alt="Company Logo"
                      width={54}
                      height={14}
                      className="w-[40px] h-[10px] sm:w-[45px] sm:h-[11px] md:w-[50px] md:h-[12px] lg:w-[54px] lg:h-[14px]"
                    />
                  </div>
                  {/* Company Logo 3 */}
                  <div className="bg-[#000000] rounded-[6px] sm:rounded-[7px] md:rounded-[8px] lg:rounded-[9px] p-[8px] sm:p-[12px] md:p-[14px] lg:p-[16px] flex justify-center items-center w-full max-w-[120px] h-[40px] sm:h-[45px] md:h-[50px] lg:h-[56px] transition-all duration-300 hover:bg-[#111111]">
                    <Image
                      src="/images/img_group_97.svg"
                      alt="Company Logo"
                      width={60}
                      height={12}
                      className="w-[42px] h-[8px] sm:w-[47px] sm:h-[9px] md:w-[52px] md:h-[10px] lg:w-[60px] lg:h-[12px]"
                    />
                  </div>
                  {/* Company Logo 4 */}
                  <div className="bg-[#000000] rounded-[6px] sm:rounded-[7px] md:rounded-[8px] lg:rounded-[9px] p-[8px] sm:p-[12px] md:p-[14px] lg:p-[16px] flex justify-center items-center w-full max-w-[120px] h-[40px] sm:h-[45px] md:h-[50px] lg:h-[56px] transition-all duration-300 hover:bg-[#111111]">
                    <Image
                      src="/images/img_group_98.svg"
                      alt="Company Logo"
                      width={48}
                      height={11}
                      className="w-[36px] h-[8px] sm:w-[40px] sm:h-[9px] md:w-[44px] md:h-[10px] lg:w-[48px] lg:h-[11px]"
                    />
                  </div>
                  {/* Company Logo 5 */}
                  <div className="bg-[#000000] rounded-[6px] sm:rounded-[7px] md:rounded-[8px] lg:rounded-[9px] p-[8px] sm:p-[12px] md:p-[14px] lg:p-[16px] flex justify-center items-center w-full max-w-[120px] h-[40px] sm:h-[45px] md:h-[50px] lg:h-[56px] transition-all duration-300 hover:bg-[#111111]">
                    <Image
                      src="/images/img_group_99.svg"
                      alt="Company Logo"
                      width={39}
                      height={14}
                      className="w-[30px] h-[10px] sm:w-[33px] sm:h-[11px] md:w-[36px] md:h-[12px] lg:w-[39px] lg:h-[14px]"
                    />
                  </div>
                  {/* Company Logo 6 */}
                  <div className="bg-[#000000] rounded-[6px] sm:rounded-[7px] md:rounded-[8px] lg:rounded-[9px] p-[8px] sm:p-[12px] md:p-[14px] lg:p-[16px] flex justify-center items-center w-full max-w-[120px] h-[40px] sm:h-[45px] md:h-[50px] lg:h-[56px] transition-all duration-300 hover:bg-[#111111]">
                    <Image
                      src="/images/img_group_100.svg"
                      alt="Company Logo"
                      width={40}
                      height={13}
                      className="w-[32px] h-[10px] sm:w-[35px] sm:h-[11px] md:w-[38px] md:h-[12px] lg:w-[40px] lg:h-[13px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trial Card Section */}
        <div className="relative w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 -mt-[60px] sm:-mt-[70px] md:-mt-[80px] lg:-mt-[90px] mb-[40px] sm:mb-[50px] md:mb-[60px] lg:mb-[70px] z-20">
          <div className="bg-[linear-gradient(135deg,#ff9797_0%,#c084fc_50%,#8053ff_100%)] rounded-[24px] sm:rounded-[28px] md:rounded-[32px] lg:rounded-[36px] p-[32px] sm:p-[40px] md:p-[48px] lg:p-[56px] relative overflow-hidden shadow-2xl">
            <div className="absolute right-0 top-0 bottom-0 w-[40%] opacity-70 pointer-events-none">
              <Image
                src="/images/img_group_134.png"
                alt="Decorative Pattern"
                fill
                className="object-cover object-right"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-start max-w-[60%]">
              <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-poppins font-normal leading-[1.3] text-white/90 mb-[8px] sm:mb-[12px] md:mb-[16px] lg:mb-[20px]">
                Love our Our Tool?
              </p>
              <h3 className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-poppins font-semibold leading-[1.15] text-white mb-[20px] sm:mb-[24px] md:mb-[28px] lg:mb-[32px]">
                Feel Free to Join our 15 Days Free Trial
              </h3>
              <Button
                variant="secondary"
                size="md"
                className="bg-[#000000] text-white hover:bg-gray-800 px-[24px] sm:px-[28px] md:px-[32px] lg:px-[36px] py-[10px] sm:py-[12px] md:py-[14px] lg:py-[16px] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] font-medium rounded-[8px] sm:rounded-[10px] md:rounded-[12px] transition-all duration-300 hover:scale-105"
              >
                Download Template
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-[28px] sm:gap-[36px] md:gap-[40px] lg:gap-[48px] justify-center items-start w-full max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 pt-[60px] sm:pt-[80px] md:pt-[100px] lg:pt-[120px]">
          {/* Left Side - Illustration with fixed ellipse positioning */}
          <div className="relative flex justify-center items-center w-full lg:w-auto h-[340px] sm:h-[420px] md:h-[520px] lg:h-[620px]">
            <Image
              src="/images/img_group_133.svg"
              alt="Contact Illustration"
              width={310}
              height={310}
              className="mt-[12px] sm:mt-[16px] md:mt-[18px] lg:mt-[20px] sm:w-[380px] sm:h-[380px] md:w-[460px] md:h-[460px] lg:w-[540px] lg:h-[540px]"
            />
            {/* Fixed ellipse positioning - replaced with images */}
            <Image
              src="/images/Ellipse 14.png"
              alt="Floating Element"
              width={96}
              height={96}
              className="absolute bottom-[20px] right-[20px] w-[56px] sm:w-[64px] md:w-[78px] lg:w-[96px] h-[56px] sm:h-[64px] md:h-[78px] lg:h-[96px]"
            />
            <Image
              src="/images/Ellipse 16.png"
              alt="Floating Element"
              width={64}
              height={64}
              className="absolute top-[20px] left-[20px] w-[38px] sm:w-[44px] md:w-[54px] lg:w-[64px] h-[38px] sm:h-[44px] md:h-[54px] lg:h-[64px]"
            />
          </div>

          {/* Right Side - Contact Form with proper spacing */}
          <div className="flex flex-col justify-start items-center w-full lg:w-auto">
            <h2 className="text-[26px] sm:text-[32px] md:text-[38px] lg:text-[46px] font-poppins font-semibold leading-[1.1] text-center text-[#ffffff]">
              Get In Touch
            </h2>
            <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] font-poppins font-normal leading-[1.4] text-center text-[#9e9e9e] w-[90%] mt-[16px] sm:mt-[20px] md:mt-[24px] lg:mt-[28px]">
              A good design is not only aesthetically pleasing, but also functional. It should be able to solve the
              problem
            </p>

            {/* Contact Form - Fixed spacing and sizing */}
            <div className="flex flex-col gap-[16px] sm:gap-[18px] md:gap-[20px] lg:gap-[22px] w-full max-w-[400px] mt-[24px] sm:mt-[28px] md:mt-[32px] lg:mt-[36px] items-center">
              <EditText placeholder="Your Email" type="email" className="w-full h-[48px] sm:h-[52px]" />
              <EditText placeholder="Name" type="text" className="w-full h-[48px] sm:h-[52px]" />
              <TextArea placeholder="Message" rows={4} className="w-full min-h-[120px] sm:min-h-[140px]" />
              <Button
                variant="primary"
                size="md"
                className="w-auto mt-[12px] sm:mt-[14px] md:mt-[16px] lg:mt-[18px] px-[28px] py-[10px] text-[12px] font-medium"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}
