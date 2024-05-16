<script setup>
import UploadModal from './Base/UploadModal.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

/**
 * pageTransition
 */
const router = useRouter();

function backExhibitList() {
  router.push('/exhibit');
}

// function editExhibit() {
  // idを保持して編集画面に遷移する処理
// }

/**
 * upload images modal
 */
const uploadModal = ref(null);

function openUploadModal() {
  uploadModal.value.showModal();
}

function handleShow() {
  console.log('Upload modal is shown');
}

function handleHide() {
  console.log('Upload modal is hidden');
}

</script>

<template>
  <div class="detail-ctn">
    <div style="display: flex;">
      <span class="material-symbols-outlined back-btn" @click="backExhibitList">undo</span>
      <button type="button" class="btn btn-pink edit-btn">
        <div class="edit">Edit</div>
        <span class="material-symbols-outlined" style="font-size: 22px !important">arrow_outward</span>
      </button>
    </div>
    <div class="card component-card">
      <div class="card-text">Detail</div>
      <div class="card-body">
        <form>
          <div class="d-flex justify-content-center align-items-center img-ctn" @click="openUploadModal">
            <div class="text-center">
              <div style="line-height: 38px;">
                <span class="material-symbols-outlined imgmode">imagesmode</span>
              </div>
              <div style="color: #ccc;">Upload Images</div>
            </div>
          </div>
          <div class="image-collage">
            <div class="image-container">
              <div class="upload-placeholder">
                <span class="material-symbols-outlined">add_circle</span>
                <p>Upload image</p>
              </div>
            </div>
            <div class="image-container">
              <div class="upload-placeholder">
                <span class="material-symbols-outlined">emoji_nature</span>
              </div>
            </div>
            <div class="image-container">
              <div class="upload-placeholder">
                <span class="material-symbols-outlined">emoji_nature</span>
              </div>
            </div>
            <div class="image-container">
              <div class="upload-placeholder">
                <span class="material-symbols-outlined">emoji_nature</span>
              </div>
            </div>
            <div class="image-container">
              <div class="upload-placeholder">
                <span class="material-symbols-outlined">emoji_nature</span>
              </div>
            </div>
            <div class="image-container">
              <div class="upload-placeholder">
                <span class="material-symbols-outlined">emoji_nature</span>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="inputItemName" class="form-label">Item Name</label>
            <input type="text" class="form-control" id="inputItemName" aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
            <label for="inputDisplayName" class="form-label">Display Name</label>
            <input type="text" class="form-control" id="inputDisplayName">
          </div>
          <div class="mb-3">
            <label for="inputItemDesciption" class="form-label">Item Description</label>
            <textarea class="form-control" id="inputItemDesciption" rows="3"></textarea>
          </div>
          <div class="mb-3">
            <label for="inputQuantityStock" class="form-label wid-175
            ">Quantity in stock</label>
            <input type="number" class="form-control form-30" id="inputQuantityStock" min="0" step="1">
          </div>
          <div class="mb-3">
            <label for="inputItemTag" class="form-label">Item Tag</label>
            <input type="text" class="form-control" id="inputItemTag">
          </div>
          <div>
            <div class="form-label exhibit-info">Exhibit Infomation</div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
                Exhibited at merukari
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
              <label class="form-check-label" for="flexCheckDefault">
                Exhibited at eBay
              </label>
            </div>
            <!-- merukari用 -->
            <div>
              <div class="form-label exhibit-info">merukari</div>
              <div class="mb-3 ex-ctn">
                <label class="form-label wid-175">Exhibit 1</label>
                <div class="mb-3">
                  <label for="inputExhibitId1" class="form-label ex-label">ID</label>
                  <input type="text" class="form-control ex-form" id="inputExhibitId1">
                </div>
                <div class="mb-3">
                  <label for="inputExhibitPrice1" class="form-label ex-label">Price</label>
                  <input type="text" class="form-control ex-form" id="inputExhibitPrice1">
                </div>
              </div>
            </div>
            <!-- eBay用 -->
            <div>
              <div class="form-label exhibit-info">eBay</div>
              <div class="mb-3 ex-ctn">
                <label class="form-label wid-175">Exhibit 1</label>
                <div class="mb-3">
                  <label for="inputExhibitId1" class="form-label ex-label">ID</label>
                  <input type="text" class="form-control ex-form" id="inputExhibitId1">
                </div>
                <div class="mb-3">
                  <label for="inputExhibitPrice1" class="form-label ex-label" style="width: 59px;">Price</label>
                  <input type="text" class="form-control ex-form ebay-form" id="inputExhibitPrice1">
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Select Type</option>
                    <option value="1">$</option>
                    <option value="2">¥</option>
                  </select>
                </div>
              </div>
            </div>

          </div> 
          <button type="submit" class="btn btn-primary submit-btn">Submit</button>
        </form>
      </div>
    </div>
    <UploadModal ref="uploadModal" @show="handleShow" @hide="handleHide" />
  </div>
