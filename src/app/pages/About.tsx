import { motion, useScroll, useTransform } from "motion/react";
import { Target, Eye, Award, Users } from "lucide-react";
import { useRef } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import heroImage from "../Assets/heroabout.png";
import studioImage from "../Assets/download (1).jpg";

/* ================= MAIN PAGE ================= */

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const values = [
    { icon: Target, title: "Inovasi", description: "Solusi desain kreatif dan inovatif" },
    { icon: Award, title: "Kualitas", description: "Standar kualitas tertinggi" },
    { icon: Eye, title: "Estetika", description: "Keindahan visual dan fungsionalitas" },
    { icon: Users, title: "Kolaborasi", description: "Kerja sama erat dengan klien" },
  ];

  return (
    <div className="overflow-x-hidden bg-white">

      {/* HERO */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden pt-[80px]">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={heroImage}
            alt="About"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold">Tentang Kami</h1>
        </motion.div>
      </section>

      {/* FILOSOFI */}
      <section ref={containerRef} className="py-20 px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              ARCANAWA is an interior, exterior designer and construction.
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              We work together in team to design, construction and produce work
              that we are proud of for folks that we believe in.
            </p>
          </motion.div>

          <motion.div
            style={{ y }}
            className="h-[300px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <ImageWithFallback
              src={studioImage}
              alt="Studio"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </section>

      {/* SEJARAH */}
      <HistorySection />

      {/* VALUES */}
      <section className="py-20 bg-muted/30 px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {values.map((v, i) => (
            <div key={i} className="text-center bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition">
              <v.icon className="mx-auto mb-4 text-primary" size={36} />
              <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ORG CHART */}
      <section className="py-24 px-4 bg-[#8b6f47] text-white">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Struktur Tim Proyek
          </h2>
        </div>

        <OrgChart />
      </section>

    </div>
  );
}

/* ================= SEJARAH ================= */

function HistorySection() {
  return (
    <section className="py-28 px-6 lg:px-12 bg-gradient-to-b from-white to-[#f8f5f0] relative overflow-hidden">

      {/* ORNAMEN */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-[300px] h-[300px] bg-[#c8a27a] rounded-full blur-3xl top-10 left-10" />
        <div className="absolute w-[250px] h-[250px] bg-[#8b6f47] rounded-full blur-3xl bottom-10 right-10" />
      </div>

      <div className="max-w-6xl mx-auto relative">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tentang ARCANAWA
          </h2>
        </motion.div>

        {/* GRID LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: STORY */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-muted-foreground leading-relaxed"
          >
            <p>
              Didirikan pada tahun 2019 sebagai <b>B Interior - B Arsitek</b>, 
              perusahaan ini berawal sebagai konsultan desain yang berfokus pada 
              interior, eksterior, dan konstruksi.
            </p>

            <p>
              Seiring berkembangnya pengalaman dalam menangani berbagai proyek—
              mulai dari hunian hingga bangunan komersial—perusahaan terus 
              beradaptasi untuk menjawab kebutuhan yang semakin kompleks.
            </p>

            <p>
              Transformasi menjadi 
              <span className="text-[#c8a27a] font-semibold"> ARCANAWA Interior - Arsitek </span>
              merupakan langkah strategis untuk memperkuat identitas sekaligus 
              memperluas skala profesionalitas dalam industri desain dan konstruksi.
            </p>

            <p>
              Kami percaya bahwa desain bukan hanya tentang estetika, tetapi juga 
              tentang bagaimana sebuah ruang mampu menyelesaikan masalah dan 
              meningkatkan kualitas pengalaman penggunanya.
            </p>
          </motion.div>

          {/* RIGHT: VALUE HIGHLIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid gap-6"
          >
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#c8a27a]">
              <h3 className="font-semibold mb-2">Design Approach</h3>
              <p className="text-sm text-muted-foreground">
                Menggabungkan estetika dan fungsi untuk menghasilkan solusi desain yang relevan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#c8a27a]">
              <h3 className="font-semibold mb-2">Problem Solving</h3>
              <p className="text-sm text-muted-foreground">
                Fokus pada penyelesaian kendala nyata dalam proyek, bukan hanya visual.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#c8a27a]">
              <h3 className="font-semibold mb-2">Project Experience</h3>
              <p className="text-sm text-muted-foreground">
                Berpengalaman dalam proyek rumah tinggal, café, kos, villa, guest house, apartemen, dan kantor.
              </p>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mt-20 max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed">
            ARCANAWA hadir sebagai mitra desain dan konstruksi yang tidak hanya 
            menciptakan ruang yang indah, tetapi juga memberikan solusi yang 
            tepat dan berkelanjutan bagi setiap klien.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

/* ================= ORG CHART ================= */

function OrgChart() {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-20">

      {/* TOP LEADERS */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-24">
        <GlassPerson name="ILHAM BAYU DWI P." roles={["Director", "Chief Designer"]} />
        <GlassPerson name="MIA NURILLA" roles={["Vice Director", "Designer"]} />
      </div>

      {/* FIELD EXECUTIVE */}
      <div className="w-full text-center">
        <SectionLabel text="Field Executive" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <GlassCard name="MUCH. AINUN NAJIB" role="Chief Interior Workshop" />
          <GlassCard name="DWI P. ABRIANTO" role="Civil Coordinator" />
          <GlassCard name="DWI P. ABRIANTO" role="Logistic" />
          <GlassCard name="PURWANTO" role="Field Coordinator" />
        </div>
      </div>

      {/* DESIGNER TEAM */}
      <div className="w-full text-center">
        <SectionLabel text="Designer Team" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <GlassCard name="MUH. LUTFI" role="Drafter" />
          <GlassCard name="MUCH. AINUN NAJIB" role="Drafter" />
          <GlassCard name="AKHMAD MUKH. RIFQI" role="Drafter" />
        </div>
      </div>

    </div>
  );
}

/* ================= COMPONENT ================= */

function GlassPerson({ name, roles }: any) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-2xl">
        👤
      </div>

      <div className="mt-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-center">
        <div className="text-[#e7c9a5] font-semibold">{name}</div>
        <div className="text-gray-300 text-sm mt-1">
          {roles.map((r: string, i: number) => (
            <div key={i}>{r}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GlassCard({ name, role }: any) {
  return (
    <div className="px-5 py-4 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-center hover:shadow-lg hover:-translate-y-1 transition">
      <div className="text-[#e7c9a5] font-medium">{name}</div>
      <div className="text-gray-300 text-sm italic">{role}</div>
    </div>
  );
}

function SectionLabel({ text }: any) {
  return (
    <div className="text-[#e7c9a5] text-sm md:text-base font-semibold tracking-widest uppercase">
      {text}
    </div>
  );
}