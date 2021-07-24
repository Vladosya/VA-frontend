<template>
  <div class="createAd-block">
    <div class="createAd-block__logo">
      <img src="../../../assets/Home/CreateAd/logo.svg" alt="createdAd-logo" />
      <p>Создание объявления</p>
    </div>
    <div class="createAd-content">
      <div class="createAd-content-map">
        <MapForCreateAd @createMarker="infoMarket" />
      </div>
      <form class="createAd-content-form" @submit.prevent="createAdFormSubmit">
        <div class="createAd-content-form__name">
          <label for="name">Название вечеринки</label>
          <el-tooltip
            class="item"
            effect="dark"
            content="Необходимо указать Название объявления"
            placement="right"
          >
            <input
              @blur="$v.createdAdForm.nameParty.$touch()"
              v-model="createdAdForm.nameParty"
              :class="{ 'is-invalid-name': $v.createdAdForm.nameParty.$error }"
              type="text"
              id="name"
              placeholder="Введите название объявления"
              class="createAd-content-form__name-input"
            />
          </el-tooltip>
        </div>

        <div class="createAd-content-form__place">
          <label for="place">Место вечеринки</label>
          <el-tooltip
            class="item"
            effect="dark"
            content="Необходимо на карте указать место вписки"
            placement="right"
          >
            <el-input
              @blur="$v.createdAdForm.place.$touch()"
              id="place"
              v-model="createdAdForm.place"
              :class="status($v.createdAdForm.place)"
              placeholder="Место вечеринки выбранное на карте"
              class="createAd-content-form__place-input"
              clearable
              readonly
            >
            </el-input>
          </el-tooltip>
        </div>

        <div class="createAd-content-form__date">
          <label>Дата вечеринки (дата и время начала)</label>
          <el-tooltip
            class="item"
            effect="dark"
            content="Необходимо указать дату и время проведения вечеринки"
            placement="right"
          >
            <el-date-picker
              @blur="$v.createdAdForm.dateParty.$touch()"
              v-model.trim="createdAdForm.dateParty"
              type="datetime"
              v-model="createdAdForm.dateParty"
              :class="status($v.createdAdForm.dateParty)"
              placeholder="Выберите дату и время вечеринки"
              class="createAd-content-form__date-input"
            >
            </el-date-picker>
          </el-tooltip>
        </div>

        <div class="createAd-content-form__people">
          <label>Кол-во человек</label>
          <el-tooltip
            class="item"
            effect="dark"
            content="Необходимо указать кол-во человек на вечеринке"
            placement="right"
          >
            <el-input-number
              @blur="$v.createdAdForm.people.$touch()"
              v-model.trim="createdAdForm.people"
              controls-position="right"
              v-model="createdAdForm.people"
              :class="status($v.createdAdForm.people)"
              :min="1"
              class="createAd-content-form__people-input"
              placeholder="Укажите кол-во человек"
            ></el-input-number>
          </el-tooltip>
        </div>

        <div class="createAd-content-form__girl">
          <label>Кол-во девушек</label>
          <el-tooltip
            class="item"
            effect="dark"
            content="Необходимо указать кол-во девушек на вечеринке"
            placement="right"
          >
            <el-input-number
              @blur="$v.createdAdForm.girl.$touch()"
              v-model.trim="createdAdForm.girl"
              controls-position="right"
              v-model="createdAdForm.girl"
              :class="status($v.createdAdForm.girl)"
              :min="0"
              class="createAd-content-form__girl-input"
              placeholder="Укажите кол-во девушек"
            ></el-input-number>
          </el-tooltip>
        </div>

        <div class="createAd-content-form__boy">
          <label>Кол-во парней</label>
          <el-tooltip
            class="item"
            effect="dark"
            content="Необходимо указать кол-во парней на вечеринке"
            placement="right"
          >
            <el-input-number
              @blur="$v.createdAdForm.boy.$touch()"
              v-model.trim="createdAdForm.boy"
              controls-position="right"
              v-model="createdAdForm.boy"
              :class="status($v.createdAdForm.boy)"
              :min="0"
              class="createAd-content-form__boy-input"
              placeholder="Укажите кол-во парней"
            ></el-input-number>
          </el-tooltip>
        </div>

        <div class="createAd-content-form__buttons">
          <button
            class="createAd-content-form__btn-cancel"
            @click="$router.go(-1)"
          >
            Отмена
          </button>
          <button
            class="createAd-content-form__btn-create"
            type="submit"
            @click.prevent="createAdFormSubmit"
          >
            Создать
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import MapForCreateAd from "./MapForCreateAd.vue";
import { required, requiredIf } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      createdAdForm: {
        nameParty: "",
        place: "",
        dateParty: "",
        people: undefined,
        girl: undefined,
        boy: undefined,
        coordinates: "",
      },
      choicePlace: false,
    };
  },
  methods: {
    createAdFormSubmit() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        console.log("Error");
      } else {
        console.log("Success");

        const formData = {
          title: this.createdAdForm.nameParty,
          city: 1,
          geolocation: JSON.stringify(this.createdAdForm.coordinates),
          number_of_person: this.createdAdForm.people,
          number_of_girls: this.createdAdForm.girl,
          number_of_boys: this.createdAdForm.boy,
          party_date: this.createdAdForm.dateParty,
        };

        try {
          this.$store.dispatch("createAd/createAd", formData);
        } catch (e) {
          console.log("error in CreateAd.vue methods createAdFormSubmit", e);
        }
      }
    },
    status(validation) {
      return {
        "is-invalid": validation.$error,
      };
    },
    infoMarket(data) {
      if (data.length) {
        this.createdAdForm.place = data[0].position.lat;
        this.createdAdForm.coordinates = {
          lat: data[0].position.lat,
          lng: data[0].position.lng,
        };
      }
    },
  },
  components: {
    MapForCreateAd,
  },
  validations: {
    createdAdForm: {
      nameParty: {
        required,
      },
      place: {
        required: requiredIf(function (nestedModel) {
          return !this.choicePlace;
        }),
      },
      dateParty: {
        required,
      },
      people: {
        required,
      },
      girl: {
        required,
      },
      boy: {
        required,
      },
    },
  },
};
</script>

