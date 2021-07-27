<template>
  <div class="participants-person-card" v-if="m.openProfile">
    <img
      :src="`http://127.0.0.1:8000${m.user.photo}`"
      alt="tony profile picture"
    />
    <p class="participants-person-card__name">
      <strong>{{ m.user.username }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    m: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/settings";

.participants-person-card {
  position: fixed;
  left: 810px;
  top: 220px;
  border-radius: 10px;
  padding: 2em;
  width: 300px;
  box-shadow: 0 2px 5px rgb(0 0 0 / 50%), 0 1px 5px rgb(0 0 0 / 9%);
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
    left: 810px;
    top: 220px;
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