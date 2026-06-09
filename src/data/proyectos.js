import imgZiklo from '../assets/images/ZikloLaudio.jpg';
import imgRetro from '../assets/images/RetroDenda.jpg';
import imgMoney from '../assets/images/MoneyLink.jpg';
import imgSumi from '../assets/images/Sumi.jpg';



export const misProyectos = [
    {
        id: 4,
        titulo: "Store Sumi.chh - E-commerce Artesanal",
        descripcion: `Plataforma de comercio electrónico para la venta de accesorios artesanales, con un diseño limpio, moderno y panel de administración integrado. 
        
        Aspectos destacados:
        • Arquitectura Modular: Uso de JavaScript nativo (type="module") para componentes reutilizables (navegación, footer).🏗️
        • Experiencia de Usuario: Vistas completas para el cliente.🛒
        • Panel Admin Completo: Gestión centralizada de inventario.📊
        • Persistencia y Despliegue: Conexión con Backend en Flask/PostgreSQL (Render).🚀`,
        imagen: imgSumi,
        repo: "https://github.com/alvarezmarlen/my_personal_project",         
        demo: "https://store-sumi-frontend.onrender.com"
    },
    {
        id: 3,
        titulo: "MoneyLink - Gestión de Transferencias",
        descripcion: `Aplicación financiera diseñada para la administración de activos y envíos de dinero entre cuentas. 
        Implementé una lógica de validación rigurosa para asegurar transacciones seguras y un sistema de actualización de saldo en tiempo real. 
        
        Aspectos destacados:
        • Panel de control dinámico con registro de ingresos, gastos y ahorros. 📊
        • Formulario interactivo con validación de datos para transferencias. 💸
        • Arquitectura limpia utilizando HTML5, CSS3 y JavaScript Vanilla. 🏗️`,
        imagen: imgMoney,
        repo: "https://github.com/alvarezmarlen/MoneyLink", 
        demo: "https://moneylin.netlify.app/"
    },
    {
        id: 2,
        titulo: "RetroDenda - Tienda Vintage",
        descripcion: `Plataforma de e-commerce especializada en moda retro y sostenible. 
        Desarrollé una interfaz dinámica utilizando JavaScript para renderizar productos mediante Fetch API.  

        Características principales:
        • Carrusel de imágenes interactivo con temporizador automático. 🧱
        • Sistema de filtrado de productos y gestión de carrito con LocalStorage. 🛒
        • Diseño 100% responsive aplicando CSS Grid y Flexbox. 📱`,
        imagen: imgRetro,
        repo: "https://github.com/alvarezmarlen/Tiend_Vintage_Retrodenda", 
        demo: "https://retrodenda.netlify.app/"
    },
    {
        id: 1,
        titulo: "ZikloLaudio - Club de Ciclismo",
        descripcion: `Desarrollo de la interfaz principal de un sitio web corporativo para un club ciclista. 

        Aspectos destacados:   
        • Me encargué de la arquitectura del sitio,🗺️ 
        • Del sistema de navegación y el pie de página, logrando una interactividad fluida (como el carrusel de imágenes) utilizando únicamente HTML5 y CSS3 sin dependencias externas.`,
        imagen: imgZiklo,
        repo: "https://github.com/alvarezmarlen/CLUB-DE-CICLISMO-LAUDIO", 
        demo: "https://alvarezmarlen.github.io/CLUB-DE-CICLISMO-LAUDIO/"
    }
    
];