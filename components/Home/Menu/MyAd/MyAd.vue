<template>
  <div class="myAd">
    <div class="myAd-block" v-for="(d, index) in inform" :key="d.id">
      <div class="myAd-information" v-if="!inform[index].editable">
        <div class="myAd-information__item">
          <p class="myAd-information__title">Название:</p>
          <p class="myAd-information__value">{{ d.nameParty }}</p>
        </div>
        <div class="myAd-information__item">
          <p class="myAd-information__title">Место вечеринки:</p>
          <p class="myAd-information__value">{{ d.place }}</p>
        </div>
        <div class="myAd-information__item">
          <p class="myAd-information__title">Дата вечеринки:</p>
          <p class="myAd-information__value">{{ d.dateParty }}</p>
        </div>
        <div class="myAd-information__item">
          <p class="myAd-information__title">Кол-во девушек:</p>
          <p class="myAd-information__value">{{ d.girl }}</p>
        </div>
        <div class="myAd-information__item">
          <p class="myAd-information__title">Кол-во парней:</p>
          <p class="myAd-information__value">{{ d.boy }}</p>
        </div>
        <div class="myAd-information__buttons">
          <button>
            <img src="../../../../assets/Home/Menu/MyAd/heart.svg" alt="heart">
            <p class="myAd-information__button-one">9+</p>
          </button>
          <button>
            <img src="../../../../assets/Home/Menu/MyAd/comment.svg" alt="comment">
            <p class="myAd-information__button-two">9+</p>
          </button>
          <button @click="enableEditing(index)" v-if="!isEnableEditing">
            <img src="../../../../assets/Home/Menu/MyAd/edit.svg" alt="edit">
          </button>
        </div>
      </div>

      <div v-if="!inform[index].editable">
        <MapForMyAd
          :coordinates="d.coordinates"
        />
      </div>

      <form class="myAd-block" @submit.prevent="updateMyAdSubmit">
        <div class="myAd-information" v-if="inform[index].editable">

          <div class="myAd-information__item" v-if="!inform[index].editName">
            <p class="myAd-information__title">Название:</p>
            <p class="myAd-information__value">{{
                updatedAdForm.nameParty.length ? updatedAdForm.nameParty : d.nameParty
              }}</p>
            <button class="myAd-information__editInput" @click="inform[index].editName = true">
              <img src="../../../../assets/Home/Menu/MyAd/editInput.svg" alt="editInput">
            </button>
          </div>
          <div class="myAd-information__item" v-if="inform[index].editName">
            <label class="myAd-information__title" for="name">Название:</label>
            <el-tooltip
              class="item" effect="dark" content="Необходимо указать Название объявления" placement="right"
            >
              <input
                @blur="$v.updatedAdForm.nameParty.$touch()"
                v-model.trim.lazy="updatedAdForm.nameParty"
                type="text"
                id="name"
                placeholder="Введите название объявления"
                class="myAd-information__input"
              />
            </el-tooltip>
            <button class="myAd-information__save" @click="saveChangeName(index)">
              <img src="../../../../assets/Home/Menu/MyAd/save.svg" alt="save">
            </button>
            <button class="myAd-information__cancel" @click="cancelChangeName(index)">
              <img src="../../../../assets/Home/Menu/MyAd/cancel.svg" alt="cancel">
            </button>
          </div>

          <div class="myAd-information__item" v-if="!inform[index].editPlace">
            <p class="myAd-information__title">Место вечеринки:</p>
            <p class="myAd-information__value">{{ updatedAdForm.place ? updatedAdForm.place : d.place }}</p>
            <button class="myAd-information__editInput" @click="clickToPlace(index)">
              <img src="../../../../assets/Home/Menu/MyAd/editInput.svg" alt="editInput">
            </button>
          </div>
          <div class="myAd-information__item" v-if="inform[index].editPlace">
            <label class="myAd-information__title" for="place">Место вечеринки:</label>
            <el-tooltip
              class="item" effect="dark" content="Необходимо на карте указать место вписки" placement="right"
            >
              <input
                @blur="$v.updatedAdForm.place.$touch()"
                id="place"
                v-model="updatedAdForm.place"
                placeholder="Место вечеринки"
                class="myAd-information__input-two"
                clearable
                readonly
              />
            </el-tooltip>
            <button class="myAd-information__save" @click="saveChangePlace(index)">
              <img src="../../../../assets/Home/Menu/MyAd/save.svg" alt="save">
            </button>
            <button class="myAd-information__cancel" @click="cancelChangePlace(index)">
              <img src="../../../../assets/Home/Menu/MyAd/cancel.svg" alt="cancel">
            </button>
          </div>

          <div class="myAd-information__item" v-if="!inform[index].editDate">
            <p class="myAd-information__title">Дата вечеринки:</p>
            <p class="myAd-information__value">{{
                updatedAdForm.dateParty.length ? new Date(updatedAdForm.dateParty).toLocaleDateString() : d.dateParty
              }}</p>
            <button class="myAd-information__editInput" @click="inform[index].editDate = true">
              <img src="../../../../assets/Home/Menu/MyAd/editInput.svg" alt="editInput">
            </button>
          </div>
          <div class="myAd-information__item" v-if="inform[index].editDate">
            <label class="myAd-information__title" for="date">Дата вечеринки:</label>
            <el-tooltip
              class="item" effect="dark" content="Необходимо указать дату и время начала вечеринки" placement="right"
            >
              <input
                @blur="$v.updatedAdForm.dateParty.$touch()"
                v-model.trim="updatedAdForm.dateParty"
                type="datetime-local"
                id="date"
                v-model="updatedAdForm.dateParty"
                placeholder="Выберите дату и время вечеринки"
                class="myAd-information__input-two"
              />
            </el-tooltip>
            <button class="myAd-information__save" @click="saveChangeDate(index)">
              <img src="../../../../assets/Home/Menu/MyAd/save.svg" alt="save">
            </button>
            <button class="myAd-information__cancel" @click="cancelChangeDate(index)">
              <img src="../../../../assets/Home/Menu/MyAd/cancel.svg" alt="cancel">
            </button>
          </div>

          <div class="myAd-information__item" v-if="!inform[index].editGirl">
            <p class="myAd-information__title">Кол-во девушек:</p>
            <p class="myAd-information__value">{{ updatedAdForm.girl.length ? updatedAdForm.girl : d.girl }}</p>
            <button class="myAd-information__editInput" @click="inform[index].editGirl = true">
              <img src="../../../../assets/Home/Menu/MyAd/editInput.svg" alt="editInput">
            </button>
          </div>
          <div class="myAd-information__item" v-if="inform[index].editGirl">
            <label class="myAd-information__title" for="girl">Кол-во девушек:</label>
            <el-tooltip
              class="item" effect="dark" content="Необходимо указать кол-во девушек на вечеринке" placement="right"
            >
              <input
                @blur="$v.updatedAdForm.girl.$touch()"
                v-model.trim="updatedAdForm.girl"
                type="number"
                id="girl"
                :min="0"
                class="myAd-information__input-two"
                placeholder="Укажите кол-во девушек"
              />
            </el-tooltip>
            <button class="myAd-information__save" @click="saveChangeGirl(index)">
              <img src="../../../../assets/Home/Menu/MyAd/save.svg" alt="save">
            </button>
            <button class="myAd-information__cancel" @click="cancelChangeGirl(index)">
              <img src="../../../../assets/Home/Menu/MyAd/cancel.svg" alt="cancel">
            </button>
          </div>

          <div class="myAd-information__item" v-if="!inform[index].editBoy">
            <p class="myAd-information__title">Кол-во парней:</p>
            <p class="myAd-information__value">{{ updatedAdForm.boy.length ? updatedAdForm.boy : d.boy }}</p>
            <button class="myAd-information__editInput" @click="inform[index].editBoy = true">
              <img src="../../../../assets/Home/Menu/MyAd/editInput.svg" alt="editInput">
            </button>
          </div>
          <div class="myAd-information__item" v-if="inform[index].editBoy">
            <label class="myAd-information__title" for="boy">Кол-во парней:</label>
            <el-tooltip
              class="item" effect="dark" content="Необходимо указать кол-во парней на вечеринке" placement="right"
            >
              <input
                @blur="$v.updatedAdForm.boy.$touch()"
                v-model.trim="updatedAdForm.boy"
                type="number"
                id="boy"
                :min="0"
                class="myAd-information__input-two"
                placeholder="Укажите кол-во парней"
              />
            </el-tooltip>
            <button class="myAd-information__save" @click="saveChangeBoy(index)">
              <img src="../../../../assets/Home/Menu/MyAd/save.svg" alt="save">
            </button>
            <button class="myAd-information__cancel" @click="cancelChangeBoy(index)">
              <img src="../../../../assets/Home/Menu/MyAd/cancel.svg" alt="cancel">
            </button>
          </div>

          <div class="myAd-information__buttons-edit">
            <el-tooltip class="item" effect="dark" content="Отмена" placement="left">
              <button class="myAd-information__buttons-edit-one" @click="cancelEditing(index)">
                <img src="../../../../assets/Home/Menu/MyAd/cancelChanges.svg" alt="cancelChanges">
              </button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Сохранить" placement="left">
              <button class="myAd-information__buttons-edit-two" type="submit" @click.prevent="updateMyAdSubmit">
                <img src="../../../../assets/Home/Menu/MyAd/saveChanges.svg" alt="saveChanges">
              </button>
            </el-tooltip>
          </div>
        </div>

        <div class="myAd-map" v-if="inform[index].editable">
          <button @click="clickToChoosePlace = true">Изменить место вписки</button>
        </div>
        <div class="myAd-edit-map" v-if="clickToChoosePlace">
          <MapForMyAdEdit
            @createMarker="infoMarket"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import MapForMyAd from '@/components/Home/Menu/MyAd/MapForMyAd'
