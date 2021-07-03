<template>
  <div class="content">
    <div class="calendar">
      <el-calendar :range="['2019-03-04', '2019-03-24']"/>
      <div class="btn">
        <button class="button">
          <i class="el-icon-sort"></i>
          Отсортировать
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
}

.el-calendar {
  width: 400px;
  height: 353px;
  font-size: 13px;
}

.calendar {
  border-radius: 10px;
  padding: 10px 0;
  width: 402px;
  height: 411px;
  background-color: #fff;
}

.btn {
  padding: 5px 20px;
  text-align: right;
}

.button {
  border: none;
  border-radius: 5px;
  width: 120px;
  height: 38px;
  font-size: 11px;
  color: #fff;
  background: #ff006b none;

  &:hover {
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    border: 1px solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
    text-shadow: 1px 1px 2px #427388;
  }
}
</style>
