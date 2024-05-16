<template>
  <div>
    <div class="modal fade" ref="uploadModal" tabindex="-1" aria-labelledby="uploadModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="uploadModalLabel">Upload</h5>
            <button type="button" class="btn-close" @click="hideModal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="upload-area">
              <input type="file" @change="handleFileUpload" multiple hidden ref="fileInput" />
              <div class="drop-area" @click="browseFiles" @dragover.prevent @drop.prevent="handleDrop">
                Drag and drop or <a href="#" @click.prevent="browseFiles">browse</a> your files
              </div>
              <ul class="list-group mt-3">
                <li v-for="(file, index) in files" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
                  <span>{{ file.name }}</span>
                  <span v-if="file.uploaded" class="badge bg-success">✔</span>
                  <span v-else class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                </li>
              </ul>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="hideModal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineEmits } from 'vue';

const files = ref([]);
const uploadModal = ref(null);
const fileInput = ref(null);

const emits = defineEmits(['show', 'hide']);

let modal;
onMounted(() => {
  modal = new bootstrap.Modal(uploadModal.value);
});

/* eslint-disable */
function showModal() {
  emits('show');
  if (modal) {
    modal.show();
  }
}

function hideModal() {
  emits('hide');
  if (modal) {
    modal.hide();
  }
}

function browseFiles() {
  fileInput.value.click();
}

function handleFileUpload(event) {
  const selectedFiles = Array.from(event.target.files);
  files.value = selectedFiles.map(file => ({ name: file.name, uploaded: false }));
  // Simulate file upload process
  setTimeout(() => {
    files.value = files.value.map(file => ({ ...file, uploaded: true }));
  }, 2000);
}

function handleDrop(event) {
  const droppedFiles = Array.from(event.dataTransfer.files);
  files.value = droppedFiles.map(file => ({ name: file.name, uploaded: false }));
  // Simulate file upload process
  setTimeout(() => {
    files.value = files.value.map(file => ({ ...file, uploaded: true }));
  }, 2000);
}
</script>

<style scoped>
.upload-area {
  text-align: center;
  padding: 20px;
  border: 2px dashed #ccc;
  border-radius: 10px;
  cursor: pointer;
}
.upload-area .drop-area {
  padding: 40px;
  color: #888;
}
</style>
