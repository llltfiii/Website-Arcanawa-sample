export interface Project {
  id: number;
  title: string;
  category: 'residential' | 'commercial' | 'interior' | 'public';
  location: string;
  year: number;
  area: string;
  description: string;
  concept: string;
  mainImage: string;
  images: string[];
  client?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Modern Urban Villa',
    category: 'residential',
    location: 'Jakarta Selatan',
    year: 2023,
    area: '450 m²',
    description:
      'Villa modern dengan desain minimalis yang menggabungkan elemen natural dan urban lifestyle. Menghadirkan ruang terbuka yang luas dengan integrasi indoor-outdoor living.',
    concept:
      'Konsep desain mengutamakan pencahayaan alami dan ventilasi silang untuk menciptakan kenyamanan termal. Material natural seperti kayu dan batu dipadukan dengan elemen modern untuk menciptakan keseimbangan yang harmonis.',
    mainImage:
      'https://images.unsplash.com/photo-1768223933860-6d62bc5b2ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwbHV4dXJ5fGVufDF8fHx8MTc3MDU3NTUwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1760888625668-8f9690b6759f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2aWxsYSUyMHJlc2lkZW50aWFsJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MDU3NTYwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1763462920109-f94338357477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMHJlc2lkZW50aWFsJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzcwNTc1NjA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1690489965043-ec15758cce71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcwNTM4OTU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    client: 'Private Client',
  },
  {
    id: 2,
    title: 'Contemporary Residence',
    category: 'residential',
    location: 'Bandung',
    year: 2024,
    area: '380 m²',
    description:
      'Hunian kontemporer dengan pendekatan desain yang mengutamakan efisiensi ruang dan kenyamanan. Fasad dinamis dengan permainan volume dan material.',
    concept:
      'Desain mengadopsi prinsip sustainable architecture dengan penggunaan material lokal dan sistem energy-efficient. Layout terbuka menciptakan konektivitas visual antar ruang.',
    mainImage:
      'https://images.unsplash.com/photo-1611272267060-82338bad4112?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjByZXNpZGVudGlhbCUyMGhvdXNlJTIwZGVzaWdufGVufDF8fHx8MTc3MDU3NTUwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1760888625668-8f9690b6759f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2aWxsYSUyMHJlc2lkZW50aWFsJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MDU3NTYwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1763462920109-f94338357477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMHJlc2lkZW50aWFsJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzcwNTc1NjA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    client: 'Keluarga Wijaya',
  },
  {
    id: 3,
    title: 'Luxury Interior Design',
    category: 'interior',
    location: 'Surabaya',
    year: 2023,
    area: '280 m²',
    description:
      'Desain interior mewah dengan konsep modern classic. Perpaduan furniture custom dan material premium menciptakan suasana elegan dan nyaman.',
    concept:
      'Interior design yang mengutamakan kualitas material dan detail finishing. Pallet warna netral dengan aksen warm tones menciptakan atmosfer yang sophisticated namun welcoming.',
    mainImage:
      'https://images.unsplash.com/photo-1638885930125-85350348d266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGFyY2hpdGVjdHVyZSUyMG1vZGVybnxlbnwxfHx8fDE3NzA1NzU1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1690489965043-ec15758cce71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcwNTM4OTU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1638885930125-85350348d266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGFyY2hpdGVjdHVyZSUyMG1vZGVybnxlbnwxfHx8fDE3NzA1NzU1MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    client: 'PT Premium Properties',
  },
  {
    id: 4,
    title: 'Commercial Complex',
    category: 'commercial',
    location: 'Jakarta Pusat',
    year: 2024,
    area: '1200 m²',
    description:
      'Kompleks komersial modern dengan konsep mixed-use development. Integrasi retail, office, dan public space dalam satu kawasan.',
    concept:
      'Desain mengutamakan aksesibilitas dan aktivasi ruang publik. Fasad dinamis dengan sistem curtain wall dan material composite menciptakan identitas visual yang kuat.',
    mainImage:
      'https://images.unsplash.com/photo-1766866771433-c3042a3ce7a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmUlMjBmYWNhZGV8ZW58MXx8fHwxNzcwNTc1NTA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1716827172024-f63110d8e0f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwb2ZmaWNlJTIwYnVpbGRpbmclMjBtb2Rlcm58ZW58MXx8fHwxNzcwNTc1NjAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1717903781891-de75baaa2de6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG1hbGwlMjBjb21tZXJjaWFsJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwNTc1NjA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    client: 'PT Maju Sejahtera',
  },
  {
    id: 5,
    title: 'Minimalist Architecture',
    category: 'residential',
    location: 'Bali',
    year: 2023,
    area: '320 m²',
    description:
      'Arsitektur minimalis dengan filosofi less is more. Clean lines dan material monokromatik menciptakan kesan yang tenang dan sophisticated.',
    concept:
      'Konsep desain menekankan pada kesederhanaan form dan kejujuran material. Void dan solid space dikomposisikan untuk menciptakan permainan cahaya dan bayangan yang dramatis.',
    mainImage:
      'https://images.unsplash.com/photo-1643193855567-df3430740538?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwZGVzaWduJTIwY29udGVtcG9yYXJ5fGVufDF8fHx8MTc3MDU3NTUwOXww&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1763462920109-f94338357477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMHJlc2lkZW50aWFsJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzcwNTc1NjA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1690489965043-ec15758cce71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcwNTM4OTU2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    client: 'Private Client',
  },
  {
    id: 6,
    title: 'Public Building Innovation',
    category: 'public',
    location: 'Yogyakarta',
    year: 2024,
    area: '2500 m²',
    description:
      'Bangunan publik dengan pendekatan inovatif dalam menciptakan ruang komunal yang inklusif dan sustainable.',
    concept:
      'Desain mengintegrasikan teknologi green building dan konsep bioclimatic architecture. Ruang publik yang fleksibel mendorong interaksi sosial dan aktivitas komunitas.',
    mainImage:
      'https://images.unsplash.com/photo-1769854488175-1f58938baacf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdWJsaWMlMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZSUyMGNvbnRlbXBvcmFyeXxlbnwxfHx8fDE3NzA1NzU2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      'https://images.unsplash.com/photo-1716827172024-f63110d8e0f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwb2ZmaWNlJTIwYnVpbGRpbmclMjBtb2Rlcm58ZW58MXx8fHwxNzcwNTc1NjAzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1766866771433-c3042a3ce7a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBhcmNoaXRlY3R1cmUlMjBmYWNhZGV8ZW58MXx8fHwxNzcwNTc1NTA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    client: 'Pemerintah Kota Yogyakarta',
  },
];
