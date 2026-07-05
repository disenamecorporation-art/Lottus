import { ServiceCategory } from './types';

export const sliderImages = [
  { url: "https://i.postimg.cc/BvDf50F3/IMG-0515.avif", title: "Cejas" },
  { url: "https://i.postimg.cc/TPmvj6Dz/IMG-0518.avif", title: "Pestañas" },
  { url: "https://i.postimg.cc/7ZjyT6fK/IMG-0520.jpg", title: "Facial" },
  { url: "https://i.postimg.cc/pd8MQHjt/IMG-0702.avif", title: "Uñas" },
  { url: "https://i.postimg.cc/s2SCPrWf/IMG-0519.avif", title: "Laser" },
  { url: "https://i.postimg.cc/jjyBwhVy/IMG-0517.avif", title: "Masajes" },
];

export const galleryAlbums = [
  { category: "Uñas", cover: "https://i.postimg.cc/pd8MQHjt/IMG-0702.avif", images: ["https://i.postimg.cc/pd8MQHjt/IMG-0702.avif"] },
  { category: "Cejas", cover: "https://i.postimg.cc/BvDf50F3/IMG-0515.avif", images: ["https://i.postimg.cc/BvDf50F3/IMG-0515.avif"] },
  { category: "Pestañas", cover: "https://i.postimg.cc/TPmvj6Dz/IMG-0518.avif", images: ["https://i.postimg.cc/TPmvj6Dz/IMG-0518.avif"] },
  { category: "Epilación con cera", cover: "https://i.postimg.cc/jjyBwhVy/IMG-0517.avif", images: ["https://i.postimg.cc/jjyBwhVy/IMG-0517.avif"] },
  { category: "Depilación láser", cover: "https://i.postimg.cc/s2SCPrWf/IMG-0519.avif", images: ["https://i.postimg.cc/s2SCPrWf/IMG-0519.avif"] },
  { category: "Masajes", cover: "https://i.postimg.cc/jjyBwhVy/IMG-0517.avif", images: ["https://i.postimg.cc/jjyBwhVy/IMG-0517.avif"] },
  { category: "Faciales", cover: "https://i.postimg.cc/7ZjyT6fK/IMG-0520.jpg", images: ["https://i.postimg.cc/7ZjyT6fK/IMG-0520.jpg"] },
  { category: "Maquillaje profesional", cover: "https://i.postimg.cc/7ZjyT6fK/IMG-0520.jpg", images: ["https://i.postimg.cc/7ZjyT6fK/IMG-0520.jpg"] },
];

export const servicesData: ServiceCategory[] = [
  {
    category: "Uñas",
    services: [
      { name: "Manicure Completo" },
      { name: "Esmalte Semipermanente Simple" },
      { name: "Semipermanente Premium" },
      { name: "Kapping" },
      { name: "Uñas Esculpidas" },
      { name: "Soft Gel" },
      { name: "Pedicura con Esmaltado" },
      { name: "Esmaltado tradicional" },
      { name: "Retiro Esmalte Semipermanente" },
      { name: "Retiro de acrílico-Polygel-Building" },
      { name: "Reconstrucción de uña" },
    ]
  },
  {
    category: "Cejas",
    services: [
      { name: "Epilación con cera de cejas" },
      { name: "Epilación con cera y pigmento de cejas" },
      { name: "Laminado de Ceja" },
      { name: "Microblading (2 sesiones)" },
    ]
  },
  {
    category: "Pestañas",
    services: [
      { name: "Lifting de Pestañas" },
      { name: "Extensión de Pestañas Clásicas" },
      { name: "Extensión de Pestañas Rimel" },
      { name: "Extensión de Pestañas 2D U" },
      { name: "Extensión de Pestañas 2D Y Hawaino" },
      { name: "Extensión de Pestañas 4D Egipcio" },
      { name: "Extensión de Pestañas 6D Griego" },
      { name: "Extensión de Pestañas Híbridas" },
      { name: "Extensión de Pestañas Foxy" },
      { name: "Extensión de Pestañas Anime" },
      { name: "Extensión de Pestañas Under" },
    ]
  },
  {
    category: "Epilación con cera",
    services: [
      { name: "Axilas" },
      { name: "Media pierna" },
      { name: "Pierna completa" },
      { name: "Bozo" },
      { name: "Mentón" },
      { name: "Patillas" },
    ]
  },
  {
    category: "Depilación láser",
    services: [
      { name: "Depilación Laser Axilas" },
      { name: "Depilación Laser Bikini + Axila" },
      { name: "Depilación Laser Brasilero + Axila" },
      { name: "Depilación Laser Brasilero + Media Pierna" },
      { name: "Depilación Laser Brasilero + Pierna Completa" },
      { name: "Depilación Laser Pierna completa + Bikini + Axila" },
      { name: "Depilación láser pierna completa" },
    ]
  },
  {
    category: "Masajes",
    services: [
      { name: "Masajes relajantes y terapéuticos" },
      { name: "Masajes reductores y linfáticos" },
      { name: "Paquete de 10 masajes" },
    ]
  },
  {
    category: "Faciales",
    services: [
      { name: "Limpieza facial" },
    ]
  },
  {
    category: "Maquillaje profesional",
    services: [
      { name: "Maquillaje Express" },
      { name: "Maquillaje Social" },
      { name: "Maquillaje de Novia" },
      { name: "Maquillaje Quinceañera" },
    ]
  }
];

