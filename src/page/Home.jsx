import React from "react";
import Hero from '@/component/Home/Hero';
import SkillsSnapshot from '@/component/Home/ExpertiseSection';
import GetInTouchCard from '@/component/common/CTASection';

function Home(){
    return(
        <div>
            <Hero/>
            <SkillsSnapshot/>
          
           <GetInTouchCard 
                   variant="colorful"
                   title="Let's Create Something Amazing"
                   subtitle="I'm always excited to take on new challenges and collaborate on innovative projects."
                 />
        </div>
    )
}
export default Home;