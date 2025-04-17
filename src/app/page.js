import Image from "next/image";
import Navbar from "./components/navbar";
export default function Home() {
  return (
   <>
    <div className="border-t bg-gray-900 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-['Plus_Jakarta_Sans']">
      
      <div className="border-b w-full border-gray-700 ">
       <Navbar />
      </div>
      
       
       <main className="flex flex-col sm:items-start">
        <div style={{color:'#1A71F6'}}className="items-center justify-items-center my-20">
         <h1 className="text-7xl font-[700] font-semibold">Kickstart your Influencer Marketing  </h1>
          <h1  className="text-white text-6xl font-semibold">Journey business with Keek!</h1>
            <div style={{color:'#90A3BF'}} className="items-center justify-items-center">
          <p className="mt-[32px] font-[400] text-[18px] ">Presenting to you Keek, a central marketplace for brands and influencers</p>
          <p className="font-[400] text-[18px]">to come together and drive impactful results.</p>
            </div>
         <div>
           img and stars
         </div>
        <div className="space-x-5 mt-15">
        <button style={{backgroundColor:'#1A71F6'}} className=" py-2 px-5 w-[173px] h-[48px] rounded-full text-white">Join Our Waitlist</button>
        <button style={{backgroundColor:'#1A202C'}} className="py-2 px-5 rounded-full w-[173px] h-[48px] text-white">See Pricing</button>
      </div>
         </div>
      </main>
    
         
       </div>
        
      <div className="bg-white grid grid-rows-[20px_1fr_20px] min-h-screen p-8 py-[120px] pb-20 gap-16 sm:p-20 font-['Plus_Jakarta_Sans']">
        
        <div className="px-20">
          <p style={{color:'#1A71F6'}} className="font-[600] text-[20px]">Why Choose Keek for Influencer Marketing?</p>
          
        <h1 className="w-[353px]  font-[700px ] font-bold text-[40px] leading-[1.5] tracking-[-0.03em]">Simple, Innovative, Steadfast</h1>
        </div>

        <div className="flex space-x-5 items-start justify-center py-30">
  {/* Card 1 */}
  <div className="flex flex-col items-center">
    <div style={{ backgroundColor: "#C3D4E9" }} className="w-[384px] h-[384px] rounded-xl"></div>
    <div className="mt-4  w-[384px]">
      <h1 className=" font-semibold text-2xl leading-[1.5] tracking-[-0.03em]">
        Verified Creators for Every Collaboration Type
      </h1>
      <p style={{color:'#596780'}} className="mt-2 text-base leading-[1.5] tracking-[-0.02em] max-w-[384px]">
        Keek hosts a network of verified creators ready to collaborate across all engagement models—whether it's barter deals, User-Generated Content (UGC), or paid partnerships.
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col items-center">
    <div style={{ backgroundColor: "#C3D4E9" }} className="w-[384px] h-[384px] rounded-xl"></div>
    <div className="mt-4  w-[384px]">
      <h1 className=" font-semibold text-2xl leading-[1.5] tracking-[-0.03em] ">
      Data-Driven Insights for Enhanced Campaign Success
      </h1>
      <p  style={{color:'#596780'}} className="mt-2 text-base max-w-[384px]">
      Keek provides detailed analytics in dashboard to measure campaign performance, audience engagement, and ROI.
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col items-center">
    <div style={{ backgroundColor: "#C3D4E9" }} className="w-[384px] h-[384px] rounded-xl"></div>
    <div className="mt-4  w-[384px]">
      <h1  className=" font-semibold text-2xl leading-[1.5] tracking-[-0.03em] ">
      Secure payment with Razorpay
      </h1>
      <p  style={{color:'#596780'}} className="mt-2 text-base max-w-[384px]">
      Have more than 1 bank account or credit/debit card? Our platform is already integrated with many banks around the world, for easier payments!
      </p>
    </div>
  </div>
</div>  
</div>

<div
  style={{ backgroundColor: '#0D121F' }}
  className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-['Plus_Jakarta_Sans']"
>
<div className="flex absolute justify-items-center items-center space-x-[120px]">
  <div className="w-[588px] h-[622px] bg-blue-300 rounded-md"></div>

  <div className="w-[588px] h-[622px] rounded-md flex flex-col justify-center px-6">
    <div className="flex flex-col gap-8 ">
      <h1 style={{color:'#1A71F6'}} className="font-semibold text-xl leading-[2]">HOW IT WORKS</h1>
      <h1 className="font-semibold text-4xl text-white ">Join Keek with simple steps!</h1>
      <p style={{color:'#90A3BF'}}className="w-[491px] font-[400] text-[20px] leading-[150%] tracking-[-0.02em] font-['Plus Jakarta Sans']">
  Ready to onboard with Keek? Here's your super speedy guide to becoming part of the fun:
</p>

     <div style={{backgroundColor:'#1A202C'}} className="w-[491px] h-[348px] rounded-xl"></div>
    </div>
  </div>
</div>

</div>

<div
  style={{ backgroundColor: '#0D121F' }}
  className="grid grid-rows-[20px_1fr_20px] items-center min-h-[120vh] p-8 pb-20 gap-16 sm:p-20 font-['Plus_Jakarta_Sans']"
>
<div className="flex flex-col items-center text-center gap-4 mt-80">
  <h1 className="font-[600] text-[20px] leading-[1.5] text-[#1A71F6]">
    WHAT THEY SAY
  </h1>

  <h1 className="text-white font-[700] text-[40px] leading-[1.5]">
    Hear from our Keeksters!
  </h1>

  <div className="flex flex-col items-center gap-1">
    <p className="font-[400] text-[20px] leading-[1.5] text-[#90A3BF] ">
      We love and value our vibrant community who've experienced
    </p>
    <p className="font-[400] text-[20px] leading-[1.5] text-[#90A3BF] w-[568px]">
      the power of Keek firsthand.
    </p>
  </div>
</div>
<div>
<div className="flex space-x-20 mt-70 ">
<div style={{backgroundColor:'#1A202C'}} className="w-[384px] h-[363px] rounded-xl"></div>
<div style={{backgroundColor:'#1A202C'}} className="w-[384px] h-[363px] rounded-xl"></div>
<div style={{backgroundColor:'#1A202C'}} className="w-[384px] h-[363px] rounded-xl"></div>

</div>
</div>
</div>

<div

  className="grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-['Plus_Jakarta_Sans']"
>
  <div className="items-center justify-items-center">
  <h1 className="font-bold font-[700] text-[40px]">Ready to leverage the benefits from our three-tier plan?</h1>
  <p style={{color:'#596780'}} className="font-[400] text-[20px]">Select a plan that matches your business objectives</p>
  </div>

  <div className="flex space-x-20 mt-20 items-center justify-items-center">
<div style={{backgroundColor:'#F3F5F7'}} className="w-[384px] h-[710px] rounded-xl"></div>
<div style={{backgroundColor:'#F3F5F7'}} className="w-[384px] h-[710px] rounded-xl"></div>
<div style={{backgroundColor:'#F3F5F7'}} className="w-[384px] h-[710px] rounded-xl"></div>

</div>

 </div>
 <div
  style={{ backgroundColor: '#0D121F' }}
  className="font-['Plus_Jakarta_Sans'] grid grid-rows-[20px_1fr_20px] items-center min-h-[570px] p-8 pb-20 gap-16 sm:p-20"
>
  <div className="mt-120 px-[120px] space-y-[38px]">
    <h1   style={{ color: '#1A71F6' }} className="font-[600] text-20px font-semibold">THE TIME IS NOW!</h1>
    <h1 className="text-white font-[700] text-[40px] w-[439px] leading-[150%] ">Ready to monetise with keek?</h1>
    <p style={{color:'#596780'}} className="w-[436px] font-[400] text-[20px] mt-[] ">Join the Keekster community and scale your possibilties today. Don't wait--Sign up now and be a part of the movement.</p>
  <button style={{backgroundColor:'#1A71F6'}} className=" py-2 px-5 w-[173px] h-[48px] rounded-full text-white">Join Our Waitlist</button>
  </div>


 </div>

 <footer className="w-full min-h-[580px] flex px-[90px] py-[120px] pb-[60px] justify-between font-['Plus_Jakarta_Sans']">
 <div className="py-[30px]">
 <h1 className="px-30 font-bold  mb-4">
    KEEK</h1>
  <h1 className="px-30 mb-4">
    Bridge to collaborate <br /> brands and influencers
  </h1>
 </div>

  <div className="flex space-x-[186px]">
    <ul className="space-y-2 font-medium space-y-[24px]">
      <li className="font-semibold py-[20px]">Company</li>
      <li>Pricing</li>
      <li>About Us</li>
      <li>Contact Us</li>
     
    </ul>
    <ul className="space-y-2 font-medium  space-y-[24px]">
      <li className="font-semibold py-[20px]">Legal</li>
      <li>Privacy Policy</li>
      <li>Terms & Conditions</li>
      <li>Grievance Redressal Policy</li>
    </ul>
    <ul className="space-y-2 font-medium  space-y-[24px]">
      <li className="font-semibold  py-[20px]">Follow Us</li>
      <li>LinkedIn</li>
      <li>Twitter</li>
      <li>Instagram</li>
      <li>Facebook</li>
      <li>YouTube</li>
    </ul>
  </div>
  
</footer>

<div className="w-full text-center border-t border-gray-700 -mt-20 pt-6  font-['Plus_Jakarta_Sans']">
    <p style={{color:'#596780'}} className="">© 2025, All Rights Reserved</p>
  </div>  
   </>
 
  );
}
