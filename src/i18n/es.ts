export const es = {
  // Nav
  nav: {
    home: 'Inicio',
    technology: 'Tecnología',
    network: 'Red',
    contact: 'Contacto',
    getStarted: 'COMENZAR',
  },
  // Hero
  hero: {
    badge: 'Innovación de Excelencia 2024',
    title1: 'Inteligencia Hídrica para el',
    title2: 'Futuro del Campo.',
    subtitle:
      'Riego exacto basado en la necesidad real de la planta. Transformamos la agricultura de zonas áridas mediante tecnología digital y gestión algorítmica de precisión geométrica.',
    cta1: 'SOLICITAR AUDITORÍA',
    cta2: 'CONOCER EL EJE TULUM',
  },
  // Recognition
  recognition: {
    badge: 'Reconocimiento a la Innovación',
    title1: '2do Puesto',
    title2: 'Premio Provincial a la Innovación',
    title3: 'San Juan 2025',
    category: 'Categoría: Servicio Innovador',
    description:
      'Este es un gran reconocimiento otorgado por el Gobierno Provincial de San Juan, tras una rigurosa evaluación realizada por profesionales del rubro y expertos de la prestigiosa Facultad de Ingeniería de San Juan. Este galardón valida nuestro compromiso con la excelencia tecnológica y la eficiencia hídrica en la región.',
    ecosystem: 'Ecosistema Tulum Digital',
    altImage: 'Premio Provincial a la Innovación 2025',
  },
  // Impact
  impact: {
    title1: 'Del Riego Tradicional a la',
    title2: 'Rentabilidad Directa.',
    card1: {
      title: 'Optimización',
      desc: 'Cálculo de necesidad real basado en biometría exacta. Sensores de campo que leen el pulso hídrico del cultivo con precisión láser.',
      link: 'Ver Tecnología',
    },
    card2: {
      title: 'Sostenibilidad',
      desc: 'Uso responsable del recurso para futuras generaciones. Preservamos el acuífero mediante gestión algorítmica de última generación.',
      link: 'Reporte Impacto',
    },
    card3: {
      title: 'Productividad',
      desc: 'Maximización del rendimiento por hectárea y ahorro masivo de energía. Menos bombeo innecesario, mejores cosechas certificadas.',
      link: 'Casos Éxito',
    },
  },
  // Mission
  mission: {
    title1: 'Misión: Garantizar sostenibilidad basándose en',
    title2: 'datos reales.',
    quote:
      '"En zonas áridas, la estimación visual es un riesgo operativo. Pasar de la \'rutina fija\' a la \'precisión digital\' es la diferencia entre el desperdicio y la eficiencia de alto nivel."',
  },
  // Ecosystem
  ecosystem: {
    step1: {
      title: '1. Captura de Datos',
      desc: 'Nodos de baja latencia capturando biometría de suelo y atmósfera en tiempo real.',
    },
    step2: {
      title: '2. Procesamiento IA',
      desc: 'Motores algorítmicos procesando variables complejas para decisiones hídricas instantáneas.',
    },
    step3: {
      title: '3. Acción Directa',
      desc: 'Ejecución de riego milimétrico bajo demanda. Cero desperdicio, máximo rendimiento.',
    },
  },
  // Form
  form: {
    title1: 'Únete a la evolución',
    title2: 'hídrica.',
    subtitle:
      'Solicite un informe de viabilidad técnica detallado para su unidad productiva. Integre su campo al ecosistema digital Tulum Riego.',
    label1: 'Ubicación del Cultivo',
    placeholder1: 'EJ: SARMIENTO, SAN JUAN',
    label2: 'Hectáreas Totales',
    placeholder2: '00',
    submit: 'INICIAR DIAGNÓSTICO DIGITAL',
    impact: 'Ahorro Promedio Certificado Valle Tulum',
    impactFactor: 'Impact Factor',
  },
  // Footer
  footer: {
    privacy: 'Política de Privacidad',
    terms: 'Términos de Servicio',
    lab: 'Innovation Lab',
    copy: '© 2024 DIGITAL AQUIFER. TODOS LOS DERECHOS RESERVADOS.',
  },
} as const;

export type TranslationKey = typeof es;