import MyAdMixin from '@/mixins/MyAdMixin'
import MapForMyAdEdit from '@/components/Home/Menu/MyAd/MapForMyAdEdit'

export default {
  mixins: [MyAdMixin],
  data() {
    return {
      updatedAdForm: {
        nameParty: '',
        place: '',
        dateParty: '',
        girl: '',
        boy: '',
        coordinates: ''
      },
      inform: [
        {
          nameParty: 'VA',
          place: 'Чернышевского 9 / 13 к 2',
          dateParty: '10.06.21',
          girl: 3,
          boy: 2,
          coordinates: {lat: 55.7522200, lng: 37.7155600},
          editable: false,
          editName: false,
          editPlace: false,
          editDate: false,
          editGirl: false,
          editBoy: false
        },
        {
          nameParty: 'My Party',
          place: 'Лубянка 2',
          dateParty: '12.06.21',
          girl: 1,
          boy: 2,
          coordinates: {lat: 55.7522200, lng: 37.6155600},
          editable: false,
          editName: false,
          editPlace: false,
          editDate: false,
          editGirl: false,
          editBoy: false
        }
      ],
      clickToChoosePlace: false,
      isEnableEditing: false
    }
  },
  methods: {
    updateMyAdSubmit() {
      this.$v.$touch()
      if (this.updatedAdForm.nameParty.length || this.updatedAdForm.place || this.updatedAdForm.dateParty.length || this.updatedAdForm.girl.length || this.updatedAdForm.boy.length) {
        console.log('success')
      } else {
        console.log('error')
      }
    },
    status(validation) {
      return {
        'is-invalid': validation.$error,
      }
    },
    enableEditing(index) {
      this.inform[index].editable = true
      this.isEnableEditing = true
      this.updatedAdForm.nameParty = ''
      this.updatedAdForm.place = ''
      this.updatedAdForm.dateParty = ''
      this.updatedAdForm.girl = ''
      this.updatedAdForm.boy = ''
    },
    clickToPlace(index) {
      this.inform[index].editPlace = true
      this.clickToChoosePlace = true
    },
    cancelEditing(index) {
      this.inform[index].editable = false
      this.isEnableEditing = false
    },
    infoMarket(data) {
      if (data.length) {
        this.updatedAdForm.place = data[0].position.lat
        this.updatedAdForm.coordinates = {
          lat: data[0].position.lat,
          lng: data[0].position.lng
        }
        this.clickToChoosePlace = false
      }
    }
  },
  components: {
    MapForMyAd,
    MapForMyAdEdit
  },
  validations: {
    updatedAdForm: {
      nameParty: {},
      place: {},
      dateParty: {},
      girl: {},
      boy: {}
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../../../assets/settings";

.myAd {
  position: absolute;
  margin-bottom: 10px;
}

.myAd-edit-map {
  position: absolute;
  top: 0;
}

.myAd-block {
  display: grid;
  grid-template-columns: 559px 350px;
  margin-top: 10px;
  background-color: #fef3fc;

  @include breakpoint(dxxxxl) {
    grid-template-columns: 511px 300px;
    margin-top: 7px;
  }

  @include breakpoint(dxxxl) {
    grid-template-columns: 339px 250px;
    margin-top: 5px;
  }

  @include breakpoint(dxxl) {
    grid-template-columns: 339px 250px;
    margin-top: 5px;
  }

  @include breakpoint(dsm) {
    grid-template-columns: 289px 180px;
  }
}

.myAd-information {
  padding: 10px 0 10px 10px;

  &__item {
    display: flex;
    align-items: center;
    padding-bottom: 35px;

    @include breakpoint(dxxxxl) {
      padding-bottom: 25px;
    }

    @include breakpoint(dxxxl) {
      padding-bottom: 15px;
    }

    @include breakpoint(dxxl) {
      padding-bottom: 15px;
    }

    @include breakpoint(dsm) {
      padding-bottom: 11px;
    }
  }

  &__title {
    align-items: center;
    margin-right: 16px;
    font-weight: 500;
    font-style: normal;
    font-size: 21px;
    line-height: 13px;
    text-transform: uppercase;
    color: #9f5db5;

    @include breakpoint(dxxxxl) {
      margin-right: 11px;
      font-size: 17px;
      line-height: 13px;
    }

    @include breakpoint(dxxxl) {
      margin-right: 6px;
      font-size: 14px;
      line-height: 13px;
    }

    @include breakpoint(dxxl) {
      margin-right: 6px;
      font-size: 13px;
      line-height: 13px;
    }

    @include breakpoint(dsm) {
      margin-right: 6px;
      font-size: 11px;
      line-height: 13px;
    }
  }

  &__value {
    margin-right: 10px;
    font-weight: 500;
    font-style: normal;
    font-size: 20px;
    line-height: 12px;
    color: #f9822c;

    @include breakpoint(dxxxxl) {
      font-size: 16px;
      line-height: 12px;
    }

    @include breakpoint(dxxxl) {
      font-size: 13px;
      line-height: 12px;
    }

    @include breakpoint(dxxl) {
      font-size: 12px;
      line-height: 12px;
    }

    @include breakpoint(dsm) {
      font-size: 11px;
      line-height: 12px;
    }
  }

  &__editInput {
    background: none;
  }

  &__input {
    margin-right: 7px;
    border-radius: 4px;
    padding-left: 3px;
    width: 172px;
    font-weight: 500;
    font-style: normal;
    font-size: 20px;
    line-height: 12px;
    color: #f9822c;

    @include breakpoint(dxxxxl) {
      font-size: 16px;
      line-height: 12px;
    }

    @include breakpoint(dxxxl) {
      font-size: 13px;
      line-height: 12px;
    }

    @include breakpoint(dxxl) {
      font-size: 12px;
      line-height: 12px;
    }

    @include breakpoint(dsm) {
      font-size: 11px;
      line-height: 12px;
    }
  }

  &__input-two {
    margin-right: 7px;
    border-radius: 4px;
    padding-left: 3px;
    width: 147px;
    font-weight: 500;
    font-style: normal;
    font-size: 20px;
    line-height: 12px;
    color: #f9822c;

    @include breakpoint(dxxxxl) {
      font-size: 16px;
      line-height: 12px;
    }

    @include breakpoint(dxxxl) {
      font-size: 13px;
      line-height: 12px;
    }

    @include breakpoint(dxxl) {
      font-size: 12px;
      line-height: 12px;
    }

    @include breakpoint(dsm) {
      font-size: 11px;
      line-height: 12px;
    }
  }

  &__save {
    margin-right: 7px;
    background: none;

    img {
      width: 15px;
      height: 15px;
    }
  }

  &__cancel {
    background: none;

    img {
      width: 15px;
      height: 15px;
    }
  }

  &__buttons {
    display: flex;
    margin-top: 10px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 90px;
      border-radius: 100%;
      background-color: #fef3fc;

      img {
        border-radius: 100%;
        width: 55px;
        height: 55px;

        @include breakpoint(dxxxxl) {
          width: 46px;
          height: 46px;
        }

        @include breakpoint(dxxxl) {
          width: 40px;
          height: 40px;
        }

        @include breakpoint(dxxl) {
          width: 40px;
          height: 40px;
        }

        @include breakpoint(dsm) {
          width: 30px;
          height: 30px;
        }
      }

      p {
        position: absolute;
        font-size: 14px;

        @include breakpoint(dxxxxl) {
          font-size: 11px;
        }

        @include breakpoint(dxxxl) {
          font-size: 10px;
        }

        @include breakpoint(dxxl) {
          font-size: 10px;
        }

        @include breakpoint(dsm) {
          font-size: 8px;
        }
      }

      &:hover {
        outline-color: rgba(255, 255, 255, 0);
        outline-offset: 15px;
        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
        text-shadow: 1px 1px 2px #9ebecb;
      }
    }

    @include breakpoint(dxxxxl) {
      margin-top: 16px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 10px;
    }

    @include breakpoint(dxxl) {
      margin-top: 10px;
    }
  }

  &__buttons-edit {
    display: flex;
    margin-top: 10px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100%;
      background-color: #fef3fc;

      img {
        border-radius: 100%;
        width: 55px;
        height: 55px;

        @include breakpoint(dxxxxl) {
          width: 46px;
          height: 46px;
        }

        @include breakpoint(dxxxl) {
          width: 40px;
          height: 40px;
        }

        @include breakpoint(dxxl) {
          width: 40px;
          height: 40px;
        }

        @include breakpoint(dsm) {
          width: 30px;
          height: 30px;
        }
      }

      p {
        position: absolute;
        font-size: 14px;

        @include breakpoint(dxxxxl) {
          font-size: 11px;
        }

        @include breakpoint(dxxxl) {
          font-size: 10px;
        }

        @include breakpoint(dxxl) {
          font-size: 10px;
        }

        @include breakpoint(dsm) {
          font-size: 8px;
        }
      }

      &:hover {
        outline-color: rgba(255, 255, 255, 0);
        outline-offset: 15px;
        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
        text-shadow: 1px 1px 2px #9ebecb;
      }
    }

    @include breakpoint(dxxxxl) {
      margin-top: 16px;
    }

    @include breakpoint(dxxxl) {
      margin-top: 10px;
    }

    @include breakpoint(dxxl) {
      margin-top: 10px;
    }
  }

  &__buttons-edit-one {
    margin: 0 100px 0 65px;
  }

  &__button-one {
    color: #1892a6;
  }

  &__button-two {
    color: #d0bc57;
  }

  @include breakpoint(dxxxxl) {
    padding: 14px 0 10px 10px;
  }

  @include breakpoint(dxxxl) {
    padding: 10px 0 10px 10px;
  }

  @include breakpoint(dsm) {
    padding: 10px 0 20px 10px;
  }
}

.myAd-map {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  width: 350px;
  height: 350px;
  background: url("../../../../assets/Home/Menu/MyAd/map-photo.png") 0 0/auto 100% no-repeat;

  button {
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
      box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
      text-shadow: 1px 1px 2px #9ebecb;
    }
  }

  @include breakpoint(dxxxxl) {
    width: 300px;
    height: 300px;
  }

  @include breakpoint(dxxxl) {
    width: 235px;
    height: 235px;
  }

  @include breakpoint(dxxl) {
    width: 235px;
    height: 235px;
  }

  @include breakpoint(dsm) {
    width: 180px;
    height: 180px;
  }
}

.is-invalid {
  border: 0.8px solid #dc3545;
  border-radius: 4px;
}
</style>
