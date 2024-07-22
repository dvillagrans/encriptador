/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderHead, e as renderComponent } from '../chunks/astro/server_NSsbV0Ts.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-800 text-white py-4"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center"> <p class="mr-4">
Created with <span class="text-red-500">❤</span> by Diego Villagran
</p> <a href="https://github.com/dvillagrans" target="_blank" rel="noopener noreferrer" class="mx-2"> <i class="fab fa-github fa-lg"></i> </a> <a href="www.linkedin.com/in/dvillagrans" target="_blank" rel="noopener noreferrer" class="mx-2"> <i class="fab fa-linkedin fa-lg"></i> </a> </div> </footer>`;
}, "C:/Users/diego/Workspace/web/encriptador/src/components/footer.astro", void 0);

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="es" data-astro-cid-7omyzpis> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Encriptador</title><link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">${renderHead()}</head> <body class="bg-gray-100 flex flex-col min-h-screen" data-astro-cid-7omyzpis> <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow" data-astro-cid-7omyzpis> <div class="max-w-7xl mx-auto" data-astro-cid-7omyzpis> <header class="mb-6" data-astro-cid-7omyzpis> <img src="Logo.png" alt="Logo" class="w-auto h-auto" data-astro-cid-7omyzpis> </header> <main class="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6" data-astro-cid-7omyzpis> <div class="flex-grow flex flex-col" data-astro-cid-7omyzpis> <textarea id="inputText" class="w-full flex-grow p-4 bg-transparent rounded-md resize-none mb-4 custom-textarea" placeholder="Ingrese el texto aqui" data-astro-cid-7omyzpis></textarea> <p class="text-sm text-gray-500 mb-4" data-astro-cid-7omyzpis> <span class="inline-block align-middle mr-1" data-astro-cid-7omyzpis>ℹ️</span>
Solo letras minúsculas y sin acentos
</p> <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4" data-astro-cid-7omyzpis> <button id="encriptarBtn" class="bg-blue-600 text-white px-6 py-3 rounded-md w-full sm:w-auto" data-astro-cid-7omyzpis>
Encriptar
</button> <button id="desencriptarBtn" class="bg-gray-200 text-gray-700 px-6 py-3 rounded-md w-full sm:w-auto" data-astro-cid-7omyzpis>
Desencriptar
</button> </div> </div> <aside id="outputSection" class="w-full md:w-96 bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center" data-astro-cid-7omyzpis> <div id="emptyState" data-astro-cid-7omyzpis> <img src="Muñeco.png" alt="Icono" class="w-auto h-auto mb-6" data-astro-cid-7omyzpis> <h2 class="text-2xl font-bold text-center mb-4" data-astro-cid-7omyzpis>
Ningún mensaje fue encontrado
</h2> <p class="text-center text-gray-500" data-astro-cid-7omyzpis>
Ingresa el texto que desees encriptar o desencriptar.
</p> </div> <div id="resultState" class="w-full hidden" data-astro-cid-7omyzpis> <textarea id="outputText" class="w-full flex-grow p-4 bg-transparent rounded-md resize-none mb-4 custom-textarea" placeholder="El texto encriptado o desencriptado aparecerá aquí" readonly data-astro-cid-7omyzpis></textarea> <button id="copyBtn" class="bg-blue-600 text-white px-6 py-3 rounded-md w-full" data-astro-cid-7omyzpis>
Copiar
</button> </div> </aside> </main> </div> </div> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-7omyzpis": true })}   </body> </html>`;
}, "C:/Users/diego/Workspace/web/encriptador/src/layout/layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": " Encriptador" })}`;
}, "C:/Users/diego/Workspace/web/encriptador/src/pages/index.astro", void 0);

const $$file = "C:/Users/diego/Workspace/web/encriptador/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
