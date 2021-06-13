<template>
  <div class="my-participants">
    <div class="participants-block">
      <div class="participants-block__person">
        <div class="participants-block__person-img">
          <img src="../../../../../assets/Home/Menu/MyParticipants/image-user-big-one.png" alt="photo">
          <button class="participants-block__person-btn-one">
            <i class="el-icon-info"></i>
          </button>
          <button class="participants-block__person-btn-two">
            <i class="el-icon-s-comment"></i>
          </button>
          <button class="participants-block__person-btn-three">
            <i class="el-icon-delete-solid"></i>
          </button>
        </div>
        <div class="participants-block__info">
          <div class="participants-block__name">Владислав Новиков</div>
          <div class="participants-block__reduction-name">(Владислав)</div>
        </div>
      </div>
      <div class="participants-block__person">
        <div class="participants-block__person-img">
          <img src="../../../../../assets/Home/Menu/MyParticipants/image-user-big-one.png" alt="photo">
          <button class="participants-block__person-btn-one">
            <i class="el-icon-info"></i>
          </button>
          <button class="participants-block__person-btn-two">
            <i class="el-icon-s-comment"></i>
          </button>
          <button class="participants-block__person-btn-three">
            <i class="el-icon-delete-solid"></i>
          </button>
        </div>
        <div class="participants-block__info">
          <div class="participants-block__name">Владислав Новиков</div>
          <div class="participants-block__reduction-name">(Владислав)</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
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
</style>
