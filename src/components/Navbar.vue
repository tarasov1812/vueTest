 <template>
 <div class="navbar bg-base-100 bg-white">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-300 rounded-box w-52">
        <li><a>Nueva Inspección</a></li>
        <li>
          <a>Gestión de plantillas</a>
          <ul class="p-2">
            <li><a>Nueva Inspección</a></li>
            <li><a>Constultar Plantillas</a></li>
          </ul>
        </li>
        <li><a>Consulta de Inspecciones</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost text-xl">Label Validations</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a>Nueva Inspección</a></li>
      <li>
        <details>
          <summary>Gestión de plantillas</summary>
          <ul class="p-2">
             <li><a>Nueva Inspección</a></li>
            <li><a>Constultar Plantillas</a></li>
          </ul>
        </details>
      </li>
      <li><a>Consulta de Inspecciones</a></li>
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn">Cerrar seccion</a>
  </div>
</div>
</template>