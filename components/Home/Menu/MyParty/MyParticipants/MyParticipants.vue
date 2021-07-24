<template>
  <div>
    <div class="my-participants">
      <div
        class="participants-block"
        v-if="haveMyParticipants"
        @click.self="isClickInfo = false"
      >
        <div
          class="participants-block__person"
          v-for="mp in myParticipants"
          :key="mp.id"
        >
          <div class="participants-block__person-img">
            <img :src="`http://127.0.0.1:8000${mp.user.photo}`" alt="photo" />
            <button
              class="participants-block__person-btn-one"
              @click="isClickInfo = true"
            >
              <i class="el-icon-info"></i>
            </button>
            <button class="participants-block__person-btn-two">
              <i class="el-icon-s-comment"></i>
            </button>
            <button
              class="participants-block__person-btn-three"
              @click="deletePerson(mp)"
            >
              <i class="el-icon-delete-solid"></i>
            </button>
          </div>
          <div class="participants-block__info">
            <div class="participants-block__name">{{ mp.user.username }}</div>
            <div class="participants-block__reduction-name">
              ({{ mp.user.username }})
            </div>
          </div>
        </div>
      </div>
      <div v-if="isClickInfo">
        <div
          class="participants-person-card"
          v-for="mp in myParticipants"
          :key="mp.id"
        >
          <img
            :src="`http://127.0.0.1:8000${mp.user.photo}`"
            alt="tony profile picture"
          />
          <p class="participants-person-card__name">
            <strong>{{ mp.user.username }}</strong>
          </p>
          <p class="participants-person-card__sex"><i>Мужской</i></p>
        </div>
      </div>
      <div class="not-participants" v-if="!haveMyParticipants">
        <div>
          <i class="el-icon-male not-participants__icon-one"></i>
          <i class="el-icon-female not-participants__icon-two"></i>
        </div>
        <div class="not-participants__text">
          Список участников пуст! <br />
          Нажмите на выпадающий список в правом верхнем углу окна. <br />
          Если он пуст, то создайте объявление
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isParticipants: true,
      isClickInfo: false,
    };
  },
  methods: {
    deletePerson(mp) {
      this.$confirm(
        "Вы действительно хотите удалить пользователя из вашей вечеринки?",
        "",
        {
          confirmButtonText: "Да",
          cancelButtonText: "Отмена",
          type: "warning",
        }
      ).then(() => {
        try {
          this.$store.dispatch("myParty/deleteParticipant", {
            ad_pk: mp.id_ad,
            participant_pk: mp.participant_id,
          });
        } catch (e) {
          console.log(
            "error in deletePerson method from MyParticipants.vue",
            e
          );
        }
      });
    },
  },
  computed: {
    haveMyParticipants() {
      return this.$store.getters["myParty/haveMyParticipants"];
    },
    myParticipants() {
      return this.$store.getters["myParty/myParticipants"];
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../../../../assets/settings";

.participants-block {
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;

  &__person {
    margin: 0 0 66px 27px;
    width: 275px;

    &:hover {
      .participants-block__person-btn-one {
        display: flex;
        animation: icon-one 0.5s linear 1;
        animation-fill-mode: forwards;
      }

      .participants-block__person-btn-two {
        display: flex;
        animation: icon-two 0.5s linear 1;
        animation-fill-mode: forwards;
      }

      .participants-block__person-btn-three {
        display: flex;
        animation: icon-three 0.5s linear 1;
        animation-fill-mode: forwards;
      }
    }

    @include breakpoint(dxxxxl) {
      margin: 0 0 70px 42px;
      width: 225px;
    }

    @include breakpoint(dxxxl) {
      margin: 0 0 61px 14px;
      width: 175px;
    }

    @include breakpoint(dxxl) {
      margin: 0 0 61px 14px;
      width: 175px;
    }

    @include breakpoint(dsm) {
      margin: 0 0 61px 34px;
      width: 115px;
    }
  }

  &__person-img {
    position: relative;

    img {
      border-radius: 100%;
      width: 250px;
      height: 250px;
      box-shadow: 0 0 10px rgb(0 0 0 / 35%);

      &:hover {
        box-shadow: 0 0 10px rgb(0 0 0 / 85%);
      }

      @include breakpoint(dxxxxl) {
        width: 200px;
        height: 200px;
      }

      @include breakpoint(dxxxl) {
        width: 150px;
        height: 150px;
      }

      @include breakpoint(dxxl) {
        width: 150px;
        height: 150px;
      }

      @include breakpoint(dsm) {
        width: 100px;
        height: 100px;
      }
    }

    button {
      position: absolute;
      left: 70px;
      right: 0;
      top: 70px;
      bottom: 0;
      display: none;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      width: 26px;
      height: 26px;
      background: none;

      i {
        font-size: 28px;

        @include breakpoint(dxxxxl) {
          font-size: 23px;
        }

        @include breakpoint(dxxxl) {
          font-size: 18px;
        }

        @include breakpoint(dxxl) {
          font-size: 18px;
        }

        @include breakpoint(dsm) {
          font-size: 15px;
        }
      }

      &:hover {
        outline-color: rgba(255, 255, 255, 0);
        outline-offset: 15px;
        text-shadow: 1px 1px 2px #427388;
      }

      @include breakpoint(dxxxxl) {
        width: 21px;
        height: 21px;
      }

      @include breakpoint(dxxxl) {
        left: 70px;
        right: 0;
        top: 70px;
        bottom: 0;
        border-radius: 10px;
        width: 16px;
        height: 16px;
      }

      @include breakpoint(dxxl) {
        left: 70px;
        right: 0;
        top: 70px;
        bottom: 0;
        border-radius: 10px;
        width: 16px;
        height: 16px;
      }

      @include breakpoint(dxxl) {
        left: 70px;
        right: 0;
        top: 70px;
        bottom: 0;
        border-radius: 10px;
        width: 13px;
        height: 13px;
      }
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5px;
    width: 250px;

    @include breakpoint(dxxxxl) {
      margin-top: 5px;
      width: 200px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 3px;
      width: 150px;
    }

    @include breakpoint(dxxl) {
      margin-top: 3px;
      width: 150px;
    }

    @include breakpoint(dsm) {
      margin-top: 3px;
      width: 100px;
    }
  }

  &__name {
    font-size: 23px;
    line-height: 14px;
    color: #9f5db5;

    @include breakpoint(dxxxxl) {
      font-size: 20px;
      line-height: 14px;
    }

    @include breakpoint(dxxxl) {
      font-size: 15px;
      line-height: 14px;
    }

    @include breakpoint(dxxl) {
      font-size: 15px;
      line-height: 14px;
    }

    @include breakpoint(dsm) {
      font-size: 11px;
      line-height: 14px;
    }
  }

  &__reduction-name {
    margin-top: 10px;
    font-size: 15px;
    line-height: 12px;
    color: #9f5db5;

    @include breakpoint(dxxxxl) {
      font-size: 13px;
      line-height: 12px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 3px;
      font-size: 12px;
      line-height: 12px;
    }

    @include breakpoint(dxxl) {
      margin-top: 3px;
      font-size: 12px;
      line-height: 12px;
    }

    @include breakpoint(dsm) {
      margin-top: 0;
      font-size: 9px;
      line-height: 12px;
    }
  }

  @include breakpoint(dxxxxl) {
    margin-top: 35px;
  }

  @include breakpoint(dxxxl) {
    margin-top: 25px;
  }

  @include breakpoint(dxxl) {
    margin-top: 25px;
  }

  @include breakpoint(dsm) {
    margin-top: 35px;
  }
}

.participants-person-card {
  position: fixed;
  left: 1200px;
  top: 550px;
  border-radius: 10px;
  padding: 2em;
  width: 300px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
  text-align: center;
  background-color: #fff;

  img {
    border-radius: 50%;
    width: 230px;
    height: 230px;

    @include breakpoint(dxxxl) {
      width: 200px;
      height: 200px;
    }

    @include breakpoint(dxxl) {
      width: 200px;
      height: 200px;
    }

    @include breakpoint(dsm) {
      width: 130px;
      height: 130px;
    }
  }

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

  &__sex {
    margin-top: 2px;

    i {
      font-size: 17px;

      @include breakpoint(dxxxl) {
        font-size: 14px;
      }

      @include breakpoint(dxxl) {
        font-size: 14px;
      }

      @include breakpoint(dsm) {
        font-size: 12px;
      }
    }

    @include breakpoint(dxxxl) {
      margin-top: 2px;
    }

    @include breakpoint(dxxl) {
      margin-top: 2px;
    }
  }

  &__info {
    margin-top: 6px;
    font-size: 18px;

    @include breakpoint(dxxxl) {
      margin-top: 5px;
      font-size: 14px;
    }

    @include breakpoint(dxxl) {
      margin-top: 5px;
      font-size: 14px;
    }

    @include breakpoint(dsm) {
      font-size: 11px;
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
    left: 700px;
    top: 250px;
    padding: 2em;
    width: 250px;
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

.not-participants {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 260px;

  &__icon-one {
    font-size: 95px;
    color: #771699;

    @include breakpoint(dxxxxl) {
      font-size: 85px;
    }

    @include breakpoint(dxxxl) {
      font-size: 75px;
    }

    @include breakpoint(dxxl) {
      font-size: 75px;
    }

    @include breakpoint(dsm) {
      font-size: 55px;
    }
  }

  &__icon-two {
    font-size: 95px;
    color: #771699;

    @include breakpoint(dxxxxl) {
      font-size: 85px;
    }

    @include breakpoint(dxxxl) {
      font-size: 75px;
    }

    @include breakpoint(dxxl) {
      font-size: 75px;
    }

    @include breakpoint(dsm) {
      font-size: 55px;
    }
  }

  &__text {
    font-size: 24px;
    text-align: center;
    color: #771699;

    @include breakpoint(dxxxxl) {
      font-size: 20px;
    }

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

  @include breakpoint(dxxxxl) {
    margin-top: 220px;
  }

  @include breakpoint(dxxxl) {
    margin-top: 165px;
  }

  @include breakpoint(dxxl) {
    margin-top: 175px;
  }

  @include breakpoint(dsm) {
    margin-top: 135px;
  }
}

@keyframes icon-one {
  100% {
    transform: translate(185px, 40px);
  }
}

@include breakpoint(dxxxxl) {
  @keyframes icon-one {
    100% {
      transform: translate(133px, 20px);
    }
  }
}

@include breakpoint(dxxxl) {
  @keyframes icon-one {
    100% {
      transform: translate(85px, 0);
    }
  }
}

@include breakpoint(dxxl) {
  @keyframes icon-one {
    100% {
      transform: translate(85px, 0);
    }
  }
}

@include breakpoint(dsm) {
  @keyframes icon-one {
    100% {
      transform: translate(35px, -27px);
    }
  }
}

@keyframes icon-two {
  100% {
    transform: translate(160px, -50px);
  }
}

@include breakpoint(dxxxxl) {
  @keyframes icon-two {
    100% {
      transform: translate(115px, -50px);
    }
  }
}

@include breakpoint(dxxxl) {
  @keyframes icon-two {
    100% {
      transform: translate(75px, -50px);
    }
  }
}

@include breakpoint(dxxl) {
  @keyframes icon-two {
    100% {
      transform: translate(75px, -50px);
    }
  }
}

@include breakpoint(dsm) {
  @keyframes icon-two {
    100% {
      transform: translate(22px, -61px);
    }
  }
}

@keyframes icon-three {
  100% {
    transform: translate(160px, 120px);
  }
}

@include breakpoint(dxxxxl) {
  @keyframes icon-three {
    100% {
      transform: translate(116px, 80px);
    }
  }
}

@include breakpoint(dxxxl) {
  @keyframes icon-three {
    100% {
      transform: translate(75px, 45px);
    }
  }
}

@include breakpoint(dxxl) {
  @keyframes icon-three {
    100% {
      transform: translate(75px, 45px);
    }
  }
}

@include breakpoint(dsm) {
  @keyframes icon-three {
    100% {
      transform: translate(22px, 8px);
    }
  }
}

::-webkit-scrollbar-button {
  width: 3px;
  height: 0;
  background-image: url("#");
  background-repeat: no-repeat;
}

::-webkit-scrollbar-track {
  background-color: #fff;
}

::-webkit-scrollbar-thumb {
  border-radius: 5px;
  box-shadow: 0 1px 1px #fff inset;
  background-image: url("https://yraaa.ru/_pu/24/59610063.png");
  background-position: center;
  background-repeat: no-repeat;
  background-color: #d38eec;

  @include breakpoint(dxxl) {
    border-radius: 5px;
    box-shadow: 0 1px 1px #fff inset;
  }
}

::-webkit-resizer {
  width: 7px;
  height: 0;
  background-image: url("#");
  background-repeat: no-repeat;
}

::-webkit-scrollbar {
  width: 5px;
}

@media (height: 1024px) {
  .participants-person-card {
    left: 568px;
    top: 355px;
  }
}

@media (height: 864px) {
  .participants-person-card {
    left: 700px;
    top: 280px;
  }
}
</style>