</template>

<style scoped>
/* test用 */
.image-collage {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.image-container {
  position: relative;
  width: 200px;
  height: 200px;
  margin-bottom: 60px;
}

.collage-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
}

.upload-placeholder {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 2px dashed #ccc;
  border-radius: 0.5rem;
  background-color: #f8f8f8;
  color: #aaa;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.upload-placeholder:hover {
  background-color: #eee;
}

.material-symbols-outlined {
  font-size: 3rem;
}
/*  */

.header, .detail-ctn {
  margin: 40px 40px 20px;
}

.back-btn {
  font-size: 40px;
  margin-top: 0 !important;
  margin-right: 10px;
  margin-left: 0 !important;
  color: #D588A0;
  cursor: pointer;
}

.edit-btn {
  height: 40px !important;
  font-size: 18px !important;
  background-color: #ffb0ca !important;
}

.edit {
  padding-left: 15px;
  padding-top: 2px;
}

.edit-btn:focus, .edit-btn:active, .edit-btn:hover {
  background-color: #e59bb3 !important;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: 0 40px 40px 40px;
}

.product-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.card-body {
  padding: 38px 10px 10px;
}

.product-name {
  font-weight: bold;
  font-size: 20px;
  text-align: left;
}

.product-price {
  color: #7D798D;
  font-weight: bold;
  text-align: right;
}

.icon-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.material-symbols-outlined {
  margin-top: 4px;
  margin-left: 5px;
}

.btn-pink {
  background-color: #ECB1C4;
  border: #ECB1C4;
  color: #FAFCFD;
  width: 110px;
  height: 32px;
  border-radius: 10px;
  box-shadow: 0 2px 10px #b18fa6;
  font-size: 14px;
  display: flex;
}

.btn-pink:hover, .btn-pink:active, .btn-pink:focus {
  background-color: #EDA3B8;
  border: #EDA3B8;
  color: #FAFCFD;
}

.submit-btn {
  background-color: #ff93b6 !important;
  height: 45px;
  border: #ff93b6;
  color: #FAFCFD !important;
}

.submit-btn:hover, .submit-btn:active, .submit-btn:focus {
  background-color: #e97a9e !important;
  border: #e97a9e;
}

.btn {
  width: 100px;
  border-radius: 3px;
  font-size: 19px;
}

.disabled-btn, .disabled-btn:hover, .disabled-btn:active, .disabled-btn:focus {
  background-color: #e1d1d6;
  height: 40px;
  border: #e1d1d6;
  color: #8f8f8f;
  box-shadow: 0 5px 0 #8f8f8fa1;
  padding-top: 7px;
}

.img-ctn {
  height: 300px;
  width: 40%;
  border-radius: 20px;
  border: 1px dashed #ccc;
  margin: 0 auto 38px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.imgmode {
  font-size: 80px;
  color: #ccc; 
  margin: 0 !important;
}

.card {
  width: 1523px;
  height: 100%;
  margin-top: 30px;
  box-shadow: 0 4px 12px #A0A3B4;
  position: relative;
}

.card-text {
  background-color: #FAF3F6;
  border-radius: 10px 10px 0 0;
  border-bottom: #B2B8C6;
  color:	#bf8f9f;
  font-weight: bold;
  font-size: 25px;
  text-align: left;
  padding: 20px 15px 15px 20px;
}

.component-card {
  border-radius: 10px;
  color: #D06179;
  border: #B2B8C6;
}

.bi-heart.active {
  color: #E83E8C;
}

.btn-detail {
  color: #f78aa9;
}

.btn-detail:hover, .btn-detail:active, .btn-detail:focus {
  color: #f777a0;
}

.mb-3 {
  display: flex;
  margin-bottom: 38px !important;
  line-height: 38px;
}

.form-label {
  width: 200px;
  color: #786569;
  font-size: large;
  margin-bottom: 0 !important;
  padding-left: 20px;
  text-align: left;
}

.wid-175
 {
  width: 175px;
}

.ex-label {
  padding-left: 0 !important;
  width: 80px;
}

.ex-form {
  width: 80%;
  margin-right: 100px !important;
}

.ex-ctn {
  margin-bottom: 0 !important;
}

.ebay-form {
  margin-right: 30px !important;
  width: 242px !important;
}

.exhibit-info {
  padding-top: 5px !important;
  margin-bottom: 30px !important;
  font-weight: 600;
  font-size: larger;
}

.form-control {
  margin-right: 30px;
}

.form-30 {
  width: 30%;
}

.form-select {
  height: 38px;
  width: 200px;
}

.form-check {
  margin-left: 20px;
  margin-bottom: 38px !important;
  font-size: large;
  text-align: left;
  color: #786569;
}

.form-check-input:checked {
    background-color: #ecb1c4;
    border-color: #ecb1c4;
}
</style>