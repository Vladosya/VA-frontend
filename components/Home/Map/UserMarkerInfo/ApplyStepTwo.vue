<template>
  <div class="apply-window-two">
    <div class="apply-window-two__header">
      <div>Шаг 2</div>
      <p>Загрузите фото участников</p>
      <button>
        <i @click="$emit('openWindowStepTwo')" class="el-icon-close"></i>
      </button>
    </div>
    <div class="apply-window-two__content">
      <div class="apply-window-two__content-one">
        <input
          @blur="$v.assertInAd.photoPeople.$touch()"
          :class="status($v.assertInAd.photoPeople)"
          id="photo-upload-one"
          type="file"
          ref="filePhotoPeople"
          @change="handleFilePeopleUpload($event)"
        />
        <el-tooltip
          class="item"
          effect="dark"
          content="Загрузите фотографию участников"
          placement="left"
        >
          <label for="photo-upload-one">
            <img
              v-show="photoLoadingOne"
              id="myImageOne"
              src=""
              alt="photoUploadPeopleOne"
            />
            <i v-if="!photoLoadingOne" class="el-icon-upload2"></i>
            <p v-if="!photoLoadingOne">Загрузить фото участников</p>
          </label>
        </el-tooltip>
      </div>
      <div class="apply-window-two__content-one">
        <input
          @blur="$v.assertInAd.photoAlcohol.$touch()"
          :class="status($v.assertInAd.photoAlcohol)"
          id="photo-upload-two"
          type="file"
          ref="filePhotoAlcohol"
          @change="handleFileAlcoholUpload($event)"
        />
        <el-tooltip
          class="item"
          effect="dark"
          content="Загрузите фотографию алкоголя"
          placement="right"
        >
          <label for="photo-upload-two">
            <img
              v-show="photoLoadingTwo"
              id="myImageTwo"
              src=""
              alt="photoUploadPeopleTwo"
            />
            <i v-if="!photoLoadingTwo" class="el-icon-upload2"></i>
            <p v-if="!photoLoadingTwo">Загрузить фото алкоголя</p>
          </label>
        </el-tooltip>
      </div>
    </div>
    <div class="apply-window-two__btn">
      <button @click="$emit('applyForMembership', assertInAd)">
        Подтвердить
      </button>
    </div>
  </div>
</template>

<script>
import { requiredIf } from "vuelidate/lib/validators";

export default {
  props: {
    openWindowStepTwo: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      assertInAd: {
        photoPeople: [],
        photoAlcohol: [],
      },
      formatPhoto: ["image/jpeg", "image/png", "image/gif"],
      photoLoadingOne: false,
      photoLoadingTwo: false,
    };
  },
  methods: {
    status(validation) {
      return {
        "is-invalid": validation.$error,
      };
    },
    handleFilePeopleUpload(e) {
      if (this.$refs.filePhotoPeople.files.length > 0) {
        const file = this.$refs.filePhotoPeople.files[0];

        if (this.formatPhoto.includes(file.type)) {
          const selectedFile = e.target.files[0];
          const reader = new FileReader();
          const imgtag = document.getElementById("myImageOne");
          imgtag.title = selectedFile.name;
          this.photoLoadingOne = true;
          reader.onload = function (event) {
            imgtag.src = event.target.result;
          };

          reader.readAsDataURL(selectedFile);
          this.assertInAd.photoPeople = file;

          this.$message({
            message: "Фотография участников успешно загружена.",
            type: "success",
          });
          setTimeout(() => {
            this.$message({
              message:
                'Если хотите поменять фото, то кликните по значку "Загрузить вашу фотографию"',
              type: "message",
            });
          }, 2000);
        } else {
          this.$message.error(
            "Данный формат для загрузки фото недоступен. Доступные форматы для загрузки: png, jpeg, gif"
          );
          this.assertInAd.photoPeople = [];
        }
      } else {
        this.$message({
          message: "Изображение участников не было загружено",
          type: "warning",
        });
      }
    },
    handleFileAlcoholUpload(e) {
      if (this.$refs.filePhotoAlcohol.files.length > 0) {
        const file = this.$refs.filePhotoAlcohol.files[0];

        if (this.formatPhoto.includes(file.type)) {
          const selectedFile = e.target.files[0];
          const reader = new FileReader();
          const imgtag = document.getElementById("myImageTwo");
          imgtag.title = selectedFile.name;
          this.photoLoadingTwo = true;
          reader.onload = function (event) {
            imgtag.src = event.target.result;
          };

          reader.readAsDataURL(selectedFile);
          this.assertInAd.photoAlcohol = file;

          this.$message({
            message: "Фотография алкоголя успешно загружена.",
            type: "success",
          });
          setTimeout(() => {
            this.$message({
              message:
                'Если хотите поменять фото, то кликните по значку "Загрузить вашу фотографию"',
              type: "message",
            });
          }, 2000);
        } else {
          this.$message.error(
            "Данный формат для загрузки фото недоступен. Доступные форматы для загрузки: png, jpeg, gif"
          );
          this.assertInAd.photoAlcohol = [];
        }
      } else {
        this.$message({
          message: "Изображение алкоголя не было загружено",
          type: "warning",
        });
      }
    },
  },
  validations: {
    assertInAd: {
      photoPeople: {
        required: requiredIf(function (nestedModel) {
          return !this.photoLoadingOne;
        }),
      },
      photoAlcohol: {
        required: requiredIf(function (nestedModel) {
          return !this.photoLoadingTwo;
        }),
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../assets/settings";

.apply-window-two {
  position: absolute;
  top: 80px;
  border: 1px solid #c4c4c4;
  border-radius: 9px;
  width: 454px;
  height: 239px;
  background: #fff;

  &__header {
    display: flex;
    align-items: center;

    div {
      margin-left: 12px;
      font-weight: 400;
      font-style: normal;
      font-size: 12px;
      line-height: 19px;
      text-align: center;

      @include breakpoint(dxxxl) {
        margin-left: 10px;
        font-size: 10px;
      }
    }

    p {
      margin-left: 125px;
      font-weight: 400;
      font-style: normal;
      font-size: 13px;
      line-height: 19px;
      text-align: center;

      @include breakpoint(dxxxl) {
        margin-left: 91px;
        font-size: 11px;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 152px;
      width: 12px;
      height: 12px;
      background: none;

      i {
        font-size: 17px;
      }

      @include breakpoint(dxxxl) {
        margin-left: 113px;
      }
    }
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  &__content-one {
    display: flex;
    justify-content: center;
    margin-top: 17px;

    input {
      display: none;
      opacity: 0;
    }

    label {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1px solid #000;
      border-radius: 12px;
      width: 130px;
      height: 130px;

      img {
        border-radius: 12px;
        width: 126px;
        height: 126px;
      }

      i {
        font-size: 30px;
      }

      p {
        font-size: 12px;
        text-align: center;
      }
    }
  }

  &__btn {
    margin: 18px 15px 0 0;
    text-align: right;

    button {
      border-radius: 4px;
      width: 96px;
      height: 30px;
      font-weight: 400;
      font-style: normal;
      font-size: 10px;
      line-height: 12px;
      color: #fff;
      background: #623ce6;

      @include breakpoint(dxxxl) {
        width: 86px;
        height: 27px;
      }
    }

    @include breakpoint(dxxxl) {
      margin: 8px 12px 0 0;
    }
  }

  @include breakpoint(dxxxl) {
    top: 60px;
    width: 405px;
    height: 218px;
  }
}

.is-invalid {
  border: 1px solid #dc3545;
}
</style>