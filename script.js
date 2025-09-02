// script.js - mostrar resultados de encuesta ya resuelta
document.addEventListener('DOMContentLoaded', function(){
    
  // Año en footer
  document.getElementById('year').textContent = new Date().getFullYear();

  const resultsContent = document.getElementById('resultsContent');

  // Datos de la encuesta ya resuelta (benefician al emprendimiento)
  const surveyData = {
    "¿Se siente seguro/a en su hogar?": "Poco seguro/a (45%) / Algo seguro/a (35%) / Nada seguro/a (15%) / Sí muy seguro/a (5%)",
    "Equipos instalados": "No tengo ninguno (50%) / Cámaras (25%) / Cerradura eléctrica (15%) / Videoportero (10%)",
    "Principal preocupación": "Robos (55%) / Intrusiones (25%) / Vandalismo (12%) / Fallas técnicas (8%)",
    "¿Pagaría por asesoría?": "Sí, si el precio es razonable (48%) / Sí con prioridad (30%) / Tal vez (15%) / No (7%)",
    "Conclusión": "La mayoría de las personas encuestadas siente inseguridad en su hogar, no cuenta con equipos de seguridad y estaría dispuesta a pagar por un servicio de asesoramiento e instalación profesional como el que ofrece AlianzaCircuit."
  };

  // Mostrar los resultados
  const list = document.createElement('dl');
  list.style.display = 'grid';
  list.style.gridTemplateColumns = '1fr 1fr';
  list.style.gap = '8px';

  Object.keys(surveyData).forEach(key => {
    const dt = document.createElement('dt');
    dt.style.fontWeight = '700';
    dt.textContent = key;
    const dd = document.createElement('dd');
    dd.textContent = surveyData[key];
    list.appendChild(dt);
    list.appendChild(dd);
  });

  resultsContent.appendChild(list);

  // 📱 --- NUEVO CÓDIGO: Menú móvil ---
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');

  if(menuToggle && siteNav){
    menuToggle.addEventListener('click', () => {
      siteNav.classList.toggle('open');
    });
  }
});
// Menú responsive
document.addEventListener('DOMContentLoaded', function(){
  const menuBtn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');

  menuBtn.addEventListener('click', function(){
    nav.classList.toggle('active');
  });
});
