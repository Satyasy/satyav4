<template>
  <div class="min-h-screen bg-[#0a0f1a] text-white font-sans selection:bg-accent-400/30 selection:text-white">
    <!-- NAVBAR -->
    <nav :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled 
        ? 'bg-[#0a0f1a]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/30' 
        : 'bg-transparent border-b border-transparent'
    ]">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" class="flex items-center gap-2 group">
          <img src="./assets/dart.svg" alt="RS" width="46" height="24" class="transition-transform group-hover:scale-105">
          <span class="font-bold tracking-tight text-sm text-white/90 group-hover:text-accent-400 transition-colors">REVANO SATYA</span>
        </a>
        
        <div class="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#about" class="hover:text-accent-400 transition-colors">About</a>
          <a href="#projects" class="hover:text-accent-400 transition-colors">Work</a>
          <a href="#awards" class="hover:text-accent-400 transition-colors">Awards</a>
          <a href="#experience" class="hover:text-accent-400 transition-colors">Experience</a>
          <a href="#faq" class="hover:text-accent-400 transition-colors">FAQ</a>
          <a href="#contact" class="hover:text-accent-400 transition-colors">Contact</a>
        </div>

        <div class="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/restyand1011/" target="_blank" rel="noopener" aria-label="LinkedIn" class="text-white/80 hover:text-accent-400 transition-colors">
            <iconify-icon icon="mdi:linkedin" width="22" height="22"></iconify-icon>
          </a>
          <a href="https://github.com/Satyasy" target="_blank" rel="noopener" aria-label="GitHub" class="text-white/80 hover:text-accent-400 transition-colors">
            <iconify-icon icon="mdi:github" width="22" height="22"></iconify-icon>
          </a>
        </div>
      </div>
    </nav>

    <!-- HERO SECTION -->
    <section class="relative min-h-screen flex items-center overflow-hidden">
      <!-- Background gradient - Teal to Blue -->
      <div class="absolute inset-0 bg-gradient-to-br from-[#12363b] via-[#0d2232] to-[#0a0f1a]"></div>
      
      <!-- Particle Background -->
      <vue-particles
        id="tsparticles"
        class="absolute inset-0"
        :options="particlesOptions"
      />
      
      <!-- Subtle overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-32 md:pb-36">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div>
            <!-- Badge -->
            <div class="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8 animate-fade-in-up">
              <img src="./assets/ProfilePhoto.jpeg" alt="Revano" class="w-7 h-7 rounded-full object-cover border border-accent-400/50">
              <span class="text-sm text-white/90">Open for Software Engineering & Cloud opportunities</span>
            </div>

            <h1 class="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6 animate-fade-in-up animation-delay-200">
              Revano Satya<br>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-teal-300 to-sky-400">Pandega</span>
            </h1>

            <div class="flex items-center gap-3 text-sm md:text-base text-accent-400/90 font-mono mb-6 animate-fade-in-up animation-delay-300">
              <span>SysOps</span>
              <span class="text-white/30">•</span>
              <span>DevOps</span>
              <span class="text-white/30">•</span>
              <span>Cloud Engineer</span>
            </div>

            <p class="text-lg text-gray-300 max-w-xl mb-8 leading-relaxed animate-fade-in-up animation-delay-400">
              Building resilient foundational infrastructure that ensures digital platforms operate with high availability, automated delivery, and rock-solid security.
            </p>

            <div class="flex flex-wrap items-center gap-4 animate-fade-in-up animation-delay-600">
              <a href="#projects" class="px-6 py-3.5 bg-accent-400 hover:bg-accent-500 text-black font-semibold rounded-xl transition-all shadow-lg shadow-accent-400/20 inline-flex items-center gap-2">
                <span>View Selected Work</span>
                <iconify-icon icon="mdi:arrow-right" width="18" height="18"></iconify-icon>
              </a>
              <a href="#awards" class="px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium rounded-xl transition-all inline-flex items-center gap-2">
                <span>Awards & Certifications</span>
                <iconify-icon icon="mdi:trophy-outline" width="18" height="18" class="text-accent-400"></iconify-icon>
              </a>
            </div>
          </div>

          <!-- Right Content - Profile Photo with Crossed Frames -->
          <div class="hidden md:flex justify-center items-center">
            <div class="relative animate-fade-in-scale animation-delay-400">
              <!-- Decorative crossed squares -->
              <div class="absolute -inset-6">
                <div class="absolute top-0 left-0 w-72 h-72 border-2 border-accent-400/40 rounded-2xl transform rotate-6"></div>
                <div class="absolute top-4 left-4 w-72 h-72 border-2 border-white/20 rounded-2xl transform -rotate-6"></div>
              </div>
              <!-- Glow effect -->
              <div class="absolute inset-0 bg-accent-400/25 rounded-2xl blur-3xl scale-90"></div>
              <!-- Profile image -->
              <img src="./assets/ProfilePhoto.jpeg" alt="Revano Satya Pandega" class="relative w-80 h-80 rounded-2xl object-cover border-4 border-white/20 shadow-2xl animate-float">
            </div>
          </div>
        </div>
      </div>

      <!-- Tech Stack Running Marquee at Bottom -->
      <div class="absolute bottom-4 left-0 right-0 z-20 animate-fade-in-up animation-delay-800">
        <div class="marquee-wrapper relative w-full overflow-hidden select-none border-t border-white/10 pt-3">
          <div class="marquee-track flex w-max">
            <!-- Group 1 -->
            <div class="marquee-group flex items-center gap-8 pr-8">
              <div 
                v-for="(tech, idx) in techStack" 
                :key="'t1-' + idx"
                class="flex items-center gap-2.5 text-white/80 hover:text-white transition-colors shrink-0"
              >
                <iconify-icon :icon="tech.icon" width="32" height="32" class="shrink-0"></iconify-icon>
                <div class="flex flex-col text-left">
                  <span class="text-sm font-medium text-white/90 leading-tight">{{ tech.name }}</span>
                  <span class="text-[10px] text-gray-400 font-mono leading-tight">{{ tech.category }}</span>
                </div>
              </div>
            </div>

            <!-- Group 2 (Duplicate for Infinite Seamless Loop) -->
            <div class="marquee-group flex items-center gap-8 pr-8" aria-hidden="true">
              <div 
                v-for="(tech, idx) in techStack" 
                :key="'t2-' + idx"
                class="flex items-center gap-2.5 text-white/80 hover:text-white transition-colors shrink-0"
              >
                <iconify-icon :icon="tech.icon" width="32" height="32" class="shrink-0"></iconify-icon>
                <div class="flex flex-col text-left">
                  <span class="text-sm font-medium text-white/90 leading-tight">{{ tech.name }}</span>
                  <span class="text-[10px] text-gray-400 font-mono leading-tight">{{ tech.category }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT SECTION -->
    <section id="about" class="py-24 px-6 border-t border-white/5 bg-[#0a0f1a]">
      <div class="max-w-6xl mx-auto">
        <p class="text-accent-400 text-sm font-mono tracking-widest uppercase mb-4" data-aos="fade-up">01 — GET TO KNOW ME</p>
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-12" data-aos="fade-up" data-aos-delay="100">
          Infrastruktur yang tenang,<br>
          <span class="text-accent-400">sistem yang andal.</span>
        </h2>
        
        <div class="grid md:grid-cols-12 gap-12 items-start">
          <div class="md:col-span-7 space-y-6 text-gray-300 leading-relaxed" data-aos="fade-right" data-aos-delay="200">
            <p class="text-xl text-white font-medium">
              Fokus saya di bidang teknologi adalah membangun infrastruktur dasar yang memastikan sistem digital berjalan dengan stabil, otomatis, dan efisien.
            </p>
            <p>
              Sebagai seorang calon DevOps dan SysOps, keahlian saya mencakup administrasi Linux dan penulisan <strong class="text-white">Infrastructure as Code (IaC)</strong> menggunakan skrip Terraform untuk merancang lingkungan cloud yang andal di Amazon Web Services (AWS).
            </p>
            <p>
              Saya memiliki minat besar dalam mengintegrasikan sistem otomatisasi deployment <strong class="text-white">CI/CD GitHub Actions</strong> dengan jaringan yang aman, containerization berbasis <strong class="text-white">Docker &amp; Kubernetes</strong>, serta observabilitas metrik menggunakan Prometheus dan Grafana.
            </p>
            <p>
              Setiap arsitektur saya perlakukan seperti sistem produksi nyata: ada dokumentasi rapi, ada monitoring proaktif, dan ada mitigasi kegagalan (plan B).
            </p>

            <div class="pt-4 flex flex-wrap gap-4 text-sm text-gray-400">
              <div class="flex items-center gap-2 bg-[#0d1221] px-4 py-2 rounded-lg border border-white/5">
                <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>SMK Telkom Sidoarjo (SIJA &amp; Cloud Talent)</span>
              </div>
              <div class="flex items-center gap-2 bg-[#0d1221] px-4 py-2 rounded-lg border border-white/5">
                <iconify-icon icon="mdi:map-marker" class="text-accent-400"></iconify-icon>
                <span>Sidoarjo / Banyuwangi, Jawa Timur, Indonesia</span>
              </div>
            </div>
          </div>
          
          <div class="md:col-span-5 grid grid-cols-1 gap-4" data-aos="fade-left" data-aos-delay="300">
            <div class="bg-[#0d1221] p-5 rounded-xl border border-white/5 hover:border-accent-400/30 transition-all">
              <div class="text-accent-400 font-mono text-xs uppercase mb-1">01 / Infrastructure as Code</div>
              <h3 class="text-white font-semibold mb-1">Terraform &amp; AWS 3-Tier</h3>
              <p class="text-xs text-gray-400">Otomatisasi VPC, EC2, RDS, ALB, Security Groups, IAM, dan S3 secara konsisten.</p>
            </div>

            <div class="bg-[#0d1221] p-5 rounded-xl border border-white/5 hover:border-accent-400/30 transition-all">
              <div class="text-accent-400 font-mono text-xs uppercase mb-1">02 / Virtualization & Containers</div>
              <h3 class="text-white font-semibold mb-1">Docker, K8s &amp; Proxmox</h3>
              <p class="text-xs text-gray-400">Virtualisasi bare-metal Proxmox VE, containerized microservices, dan Harbor Registry.</p>
            </div>

            <div class="bg-[#0d1221] p-5 rounded-xl border border-white/5 hover:border-accent-400/30 transition-all">
              <div class="text-accent-400 font-mono text-xs uppercase mb-1">03 / Monitoring & High Availability</div>
              <h3 class="text-white font-semibold mb-1">Prometheus, Grafana &amp; ProxySQL</h3>
              <p class="text-xs text-gray-400">Real-time observability, Zabbix alert routing, dan database traffic distribution.</p>
            </div>

            <div class="bg-[#0d1221] p-5 rounded-xl border border-white/5 hover:border-accent-400/30 transition-all">
              <div class="text-accent-400 font-mono text-xs uppercase mb-1">04 / Leadership</div>
              <h3 class="text-white font-semibold mb-1">Ketua Umum MPK 2025–2026</h3>
              <p class="text-xs text-gray-400">Memimpin Majelis Perwakilan Kelas SMK Telkom Sidoarjo mengawasi jalannya program kerja siswa.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECTS SECTION -->
    <section id="projects" class="py-24 px-6 bg-[#080c14] border-t border-white/5">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p class="text-accent-400 text-sm font-mono tracking-widest uppercase mb-3" data-aos="fade-up">02 — FEATURED PROJECTS</p>
            <h2 class="text-4xl md:text-5xl font-bold tracking-tight" data-aos="fade-up" data-aos-delay="100">Selected Works</h2>
          </div>
          <p class="text-gray-400 max-w-md text-sm" data-aos="fade-up" data-aos-delay="150">
            Real production architectures, CI/CD automation pipelines, and scalable cloud solutions built with modern practices.
          </p>
        </div>

        <div class="space-y-10">
          <!-- Project 1: Lumbung Hijau -->
          <a href="https://lumbunghijau.id" target="_blank" rel="noopener" class="group block bg-[#0d1221] rounded-2xl p-8 border border-white/5 hover:border-accent-400/40 transition-all" data-aos="fade-up" data-aos-delay="200">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-accent-400/10 text-accent-400 rounded text-xs font-mono mb-3">
                  Infrastructure Engineer • BumDes TambakBeras
                </div>
                <h3 class="text-2xl md:text-3xl font-bold mb-3 group-hover:text-accent-400 transition-colors">Lumbung Hijau — Waste Management Platform</h3>
                <p class="text-gray-400 mb-6 leading-relaxed">
                  Platform manajemen limbah terintegrasi berbasis web dan mobile untuk mendigitalisasi operasional bank sampah, pelacakan sampah organik, dan produksi pupuk.
                </p>
                
                <div class="grid grid-cols-3 gap-4 text-sm mb-6 border-y border-white/5 py-4">
                  <div>
                    <p class="text-gray-500 text-xs">Location</p>
                    <p class="text-white font-medium">Jombang, ID</p>
                  </div>
                  <div>
                    <p class="text-gray-500 text-xs">Role</p>
                    <p class="text-white font-medium">Infra Engineer</p>
                  </div>
                  <div>
                    <p class="text-gray-500 text-xs">Year</p>
                    <p class="text-white font-medium">2025</p>
                  </div>
                </div>

                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-300 font-mono">AWS 3-Tier</span>
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-300 font-mono">Docker</span>
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-300 font-mono">Laravel API</span>
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-300 font-mono">VPS Architecture</span>
                </div>
              </div>
              <div class="relative overflow-hidden rounded-xl bg-black/40">
                <img 
                  src="./assets/lumbunghijau.png" 
                  alt="Lumbung Hijau" 
                  class="aspect-video w-full object-cover rounded-xl filter grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500" 
                />
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-end justify-end p-4">
                  <div class="bg-accent-400 p-3 rounded-full text-black">
                    <iconify-icon icon="mdi:open-in-new" width="22" height="22"></iconify-icon>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <!-- Project 2: E-Learning SMPN 2 Tulangan -->
          <a href="https://github.com/Satyasy" target="_blank" rel="noopener" class="group block bg-[#0d1221] rounded-2xl p-8 border border-white/5 hover:border-accent-400/40 transition-all" data-aos="fade-up" data-aos-delay="250">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-sky-400/10 text-sky-400 rounded text-xs font-mono mb-3">
                  DevOps Engineer • SMPN 2 Tulangan
                </div>
                <h3 class="text-2xl md:text-3xl font-bold mb-3 group-hover:text-accent-400 transition-colors">E-Learning Cloud Infrastructure</h3>
                <p class="text-gray-400 mb-6 leading-relaxed">
                  Perancangan dan deployment infrastruktur server platform E-Learning sekolah dengan pipeline CI/CD GitHub Actions otomatis, zero-downtime, dan pencadangan otomatis.
                </p>
                
                <div class="grid grid-cols-3 gap-4 text-sm mb-6 border-y border-white/5 py-4">
                  <div>
                    <p class="text-gray-500 text-xs">Context</p>
                    <p class="text-white font-medium">Digital Talent</p>
                  </div>
                  <div>
                    <p class="text-gray-500 text-xs">Role</p>
                    <p class="text-white font-medium">DevOps Eng</p>
                  </div>
                  <div>
                    <p class="text-gray-500 text-xs">Year</p>
                    <p class="text-white font-medium">2025</p>
                  </div>
                </div>

                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-300 font-mono">AWS</span>
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-300 font-mono">GitHub Actions</span>
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-300 font-mono">Docker</span>
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-300 font-mono">Linux Server</span>
                </div>
              </div>
              <div class="relative overflow-hidden rounded-xl bg-black/40">
                <img 
                  src="./assets/semicolonJHICArchitectur.png" 
                  alt="E-Learning Architecture" 
                  class="aspect-video w-full object-cover rounded-xl filter grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500" 
                />
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-end justify-end p-4">
                  <div class="bg-white p-3 rounded-full text-black">
                    <iconify-icon icon="mdi:github" width="22" height="22"></iconify-icon>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <!-- Project 3: SMK Telkom Website Rebranding -->
          <a href="https://semicolon.smktelkom-sda.sch.id" target="_blank" rel="noopener" class="group block bg-[#0d1221] rounded-2xl p-8 border border-white/5 hover:border-accent-400/40 transition-all" data-aos="fade-up" data-aos-delay="300">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-teal-400/10 text-teal-400 rounded text-xs font-mono mb-3">
                  Cloud Engineer • Rebranding Resmi
                </div>
                <h3 class="text-2xl md:text-3xl font-bold mb-3 group-hover:text-accent-400 transition-colors">SMK Telkom Website Rebranding</h3>
                <p class="text-gray-400 mb-6 leading-relaxed">
                  Membangun dan mengelola infrastruktur web dari nol untuk mendukung proyek rebranding menyeluruh sekolah, memastikan skalabilitas tinggi dan integrasi mulus.
                </p>
                
                <div class="grid grid-cols-3 gap-4 text-sm mb-6 border-y border-white/5 py-4">
                  <div>
                    <p class="text-gray-500 text-xs">Scope</p>
                    <p class="text-white font-medium">Official Portal</p>
                  </div>
                  <div>
                    <p class="text-gray-500 text-xs">Role</p>
                    <p class="text-white font-medium">Cloud Eng</p>
                  </div>
                  <div>
                    <p class="text-gray-500 text-xs">Year</p>
                    <p class="text-white font-medium">2025–2026</p>
                  </div>
                </div>

                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-300 font-mono">AWS</span>
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-300 font-mono">Docker</span>
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-300 font-mono">Nginx Proxy</span>
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-300 font-mono">CI/CD</span>
                </div>
              </div>
              <div class="relative overflow-hidden rounded-xl bg-black/40">
                <img 
                  src="./assets/page_10_img_1.png" 
                  alt="SMK Telkom New Site" 
                  class="aspect-video w-full object-cover rounded-xl filter grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500" 
                />
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-end justify-end p-4">
                  <div class="bg-accent-400 p-3 rounded-full text-black">
                    <iconify-icon icon="mdi:open-in-new" width="22" height="22"></iconify-icon>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <!-- Project 4: DocDot Platform -->
          <a href="https://docdot.resatya.tech" target="_blank" rel="noopener" class="group block bg-[#0d1221] rounded-2xl p-8 border border-white/5 hover:border-accent-400/40 transition-all" data-aos="fade-up" data-aos-delay="350">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-purple-400/10 text-purple-400 rounded text-xs font-mono mb-3">
                  Fullstack Developer • AI Healthcare
                </div>
                <h3 class="text-2xl md:text-3xl font-bold mb-3 group-hover:text-accent-400 transition-colors">DocDot Platform — 24/7 AI Healthcare</h3>
                <p class="text-gray-400 mb-6 leading-relaxed">
                  Platform konsultasi kesehatan 24/7 berbasis AI dengan arsitektur Retrieval-Augmented Generation (RAG) untuk respon akurat dan terverifikasi dokumen medis terpercaya.
                </p>
                
                <div class="grid grid-cols-3 gap-4 text-sm mb-6 border-y border-white/5 py-4">
                  <div>
                    <p class="text-gray-500 text-xs">Domain</p>
                    <p class="text-white font-medium">Healthcare AI</p>
                  </div>
                  <div>
                    <p class="text-gray-500 text-xs">Role</p>
                    <p class="text-white font-medium">Fullstack</p>
                  </div>
                  <div>
                    <p class="text-gray-500 text-xs">Year</p>
                    <p class="text-white font-medium">2025</p>
                  </div>
                </div>

                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-300 font-mono">RAG AI</span>
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-300 font-mono">Python</span>
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-300 font-mono">Vector DB</span>
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-300 font-mono">React</span>
                </div>
              </div>
              <div class="relative overflow-hidden rounded-xl bg-black/40">
                <img 
                  src="./assets/page_11_img_2.png" 
                  alt="DocDot Platform" 
                  class="aspect-video w-full object-cover rounded-xl filter grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500" 
                />
                <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-end justify-end p-4">
                  <div class="bg-accent-400 p-3 rounded-full text-black">
                    <iconify-icon icon="mdi:open-in-new" width="22" height="22"></iconify-icon>
                  </div>
                </div>
              </div>
            </div>
          </a>

          <!-- Project 5: SIGMA Platform -->
          <div class="group block bg-[#0d1221] rounded-2xl p-8 border border-white/5 hover:border-accent-400/40 transition-all" data-aos="fade-up" data-aos-delay="400">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded text-xs font-mono mb-3">
                  DevOps Engineer • School Academic Hub
                </div>
                <h3 class="text-2xl md:text-3xl font-bold mb-3 group-hover:text-accent-400 transition-colors">SIGMA School Platform Infrastructure</h3>
                <p class="text-gray-400 mb-6 leading-relaxed">
                  Infrastruktur server dan otomatisasi pipeline CI/CD GitHub Actions untuk platform SIGMA SMK Telkom Sidoarjo guna memastikan zero-downtime operasional akademik.
                </p>
                
                <div class="grid grid-cols-3 gap-4 text-sm mb-6 border-y border-white/5 py-4">
                  <div>
                    <p class="text-gray-500 text-xs">Focus</p>
                    <p class="text-white font-medium">Availability</p>
                  </div>
                  <div>
                    <p class="text-gray-500 text-xs">Role</p>
                    <p class="text-white font-medium">DevOps Eng</p>
                  </div>
                  <div>
                    <p class="text-gray-500 text-xs">Year</p>
                    <p class="text-white font-medium">2025</p>
                  </div>
                </div>

                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-300 font-mono">GitHub Actions</span>
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-300 font-mono">Docker</span>
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-300 font-mono">Linux Server</span>
                </div>
              </div>
              <div class="relative overflow-hidden rounded-xl bg-black/40">
                <img 
                  src="./assets/page_13_img_1.png" 
                  alt="SIGMA Platform" 
                  class="aspect-video w-full object-cover rounded-xl filter grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500" 
                />
              </div>
            </div>
          </div>

          <!-- Project 6: SMPN 2 CANDI Web Portal -->
          <div class="group block bg-[#0d1221] rounded-2xl p-8 border border-white/5 hover:border-accent-400/40 transition-all" data-aos="fade-up" data-aos-delay="450">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div class="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/10 text-amber-400 rounded text-xs font-mono mb-3">
                  DevOps Engineer • Container Registry
                </div>
                <h3 class="text-2xl md:text-3xl font-bold mb-3 group-hover:text-accent-400 transition-colors">Web Portal SMPN 2 CANDI</h3>
                <p class="text-gray-400 mb-6 leading-relaxed">
                  Deployment infrastruktur web portal modern terintegrasi dengan otomatisasi pipeline GitHub Actions dan Harbor Private Container Registry untuk manajemen image aman.
                </p>
                
                <div class="grid grid-cols-3 gap-4 text-sm mb-6 border-y border-white/5 py-4">
                  <div>
                    <p class="text-gray-500 text-xs">Registry</p>
                    <p class="text-white font-medium">Harbor</p>
                  </div>
                  <div>
                    <p class="text-gray-500 text-xs">Role</p>
                    <p class="text-white font-medium">DevOps Eng</p>
                  </div>
                  <div>
                    <p class="text-gray-500 text-xs">Year</p>
                    <p class="text-white font-medium">2025</p>
                  </div>
                </div>

                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-300 font-mono">Harbor Registry</span>
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-300 font-mono">CI/CD</span>
                  <span class="px-3 py-1 bg-white/5 rounded text-xs text-gray-300 font-mono">Nginx Reverse Proxy</span>
                </div>
              </div>
              <div class="relative overflow-hidden rounded-xl bg-black/40">
                <img 
                  src="./assets/page_14_img_1.png" 
                  alt="Web Portal SMPN 2 CANDI" 
                  class="aspect-video w-full object-cover rounded-xl filter grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500" 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AWARDS & CERTIFICATIONS SECTION -->
    <section id="awards" class="py-24 px-6 border-t border-white/5 bg-[#0a0f1a]">
      <div class="max-w-6xl mx-auto">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p class="text-accent-400 text-sm font-mono tracking-widest uppercase mb-3" data-aos="fade-up">03 — HONORS & CERTIFICATIONS</p>
            <h2 class="text-4xl md:text-5xl font-bold tracking-tight" data-aos="fade-up" data-aos-delay="100">Awards & Credentials</h2>
          </div>
          <p class="text-gray-400 max-w-md text-sm" data-aos="fade-up" data-aos-delay="150">
            Tested under intense real-world pressure, proving resilience, architecture design, and automation expertise across national competitions.
          </p>
        </div>

        <!-- Awards Grid -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(award, index) in awardsList" 
            :key="index"
            class="group bg-[#0d1221] rounded-2xl overflow-hidden border border-white/5 hover:border-accent-400/40 transition-all flex flex-col cursor-pointer"
            data-aos="fade-up"
            :data-aos-delay="100 * (index % 3)"
            @click="openCertModal(award)"
          >
            <div class="relative aspect-[16/10] overflow-hidden bg-black/40">
              <img 
                :src="award.image" 
                :alt="award.title" 
                class="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div class="absolute top-3 left-3 px-2.5 py-1 bg-black/70 backdrop-blur-md rounded-full border border-white/10 text-[11px] font-mono text-accent-400">
                {{ award.badge }}
              </div>
              <div class="absolute inset-0 bg-accent-400/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span class="px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-lg text-xs font-medium text-white flex items-center gap-1.5">
                  <iconify-icon icon="mdi:magnify-plus-outline" width="16" height="16"></iconify-icon>
                  Lihat Sertifikat
                </span>
              </div>
            </div>

            <div class="p-6 flex flex-col flex-1">
              <div class="text-xs text-gray-500 font-mono mb-2">{{ award.issuer }}</div>
              <h3 class="text-lg font-bold text-white group-hover:text-accent-400 transition-colors mb-3 leading-snug">
                {{ award.title }}
              </h3>
              <p class="text-sm text-gray-400 leading-relaxed mt-auto">
                {{ award.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Industry Credentials & Badges Strip -->
        <div class="mt-16 bg-[#0d1221] p-8 rounded-2xl border border-white/5" data-aos="fade-up">
          <div class="text-xs font-mono text-accent-400 tracking-wider uppercase mb-6">Sertifikasi Industri & Pengakuan Kompetensi Tambahan</div>
          <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div class="border-l-2 border-accent-400 pl-4">
              <div class="text-sm font-semibold text-white">AWS Cloud Practitioner</div>
              <div class="text-xs text-gray-400">Dicoding Indonesia (2024)</div>
            </div>
            <div class="border-l-2 border-accent-400 pl-4">
              <div class="text-sm font-semibold text-white">Dasar Administrasi Linux</div>
              <div class="text-xs text-gray-400">Dicoding Indonesia (2024)</div>
            </div>
            <div class="border-l-2 border-accent-400 pl-4">
              <div class="text-sm font-semibold text-white">TOEIC Vokasi — Skor 550</div>
              <div class="text-xs text-gray-400">Ditjen Pendidikan Vokasi</div>
            </div>
            <div class="border-l-2 border-accent-400 pl-4">
              <div class="text-sm font-semibold text-white">TechFest Cloud Computing</div>
              <div class="text-xs text-gray-400">Juara 1 (2023 &amp; 2024)</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE & EDUCATION SECTION -->
    <section id="experience" class="py-24 px-6 border-t border-white/5 bg-[#080c14]">
      <div class="max-w-6xl mx-auto">
        <p class="text-accent-400 text-sm font-mono tracking-widest uppercase mb-4" data-aos="fade-up">04 — TIMELINE &amp; JOURNEY</p>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-16" data-aos="fade-up" data-aos-delay="100">
          Experience &amp; Education
        </h2>

        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Left: Professional & Project Experience -->
          <div>
            <h3 class="text-xl font-bold text-white mb-8 flex items-center gap-3" data-aos="fade-right">
              <span class="w-2.5 h-2.5 rounded-full bg-accent-400"></span>
              Engineering Experience &amp; Leadership
            </h3>

            <div class="space-y-6">
              <div class="p-6 bg-[#0d1221] rounded-xl border border-white/5 hover:border-accent-400/30 transition-colors" data-aos="fade-right" data-aos-delay="150">
                <div class="flex justify-between items-start gap-4 mb-2">
                  <h4 class="text-lg font-bold text-white">Infrastructure Engineer</h4>
                  <span class="text-xs font-mono px-2.5 py-1 rounded bg-accent-400/10 text-accent-400 whitespace-nowrap">Dec 2025 – Present</span>
                </div>
                <p class="text-sm text-gray-400 font-medium mb-3">Lumbung Hijau • Inkubasi SMK Telkom Sidoarjo &amp; BumDes</p>
                <p class="text-xs text-gray-400 leading-relaxed">
                  Merancang infrastruktur VPS &amp; arsitektur AWS 3-layer, mengelola pipeline deployment containerized API, dan memastikan uptime sistem pengelolaan limbah.
                </p>
              </div>

              <div class="p-6 bg-[#0d1221] rounded-xl border border-white/5 hover:border-accent-400/30 transition-colors" data-aos="fade-right" data-aos-delay="200">
                <div class="flex justify-between items-start gap-4 mb-2">
                  <h4 class="text-lg font-bold text-white">Cloud &amp; DevOps Engineer</h4>
                  <span class="text-xs font-mono px-2.5 py-1 rounded bg-white/10 text-gray-300 whitespace-nowrap">Sep 2025 – Dec 2025</span>
                </div>
                <p class="text-sm text-gray-400 font-medium mb-3">E-Learning Platform • SMPN 2 Tulangan</p>
                <p class="text-xs text-gray-400 leading-relaxed">
                  Menyiapkan lingkungan server Linux terisolasi, otomatisasi CI/CD GitHub Actions, penataan Nginx reverse proxy, dan disaster recovery backup.
                </p>
              </div>

              <div class="p-6 bg-[#0d1221] rounded-xl border border-white/5 hover:border-accent-400/30 transition-colors" data-aos="fade-right" data-aos-delay="250">
                <div class="flex justify-between items-start gap-4 mb-2">
                  <h4 class="text-lg font-bold text-white">Cloud Engineer</h4>
                  <span class="text-xs font-mono px-2.5 py-1 rounded bg-white/10 text-gray-300 whitespace-nowrap">Jul 2025 – Jan 2026</span>
                </div>
                <p class="text-sm text-gray-400 font-medium mb-3">Web Rebranding • SMK Telkom Sidoarjo</p>
                <p class="text-xs text-gray-400 leading-relaxed">
                  Penyediaan infrastruktur cloud AWS berkecepatan tinggi dengan auto-scaling, containerization Docker, dan zero-downtime release.
                </p>
              </div>

              <div class="p-6 bg-[#0d1221] rounded-xl border border-white/5 hover:border-accent-400/30 transition-colors" data-aos="fade-right" data-aos-delay="300">
                <div class="flex justify-between items-start gap-4 mb-2">
                  <h4 class="text-lg font-bold text-white">Ketua Umum MPK</h4>
                  <span class="text-xs font-mono px-2.5 py-1 rounded bg-accent-400/10 text-accent-400 whitespace-nowrap">Jan 2025 – Jan 2026</span>
                </div>
                <p class="text-sm text-gray-400 font-medium mb-3">Majelis Perwakilan Kelas • SMK Telkom Sidoarjo</p>
                <p class="text-xs text-gray-400 leading-relaxed">
                  Memimpin sidang perwakilan siswa, merancang strategi organisasi, mengawasi program kerja OSIS, serta membina akuntabilitas kepengurusan.
                </p>
              </div>
            </div>
          </div>

          <!-- Right: Education Foundations -->
          <div>
            <h3 class="text-xl font-bold text-white mb-8 flex items-center gap-3" data-aos="fade-left">
              <span class="w-2.5 h-2.5 rounded-full bg-teal-400"></span>
              Academic Background
            </h3>

            <div class="space-y-6">
              <div class="p-6 bg-[#0d1221] rounded-xl border border-white/5 hover:border-accent-400/30 transition-colors" data-aos="fade-left" data-aos-delay="150">
                <div class="flex justify-between items-start gap-4 mb-2">
                  <h4 class="text-lg font-bold text-white">SMK Telkom Sidoarjo</h4>
                  <span class="text-xs font-mono px-2.5 py-1 rounded bg-accent-400/10 text-accent-400 whitespace-nowrap">2023 — 2027</span>
                </div>
                <p class="text-sm text-accent-400 font-medium mb-3">Sistem Informasi Jaringan &amp; Aplikasi (SIJA)</p>
                <p class="text-xs text-gray-400 leading-relaxed mb-4">
                  Program kejuruan 4 tahun mendalami jaringan komputer, sistem operasi Linux, administrasi server bare-metal &amp; virtualisasi, serta rekayasa perangkat lunak modern.
                </p>
                <div class="bg-black/30 p-3.5 rounded-lg border border-white/5">
                  <span class="text-xs font-semibold text-white block mb-1">Digital Talent Program — Cloud Computing (2024—2025)</span>
                  <p class="text-[11px] text-gray-400">
                    Pelatihan intensif spesialisasi AWS cloud architecture, IaC Terraform, CI/CD pipeline, monitoring Grafana/Prometheus, dan tuning database high-availability.
                  </p>
                </div>
              </div>

              <div class="p-6 bg-[#0d1221] rounded-xl border border-white/5 hover:border-accent-400/30 transition-colors" data-aos="fade-left" data-aos-delay="200">
                <div class="flex justify-between items-start gap-4 mb-2">
                  <h4 class="text-lg font-bold text-white">SMP Al-Kautsar Askandariyah</h4>
                  <span class="text-xs font-mono px-2.5 py-1 rounded bg-white/10 text-gray-300 whitespace-nowrap">2020 — 2023</span>
                </div>
                <p class="text-sm text-gray-400 font-medium mb-3">Pendidikan Menengah Pertama Berbasis Pesantren</p>
                <p class="text-xs text-gray-400 leading-relaxed">
                  Pendidikan berbasis asrama dengan pembentukan karakter kuat, kedisiplinan tinggi, dan etika kerja. Di jenjang ini mulai mengenal dasar teknologi informasi dan komputasi yang memantik minat mendalam di bidang sistem IT.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ SECTION -->
    <section id="faq" class="py-24 px-6 border-t border-white/5 bg-[#0a0f1a]">
      <div class="max-w-3xl mx-auto">
        <p class="text-accent-400 text-sm font-mono tracking-widest uppercase mb-4 text-center" data-aos="fade-up">05 — FAQ</p>
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-center tracking-tight" data-aos="fade-up" data-aos-delay="100">Frequently Asked Questions</h2>
        <p class="text-gray-400 text-center mb-16 text-sm" data-aos="fade-up" data-aos-delay="150">Common inquiries regarding collaboration, infrastructure engineering, and project workflows.</p>

        <div class="space-y-4">
          <details class="group bg-[#0d1221] rounded-xl border border-white/5 overflow-hidden transition-all">
            <summary class="flex justify-between items-center p-6 cursor-pointer list-none font-medium hover:text-accent-400 transition-colors">
              <span>Proyek seperti apa yang biasanya Anda tangani?</span>
              <iconify-icon icon="mdi:chevron-down" class="text-accent-400 group-open:rotate-180 transition-transform" width="22" height="22"></iconify-icon>
            </summary>
            <div class="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
              Fokus utama saya adalah perancangan infrastruktur cloud (AWS), otomatisasi CI/CD (GitHub Actions), kontainerisasi (Docker &amp; Kubernetes), administrasi server Linux, dan Infrastructure as Code (Terraform). Saya terbiasa menyiapkan sistem dari tahap awal hingga produksi yang aman dan dapat dipantau.
            </div>
          </details>

          <details class="group bg-[#0d1221] rounded-xl border border-white/5 overflow-hidden transition-all">
            <summary class="flex justify-between items-center p-6 cursor-pointer list-none font-medium hover:text-accent-400 transition-colors">
              <span>Apakah terbuka untuk program magang (internship) atau kerja lepas?</span>
              <iconify-icon icon="mdi:chevron-down" class="text-accent-400 group-open:rotate-180 transition-transform" width="22" height="22"></iconify-icon>
            </summary>
            <div class="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
              Ya, saya sangat terbuka untuk program magang industri (Cloud/DevOps/SysOps Engineer) serta kolaborasi proyek infrastruktur. Silakan hubungi saya melalui email untuk mendiskusikan peluang kerja sama.
            </div>
          </details>

          <details class="group bg-[#0d1221] rounded-xl border border-white/5 overflow-hidden transition-all">
            <summary class="flex justify-between items-center p-6 cursor-pointer list-none font-medium hover:text-accent-400 transition-colors">
              <span>Bagaimana alur kerja teknis Anda dalam mengerjakan proyek?</span>
              <iconify-icon icon="mdi:chevron-down" class="text-accent-400 group-open:rotate-180 transition-transform" width="22" height="22"></iconify-icon>
            </summary>
            <div class="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
              Saya memulai dengan analisis kebutuhan beban (workload) dan perancangan diagram topologi arsitektur. Setelah arsitektur disetujui, infrastruktur dideploy menggunakan IaC/skrip otomatis, dilengkapi pengujian keamanan node, setup monitoring metrik, serta dokumentasi deployment yang komprehensif.
            </div>
          </details>

          <details class="group bg-[#0d1221] rounded-xl border border-white/5 overflow-hidden transition-all">
            <summary class="flex justify-between items-center p-6 cursor-pointer list-none font-medium hover:text-accent-400 transition-colors">
              <span>Apakah Anda dapat bekerja secara remote?</span>
              <iconify-icon icon="mdi:chevron-down" class="text-accent-400 group-open:rotate-180 transition-transform" width="22" height="22"></iconify-icon>
            </summary>
            <div class="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
              Tentu. Pekerjaan Cloud &amp; DevOps sangat adaptif dengan kerja jarak jauh. Saya terbiasa berkoordinasi secara asinkron menggunakan GitHub, Slack, Discord, serta manajemen task terstruktur.
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- CONTACT SECTION -->
    <section id="contact" class="py-24 px-6 border-t border-white/5 bg-gradient-to-b from-[#080c14] to-[#0d1525]">
      <div class="max-w-5xl mx-auto text-center">
        <p class="text-accent-400 text-sm font-mono tracking-widest uppercase mb-3" data-aos="fade-up">06 — GET IN TOUCH</p>
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-4" data-aos="fade-up" data-aos-delay="100">
          Mari Bekerja Sama
        </h2>
        <p class="text-lg text-gray-400 max-w-2xl mx-auto mb-12" data-aos="fade-up" data-aos-delay="150">
          Saya terbuka untuk proyek Cloud Infrastructure, otomatisasi CI/CD, konsultasi SysOps, maupun peluang magang industri.
        </p>

        <!-- 3 Symmetric Contact Cards -->
        <div class="grid md:grid-cols-3 gap-6 mb-12" data-aos="fade-up" data-aos-delay="200">
          <!-- Card 1: Email -->
          <a 
            href="mailto:satyavpandega@gmail.com" 
            class="group bg-[#0d1221] hover:bg-[#121a30] p-8 rounded-2xl border border-white/5 hover:border-accent-400/40 transition-all text-left flex flex-col justify-between"
          >
            <div>
              <div class="w-12 h-12 rounded-xl bg-accent-400/10 text-accent-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <iconify-icon icon="mdi:email-outline" width="26" height="26"></iconify-icon>
              </div>
              <div class="text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">Surat Elektronik</div>
              <h3 class="text-xl font-bold text-white group-hover:text-accent-400 transition-colors">Direct Email</h3>
            </div>
            <p class="text-sm text-gray-300 font-mono mt-6 break-all">satyavpandega@gmail.com</p>
          </a>

          <!-- Card 2: GitHub -->
          <a 
            href="https://github.com/Satyasy" 
            target="_blank" 
            rel="noopener"
            class="group bg-[#0d1221] hover:bg-[#121a30] p-8 rounded-2xl border border-white/5 hover:border-accent-400/40 transition-all text-left flex flex-col justify-between"
          >
            <div>
              <div class="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <iconify-icon icon="mdi:github" width="26" height="26"></iconify-icon>
              </div>
              <div class="text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">Source Code</div>
              <h3 class="text-xl font-bold text-white group-hover:text-accent-400 transition-colors">GitHub Profile</h3>
            </div>
            <p class="text-sm text-gray-300 font-mono mt-6">github.com/Satyasy</p>
          </a>

          <!-- Card 3: Website -->
          <a 
            href="https://resatya.tech" 
            target="_blank" 
            rel="noopener"
            class="group bg-[#0d1221] hover:bg-[#121a30] p-8 rounded-2xl border border-white/5 hover:border-accent-400/40 transition-all text-left flex flex-col justify-between"
          >
            <div>
              <div class="w-12 h-12 rounded-xl bg-teal-400/10 text-teal-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <iconify-icon icon="mdi:web" width="26" height="26"></iconify-icon>
              </div>
              <div class="text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">Domain Portofolio</div>
              <h3 class="text-xl font-bold text-white group-hover:text-accent-400 transition-colors">resatya.tech</h3>
            </div>
            <p class="text-sm text-gray-300 font-mono mt-6">resatya.tech</p>
          </a>
        </div>

        <!-- Big CTA Button -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4" data-aos="fade-up" data-aos-delay="250">
          <a 
            href="mailto:satyavpandega@gmail.com" 
            class="px-10 py-4 bg-accent-400 hover:bg-accent-500 text-black font-semibold rounded-xl transition-all shadow-lg shadow-accent-400/20 inline-flex items-center gap-2 cursor-pointer"
          >
            <iconify-icon icon="mdi:send" width="20" height="20"></iconify-icon>
            <span>Kirim Pesan via Email</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/restyand1011/" 
            target="_blank" 
            rel="noopener"
            class="px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium rounded-xl transition-all inline-flex items-center gap-2"
          >
            <iconify-icon icon="mdi:linkedin" width="20" height="20" class="text-sky-400"></iconify-icon>
            <span>Terhubung di LinkedIn</span>
          </a>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="py-16 px-6 border-t border-white/5 bg-[#080c14]">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div class="flex items-center gap-2 mb-4">
              <span class="font-bold text-white">Revano Satya Pandega</span>
            </div>
            <p class="text-gray-400 text-sm leading-relaxed">
              Cloud Engineer &amp; DevOps Engineer based in Sidoarjo &amp; Banyuwangi, East Java, Indonesia.
            </p>
          </div>

          <div>
            <h4 class="font-semibold text-white mb-4">Keahlian</h4>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>Cloud Architecture (AWS)</li>
              <li>Infrastructure as Code (IaC)</li>
              <li>CI/CD Automation</li>
              <li>Container Orchestration</li>
              <li>Linux System Administration</li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-white mb-4">Tautan</h4>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li><a href="https://resatya.tech" target="_blank" rel="noopener" class="hover:text-accent-400 transition-colors">resatya.tech</a></li>
              <li><a href="https://github.com/Satyasy" target="_blank" rel="noopener" class="hover:text-accent-400 transition-colors">GitHub (@Satyasy)</a></li>
              <li><a href="https://www.linkedin.com/in/restyand1011/" target="_blank" rel="noopener" class="hover:text-accent-400 transition-colors">LinkedIn</a></li>
              <li><a href="mailto:satyavpandega@gmail.com" class="hover:text-accent-400 transition-colors">Email</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-white mb-4">Navigasi</h4>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li><a href="#about" class="hover:text-accent-400 transition-colors">About</a></li>
              <li><a href="#projects" class="hover:text-accent-400 transition-colors">Projects</a></li>
              <li><a href="#awards" class="hover:text-accent-400 transition-colors">Awards</a></li>
              <li><a href="#experience" class="hover:text-accent-400 transition-colors">Experience</a></li>
              <li><a href="#contact" class="hover:text-accent-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2026 Revano Satya Pandega. All rights reserved.</p>
          <p>Built with Vue 3 &amp; Tailwind CSS • Hosted on <a href="https://resatya.tech" target="_blank" rel="noopener" class="text-accent-400 hover:underline">resatya.tech</a></p>
        </div>
      </div>
    </footer>

    <!-- CERTIFICATE LIGHTBOX MODAL -->
    <div 
      v-if="selectedCert" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in-up"
      @click.self="closeCertModal"
    >
      <div class="relative max-w-4xl w-full bg-[#0d1221] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <button 
          @click="closeCertModal"
          class="absolute top-4 right-4 z-10 p-2.5 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors cursor-pointer"
          aria-label="Close"
        >
          <iconify-icon icon="mdi:close" width="22" height="22"></iconify-icon>
        </button>

        <div class="max-h-[70vh] overflow-auto bg-black/50 flex items-center justify-center p-4">
          <img 
            :src="selectedCert.image" 
            :alt="selectedCert.title" 
            class="max-h-[65vh] w-auto object-contain rounded-lg shadow-lg"
          />
        </div>

        <div class="p-6 border-t border-white/10">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full bg-accent-400/20 text-accent-400 text-xs font-mono">
              {{ selectedCert.badge }}
            </span>
            <span class="text-xs text-gray-400 font-mono">{{ selectedCert.issuer }}</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-2">{{ selectedCert.title }}</h3>
          <p class="text-sm text-gray-300 leading-relaxed">{{ selectedCert.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Import all certificate assets for bulletproof Vite bundling
import imgAws from './assets/page_8_img_1.png'
import imgJhic from './assets/page_6_img_2.png'
import imgLksSidoarjo from './assets/cert-lks-sidoarjo.jpg'
import imgLksAi from './assets/page_7_img_2.jpg'
import imgLksJatim from './assets/page_5_img_2.png'
import imgTraspac from './assets/page_5_img_1.png'
import imgBeefest from './assets/beefest-sdlc.png'

// Tech Stack for Running Marquee Banner
const techStack = [
  { name: 'AWS', icon: 'skill-icons:aws-light', category: 'Cloud Platform' },
  { name: 'Terraform', icon: 'skill-icons:terraform-light', category: 'IaC & Automation' },
  { name: 'Docker', icon: 'skill-icons:docker', category: 'Containerization' },
  { name: 'Kubernetes', icon: 'skill-icons:kubernetes', category: 'Orchestration' },
  { name: 'Linux SysAdmin', icon: 'skill-icons:linux-light', category: 'System Admin' },
  { name: 'GitHub Actions', icon: 'skill-icons:githubactions-light', category: 'CI/CD Pipeline' },
  { name: 'Prometheus', icon: 'skill-icons:prometheus', category: 'Monitoring' },
  { name: 'Grafana', icon: 'skill-icons:grafana-light', category: 'Observability' },
  { name: 'Python', icon: 'skill-icons:python-light', category: 'Backend & AI / RAG' },
  { name: 'Laravel', icon: 'skill-icons:laravel-light', category: 'PHP Framework' },
  { name: 'React', icon: 'skill-icons:react-light', category: 'Frontend Library' },
  { name: 'Next.js', icon: 'skill-icons:nextjs-light', category: 'Fullstack Framework' },
  { name: 'TypeScript', icon: 'skill-icons:typescript', category: 'Type-Safe JS' },
  { name: 'JavaScript', icon: 'skill-icons:javascript', category: 'Web & Runtime' },
  { name: 'PHP', icon: 'skill-icons:php-light', category: 'Server Scripting' },
  { name: 'Node.js', icon: 'skill-icons:nodejs-light', category: 'JS Runtime' },
  { name: 'Proxmox VE', icon: 'devicon:proxmox', category: 'Virtualization' },
  { name: 'Tailwind CSS', icon: 'skill-icons:tailwindcss-light', category: 'Utility CSS' },
  { name: 'PostgreSQL', icon: 'skill-icons:postgresql-light', category: 'Relational DB' },
  { name: 'MySQL', icon: 'skill-icons:mysql-light', category: 'Relational DB' },
  { name: 'Redis', icon: 'skill-icons:redis-light', category: 'In-Memory Cache' },
  { name: 'Bash / Shell', icon: 'skill-icons:bash-light', category: 'Automation' },
  { name: 'Git', icon: 'skill-icons:git', category: 'Version Control' },
]

// Scroll detection for navbar
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Certificate Lightbox State
const selectedCert = ref(null)

const openCertModal = (cert) => {
  selectedCert.value = cert
}

const closeCertModal = () => {
  selectedCert.value = null
}

// Awards Data
const awardsList = [
  {
    title: 'AWS Academy Graduate — Data Engineering',
    issuer: 'Amazon Web Services (AWS Academy) • 2024–2025',
    badge: 'AWS Credential',
    image: imgAws,
    description: 'Perancangan pipeline data cloud end-to-end (ETL/ELT), arsitektur data lake & data warehouse, ingestion real-time dan batch menggunakan AWS Glue, Amazon Redshift, Athena, dan S3.'
  },
  {
    title: 'Jagoan Hosting Infra Competition (JHIC)',
    issuer: 'Jagoan Hosting • 300 Tim Nasional',
    badge: 'Juara 1 Nasional',
    image: imgJhic,
    description: 'Lomba rebranding dan redesign web sekolah tingkat nasional yang diikuti oleh 300 tim dari seluruh Indonesia. Fokus pada infrastruktur web modern, skalabilitas, dan keandalan sistem.'
  },
  {
    title: 'LKS Cloud Computing Kab. Sidoarjo 2025',
    issuer: 'Pusat Prestasi Nasional • 2025',
    badge: 'Juara 1 Kabupaten',
    image: imgLksSidoarjo,
    description: 'Lomba Kompetensi Siswa bidang Cloud Computing dengan implementasi arsitektur cloud AWS multi-tier. Juara 1 mewakili kabupaten ke tingkat provinsi.'
  },
  {
    title: 'LKS Nasional Artificial Intelligence',
    issuer: 'Pusat Prestasi Nasional',
    badge: 'Juara 1 Nasional',
    image: imgLksAi,
    description: 'Kompetisi tingkat nasional dalam perancangan dan implementasi solusi Artificial Intelligence modern untuk memecahkan permasalahan nyata di masyarakat.'
  },
  {
    title: 'LKS Cloud Computing Tingkat Jawa Timur',
    issuer: 'Lomba Kompetensi Siswa • Provinsi Jatim',
    badge: 'Medallion for Excellence',
    image: imgLksJatim,
    description: 'Kompetisi tingkat provinsi Jawa Timur bidang Cloud Computing untuk implementasi Enterprise Cloud Infrastructure dengan AWS. Penghargaan atas standar kompetensi unggul.'
  },
  {
    title: 'Web/Mobile Development — Traspac',
    issuer: 'Traspac • Nasional',
    badge: 'Juara 2 Nasional',
    image: imgTraspac,
    description: 'Lomba development dan design platform digital kesehatan berbasis chatbot AI dengan arsitektur RAG (Retrieval-Augmented Generation) dan verifikasi medis ketat.'
  },
  {
    title: 'Beefest SDLC Competition',
    issuer: 'Beefest • Software Engineering',
    badge: 'Gold Medalist',
    image: imgBeefest,
    description: 'Penghargaan medali emas dalam kompetisi rekayasa siklus hidup pengembangan perangkat lunak (SDLC), clean architecture, dan otomatisasi deployment.'
  }
]

// Particles configuration
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
html {
  scroll-behavior: smooth;
}
</style>
