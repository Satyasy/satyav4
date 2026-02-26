<template>
  <div class="min-h-screen bg-[#0a0f1a] text-white font-sans">
    <!-- NAVBAR -->
    <nav class="fixed top-0 left-0 right-0 z-50 bg-transparent">
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
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="https://github.com/" target="_blank" class="text-white/80 hover:text-white transition-colors">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          </a>
        </div>
      </div>
    </nav>

    <!-- HERO SECTION -->
    <section class="relative min-h-screen flex items-center overflow-hidden">
      <!-- Background gradient - Teal to Blue -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#1a4a4f] via-[#1a3a50] to-[#1a2a40]"></div>
      
      <!-- Subtle overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/50 to-transparent"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div class="pt-20">
            <!-- Badge -->
            <div class="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
              <img src="./assets/ProfilePhoto.jpeg" alt="Revano" class="w-8 h-8 rounded-full object-cover">
              <span class="text-sm text-white">Hi, thereeeee!</span>
            </div>

            <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-8">
              Hi!, I'm<br>
              Revano Satya Pandega<br>
            </h1>

            <a href="#projects" class="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">

            </a>
          </div>

          <!-- Right Content - Profile Photo -->
          <div class="hidden md:flex justify-center items-center pt-20">
            <div class="relative">
              <!-- Glow effect -->
              <div class="absolute inset-0 bg-accent-400/30 rounded-full blur-3xl scale-75"></div>
              <!-- Profile image -->
              <img src="./assets/ProfilePhoto.jpeg" alt="Revano Satya Pandega" class="relative w-80 h-80 rounded-full object-cover border-4 border-white/20 shadow-2xl">
            </div>
          </div>
        </div>
      </div>

      <!-- Tech Logos at Bottom -->
      <div class="absolute bottom-8 left-0 right-0 z-10">
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
        <p class="text-accent-400 text-sm font-medium mb-4">01 — GET TO KNOW ME</p>
        
        <div class="grid md:grid-cols-2 gap-16 items-start">
          <div>
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
          
          <div class="relative">
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
        <p class="text-accent-400 text-sm font-medium mb-4">02 — LATEST PROJECT</p>
        <h2 class="text-4xl md:text-5xl font-bold mb-16">A glimpse into my latest work</h2>

        <div class="space-y-8">
          <!-- Project 1 -->
          <div class="group bg-[#0d1221] rounded-2xl p-8 border border-white/5 hover:border-accent-400/30 transition-all">
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
              <div class="grid grid-cols-2 gap-4">
                <div class="aspect-video bg-gradient-to-br from-green-900/30 to-teal-900/30 rounded-lg flex items-center justify-center">
                  <span class="text-4xl">🌿</span>
                </div>
                <div class="aspect-video bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-lg flex items-center justify-center">
                  <span class="text-4xl">♻️</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Project 2 -->
          <div class="group bg-[#0d1221] rounded-2xl p-8 border border-white/5 hover:border-accent-400/30 transition-all">
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
              <div class="grid grid-cols-2 gap-4">
                <div class="aspect-video bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg flex items-center justify-center">
                  <span class="text-4xl">📚</span>
                </div>
                <div class="aspect-video bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-lg flex items-center justify-center">
                  <span class="text-4xl">🚀</span>
                </div>
              </div>
            </div>

            <!-- Tech icons -->
            <div class="flex gap-4 mt-8 pt-6 border-t border-white/5">
              <div class="w-12 h-12 bg-[#1a1f2e] rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.5 4h1v1h-1V4zm-2 1h1v1h-1V5zm4 0h1v1h-1V5zM8 6h1v1H8V6zm3 0h2v2h-2V6zm4 0h1v1h-1V6zM7 7h1v1H7V7zm2 1h6v1H9V8zm-3 1h1v1H6V9zm12 0h1v1h-1V9zm-9 1h6v6H9v-6zm-4 1h1v1H5v-1zm14 0h1v1h-1v-1zM4 12h1v1H4v-1zm16 0h1v1h-1v-1zm-17 1h1v1H3v-1zm18 0h1v1h-1v-1zm-17 1h1v1H4v-1zm16 0h1v1h-1v-1zm-15 1h1v1H5v-1zm14 0h1v1h-1v-1zm-13 1h1v1H6v-1zm12 0h1v1h-1v-1zm-11 1h10v1H7v-1z"/></svg>
              </div>
              <div class="w-12 h-12 bg-[#1a1f2e] rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/></svg>
              </div>
              <div class="w-12 h-12 bg-[#1a1f2e] rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </div>
              <div class="w-12 h-12 bg-[#1a1f2e] rounded-lg flex items-center justify-center">
                <svg class="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 0C5.326 0 0 5.326 0 12.001c0 5.991 4.42 10.956 10.18 11.848v-2.063c-.456.099-.946.148-1.501.148-1.592 0-2.515-.742-2.982-1.533-.218-.369-.466-.939-.782-1.204-.446-.363-.56-.441-.625-.494-.118-.094-.153-.175-.039-.312.096-.115.286-.194.399-.194.456 0 .994.556 1.221.81.713.799 1.385 1.133 2.127 1.133.684 0 1.291-.193 1.731-.452.152-.993.592-1.859 1.251-2.498-3.108-.408-5.266-2.143-5.266-5.191 0-1.416.543-2.698 1.457-3.724-.233-.8-.522-2.361.107-3.276 1.582 0 2.533.783 3.178 1.342.723-.209 1.498-.319 2.314-.319.816 0 1.591.11 2.314.319.645-.559 1.596-1.342 3.178-1.342.629.915.34 2.476.107 3.276.914 1.026 1.457 2.308 1.457 3.724 0 3.048-2.158 4.783-5.266 5.191.918.891 1.5 2.113 1.5 3.461v4.068C19.579 22.957 24 17.992 24 12.001 24 5.326 18.674 0 12.001 0z"/></svg>
              </div>
            </div>
          </div>

          <!-- Project 3 -->
          <div class="group bg-[#0d1221] rounded-2xl p-8 border border-white/5 hover:border-accent-400/30 transition-all">
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
              <div class="grid grid-cols-2 gap-4">
                <div class="aspect-video bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-lg flex items-center justify-center">
                  <span class="text-4xl">🏫</span>
                </div>
                <div class="aspect-video bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg flex items-center justify-center">
                  <span class="text-4xl">⚡</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE SECTION -->
    <section id="experience" class="py-24 px-6">
      <div class="max-w-6xl mx-auto">
        <p class="text-accent-400 text-sm font-medium mb-4">03 — EXPERIENCE</p>
        <h2 class="text-4xl md:text-5xl font-bold mb-16">Experience that shapes<br>meaningful infrastructure</h2>

        <div class="space-y-8">
          <div class="flex justify-between items-start py-6 border-b border-white/10 group hover:border-accent-400/30 transition-colors">
            <div>
              <h3 class="text-xl font-semibold group-hover:text-accent-400 transition-colors">Infrastructure Engineer</h3>
              <p class="text-gray-400">Lumbung Hijau • SMK Telkom Sidoarjo Incubation</p>
            </div>
            <p class="text-accent-400 font-medium">Dec 2025 – Present</p>
          </div>

          <div class="flex justify-between items-start py-6 border-b border-white/10 group hover:border-accent-400/30 transition-colors">
            <div>
              <h3 class="text-xl font-semibold group-hover:text-accent-400 transition-colors">Cloud &amp; DevOps Engineer</h3>
              <p class="text-gray-400">E-Learning Platform • SMPN 2 Tulangan</p>
            </div>
            <p class="text-accent-400 font-medium">Sep 2025 – Dec 2025</p>
          </div>

          <div class="flex justify-between items-start py-6 border-b border-white/10 group hover:border-accent-400/30 transition-colors">
            <div>
              <h3 class="text-xl font-semibold group-hover:text-accent-400 transition-colors">AWS Cloud Engineer</h3>
              <p class="text-gray-400">School Website Rebranding • SMK Telkom Sidoarjo</p>
            </div>
            <p class="text-accent-400 font-medium">Jul 2025 – Jan 2026</p>
          </div>

          <div class="flex justify-between items-start py-6 border-b border-white/10 group hover:border-accent-400/30 transition-colors">
            <div>
              <h3 class="text-xl font-semibold group-hover:text-accent-400 transition-colors">General Chairman MPK</h3>
              <p class="text-gray-400">Class Representative Council • SMK Telkom Sidoarjo</p>
            </div>
            <p class="text-accent-400 font-medium">2025</p>
          </div>

          <div class="flex justify-between items-start py-6 border-b border-white/10 group hover:border-accent-400/30 transition-colors">
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
        <p class="text-accent-400 text-sm font-medium mb-4">04 — INSIGHTS</p>
        <h2 class="text-4xl md:text-5xl font-bold mb-16">Practical insights and ideas<br>from the journey so far</h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="group bg-[#0d1221] rounded-2xl overflow-hidden border border-white/5 hover:border-accent-400/30 transition-all">
            <div class="aspect-video bg-gradient-to-br from-blue-900/50 to-cyan-900/50 flex items-center justify-center">
              <span class="text-5xl">☁️</span>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold mb-2 group-hover:text-accent-400 transition-colors">Why Cloud Architecture starts with the right questions</h3>
              <p class="text-gray-400 text-sm">Understanding requirements before building infrastructure...</p>
              <p class="text-accent-400 text-sm mt-4">Read more →</p>
            </div>
          </div>

          <div class="group bg-[#0d1221] rounded-2xl overflow-hidden border border-white/5 hover:border-accent-400/30 transition-all">
            <div class="aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">
              <span class="text-5xl">🔄</span>
            </div>
            <div class="p-6">
              <h3 class="text-lg font-semibold mb-2 group-hover:text-accent-400 transition-colors">Building CI/CD pipelines without the chaos</h3>
              <p class="text-gray-400 text-sm">Automating deployments the right way...</p>
              <p class="text-accent-400 text-sm mt-4">Read more →</p>
            </div>
          </div>

          <div class="group bg-[#0d1221] rounded-2xl overflow-hidden border border-white/5 hover:border-accent-400/30 transition-all">
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
        <p class="text-accent-400 text-sm font-medium mb-4 text-center">05 — FAQ</p>
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-center">We got you an answer</h2>
        <p class="text-gray-400 text-center mb-16">Every project is a high-impact collaboration, whether it be startup, scaleup, or enterprise.</p>

        <div class="space-y-4">
          <details class="group bg-[#0d1221] rounded-xl border border-white/5">
            <summary class="flex justify-between items-center p-6 cursor-pointer list-none">
              <span class="font-medium">What kind of projects do you take on?</span>
              <svg class="w-5 h-5 text-accent-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </summary>
            <div class="px-6 pb-6 text-gray-400">
              I focus on cloud infrastructure design, DevOps automation, CI/CD pipeline implementation, and containerization projects. Whether it's setting up AWS environments, automating deployments with GitHub Actions, or containerizing applications with Docker.
            </div>
          </details>

          <details class="group bg-[#0d1221] rounded-xl border border-white/5">
            <summary class="flex justify-between items-center p-6 cursor-pointer list-none">
              <span class="font-medium">Do you offer freelance or consulting services?</span>
              <svg class="w-5 h-5 text-accent-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </summary>
            <div class="px-6 pb-6 text-gray-400">
              I'm currently open for internships and junior Cloud/DevOps positions. For small consulting projects, feel free to reach out and we can discuss the scope together.
            </div>
          </details>

          <details class="group bg-[#0d1221] rounded-xl border border-white/5">
            <summary class="flex justify-between items-center p-6 cursor-pointer list-none">
              <span class="font-medium">Can we work remotely?</span>
              <svg class="w-5 h-5 text-accent-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </summary>
            <div class="px-6 pb-6 text-gray-400">
              Absolutely! Cloud and DevOps work is inherently remote-friendly. I'm comfortable working asynchronously across different time zones using tools like Slack, Discord, and video calls.
            </div>
          </details>

          <details class="group bg-[#0d1221] rounded-xl border border-white/5">
            <summary class="flex justify-between items-center p-6 cursor-pointer list-none">
              <span class="font-medium">What's your typical project process?</span>
              <svg class="w-5 h-5 text-accent-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
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
        <h2 class="text-4xl md:text-5xl font-bold mb-4">Subscribe to my newsletter</h2>
        <p class="text-xl text-gray-400 mb-8">Get updates and insights from Revano</p>
        
        <form class="flex flex-col sm:flex-row gap-4 mb-8">
          <input type="email" placeholder="Email" class="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-accent-400 focus:outline-none transition-colors">
          <button type="submit" class="px-8 py-4 bg-accent-400 hover:bg-accent-500 text-black font-semibold rounded-xl transition-all">
            Subscribe
          </button>
        </form>

        <p class="text-gray-500 text-sm mb-12">Or reach out directly</p>

        <a href="mailto:satyavpandega@gmail.com" 
           class="inline-flex items-center gap-2 px-10 py-5 border-2 border-accent-400 hover:bg-accent-400 hover:text-black text-xl font-semibold rounded-xl transition-all">
          Say Hello 👋
        </a>
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
// No extra script needed for now
</script>

<style>
/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>