<style scoped lang="scss">
@import "assets/settings.scss";

.createAd-block {
  border: 1px solid #000;
  padding: 13px;
  width: 1350px;
  height: 750px;
  background-color: #fff;

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      margin-left: 5px;
      font-family: "Manrope", sans-serif;
      font-weight: 700;
      font-style: normal;
      font-size: 15px;
      line-height: 19px;
      color: #771699;

      @include breakpoint(dxxxxl) {
        font-size: 14px;
      }

      @include breakpoint(dlg) {
        font-size: 12px;
      }
    }
  }

  @include breakpoint(dxxxxl) {
    width: 1150px;
    height: 650px;
  }

  @include breakpoint(dlg) {
    width: 950px;
    height: 550px;
  }
}

.createAd-content {
  display: grid;
  grid-column-gap: 13px;
  grid-template-columns: 1038px 273px;
  margin-top: 13px;

  @include breakpoint(dxxxxl) {
    grid-template-columns: 838px 273px;
  }

  @include breakpoint(dlg) {
    grid-template-columns: 638px 273px;
  }
}

.createAd-content-map {
  width: 1038px;
  height: 690px;

  @include breakpoint(dxxxxl) {
    width: 838px;
    height: 590px;
  }

  @include breakpoint(dlg) {
    width: 638px;
    height: 490px;
  }
}

