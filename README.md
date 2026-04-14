# 🏔️ Turismo Jujuy - Mi Primer Sitio Web Turístico

> Proyecto para la materia Programación Web

## 📌 ¿De qué trata este proyecto?

Este es un sitio web que hice para promocionar el turismo en la provincia de **Jujuy**. Muestra los destinos más lindos, agencias de viaje, precios, un blog con consejos y un formulario de contacto.

**Puedes verlo funcionando acá:** [https://turismojujuy.netlify.app](https://turismojujuy.netlify.app)

---

## 🛠️ ¿Qué herramientas usé?

| Herramienta | ¿Para qué? |
|-------------|-------------|
| **Visual Studio Code** | Editor de código |
| **Live Server** | Para ver los cambios en tiempo real |
| **HTML5** | Para la estructura de las páginas |
| **CSS3** | Para los colores, diseños y animaciones |
| **JavaScript** | Para el contador, el modo oscuro y los filtros |

---

## 📁 ¿Cómo organicé los archivos?

turismo-jujuy/
├── index.html # Página principal
├── agencias.html # Agencias de viaje
├── precios.html # Tabla de precios
├── blog.html # Blog de viajes
├── contacto.html # Formulario de contacto
├── css/
│ ├── styles.css # Estilos de todo el sitio
│ ├── dark-mode.css # Modo oscuro
│ └── ... # Más estilos por página
├── js/
│ ├── main.js # Cosas comunes (modo oscuro, menú)
│ └── ... # Más funciones por página
└── assets/
├── images/ # Fotos de destinos
├── media/ # Fotos del blog
└── videos/ # Video de fondo

---

## 🧩 ¿Qué tiene cada página?

### 1. Página Principal (`index.html`)

| Elemento | ¿Cómo lo hice? |
|----------|----------------|
| **Header con mega-menú** | Un menú que al pasar el mouse sobre "Destinos" muestra más opciones (Quebrada, Puna, Yungas) |
| **Hero con video** | Un video de fondo con un texto que aparece con animación |
| **Destinos destacados** | 3 tarjetas que se agrandan cuando pasas el mouse |
| **Contador animado** | Números que suben solos cuando llegas a esa sección |
| **Carrusel de testimonios** | Opiniones de viajeros que cambian con puntitos (solo CSS) |
| **Footer** | Formulario para newsletter, redes sociales y un mapa |

### 2. Agencias (`agencias.html`)

| Elemento | ¿Cómo lo hice? |
|----------|----------------|
| **Efecto flip** | Las tarjetas dan vuelta como si fueran un cubo y muestran teléfono y email |
| **Rating con estrellas** | Estrellitas que puedes clickear para calificar |
| **Filtros** | Botones para ver solo agencias de Aventura, Cultural o Lujo |

### 3. Precios (`precios.html`)

| Elemento | ¿Cómo lo hice? |
|----------|----------------|
| **Tabla responsiva** | En celular la tabla se ve como tarjetas |
| **Tooltips** | Pasar el mouse por los íconos ℹ️ y muestra información extra |
| **Efecto hover** | Las filas se resaltan cuando pasas el mouse |

### 4. Blog (`blog.html`)

| Elemento | ¿Cómo lo hice? |
|----------|----------------|
| **Diseño tipo revista** | Los artículos se ordenan en 3 columnas |
| **Filtros por tags** | Botones para ver solo Aventura, Cultura, Gastronomía, etc. |
| **Comentarios** | Avatares hechos con CSS (sin imágenes) |
| **Scroll Reveal** | Los artículos aparecen suavemente cuando haces scroll |

### 5. Contacto (`contacto.html`)

| Elemento | ¿Cómo lo hice? |
|----------|----------------|
| **Validación** | Los campos se ponen verdes o rojos mientras escribes |
| **Spinner** | Un círculo que gira mientras se "envía" el formulario |
| **Modal** | Una ventanita que dice "¡Gracias!" después de enviar |

---

## ✨ Cosas avanzadas que aprendí a hacer

| Técnica | ¿Qué hace? |
|---------|-------------|
| **Variables CSS** | Definí colores una sola vez y los reutilicé en todo el sitio |
| **Modo oscuro** | Un botón que cambia todos los colores a oscuro |
| **Micro-interacciones** | Los botones se mueven un poquito cuando pasas el mouse |
| **Animaciones con keyframes** | El contador, el spinner y las estrellas tienen movimiento |
| **Accesibilidad** | Usé `aria-label` para que lectores de pantalla entiendan el contenido |

---

## ♿ Accesibilidad (para que todos puedan usarlo)

| Práctica | ¿Qué hice? |
|----------|-------------|
| Contraste | Usé colores que se ven bien incluso para personas con dificultades visuales |
| Focus visible | Cuando navegas con el teclado, se ve un borde alrededor del elemento seleccionado |
| ARIA labels | Agregué descripciones para los botones del menú y el modo oscuro |

---
# Técnicas Avanzadas a Implementar

## CSS Avanzado

- Uso de **Custom Properties** (Variables CSS) para definir colores y temas.
- **Clip-path & Masking** para imágenes con formas creativas.
- **Scroll Snap** para secciones que encajan perfectamente.
- **Modo Oscuro (Dark Mode)** con CSS Variables y mínimo uso de JavaScript.

## Animaciones y Efectos

- **Micro-interacciones** en botones, enlaces y tarjetas.
- **Transiciones SVG** en logo e iconos.
- **Keyframes** para animaciones avanzadas (contador, spinner, etc.).

## Accesibilidad

- **Contraste adecuado** (estándares AA/AAA).
- **Estados de focus visibles** para navegación con teclado.
- Uso de **ARIA labels** para elementos interactivos.

---
## Video de presentación

En el video muestro:

Cómo funciona el mega-menú

Las tarjetas con efecto flip

El contador animado

Los filtros de agencias y blog

El modo oscuro

La validación del formulario

# Entregables

Los alumnos deben entregar:

1. Código HTML y CSS bien estructurado.
2. Documentación técnica explicando decisiones de diseño y código.
3. **Demo publicada** en GitHub Pages o Netlify.
4. **Video de presentación** con las funcionalidades implementadas.

---

## Páginas de referencia

- [https://www.gymtop.com.ar/](https://www.gymtop.com.ar/)

## Autor
Abel Nestor Peñaloza - Estudiante de PySW 2026

