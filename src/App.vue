<template>
  <div class="min-h-screen bg-[#0a0f1a] text-white font-sans">
    <!-- NAVBAR -->
    <nav :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-white/10 backdrop-blur-xl border-b border-white/10' 
        : 'bg-transparent border-b border-transparent'
    ]">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" class="flex items-center gap-2">
          <span class="text-2xl font-bold italic">R<span class="text-accent-400">S</span></span>
        </a>
        
        <div class="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#projects" class="hover:text-white transition-colors">Work</a>
          <a href="#experience" class="hover:text-white transition-colors">Experience</a>
          <a href="#blog" class="hover:text-white transition-colors">Blog</a>
          <a href="#faq" class="hover:text-white transition-colors">FAQ</a>
          <a href="#contact" class="hover:text-white transition-colors">Contacts</a>
        </div>

        <div class="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/restyand1011/" target="_blank" class="text-white/80 hover:text-white transition-colors">
            <iconify-icon icon="mdi:linkedin" width="22" height="22"></iconify-icon>
          </a>
          <a href="https://github.com/" target="_blank" class="text-white/80 hover:text-white transition-colors">
            <iconify-icon icon="mdi:github" width="22" height="22"></iconify-icon>
          </a>
        </div>
      </div>
    </nav>

    <!-- HERO SECTION -->
    <section class="relative min-h-screen flex items-center overflow-hidden">
      <!-- Background gradient - Teal to Blue -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#1a4a4f] via-[#1a3a50] to-[#1a2a40]"></div>
      
      <!-- Particle Background -->
      <vue-particles
        id="tsparticles"
        class="absolute inset-0"
        :options="particlesOptions"
      />
      
      <!-- Subtle overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/50 to-transparent"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="pt-20">
            <!-- Badge -->
            <div class="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8 animate-fade-in-up">
              <img src="./assets/ProfilePhoto.jpeg" alt="Revano" class="w-8 h-8 rounded-full object-cover">
              <span class="text-sm text-white">Hi, thereeeee!</span>
            </div>

            <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-8 animate-fade-in-up animation-delay-200">
              Hi!, I'm<br>
              Revano Satya Pandega<br>
            </h1>

            <p class="text-lg text-gray-300 mb-6 animate-fade-in-up animation-delay-400">
              Cloud & DevOps Engineer passionate about building scalable infrastructure
            </p>

            <a href="#projects" class="inline-flex items-center gap-2 text-gray-300 hover:text-accent-400 transition-colors group animate-fade-in-up animation-delay-600">
              <iconify-icon icon="mdi:arrow-down" class="animate-bounce" width="20" height="20"></iconify-icon>
              <span>Scroll down to see my work</span>
            </a>
          </div>

          <!-- Right Content - Profile Photo with Crossed Frames -->
          <div class="hidden md:flex justify-center items-center pt-20">
            <div class="relative animate-fade-in-scale animation-delay-400">
              <!-- Decorative crossed squares -->
              <div class="absolute -inset-8">
                <div class="absolute top-0 left-0 w-64 h-64 border-2 border-accent-400/40 rounded-lg transform rotate-6"></div>
                <div class="absolute top-4 left-4 w-64 h-64 border-2 border-white/20 rounded-lg transform -rotate-6"></div>
              </div>
              <!-- Glow effect -->
              <div class="absolute inset-0 bg-accent-400/30 rounded-2xl blur-3xl scale-75"></div>
              <!-- Profile image -->
              <img src="./assets/ProfilePhoto.jpeg" alt="Revano Satya Pandega" class="relative w-72 h-72 rounded-2xl object-cover border-4 border-white/20 shadow-2xl animate-float">
            </div>
          </div>
        </div>
      </div>

      <!-- Tech Logos at Bottom -->
      <div class="absolute bottom-8 left-0 right-0 z-10 animate-fade-in-up animation-delay-800">
        <div class="max-w-7xl mx-auto px-6">
          <div class="flex flex-wrap items-center gap-8 opacity-60">
            <!-- Google Cloud -->
            <div class="flex items-center gap-2 text-white/70">
              <iconify-icon icon="skill-icons:gcp-light" width="28" height="28"></iconify-icon>
              <span class="font-medium text-sm">Google Cloud</span>
            </div>
            <!-- AWS -->
            <div class="flex items-center gap-2 text-white/70">
              <iconify-icon icon="skill-icons:aws-light" width="28" height="28"></iconify-icon>
              <span class="font-medium text-sm">AWS</span>
            </div>
            <!-- Docker -->
            <div class="flex items-center gap-2 text-white/70">
              <iconify-icon icon="skill-icons:docker" width="28" height="28"></iconify-icon>
              <span class="font-medium text-sm">Docker</span>
            </div>
            <!-- GitHub Actions -->
            <div class="flex items-center gap-2 text-white/70">
              <iconify-icon icon="skill-icons:githubactions-light" width="28" height="28"></iconify-icon>
              <span class="font-medium text-sm">GitHub Actions</span>
            </div>
            <!-- Linux -->
            <div class="flex items-center gap-2 text-white/70">
              <iconify-icon icon="skill-icons:linux-light" width="28" height="28"></iconify-icon>
              <span class="font-medium text-sm">Linux</span>
            </div>
            <!-- Terraform -->
            <div class="flex items-center gap-2 text-white/70">
              <iconify-icon icon="skill-icons:terraform-light" width="28" height="28"></iconify-icon>
              <span class="font-medium text-sm">Terraform</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section id="about" class="py-24 px-6">
      <div class="max-w-6xl mx-auto">
        <p class="text-accent-400 text-sm font-medium mb-4" data-aos="fade-up">01 — GET TO KNOW ME</p>
        
        <div class="grid md:grid-cols-2 gap-16 items-start">
          <div data-aos="fade-right" data-aos-delay="200">
            <p class="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              With hands-on experience in innovative cloud projects, I've worked with technologies like 
              <span class="text-white">AWS, Docker, GitHub Actions,</span> and <span class="text-white">CI/CD pipelines</span> 
              to build scalable infrastructure.
            </p>
            <p class="text-lg text-gray-400 leading-relaxed mb-8">
              I consider myself a versatile and practical cloud engineer, specializing in DevOps automation, 
              container orchestration, and building reliable production systems.
            </p>
            <div class="flex items-center gap-3 text-sm text-gray-500">
              <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Currently studying at SMK Telkom Sidoarjo<br>
              Based in Sidoarjo, East Java, Indonesia
            </div>
          </div>
          
          <div class="relative" data-aos="fade-left" data-aos-delay="300">
            <div class="aspect-square max-w-sm mx-auto rounded-2xl bg-gradient-to-br from-accent-400/20 to-blue-500/20 p-1">
              <div class="w-full h-full rounded-2xl bg-[#0a0f1a] flex items-center justify-center">
                <div class="text-center">
                  <div class="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent-400 to-teal-600 flex items-center justify-center text-5xl font-bold text-black mb-4">
                    R
                  </div>
                  <p class="text-xl font-semibold">Revano Satya Pandega</p>
                  <p class="text-accent-400">Cloud &amp; DevOps Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECTS SECTION -->
    <section id="projects" class="py-24 px-6 bg-[#080c14]">
      <div class="max-w-6xl mx-auto">
        <p class="text-accent-400 text-sm font-medium mb-4" data-aos="fade-up">02 — LATEST PROJECT</p>
        <h2 class="text-4xl md:text-5xl font-bold mb-16" data-aos="fade-up" data-aos-delay="100">A glimpse into my latest work</h2>

        <div class="space-y-8">
          <!-- Project 1 -->
          <a href="https://lumbunghijau.id" target="_blank" class="group block bg-[#0d1221] rounded-2xl p-8 border border-white/5 hover:border-accent-400/30 transition-all cursor-pointer" data-aos="fade-up" data-aos-delay="200">
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-2xl font-bold mb-2 group-hover:text-accent-400 transition-colors">Lumbung Hijau - Waste Management Platform</h3>
                <p class="text-gray-400 mb-6">Full-stack application for food waste collection &amp; organic fertilizer production tracking system.</p>
                
                <div class="flex gap-8 text-sm mb-6">
                  <div>
                    <p class="text-gray-500">Location</p>
                    <p class="text-white">Indonesia</p>
                  </div>
                  <div>
                    <p class="text-gray-500">Timeline</p>
                    <p class="text-white">3 months</p>
                  </div>
                  <div>
                    <p class="text-gray-500">Year</p>
                    <p class="text-white">2025</p>
                  </div>
                </div>

                <div class="flex gap-3">
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-400">Docker</span>
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-400">Cloud Architecture</span>
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-400">Web App</span>
                </div>
              </div>
              <div class="relative">
                <img src="./assets/lumbunghijau.png" alt="Lumbung Hijau" class="aspect-video w-full object-cover rounded-lg" />
                <!-- Hover overlay with link icon -->
                <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-end justify-end p-4">
                  <div class="bg-accent-400 p-3 rounded-full">
                    <iconify-icon icon="mdi:open-in-new" width="24" height="24" class="text-black"></iconify-icon>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <!-- Project 2 -->
          <a href="https://github.com/restyand" target="_blank" class="group block bg-[#0d1221] rounded-2xl p-8 border border-white/5 hover:border-accent-400/30 transition-all cursor-pointer" data-aos="fade-up" data-aos-delay="300">
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-2xl font-bold mb-2 group-hover:text-accent-400 transition-colors">E-Learning Cloud Infrastructure</h3>
                <p class="text-gray-400 mb-6">Complete cloud-native e-learning system for SMPN 2 Tulangan with automated CI/CD pipelines.</p>
                
                <div class="flex gap-8 text-sm mb-6">
                  <div>
                    <p class="text-gray-500">Location</p>
                    <p class="text-white">Indonesia</p>
                  </div>
                  <div>
                    <p class="text-gray-500">Timeline</p>
                    <p class="text-white">4 months</p>
                  </div>
                  <div>
                    <p class="text-gray-500">Year</p>
                    <p class="text-white">2025</p>
                  </div>
                </div>

                <div class="flex gap-3">
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-400">AWS</span>
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-400">GitHub Actions</span>
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-400">Docker</span>
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-400">CI/CD</span>
                </div>
              </div>
              <div class="relative">
                <img src="./assets/semicolonJHICArchitectur.png" alt="E-Learning Architecture" class="aspect-video w-full object-cover rounded-lg" />
                <!-- Hover overlay with link icon -->
                <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-end justify-end p-4">
                  <div class="bg-white p-3 rounded-full">
                    <iconify-icon icon="mdi:github" width="24" height="24" class="text-black"></iconify-icon>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tech icons -->
            <div class="flex gap-4 mt-8 pt-6 border-t border-white/5">
              <div class="w-12 h-12 bg-[#1a1f2e] rounded-lg flex items-center justify-center">
                <iconify-icon icon="skill-icons:aws-light" width="28" height="28"></iconify-icon>
              </div>
              <div class="w-12 h-12 bg-[#1a1f2e] rounded-lg flex items-center justify-center">
                <iconify-icon icon="skill-icons:docker" width="28" height="28"></iconify-icon>
              </div>
              <div class="w-12 h-12 bg-[#1a1f2e] rounded-lg flex items-center justify-center">
                <iconify-icon icon="skill-icons:github-light" width="28" height="28"></iconify-icon>
              </div>
              <div class="w-12 h-12 bg-[#1a1f2e] rounded-lg flex items-center justify-center">
                <iconify-icon icon="skill-icons:githubactions-light" width="28" height="28"></iconify-icon>
              </div>
            </div>
          </a>

          <!-- Project 3 -->
          <a href="https://smktelkom-sda.sch.id" target="_blank" class="group block bg-[#0d1221] rounded-2xl p-8 border border-white/5 hover:border-accent-400/30 transition-all cursor-pointer" data-aos="fade-up" data-aos-delay="400">
            <div class="grid md:grid-cols-2 gap-8">
              <div>
                <h3 class="text-2xl font-bold mb-2 group-hover:text-accent-400 transition-colors">SMK Telkom Website Rebranding</h3>
                <p class="text-gray-400 mb-6">High-performance school website hosted on AWS with optimized infrastructure and scalable architecture.</p>
                
                <div class="flex gap-8 text-sm mb-6">
                  <div>
                    <p class="text-gray-500">Location</p>
                    <p class="text-white">Sidoarjo</p>
                  </div>
                  <div>
                    <p class="text-gray-500">Timeline</p>
                    <p class="text-white">6 months</p>
                  </div>
                  <div>
                    <p class="text-gray-500">Year</p>
                    <p class="text-white">2025-2026</p>
                  </div>
                </div>

                <div class="flex gap-3">
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-400">Amazon Web Services</span>
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-400">Performance</span>
                </div>
              </div>
              <div class="relative">
                <img src="./assets/semicolonJHICArchitectur.png" alt="SMK Telkom Architecture" class="aspect-video w-full object-cover rounded-lg" />
                <!-- Hover overlay with link icon -->
                <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-end justify-end p-4">
                  <div class="bg-accent-400 p-3 rounded-full">
                    <iconify-icon icon="mdi:open-in-new" width="24" height="24" class="text-black"></iconify-icon>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE SECTION -->
    <section id="experience" class="py-24 px-6">
      <div class="max-w-6xl mx-auto">
        <p class="text-accent-400 text-sm font-medium mb-4" data-aos="fade-up">03 — EXPERIENCE</p>
        <h2 class="text-4xl md:text-5xl font-bold mb-16" data-aos="fade-up" data-aos-delay="100">Experience that shapes<br>meaningful infrastructure</h2>

        <div class="space-y-8">
          <div class="flex justify-between items-start py-6 border-b border-white/10 group hover:border-accent-400/30 transition-colors" data-aos="fade-up" data-aos-delay="150">
            <div>
              <h3 class="text-xl font-semibold group-hover:text-accent-400 transition-colors">Infrastructure Engineer</h3>
              <p class="text-gray-400">Lumbung Hijau • SMK Telkom Sidoarjo Incubation</p>
            </div>
            <p class="text-accent-400 font-medium">Dec 2025 – Present</p>
          </div>

          <div class="flex justify-between items-start py-6 border-b border-white/10 group hover:border-accent-400/30 transition-colors" data-aos="fade-up" data-aos-delay="200">
            <div>
              <h3 class="text-xl font-semibold group-hover:text-accent-400 transition-colors">Cloud &amp; DevOps Engineer</h3>
              <p class="text-gray-400">E-Learning Platform • SMPN 2 Tulangan</p>
            </div>
            <p class="text-accent-400 font-medium">Sep 2025 – Dec 2025</p>
          </div>

          <div class="flex justify-between items-start py-6 border-b border-white/10 group hover:border-accent-400/30 transition-colors" data-aos="fade-up" data-aos-delay="250">
            <div>
              <h3 class="text-xl font-semibold group-hover:text-accent-400 transition-colors">AWS Cloud Engineer</h3>
              <p class="text-gray-400">School Website Rebranding • SMK Telkom Sidoarjo</p>
            </div>
            <p class="text-accent-400 font-medium">Jul 2025 – Jan 2026</p>
          </div>

          <div class="flex justify-between items-start py-6 border-b border-white/10 group hover:border-accent-400/30 transition-colors" data-aos="fade-up" data-aos-delay="300">
            <div>
              <h3 class="text-xl font-semibold group-hover:text-accent-400 transition-colors">General Chairman MPK</h3>
              <p class="text-gray-400">Class Representative Council • SMK Telkom Sidoarjo</p>
            </div>
            <p class="text-accent-400 font-medium">2025</p>
          </div>

          <div class="flex justify-between items-start py-6 border-b border-white/10 group hover:border-accent-400/30 transition-colors" data-aos="fade-up" data-aos-delay="350">
            <div>
              <h3 class="text-xl font-semibold group-hover:text-accent-400 transition-colors">Google Digital Talent Scholar</h3>
              <p class="text-gray-400">Cloud Computing Track</p>
            </div>
            <p class="text-accent-400 font-medium">2025</p>
          </div>
        </div>
      </div>
    </section>

    <!-- BLOG/INSIGHTS SECTION -->
    <section id="blog" class="py-24 px-6 bg-[#080c14]">
      <div class="max-w-6xl mx-auto">
        <p class="text-accent-400 text-sm font-medium mb-4" data-aos="fade-up">04 — INSIGHTS</p>
        <h2 class="text-4xl md:text-5xl font-bold mb-16" data-aos="fade-up" data-aos-delay="100">Practical insights and ideas<br>from the journey so far</h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="group bg-[#0d1221] rounded-2xl overflow-hidden border border-white/5 hover:border-accent-400/30 transition-all" data-aos="fade-up" data-aos-delay="200">
            <div class="aspect-video bg-gradient-to-br from-blue-900/50 to-cyan-900/50 flex items-center justify-center">
              <span class="text-5xl">☁️</span>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold mb-2 group-hover:text-accent-400 transition-colors">Why Cloud Architecture starts with the right questions</h3>
              <p class="text-gray-400 text-sm">Understanding requirements before building infrastructure...</p>
              <p class="text-accent-400 text-sm mt-4">Read more →</p>
            </div>
          </div>

          <div class="group bg-[#0d1221] rounded-2xl overflow-hidden border border-white/5 hover:border-accent-400/30 transition-all" data-aos="fade-up" data-aos-delay="300">
            <div class="aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">
              <span class="text-5xl">🔄</span>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold mb-2 group-hover:text-accent-400 transition-colors">Building CI/CD pipelines without the chaos</h3>
              <p class="text-gray-400 text-sm">Automating deployments the right way...</p>
              <p class="text-accent-400 text-sm mt-4">Read more →</p>
            </div>
          </div>

          <div class="group bg-[#0d1221] rounded-2xl overflow-hidden border border-white/5 hover:border-accent-400/30 transition-all" data-aos="fade-up" data-aos-delay="400">
            <div class="aspect-video bg-gradient-to-br from-green-900/50 to-teal-900/50 flex items-center justify-center">
              <span class="text-5xl">🐳</span>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold mb-2 group-hover:text-accent-400 transition-colors">Docker containerization best practices</h3>
              <p class="text-gray-400 text-sm">Keep containers lightweight and secure...</p>
              <p class="text-accent-400 text-sm mt-4">Read more →</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ SECTION -->
    <section id="faq" class="py-24 px-6">
      <div class="max-w-3xl mx-auto">
        <p class="text-accent-400 text-sm font-medium mb-4 text-center" data-aos="fade-up">05 — FAQ</p>
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-center" data-aos="fade-up" data-aos-delay="100">We got you an answer</h2>
        <p class="text-gray-400 text-center mb-16">Every project is a high-impact collaboration, whether it be startup, scaleup, or enterprise.</p>

        <div class="space-y-4">
          <details class="group bg-[#0d1221] rounded-xl border border-white/5">
            <summary class="flex justify-between items-center p-6 cursor-pointer list-none">
              <span class="font-medium">What kind of projects do you take on?</span>
              <iconify-icon icon="mdi:chevron-down" class="text-accent-400 group-open:rotate-180 transition-transform" width="24" height="24"></iconify-icon>
            </summary>
            <div class="px-6 pb-6 text-gray-400">
              I focus on cloud infrastructure design, DevOps automation, CI/CD pipeline implementation, and containerization projects. Whether it's setting up AWS environments, automating deployments with GitHub Actions, or containerizing applications with Docker.
            </div>
          </details>

          <details class="group bg-[#0d1221] rounded-xl border border-white/5">
            <summary class="flex justify-between items-center p-6 cursor-pointer list-none">
              <span class="font-medium">Do you offer freelance or consulting services?</span>
              <iconify-icon icon="mdi:chevron-down" class="text-accent-400 group-open:rotate-180 transition-transform" width="24" height="24"></iconify-icon>
            </summary>
            <div class="px-6 pb-6 text-gray-400">
              I'm currently open for internships and junior Cloud/DevOps positions. For small consulting projects, feel free to reach out and we can discuss the scope together.
            </div>
          </details>

          <details class="group bg-[#0d1221] rounded-xl border border-white/5">
            <summary class="flex justify-between items-center p-6 cursor-pointer list-none">
              <span class="font-medium">Can we work remotely?</span>
              <iconify-icon icon="mdi:chevron-down" class="text-accent-400 group-open:rotate-180 transition-transform" width="24" height="24"></iconify-icon>
            </summary>
            <div class="px-6 pb-6 text-gray-400">
              Absolutely! Cloud and DevOps work is inherently remote-friendly. I'm comfortable working asynchronously across different time zones using tools like Slack, Discord, and video calls.
            </div>
          </details>

          <details class="group bg-[#0d1221] rounded-xl border border-white/5">
            <summary class="flex justify-between items-center p-6 cursor-pointer list-none">
              <span class="font-medium">What's your typical project process?</span>
              <iconify-icon icon="mdi:chevron-down" class="text-accent-400 group-open:rotate-180 transition-transform" width="24" height="24"></iconify-icon>
            </summary>
            <div class="px-6 pb-6 text-gray-400">
              I start with understanding requirements, then design the infrastructure architecture. After approval, I implement incrementally with proper documentation, testing, and monitoring at each stage.
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- CONTACT/CTA SECTION -->
    <section id="contact" class="py-24 px-6 bg-gradient-to-b from-[#080c14] to-[#0a1628]">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up">Get In Touch</h2>
        <p class="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="100">Have a project in mind? Let's talk about it.</p>
        
        <form class="space-y-4" data-aos="fade-up" data-aos-delay="200">
          <div class="grid sm:grid-cols-2 gap-4">
            <input type="text" placeholder="Your Name" class="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-accent-400 focus:outline-none transition-colors">
            <input type="email" placeholder="Your Email" class="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-accent-400 focus:outline-none transition-colors">
          </div>
          <input type="text" placeholder="Subject" class="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-accent-400 focus:outline-none transition-colors">
          <textarea placeholder="Your Message" rows="5" class="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-accent-400 focus:outline-none transition-colors resize-none"></textarea>
          <button type="submit" class="w-full sm:w-auto px-10 py-4 bg-accent-400 hover:bg-accent-500 text-black font-semibold rounded-xl transition-all flex items-center justify-center gap-2 mx-auto">
            <iconify-icon icon="mdi:send" width="20" height="20"></iconify-icon>
            Send Message
          </button>
        </form>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="py-16 px-6 border-t border-white/5">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div class="flex items-center gap-2 mb-4">
              <div class="w-8 h-8 bg-accent-400 rounded-lg flex items-center justify-center font-bold text-black">R</div>
              <span class="font-semibold">Revano Satya Pandega</span>
            </div>
            <p class="text-gray-400 text-sm">Cloud Engineer &amp; DevOps Engineer based in Sidoarjo, East Java, Indonesia.</p>
          </div>

          <div>
            <h4 class="font-semibold mb-4">Expertise</h4>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>Cloud Architecture</li>
              <li>DevOps Automation</li>
              <li>CI/CD Pipelines</li>
              <li>Containerization</li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold mb-4">Connect</h4>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li><a href="https://www.linkedin.com/in/restyand1011/" target="_blank" class="hover:text-accent-400 transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/" target="_blank" class="hover:text-accent-400 transition-colors">GitHub</a></li>
              <li><a href="https://www.resatya.dev" target="_blank" class="hover:text-accent-400 transition-colors">Website</a></li>
              <li><a href="mailto:satyavpandega@gmail.com" class="hover:text-accent-400 transition-colors">Email</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold mb-4">Others</h4>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li><a href="#" class="hover:text-accent-400 transition-colors">Resume</a></li>
              <li><a href="#projects" class="hover:text-accent-400 transition-colors">Projects</a></li>
              <li><a href="#blog" class="hover:text-accent-400 transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>

        <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2026 Revano Satya Pandega. All rights reserved.</p>
          <p>Built with Vue.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Scroll detection for navbar
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Check initial state
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const particlesOptions = ref({
  fullScreen: { enable: false },
  background: { color: { value: 'transparent' } },
  fpsLimit: 60,
  particles: {
    color: { value: ['#14b8a6', '#0ea5e9', '#8b5cf6', '#ffffff'] },
    links: {
      color: '#14b8a6',
      distance: 150,
      enable: true,
      opacity: 0.15,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: true,
      straight: false,
      outModes: { default: 'out' }
    },
    number: {
      density: { enable: true, area: 1000 },
      value: 60
    },
    opacity: {
      value: { min: 0.1, max: 0.5 },
      animation: { enable: true, speed: 1, minimumValue: 0.1 }
    },
    shape: { type: 'circle' },
    size: {
      value: { min: 1, max: 3 },
      animation: { enable: true, speed: 2, minimumValue: 0.5 }
    }
  },
  detectRetina: true
})
</script>

<style>
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>
