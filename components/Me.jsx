import React from 'react'
import Image from "next/image";
import Bio from "./assets/bio.jpg";


function Me() {
  return (
    <section class="py-10 bg-white sm:py-16 lg:py-24">
      <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div class="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
          <h1 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
            My Story
            <span class="relative inline-block">
              <span class="absolute inline-block w-full h-2 bg-yellow-300 bottom-1.5"></span>
              <span class="relative"> of how I am breaking into Tech </span>
            </span>
          </h1>
        </div>

        <div class="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
          <div>
          <Image className="w-full mx-auto" src={Bio} width={800} height={80} alt="" />
          </div>

          <div>
            <h1 class="text-lg font-semibold text-gray-900">Hey! I am Christopher Makombe, founder of Project Unplanned.</h1>
            <p class="mt-4 text-lg text-gray-700">{`Introducing Project Unplanned, my visionary creation spearheaded by my indomitable spirit. From the tender age of nine, my passion for technology ignited a journey that would shape my destiny.

              As a young prodigy, I delved into the intricacies of technology, mastering phone flashing techniques, and captivating my community with my innate ability to fix electronics. But my insatiable appetite for knowledge and problem-solving pushed me even further.

              The music industry soon beckoned, and my keen eye for talent led me to discover emerging artists, fostering connections that set the stage for success. But it was my entrepreneurial spirit that truly set me apart.`}</p>

            <p class="mt-4 text-lg text-gray-700">{`I embarked on a rollercoaster ride, founding and growing startups that challenged the status quo. Among these ventures, one soared to remarkable heights, boasting a pre-money valuation of a staggering 1.6 million. However, life's unpredictable twists and turns led me to close this chapter with profound lessons learned.

              Yet, true entrepreneurs are not easily deterred. My unwavering determination and resilience have now led me to chart a new course—the realm of SAAS (Software as a Service). Wrapped in an air of suspense and determination, I am on a mission to revolutionize the developer's world.

              Project Unplanned is my latest frontier—an innovative product meticulously crafted to address developers' most pressing pain points. My journey is fueled by experience, wisdom gained from both triumphs and setbacks.`}</p>

            <h3 class="mt-8 text-lg font-semibold text-gray-900">Unveiling the Trailblazer: My Odyssey to Innovation</h3>
            <p class="mt-4 text-lg text-gray-700">{`As you delve into my biography, you'll be enthralled by the unfolding drama of my life—the challenges that shaped me, the dreams that drive me, and the unwavering belief in the power of innovation.

              With each page turned, suspense intertwines with motivation, leaving you eagerly anticipating the culmination of this epic endeavor. My pursuit of dreams isn't just ambition; it's a profound calling etched into my soul.

              Armed with passion, resilience, and a relentless pursuit of excellence, I stand at the vanguard of greatness. Project Unplanned embodies my vision and ambition, ready to transform the tech landscape forever.

              Join us on this riveting journey with me, where innovation meets tenacity, and the pursuit of greatness knows no bounds. Embrace the unknown, for with me at the helm, the possibilities are boundless. The future of developer solutions awaits, and Project Unplanned is poised to conquer new horizons like never before.`}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Me;
