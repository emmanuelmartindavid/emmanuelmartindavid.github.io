const languages = {
  en: {
    subtitle: 'Automation Engineer / Backend Developer',
    location: 'Buenos Aires, Argentina',
    about: `Automation Engineer and Backend Developer with 2+ years of experience in high-availability environments. Currently building backend applications with PHP (CodeIgniter) at Interplan S.A., working with MySQL databases, APIs, and Git-based team workflows, while leveraging AI agents and CLI tools such as Opencode and Claude for scripting, automation, and rapid prototyping. Previously at Banco de la Naci\u00f3n Argentina, designed an automation ecosystem in Python and PowerShell that reduced manual processes by 80%, and orchestrated the migration of 500+ servers using Ansible and CI/CD pipelines. Expanding into Docker, AWS, and advanced DevOps practices.`,
    sections: {
      skills: 'skills',
      experience: 'experience',
      projects: 'projects',
    },
    experience: [
      {
        title: 'Automation Engineer / PHP Developer Jr.',
        company: 'Interplan S.A.',
        date: 'May 2026 \u2013 Present',
        bullets: [
          '<strong>Backend Development:</strong> Building and maintaining applications using PHP (CodeIgniter) with MVC architecture, integrating APIs and webhooks for automated workflows.',
          '<strong>AI-Assisted Development:</strong> Leveraging AI agents and CLI tools such as Opencode and Claude for script generation, debugging, automation tasks, and rapid prototyping of solutions.',
          '<strong>Data & Collaboration:</strong> MySQL database management, automated query resolution, and source code management with Git (branching, PRs, code review) in a team environment.',
        ],
      },
      {
        title: 'Infrastructure & Automation Analyst',
        company: 'Banco de la Naci\u00f3n Argentina',
        date: 'May 2024 \u2013 May 2026',
        bullets: [
          '<strong>Critical Infrastructure Modernization & Orchestration:</strong> Led the national migration of 500+ Windows Server 2008 servers to virtualized environments on Hyper-V / Windows Server 2019. Implemented Ansible as the primary orchestration tool, replacing manual deployments with automated playbooks integrated into CI/CD pipelines, achieving configuration standardization and reduced deployment lead times.',
          '<strong>Process Automation:</strong> Developed an automation ecosystem using Python and PowerShell for operational management, resulting in an 80% reduction in manual control times and elimination of manual Excel data entry.',
          '<strong>Observability & Asset Management:</strong> Designed an automated audit tool in PowerShell for mass hardware discovery, centralizing equipment data and automating Excel report generation, eliminating on-site manual surveys.',
          '<strong>Networking & Infrastructure:</strong> Managed network incidents across nationwide branches, administering critical services (DHCP and DNS) to ensure business continuity.',
        ],
      },
    ],
    projects: [
      {
        name: 'ansible-windows-migration',
        description: 'National migration of 500+ Windows Server 2008 to virtualized environments on Hyper-V / Windows Server 2019 using Ansible playbooks integrated into CI/CD pipelines.',
        url: 'https://github.com/emmanuelmartindavid/ansible-windows-migration',
      },
      {
        name: 'devSecOps_lab',
        description: 'DevSecOps laboratory environment with container scanning, CI/CD security integration, and infrastructure as code best practices.',
        url: 'https://github.com/emmanuelmartindavid/devSecOps_lab',
      },
      {
        name: 'Generador-borradores-Outlook',
        description: 'Dynamic workflow generation tool in Python for automated email draft creation, streamlining inter-branch communication.',
        url: 'https://github.com/emmanuelmartindavid/Generador-borradores-Outlook',
      },
      {
        name: 'Auditoria-Hardware-Sucursales',
        description: 'Automated hardware audit tool in PowerShell for mass equipment discovery across nationwide branches, centralizing data and generating Excel reports.',
        url: 'https://github.com/emmanuelmartindavid/Auditoria-Hardware-Sucursales',
      },
    ],
    footer: 'Built with Astro.',
    langLabel: 'ES',
    viewProject: 'View on GitHub',
  },
  es: {
    subtitle: 'Automation Engineer / Backend Developer',
    location: 'Buenos Aires, Argentina',
    about: `Automation Engineer y Backend Developer con 2+ a\u00f1os de experiencia en entornos de alta disponibilidad. Actualmente desarrollo aplicaciones backend con PHP (CodeIgniter) en Interplan S.A., trabajando con bases de datos MySQL, APIs y flujos de trabajo en equipo con Git, aprovechando agentes de AI y herramientas CLI como Opencode y Claude para scripting, automatizaciones y prototipado r\u00e1pido. Previamente en Banco de la Naci\u00f3n Argentina, dise\u00f1\u00e9 un ecosistema de automatizaci\u00f3n en Python y PowerShell que redujo los procesos manuales en un 80%, y orquest\u00e9 la migraci\u00f3n de m\u00e1s de 500 servidores utilizando Ansible y pipelines CI/CD. Expandi\u00e9ndome hacia Docker, AWS y pr\u00e1cticas avanzadas de DevOps.`,
    sections: {
      skills: 'skills',
      experience: 'experiencia',
      projects: 'proyectos',
    },
    experience: [
      {
        title: 'Automation Engineer / Desarrollador PHP Jr.',
        company: 'Interplan S.A.',
        date: 'Mayo 2026 \u2013 Presente',
        bullets: [
          '<strong>Desarrollo Backend:</strong> Desarrollo y mantenimiento de aplicaciones con PHP (CodeIgniter) bajo arquitectura MVC, integrando APIs y webhooks para flujos de trabajo automatizados.',
          '<strong>Desarrollo Asistido por AI:</strong> Uso de agentes de AI y herramientas CLI como Opencode y Claude para generaci\u00f3n de scripts, debugging, tareas de automatizaci\u00f3n y prototipado r\u00e1pido de soluciones.',
          '<strong>Datos & Colaboraci\u00f3n:</strong> Gesti\u00f3n de bases de datos MySQL, resoluci\u00f3n automatizada de consultas y gesti\u00f3n de c\u00f3digo fuente con Git (ramas, PRs, code review) en equipo.',
        ],
      },
      {
        title: 'Analista de Infraestructura y Automatizaci\u00f3n',
        company: 'Banco de la Naci\u00f3n Argentina',
        date: 'Mayo 2024 \u2013 Mayo 2026',
        bullets: [
          '<strong>Modernizaci\u00f3n y Orquestaci\u00f3n de Infraestructura Cr\u00edtica:</strong> Lider\u00e9 la migraci\u00f3n nacional de m\u00e1s de 500 servidores Windows Server 2008 a entornos virtualizados en Hyper-V / Windows Server 2019. Implement\u00e9 Ansible como herramienta principal de orquestaci\u00f3n, reemplazando despliegues manuales por playbooks automatizados integrados en pipelines CI/CD.',
          '<strong>Automatizaci\u00f3n de Procesos:</strong> Desarroll\u00e9 un ecosistema de automatizaci\u00f3n con Python y PowerShell para gesti\u00f3n operativa, logrando una reducci\u00f3n del 80% en tiempos de controles manuales y eliminaci\u00f3n de carga manual de datos en Excel.',
          '<strong>Observabilidad y Gesti\u00f3n de Activos:</strong> Dise\u00f1\u00e9 una herramienta de auditor\u00eda automatizada en PowerShell para relevamiento masivo de hardware, centralizando datos y generando reportes Excel autom\u00e1ticos, eliminando relevamientos presenciales.',
          '<strong>Networking e Infraestructura:</strong> Gestion\u00e9 incidencias de red en sucursales a nivel nacional, administrando servicios cr\u00edticos (DHCP y DNS) para asegurar la continuidad operativa.',
        ],
      },
    ],
    projects: [
      {
        name: 'ansible-windows-migration',
        description: 'Migraci\u00f3n nacional de m\u00e1s de 500 servidores Windows Server 2008 a entornos virtualizados en Hyper-V / Windows Server 2019 utilizando Ansible playbooks integrados en pipelines CI/CD.',
        url: 'https://github.com/emmanuelmartindavid/ansible-windows-migration',
      },
      {
        name: 'devSecOps_lab',
        description: 'Laboratorio DevSecOps con escaneo de contenedores, integraci\u00f3n de seguridad CI/CD y mejores pr\u00e1cticas de infrastructure as code.',
        url: 'https://github.com/emmanuelmartindavid/devSecOps_lab',
      },
      {
        name: 'Generador-borradores-Outlook',
        description: 'Herramienta de generaci\u00f3n din\u00e1mica de flujos de trabajo en Python para creaci\u00f3n automatizada de borradores de email, agilizando la comunicaci\u00f3n entre sucursales.',
        url: 'https://github.com/emmanuelmartindavid/Generador-borradores-Outlook',
      },
      {
        name: 'Auditoria-Hardware-Sucursales',
        description: 'Herramienta automatizada de auditor\u00eda de hardware en PowerShell para relevamiento masivo de equipos en sucursales a nivel nacional, centralizando datos y generando reportes Excel.',
        url: 'https://github.com/emmanuelmartindavid/Auditoria-Hardware-Sucursales',
      },
    ],
    footer: 'Construido con Astro.',
    langLabel: 'EN',
    viewProject: 'Ver en GitHub',
  },
} as const;

export type Lang = keyof typeof languages;
export default languages;
