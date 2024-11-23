const inversores = [
    {
      id: 1,
      nombre: 'Juan Pérez',
      email: 'juan@example.com',
      descripcion: 'Inversor con más de 10 años de experiencia en startups tecnológicas y de innovación.',
      experienciaMentor: 'Mentor calificado con 10 años de experiencia en asesoría de startups en Energías Renovables, Transporte y Logística.',
      categorias: [
        {
          nombre: 'Tecnología',
          intereses: 'Interesado en startups que desarrollen soluciones disruptivas en inteligencia artificial y aprendizaje automático.',
        },
        {
          nombre: 'Energías Renovables',
          intereses: 'Buscando proyectos que impulsen la sostenibilidad y la eficiencia energética.',
        },
      ],
      areasEspecializacion: [
        { nombre: 'Tecnología de Ecosistemas', calificacion: 5 },
        { nombre: 'Innovación', calificacion: 4 },
        { nombre: 'Clean Tech', calificacion: 5 },
        { nombre: 'Marketing', calificacion: 3 },
        { nombre: 'Agricultura Inteligente', calificacion: 4 },
        { nombre: 'Gestión Financiera', calificacion: 5 },
      ],
      metodosAsesoria: ['Chat directos', 'Revisión de documentos', 'Reuniones virtuales', 'Mentoría práctica'],
    },
    {
      id: 2,
      nombre: 'María Gómez',
      email: 'maria@example.com',
      descripcion: 'Mentora y asesora en el sector de salud y bienestar con un enfoque en innovación médica.',
      experienciaMentor: 'Ha ayudado a más de 50 startups en el sector salud a escalar y obtener financiamiento.',
      categorias: [
        {
          nombre: 'Salud',
          intereses: 'Apoya iniciativas que mejoren el acceso a servicios de salud y tecnologías médicas avanzadas.',
        },
        {
          nombre: 'Bienestar',
          intereses: 'Interesada en empresas que promuevan estilos de vida saludables y el bienestar mental.',
        },
      ],
      areasEspecializacion: [
        { nombre: 'Tecnología Médica', calificacion: 5 },
        { nombre: 'Innovación en Salud', calificacion: 5 },
        { nombre: 'Marketing Digital', calificacion: 4 },
        { nombre: 'Desarrollo de Negocios', calificacion: 4 },
        { nombre: 'Gestión de Proyectos', calificacion: 5 },
        { nombre: 'Estrategia Empresarial', calificacion: 5 },
      ],
      metodosAsesoria: ['Reuniones virtuales', 'Mentoría práctica'],
    },
    {
      id: 3,
      nombre: 'Carlos López',
      email: 'carlos@example.com',
      descripcion: 'Emprendedor serial e inversor en el sector agroindustrial y de alimentos.',
      experienciaMentor: 'Especialista en agricultura inteligente y cadenas de suministro sostenibles.',
      categorias: [
        {
          nombre: 'Agroindustria',
          intereses: 'Buscando innovaciones en agricultura sostenible y tecnologías de cultivo.',
        },
        {
          nombre: 'Alimentos',
          intereses: 'Interesado en startups que desarrollen productos alimenticios orgánicos y alternativas saludables.',
        },
      ],
      areasEspecializacion: [
        { nombre: 'Agricultura Inteligente', calificacion: 5 },
        { nombre: 'Sostenibilidad', calificacion: 5 },
        { nombre: 'Logística', calificacion: 4 },
        { nombre: 'Marketing', calificacion: 3 },
        { nombre: 'Innovación', calificacion: 4 },
        { nombre: 'Gestión Financiera', calificacion: 4 },
      ],
      metodosAsesoria: ['Chat directos', 'Reuniones virtuales'],
    },
    {
      id: 4,
      nombre: 'Laura Martínez',
      email: 'laura@example.com',
      descripcion: 'Inversora enfocada en startups de tecnología financiera y blockchain.',
      experienciaMentor: 'Ha participado en múltiples rondas de financiación y asesorado a startups en FinTech.',
      categorias: [
        {
          nombre: 'FinTech',
          intereses: 'Interesada en soluciones innovadoras para pagos, préstamos y criptomonedas.',
        },
        {
          nombre: 'Blockchain',
          intereses: 'Apoya proyectos que utilizan blockchain para mejorar la transparencia y eficiencia.',
        },
      ],
      areasEspecializacion: [
        { nombre: 'Tecnología Financiera', calificacion: 5 },
        { nombre: 'Blockchain', calificacion: 5 },
        { nombre: 'Estrategia de Mercado', calificacion: 4 },
        { nombre: 'Regulaciones Financieras', calificacion: 4 },
        { nombre: 'Análisis de Datos', calificacion: 5 },
        { nombre: 'Gestión de Riesgos', calificacion: 5 },
      ],
      metodosAsesoria: ['Revisión de documentos', 'Reuniones virtuales', 'Mentoría práctica'],
    },
    {
      id: 5,
      nombre: 'Diego Rivera',
      email: 'diego@example.com',
      descripcion: 'Mentor y consultor en el sector de energías renovables y tecnologías limpias.',
      experienciaMentor: 'Ha colaborado con startups para implementar soluciones de energía solar y eólica.',
      categorias: [
        {
          nombre: 'Energías Renovables',
          intereses: 'Busca proyectos que contribuyan a reducir la huella de carbono y promover la sostenibilidad.',
        },
        {
          nombre: 'Tecnologías Limpias',
          intereses: 'Interesado en innovaciones que mejoren la eficiencia energética y reduzcan el desperdicio.',
        },
      ],
      areasEspecializacion: [
        { nombre: 'Energía Solar', calificacion: 5 },
        { nombre: 'Energía Eólica', calificacion: 4 },
        { nombre: 'Sostenibilidad', calificacion: 5 },
        { nombre: 'Gestión de Proyectos', calificacion: 4 },
        { nombre: 'Innovación', calificacion: 5 },
        { nombre: 'Financiamiento de Proyectos', calificacion: 4 },
      ],
      metodosAsesoria: ['Chat directos', 'Reuniones virtuales', 'Mentoría práctica'],
    },
  ];
  
  export default inversores;
  