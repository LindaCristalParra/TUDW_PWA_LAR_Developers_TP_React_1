# Blockbuster Tracker - Gestor de Películas y Series

Este proyecto es una aplicación web desarrollada en React para la cátedra de **Programación Web Avanzada**. Funciona como un gestor personal de entretenimiento, permitiendo a los usuarios organizar, filtrar y administrar su catálogo de películas y series con una estética retro inspirada en los clásicos videoclubes.

## Equipo de Desarrollo (Grupo 12)
* **Linda Cristal Parra Sambueza FAI-5568**: Project Manager / Scrum Master
* **Ramiro Rafael Navarrete FAI-5522**: Developer
* **Andrea Crespillo FAI-5546**: Developer

**Profesores:** Guillermo Chiarotto y Lucas Margni.

##  Descripción Básica
La aplicación permite a los usuarios llevar un control detallado de su contenido audiovisual. Entre sus funcionalidades principales se destacan:
* Agregar películas o series especificando título, director, año, género y rating.
* Dividir el contenido en dos listas dinámicas: "Por ver" y "Vistas".
* Editar y eliminar ítems (con confirmación de seguridad).
* Filtrar el catálogo por género o tipo, y ordenarlo por año o rating.
* Búsqueda en tiempo real por título o director.
* Persistencia de datos locales utilizando `localStorage` para no perder la información al recargar la página.

## Archivos Iniciales y su Función
Para comprender la estructura base del proyecto, detallamos los archivos principales:
* **`package.json`**: Es el corazón del proyecto de Node. Define las dependencias (como React y Vite), los scripts de ejecución y la metadata de la aplicación.
* **`index.js` (o `main.jsx` en Vite)**: Es el punto de entrada de la aplicación. Se encarga de tomar el componente raíz y renderizarlo en el DOM del navegador (dentro del `div` con id `root`).
* **`App.js` (o `App.jsx`)**: Es el componente principal (raíz) que envuelve a toda la aplicación. Aquí es donde comenzaremos a importar y organizar nuestros componentes reutilizables (como el header, las listas y los formularios).
* **`index.css`**: Contiene los estilos globales de la aplicación, como reseteos de márgenes, tipografías base y variables de color (como nuestro azul Blockbuster).

## Instalación y Uso
1. Clonar el repositorio.
2. Abrir la terminal en la carpeta raíz del proyecto.
3. Ejecutar el comando `npm install` para instalar todas las dependencias.
4. Ejecutar el comando `npm run dev` para levantar el servidor local.
