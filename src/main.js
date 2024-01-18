import { createApp } from 'vue';
import App from './App.vue';
import './app.css';

const app = createApp(App);

app.mixin({
  data() {
    return {
      myCanvas: null,
      myImage: null,
      selectedAreas: [],
      isMouseDown: false,
      textareaVisible: false,
    };
  },
  mounted() {
    this.myCanvas = this.$refs.myCanvas;
    this.myImage = this.$refs.myImage;

    this.myImage.onload = () => {
      this.drawSelectedAreas();
    };

    this.myCanvas.addEventListener("mousedown", this.handleMouseDown);
    this.myCanvas.addEventListener("mousemove", this.handleMouseMove);
    this.myCanvas.addEventListener("mouseup", this.handleMouseUp);
    this.myCanvas.addEventListener("contextmenu", this.handleContextMenu);
  },
  methods: {
    handleMouseDown(e) {
      if (e.button === 2) {
        this.selectedAreas.pop();
        this.drawSelectedAreas();
        e.preventDefault();
        return;
      }

      this.isMouseDown = true;

      var startX = e.clientX - this.myCanvas.getBoundingClientRect().left;
      var startY = e.clientY - this.myCanvas.getBoundingClientRect().top;
      var newArea = { startX, startY, endX: startX, endY: startY };
      this.selectedAreas.push(newArea);
      this.drawSelectedAreas();
    },
    handleMouseMove(e) {
      if (!this.isMouseDown) return;

      var lastArea = this.selectedAreas[this.selectedAreas.length - 1];
      lastArea.endX = e.clientX - this.myCanvas.getBoundingClientRect().left;
      lastArea.endY = e.clientY - this.myCanvas.getBoundingClientRect().top;

      this.drawSelectedAreas();
    },
    handleMouseUp() {
      this.isMouseDown = false;
      this.$refs.myModal.showModal();
    },
    handleContextMenu(e) {
      e.preventDefault();
    },
    drawSelectedAreas() {
      const ctx = this.myCanvas.getContext("2d");
      ctx.clearRect(0, 0, this.myCanvas.width, this.myCanvas.height);
      ctx.drawImage(this.myImage, 0, 0, this.myCanvas.width, this.myCanvas.height);

      ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
      ctx.strokeStyle = "blue";
      ctx.lineWidth = 2;

      this.selectedAreas.forEach(area => {
        ctx.fillRect(area.startX, area.startY, area.endX - area.startX, area.endY - area.startY);
        ctx.strokeRect(area.startX, area.startY, area.endX - area.startX, area.endY - area.startY);
      });
    },
    showTextarea() {
      var tipoSelector = document.getElementById('tipoSelector');
      var textareaContainer = document.getElementById('textareaContainer');
  
      if (tipoSelector.value === 'Texto' || tipoSelector.value === 'Mixto') {
        this.textareaVisible = true;
      } else {
        this.textareaVisible = false;
      }
    },
    saveAndShowBlocks() {
      var blockNameInput = document.querySelector('#my_modal_5 input[type="text"]');
      var blockName = blockNameInput.value;

      if (blockName.trim() === "") {
        alert("Por favor, ingresa un nombre para el bloque.");
        return;
      }

      var newButton = document.createElement('button');
      newButton.style.width = '120px';
      newButton.style.height = '40px';
      newButton.style.backgroundColor = 'brown';
      newButton.style.borderRadius = '5px';
      newButton.style.marginTop = '5px';
      newButton.style.marginLeft = '10px';
      newButton.style.display = 'block';
      newButton.textContent = blockName;
      newButton.addEventListener('click', function() {
        alert('Pulsaste el boton: ' + blockName);
      });

      document.body.insertBefore(newButton, document.body.children[2]);
    },
    closeModal() {
      this.$refs.myModal.close();
    },
  },
});

app.mount('#app');
