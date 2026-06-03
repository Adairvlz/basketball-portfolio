# 🏀 Basketball Portfolio - Adair Velásquez

¡Bienvenido al **Full-Stack Rookie Portfolio**! Este es un portafolio web personal interactivo inspirado en el baloncesto, diseñado para mostrar proyectos de desarrollo web, habilidades y decisiones técnicas bajo la metáfora de una ficha de jugador de la NBA y una alineación táctica (*Tech Lineup*).

---

## 💡 El Concepto Creativo (Game Plan)

El diseño y estructura del portafolio giran en torno a una analogía deportiva:
* **Ficha de Jugador (Player Card):** Se muestra el perfil del desarrollador como un jugador novato (*Rookie*) con un *Overall* de **87 (DEV)**, destacando estadísticas clave como React, REST APIs, Docker y Git.
* **Alineación Tecnológica (Tech Lineup):** Las tecnologías y áreas de especialización se organizan según las posiciones clásicas en la cancha:
  * **Point Guard (Base) ➔ Frontend:** React, Vite, JSX, HTML, CSS (controla la dinámica de juego y la interfaz de usuario).
  * **Shooting Guard (Escolta) ➔ JavaScript:** Async/Await, Fetch API, estados y eventos (aporta el dinamismo y la anotación lógica).
  * **Small Forward (Alero) ➔ Backend:** Laravel, Node.js, FastAPI (aporta versatilidad y conexión entre la defensa y el ataque).
  * **Power Forward (Ala-Pívot) ➔ Database:** PostgreSQL, SQL (provee soporte sólido y estructura al juego/datos).
  * **Center (Pívot) ➔ DevOps / Herramientas:** Docker, Docker Compose, Git (defiende el flujo y despliegue del juego).

---

## 🛠️ Tecnologías y Decisiones de Stack

* **Vite + React (SPA):** Permite una experiencia de usuario rápida y fluida mediante la construcción de componentes interactivos y reutilizables, ideal para aplicaciones de una sola página.
* **APIs REST:** Separación clara de responsabilidades entre el frontend y el backend, consumiendo datos mediante solicitudes asíncronas de manera estructurada.
* **Docker:** Para asegurar que los entornos de desarrollo, bases de datos y servidores corran de forma idéntica en cualquier máquina.
* **CSS Puro (Vanilla CSS):** Estilos personalizados de alto rendimiento para lograr la estética de tarjeta deportiva y transiciones fluidas sin depender de frameworks pesados.

---

## 🏆 Proyectos Destacados (Highlights)

El portafolio incluye detalles y enlaces de tres proyectos clave:

1. **🐍 Snake Coliseum** (React + Vite)
   * **Descripción:** Recreación moderna del clásico juego Snake con selección de dificultad, contador de puntuación, control de colisiones y manejo de estado.
   * **Stack:** React, Vite, JavaScript, CSS.
   * **Enlaces:** [Demo](https://snake-production-4d96.up.railway.app) | [Repositorio](https://github.com/Adairvlz/snake)

2. **🍀 Celtics Store** (Full-Stack App)
   * **Descripción:** Tienda en línea inspirada en los Boston Celtics. Cuenta con operaciones CRUD, reportes interactivos, consultas complejas a bases de datos y entorno dockerizado.
   * **Stack:** React, Laravel, PostgreSQL, Docker.
   * **Enlaces:** [Demo](https://adairvlz.github.io/proyecto2-bdd/#/productos) | [Repositorio](https://github.com/Adairvlz/proyecto2-bdd)

3. **🦅 AVISTAR Frontend** (Frontend Web App)
   * **Descripción:** Interfaz responsiva para una plataforma de hospedajes. Consume una API en FastAPI para realizar operaciones CRUD, filtros de búsqueda, ordenamiento y exportación de datos.
   * **Stack:** HTML5, CSS3, JavaScript Vanilla, Docker, Nginx.
   * **Enlaces:** [Demo](https://adairvlz.github.io/frontend-avistar/) | [Repositorio](https://github.com/Adairvlz/frontend-avistar)

---

## 📂 Estructura del Proyecto

El código fuente sigue una estructura limpia y modular:

```text
basketball-portfolio/
├── .dockerignore           # Archivos y carpetas excluidos del contexto de Docker
├── Dockerfile              # Configuración de construcción de Docker (multi-stage)
├── nginx.conf              # Configuración personalizada de Nginx para producción
├── index.html              # HTML base
├── package.json            # Configuración de Node y dependencias del proyecto
├── vite.config.js          # Configuración del empaquetador Vite
├── public/                 # Recursos públicos (iconos, imágenes)
└── src/
    ├── assets/             # Estilos y recursos multimedia
    ├── components/         # Componentes React
    │   ├── About.jsx       # Sección sobre mí ("Court Vision")
    │   ├── Contact.jsx     # Información de contacto ("Final Shot")
    │   ├── Hero.jsx        # Player card principal (tarjeta de jugador)
    │   ├── Navbar.jsx      # Barra de navegación
    │   ├── ProjectCard.jsx # Tarjeta de proyecto individual
    │   ├── Projects.jsx    # Grid de proyectos destacados
    │   ├── StackDecision.jsx # Explicación de arquitectura ("Game Plan")
    │   └── TechStack.jsx   # Alineación de posiciones tecnológicas
    ├── data/
    │   └── projects.js     # Datos estructurados de los proyectos
    ├── App.jsx             # Componente raíz de React
    ├── App.css             # Estilos de layouts y componentes
    ├── index.css           # Estilos base y variables CSS globales
    └── main.jsx            # Punto de entrada de React
```

---

## 🚀 Instalación y Ejecución Local

Para levantar este proyecto localmente de forma tradicional, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Adairvlz/portafolio.git
   cd portafolio/basketball-portfolio
   ```

2. **Instalar dependencias:**
   Asegúrate de tener [Node.js](https://nodejs.org/) instalado. Luego ejecuta:
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   Una vez que el servidor esté activo, abre tu navegador en la dirección local que indique Vite (típicamente `http://localhost:5173`).

4. **Construir para producción:**
   ```bash
   npm run build
   ```

---

## 🐳 Ejecución con Docker

El proyecto está configurado para ejecutarse en contenedores Docker mediante una construcción multi-etapa (*multi-stage*):
1. **Etapa de Compilación:** Utiliza `node:20-alpine` para instalar dependencias de desarrollo y compilar la aplicación React optimizada (`npm run build`).
2. **Etapa de Producción:** Utiliza `nginx:alpine` para servir la carpeta compilada (`/app/dist`) y aplica una configuración personalizada en `nginx.conf` para redireccionar rutas al `index.html` (necesario para SPA).

Para construir y levantar el contenedor en tu máquina:

1. **Construir la imagen de Docker:**
   ```bash
   docker build -t basketball-portfolio .
   ```

2. **Ejecutar el contenedor:**
   ```bash
   docker run -d -p 8080:80 --name portfolio-app basketball-portfolio
   ```
   *Esto mapea el puerto `80` del contenedor al puerto `8080` local. Accede a través de [http://localhost:8080](http://localhost:8080).*

3. **Detener el contenedor:**
   ```bash
   docker stop portfolio-app
   ```

4. **Eliminar el contenedor:**
   ```bash
   docker rm portfolio-app
   ```

---

## 📬 Contacto (Final Shot)

¿Interesado en trabajar juntos o conocer más sobre mi trayectoria?
* **Email:** [vcda03@gmail.com](mailto:vcda03@gmail.com)
* **GitHub:** [github.com/Adairvlz](https://github.com/Adairvlz)
