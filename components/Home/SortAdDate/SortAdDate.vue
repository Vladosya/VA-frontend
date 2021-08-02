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
      <button class="sort-ad-date__btn" @click="sortByDates">
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
      dateMax: new Date().setDate(new Date().getDate() + 21),
    };
  },
  methods: {
    sortByDates() {
      if (this.selectedDateTwo !== null) {
        const selectedDateTwo = this.selectedDateTwo.toString();
        const needValue = selectedDateTwo.substr(8, 2);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sort-ad-date {
  position: relative;

  &__btn {
    position: absolute;
    right: 16px;
    bottom: 5px;
    z-index: 5;
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    width: 87px;
    height: 32px;
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
