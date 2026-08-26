# Historial de cambios

Todas las novedades y cambios notables en este proyecto se documentarán en este archivo.

## [1.2.0]

### Añadido
- Sección de «Actualizaciones automáticas» en el panel de configuración con tres modos:
  - **Comprobar y abrir actualización**: comprueba periódicamente la fuente de actualización confiable en segundo plano y abre la página de actualización cuando se encuentra una versión más reciente
  - **Notificarme sobre actualizaciones**: comprueba periódicamente y muestra solo una notificación
  - **Desactivar comprobación de actualizaciones**: el script nunca comprueba por sí mismo
- Botón manual «Buscar actualizaciones», mostrado junto a la versión actual del script (leída desde los metadatos del propio userscript)
- Texto explicativo que aclara que la actualización automática nativa de Tampermonkey/Violentmonkey es un mecanismo independiente no controlado por esta configuración
- Sistema de efectos de sonido (SFX) basado en la API nativa Web Audio, sin archivos de audio ni librerías externas:
  - Interruptor global de activación/desactivación y control de volumen principal
  - 13 categorías de sonido independientes (clics de botones, traducción, copiar, reintentar, panel, pestañas, configuración, interruptores, caché, historial, importar/exportar, modos, traducción automática)
  - Sonidos cortos distintos para diferentes acciones y un botón de «Probar sonido»
  - Totalmente independiente de la funcionalidad de texto a voz (TTS)
  - Tiempos de espera (cooldowns) por evento para evitar el spam de sonido, incluso durante la traducción automática/por lotes
- Iconos de banderas SVG reales e independientes para cada idioma compatible en los selectores de idioma de interfaz e idioma de traducción, reemplazando las banderas emoji de Unicode. Los iconos están integrados directamente en el script; no se descarga nada a través de la red para mostrarlos
- Sonidos de clic distintos para el botón «Importar» y el botón «Probar» de DeepL

### Cambiado
- La comparación de versiones para la búsqueda de actualizaciones utiliza una comparación numérica adecuada de versiones semánticas (no una comparación de cadenas)

### Seguridad
- Las claves API de DeepL están excluidas de los archivos de configuración exportados
- Importar un archivo de configuración ya no sobrescribe las claves API almacenadas localmente; las claves solo se pueden cambiar a través del campo dedicado «Claves API de DeepL»
- La configuración importada se valida campo por campo antes de aplicarse (códigos de idioma, tema, motor, rangos numéricos, configuración de sonido, modo de actualización); los valores no válidos o no reconocidos se ignoran y se reemplazan con valores predeterminados existentes/seguros en lugar de aceptarse
- La fuente de actualización confiable es un valor fijo en el script y no se puede configurar a través de la configuración importada
- Las comprobaciones de actualización solo leen un número de versión del texto del script obtenido; no se ejecuta código descargado en ningún momento

### Corregido
- Diseño responsivo para la sección Actualizaciones automáticas, de modo que las etiquetas localizadas más largas se envuelvan en lugar de desbordar el panel de configuración

## [1.0.10]

### Añadido
- 5 nuevos idiomas de interfaz: italiano, portugués, coreano, vietnamita, árabe — la interfaz ahora admite 15 idiomas en total, con cada etiqueta, botón, tooltip y sección (incluidos DeepL y límites de solicitudes) totalmente traducidos
- El idioma de la interfaz ahora se detecta automáticamente a partir de la configuración regional del navegador/sistema en la primera instalación

### Cambiado
- Metadatos de autor y repositorio actualizados para reflejar al mantenedor actual
- Las secciones de Claves API de DeepL y Límites de solicitudes ahora están completamente localizadas en todos los idiomas de interfaz admitidos (anteriormente se mostraban en inglés independientemente del idioma seleccionado)
- El deslizador de retraso de solicitud ahora muestra su unidad de tiempo en el idioma correcto (p. ej. `ms`, `мс`, `毫秒`)
- Los selectores de color personalizados ahora actualizan correctamente sus valores al cambiar de tema

### Eliminado
- Tema claro (los temas Oscuro, Cyberpunk y Dracula siguen disponibles)
- Selector de color de texto (solo afectaba a una parte del texto de la interfaz de usuario, lo que resultaba engañoso)
- Texto a voz (TTS) — eliminado porque no funcionaba correctamente

### Corregido
- El enlace de ayuda de DeepL apuntaba anteriormente a `api-free.deepl.com`; ahora apunta correctamente a `deepl.com/pro-api`
- El texto del botón «Guardar claves de DeepL» se truncaba en 6 idiomas de interfaz (ruso, ucraniano, alemán, francés, español, turco); etiquetas acortadas para adaptarse a todos los tamaños de pantalla
- Cambiar de tema ya no deja colores personalizados obsoletos aplicados sobre el nuevo tema

[Ver lanzamiento](https://github.com/ebayybe/reddit-translator/releases#release-v1.0.10)

## [1.0.9]

Contribución de [Dylan-ZQL](https://github.com/Dylan-ZQL). Verificado comparando los archivos fuente v1.0.0 y v1.0.9.

### Añadido
- Motor de traducción DeepL, junto con los motores de Google y MyMemory existentes
  - Soporte para múltiples claves API de DeepL con rotación automática y alternativa si falla una clave
  - Detección automática de puntos finales API Free vs. Pro
  - El texto largo se divide en fragmentos del tamaño de una solicitud antes de la traducción
  - Límites de solicitud configurables: máximo de solicitudes concurrentes, máximo de solicitudes por segundo, máximo de caracteres por solicitud, máximo de párrafos por solicitud
- Traducción automática al desplazarse: un `IntersectionObserver` adicional traduce automáticamente el contenido a medida que entra en la ventana gráfica, independientemente del observador de inyección diferida de botones existente
- Botón de alternancia «Mostrar original / Mostrar traducción», que permite alternar toda la página entre texto original y traducido
- Prefijo de clave de almacenamiento (`_x9_`) aplicado a cada configuración almacenada para evitar colisiones con otros userscripts
- Funciones auxiliares básicas de escape HTML y análisis JSON seguro utilizadas en todo el código de traducción/solicitud

### Cambiado
- Se reescribió la cola de solicitudes de traducción: se reemplazó la cadena previa de retraso fijo por una cola que respeta la concurrencia configurable y los límites de tasa por segundo
- Rediseño del botón de acción flotante: se reemplazó el botón etiquetado «TRANSLATE ALL», la barra de progreso y el botón de cancelación con un solo botón de icono compacto que traduce el contenido visible al hacer clic y abre el panel de configuración al hacer doble clic
- La reproducción de texto a voz ahora tiene estado: hacer clic nuevamente en «hablar» en el mismo texto detiene la reproducción, el botón activo se destaca visualmente y se eliminó el límite previo de truncamiento a 500 caracteres

### Eliminado
- El atajo de teclado «Traducir todo» (`Ctrl+Shift+T`) y su configuración en el panel — la traducción del contenido visible ahora la maneja el botón flotante rediseñado descrito anteriormente

- [Ver lanzamiento](https://github.com/ebayybe/reddit-translator/releases#release-v1.0.9)

## [1.0.0]

### Añadido
- Lanzamiento público inicial

[Ver lanzamiento](https://github.com/ebayybe/reddit-translator/releases#release-v1.0.0)
