<template>
  <div class="info-person-card">
    <div class="info-person-card__close">
      <button @click="$emit('clickButtonClose')">
        <i class="el-icon-close"></i>
      </button>
    </div>
    <div v-for="info in filterByIdRequestMyParty" :key="info.author_id">
      <div class="info-person-block">
        <div class="info-person-left">
          <img
            :src="`http://127.0.0.1:8000/images/${info.photo_user}`"
            alt="tony profile picture"
          />
          <p class="info-person-block__name">
            <strong>{{ info.username }}</strong>
          </p>
        </div>
        <div class="info-person-right">
          <div class="info-person-right__boys">
            <img src="@/assets/Home/markerInfo/boy.svg" alt="info-boy-img" />
            <p>Количество парней:</p>
            <span>{{ info.number_of_boys }}</span>
          </div>
          <div class="info-person-right__girls">
            <img src="@/assets/Home/markerInfo/girl.svg" alt="inf-girl-img" />
            <p>Количество девушек:</p>
            <span>{{ info.number_of_girls }}</span>
          </div>
          <div class="info-person-right__people">
            <img
              src="@/assets/Home/markerInfo/people.svg"
              alt="info-people-img"
            />
            <p>Общее количество:</p>
            <span>{{ info.number_of_person }}</span>
          </div>
        </div>
      </div>
      <div class="info-person-photos">
        <div class="info-person-photos__people">
          <p>Фото участников</p>
          <img
            v-if="info.photos__photo_participants.length > 0"
            :src="`http://127.0.0.1:8000/images/${info.photos__photo_participants}`"
            @success="havePhotoPeople = true"
            @error="havePhotoPeople = false"
            alt="inf-photo-people"
          />
          <div v-if="info.photos__photo_participants.length === 0">
            <i class="el-icon-user"></i>
            <p>Фотографии участников нет</p>
          </div>
        </div>
        <div class="info-person-photos__alcohol">
          <p>Фото алкоголя</p>
          <img
            v-if="info.photos__photo_alcohol.length > 0"
            :src="`http://127.0.0.1:8000/images/${info.photos__photo_alcohol}`"
            alt="info-photo-alcohol"
          />
          <div v-if="info.photos__photo_alcohol.length === 0">
            <i class="el-icon-goblet-full"></i>
            <p>Фотографии алкоголя нет</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    idPerson: {
      type: Number,
      required: true,
    },
  },
  created() {
    this.$store.commit("myParty/filterByIdRequestMyParty", this.idPerson);
  },
  computed: {
    filterByIdRequestMyParty() {
      return this.$store.getters["myParty/filterByIdRequestMyParty"];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../../../assets/settings";

.info-person-card {
  position: fixed;
  left: 1200px;
  top: 550px;
  z-index: 10;
  border-radius: 10px;
  padding: 2em;
  width: 300px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
  background-color: #fff;

  &__close {
    position: absolute;
    right: 17px;
    top: 12px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 16px;
      height: 16px;
      background: none;

      i {
        font-size: 26px;
      }
    }
  }

  &:hover {
    transform: translateY(-5px);
  }

  @include breakpoint(dxxxxl) {
    left: 880px;
    top: 365px;
  }

  @include breakpoint(dxxxl) {
    left: 726px;
    top: 299px;
    padding: 2em;
    width: 250px;
  }

  @include breakpoint(dxxl) {
    left: 640px;
    top: 228px;
    padding: 2em;
    width: 377px;
  }

  @include breakpoint(dxl) {
    left: 650px;
    top: 300px;
  }

  @include breakpoint(dlg) {
    left: 611px;
    top: 235px;
  }

  @include breakpoint(dmd) {
    left: 568px;
    top: 255px;
  }

  @include breakpoint(dsm) {
    left: 474px;
    top: 270px;
    width: 190px;
  }
}

.info-person-block {
  display: grid;
  grid-template-columns: 100px 250px;

  &__name {
    margin-top: 5px;

    strong {
      font-size: 20px;

      @include breakpoint(dxxxl) {
        font-size: 14px;
      }

      @include breakpoint(dxxl) {
        font-size: 14px;
      }

      @include breakpoint(dsm) {
        font-size: 13px;
      }
    }

    @include breakpoint(dxxxl) {
      margin-top: 3px;
    }

    @include breakpoint(dxxl) {
      margin-top: 3px;
    }
  }

  @include breakpoint(dxxl) {
    grid-template-columns: 100px 220px;
  }
}

.info-person-left {
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 50%;
    height: 230px;

    @include breakpoint(dxxxl) {
      height: 200px;
    }

    @include breakpoint(dxxl) {
      width: 100px;
      height: 100px;
    }

    @include breakpoint(dsm) {
      height: 130px;
    }
  }
}

.info-person-right {
  margin-left: 10px;

  &__boys {
    display: flex;
    align-items: center;

    p {
      margin-left: 15px;
    }

    span {
      margin-left: 10px;
    }
  }

  &__girls {
    display: flex;
    align-items: center;
    margin-top: 10px;

    p {
      margin-left: 15px;
    }

    span {
      margin-left: 10px;
    }
  }

  &__people {
    display: flex;
    align-items: center;
    margin-top: 10px;

    p {
      margin-left: 15px;
    }

    span {
      margin-left: 10px;
    }
  }
}

.info-person-photos {
  display: grid;
  grid-template-columns: 160px 160px;
  margin-top: 10px;

  &__people {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin-top: 5px;
      border: 1px solid #c4c4c4;
      border-radius: 10px;
      width: 150px;
      height: 150px;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 5px;
      border: 1px solid #c4c4c4;
      border-radius: 10px;
      width: 150px;
      height: 150px;

      i {
        font-size: 38px;
      }

      p {
        font-size: 15px;
        text-align: center;
      }
    }
  }

  &__alcohol {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin-top: 5px;
      border: 1px solid #c4c4c4;
      border-radius: 10px;
      width: 150px;
      height: 150px;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 5px;
      border: 1px solid #c4c4c4;
      border-radius: 10px;
      width: 150px;
      height: 150px;

      i {
        font-size: 38px;
      }

      p {
        width: 130px;
        font-size: 15px;
        text-align: center;
      }
    }
  }
}

@media (height: 1024px) {
  .info-person-card {
    left: 568px;
    top: 355px;
  }
}

@media (height: 864px) {
  .info-person-card {
    left: 700px;
    top: 280px;
  }
}
</style>