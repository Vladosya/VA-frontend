<template>
  <client-only>
    <div class="sort-ad-date">
      <div>
        <v-date-picker
          title-position="left"
          :min-date="new Date()"
          :max-date="dateMax"
          color="pink"
          v-model="selectedDateTwo"
        />
      </div>
      <button class="sort-ad-date__btn-off" @click="sortThrowOff">
        Сбросить
      </button>
      <button class="sort-ad-date__btn-sort" @click="sortByDates">
        Отсортировать
      </button>
    </div>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      selectedDateTwo: "",
      dateMax: new Date().setDate(new Date().getDate() + 28),
      changeSortArr: false,
    };
  },
  methods: {
    sortByDates() {
      if (this.selectedDateTwo !== null) {
        const selectedDateTwo = this.selectedDateTwo.toString();
        const needValue = selectedDateTwo.substr(8, 2);
        this.changeSortArr = true;
        this.$store.commit("map/sortAdById", Number(needValue));
      }
    },
    sortThrowOff() {
      if (this.changeSortArr === true) {
        this.$store.commit("map/sortAdThrowOff");
      } else {
        this.$message({
          message: "Вы не сортировали объявления по дате, чтобы сбрасывать",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sort-ad-date {
  position: relative;

  &__btn-off {
    position: absolute;
    right: 94px;
    bottom: 5px;
    z-index: 5;
    border: 1px solid #d38eec;
    border-radius: 5px;
    width: 78px;
    height: 30px;
    font-size: 11px;
    color: #771699;
    background-color: #fff;

    &:hover {
      outline-color: rgba(255, 255, 255, 0);
      outline-offset: 15px;
      border: 1px solid;
    }
  }

  &__btn-sort {
    position: absolute;
    right: 11px;
    bottom: 5px;
    z-index: 5;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    width: 78px;
    height: 30px;
    font-size: 11px;
    color: #fff;
    background-color: #c52376;

    &:hover {
      outline-color: rgba(255, 255, 255, 0);
      outline-offset: 15px;
      border: 1px solid;
    }
  }
}
</style>