.createAd-content-form {
  &__name {
    label {
      font-family: "Manrope", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 14px;
      line-height: 18px;
      color: #797979;

      @include breakpoint(dxxxxl) {
        font-size: 13px;
      }

      @include breakpoint(dlg) {
        font-size: 11px;
      }
    }
  }

  &__name-input {
    margin-top: 40px;
    outline: none;
    border: none;
    border-bottom: 1px solid #000;
    padding: 0 0 3px 5px;
    width: 273px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 13px;
    line-height: 15px;
    color: inherit;
    background-color: transparent;

    @include breakpoint(dxxxxl) {
      margin-top: 30px;
      font-size: 12px;
    }

    @include breakpoint(dlg) {
      margin-top: 20px;
      font-size: 10px;
    }
  }

  &__place {
    margin-top: 28.5px;

    label {
      font-family: "Manrope", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 14px;
      line-height: 18px;
      color: #797979;

      @include breakpoint(dxxxxl) {
        font-size: 13px;
      }

      @include breakpoint(dlg) {
        font-size: 9px;
      }
    }

    @include breakpoint(dxxxxl) {
      margin-top: 18.5px;
    }

    @include breakpoint(dlg) {
      margin-top: 10px;
    }
  }

  &__place-input {
    margin-top: 18px;
    width: 273px;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 13px;
    line-height: 15px;
    background: #fff;

    @include breakpoint(dxxxxl) {
      margin-top: 12px;
      font-size: 11px;
    }

    @include breakpoint(dlg) {
      margin-top: 2px;
      font-size: 9px;
    }
  }

  &__date {
    margin-top: 28.5px;

    label {
      font-family: "Manrope", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 14px;
      line-height: 18px;
      color: #797979;

      @include breakpoint(dxxxxl) {
        font-size: 13px;
      }

      @include breakpoint(dlg) {
        font-size: 9px;
      }
    }

    @include breakpoint(dxxxxl) {
      margin-top: 14px;
    }

    @include breakpoint(dlg) {
      margin-top: 10px;
    }
  }

  &__date-input {
    margin-top: 18px;
    width: 273px;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 13px;
    line-height: 15px;
    background: #fff;

    @include breakpoint(dxxxxl) {
      margin-top: 12px;
      font-size: 11px;
    }

    @include breakpoint(dlg) {
      margin-top: 2px;
      font-size: 9px;
    }
  }

  &__people {
    margin-top: 28.5px;

    label {
      font-family: "Manrope", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 14px;
      line-height: 18px;
      color: #797979;

      @include breakpoint(dxxxxl) {
        font-size: 13px;
      }

      @include breakpoint(dlg) {
        font-size: 9px;
      }
    }

    @include breakpoint(dxxxxl) {
      margin-top: 14px;
    }

    @include breakpoint(dlg) {
      margin-top: 10px;
    }
  }

  &__people-input {
    margin-top: 18px;
    width: 273px;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 13px;
    line-height: 15px;
    background: #fff;

    @include breakpoint(dxxxxl) {
      margin-top: 12px;
      font-size: 11px;
    }

    @include breakpoint(dlg) {
      margin-top: 2px;
      font-size: 9px;
    }
  }

  &__girl {
    margin-top: 28.5px;

    label {
      font-family: "Manrope", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 14px;
      line-height: 18px;
      color: #797979;

      @include breakpoint(dxxxxl) {
        font-size: 13px;
      }

      @include breakpoint(dlg) {
        font-size: 9px;
      }
    }

    @include breakpoint(dxxxxl) {
      margin-top: 14px;
    }

    @include breakpoint(dlg) {
      margin-top: 10px;
    }
  }

  &__girl-input {
    margin-top: 18px;
    width: 273px;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 13px;
    line-height: 15px;
    background: #fff;

    @include breakpoint(dxxxxl) {
      margin-top: 12px;
      font-size: 11px;
    }

    @include breakpoint(dlg) {
      margin-top: 2px;
      font-size: 9px;
    }
  }

  &__boy {
    margin-top: 28.5px;

    label {
      font-family: "Manrope", sans-serif;
      font-weight: 600;
      font-style: normal;
      font-size: 14px;
      line-height: 18px;
      color: #797979;

      @include breakpoint(dxxxxl) {
        font-size: 13px;
      }

      @include breakpoint(dlg) {
        font-size: 9px;
      }
    }

    @include breakpoint(dxxxxl) {
      margin-top: 14px;
    }

    @include breakpoint(dlg) {
      margin-top: 10px;
    }
  }

  &__boy-input {
    margin-top: 18px;
    width: 273px;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 13px;
    line-height: 15px;
    background: #fff;

    @include breakpoint(dxxxxl) {
      margin-top: 12px;
      font-size: 11px;
    }

    @include breakpoint(dlg) {
      margin-top: 2px;
      font-size: 9px;
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;

    @include breakpoint(dxxxxl) {
      margin-top: 60px;
    }

    @include breakpoint(dlg) {
      margin-top: 45px;
    }
  }

  &__btn-cancel {
    border: 1px solid #d38eec;
    border-radius: 5px;
    width: 122px;
    height: 40px;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 13px;
    line-height: 18px;
    color: #771699;
    background: #fff;

    &:hover {
      outline-color: rgba(255, 255, 255, 0);
      outline-offset: 15px;
      border: 1px solid #771699;
      text-shadow: 1px 1px 2px #9ebecb;
    }
  }

  &__btn-create {
    border: 1px solid #ff006b;
    border-radius: 5px;
    width: 130px;
    height: 40px;
    box-sizing: border-box;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-style: normal;
    font-size: 13px;
    line-height: 18px;
    color: #fff;
    background: #ff006b;

    &:hover {
      outline-color: rgba(255, 255, 255, 0);
      outline-offset: 15px;
      border: 1px solid;
      text-shadow: 1px 1px 2px #427388;
    }
  }
}

.is-invalid {
  border: 0.8px solid #dc3545;
  border-radius: 4px;
}

.is-invalid-name {
  outline: none;
  border: none;
  border-bottom: 1px solid #dc3545;
  padding: 0 0 3px 5px;
  width: 273px;
}

.invalid-feed {
  margin-top: 10px;
  width: 100%;
  font-size: 20px;
  color: #dc3545;

  @include breakpoint(dxxxxl) {
    margin-top: 0.25rem;
    font-size: 16px;
  }

  @include breakpoint(dxxxl) {
    font-size: 13px;
  }

  @include breakpoint(dlg) {
    font-size: 11px;
  }

  @include breakpoint(dxxl) {
    margin-top: 0.25rem;
    font-size: 12px;
  }

  @include breakpoint(dmd) {
    font-size: 10px;
  }
}
</style>
