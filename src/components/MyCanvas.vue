<template>
  <div>
    <img ref="myImage" src="../../coca-cola.png" style="display:none;">
    <canvas ref="myCanvas" width="1000" height="200"></canvas>

    <dialog ref="myModal" class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <h3 class="font-bold text-lg mb-10">Tipo:</h3>
        <select class="select select-primary w-full max-w-xs mb-10" id="tipoSelector" @change="showTextarea">
          <option>Imagen</option>
          <option>Texto</option>
          <option>Mixto</option>
        </select>
        <br>
        <input type="text" placeholder="Nombre del bloque" class="input input-bordered w-full max-w-xs mb-10" />
        <div v-show="textareaVisible" id="textareaContainer">
          <textarea class="textarea textarea-bordered h-24 mb-10" placeholder="Escribe el texto"></textarea>
        </div>
        
        <div class="modal-action">
          <form method="dialog">
            <button class="btn" @click="saveAndShowBlocks">Guardar</button>
            <button class="btn" @click="$refs.myModal.close()">Cerrar</button>
          </form>
        </div>
      </div>
    </dialog>
  </div>
</template>