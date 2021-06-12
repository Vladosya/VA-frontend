export default {
  methods: {
    saveChangeName(index) {
      if (this.updatedAdForm.nameParty.length) {
        this.inform[index].editName = !this.inform[index].editName
        this.$message({
          message: 'Ваше название вечеринки уже почти готово к изменению',
          type: 'success'
        })
        setTimeout(() => {
          this.$message('Чтобы все изменения вступили в силу нажмите на кнопку "Сохранить".')
        }, 1500)
      } else {
        this.$message({
          showClose: true,
          message: 'Необходимо ввести название вечеринки.',
          type: 'warning'
        })
      }
    },
    saveChangePlace(index) {
      if (this.updatedAdForm.place) {
        this.inform[index].editPlace = !this.inform[index].editPlace
        this.$message({
          message: 'Ваше новое место вечеринки уже почти готово к изменению',
          type: 'success'
        })
        setTimeout(() => {
          this.$message('Чтобы все изменения вступили в силу нажмите на кнопку "Сохранить".')
        }, 1500)
      } else {
        this.$message({
          showClose: true,
          message: 'Необходимо выбрать место вечеринки.',
          type: 'warning'
        })
      }
    },
    saveChangeDate(index) {
      if (this.updatedAdForm.dateParty.length) {
        this.inform[index].editDate = !this.inform[index].editDate
        this.$message({
          message: 'Ваша новая дата и время вечеринки уже почти готово к изменению',
          type: 'success'
        })
        setTimeout(() => {
          this.$message('Чтобы все изменения вступили в силу нажмите на кнопку "Сохранить".')
        }, 1500)
      } else {
        this.$message({
          showClose: true,
          message: 'Необходимо выбрать дату и время начала вечеринки.',
          type: 'warning'
        })
      }
    },
    saveChangeGirl(index) {
      if (this.updatedAdForm.girl.length) {
        this.inform[index].editGirl = !this.inform[index].editGirl
        this.$message({
          message: 'Количество девушек на вечеринке уже почти готово к изменению',
          type: 'success'
        })
        setTimeout(() => {
          this.$message('Чтобы все изменения вступили в силу нажмите на кнопку "Сохранить".')
        }, 1500)
      } else {
        this.$message({
          showClose: true,
          message: 'Необходимо выбрать количество девушек на вечеринке.',
          type: 'warning'
        })
      }
    },
    saveChangeBoy(index) {
      if (this.updatedAdForm.boy.length) {
        this.inform[index].editBoy = !this.inform[index].editBoy
        this.$message({
          message: 'Количество парней на вечеринке уже почти готово к изменению',
          type: 'success'
        })
        setTimeout(() => {
          this.$message('Чтобы все изменения вступили в силу нажмите на кнопку "Сохранить".')
        }, 1500)
      } else {
        this.$message({
          showClose: true,
          message: 'Необходимо выбрать количество парней на вечеринке.',
          type: 'warning'
        })
      }
    },
    cancelChangeName(index) {
      this.updatedAdForm.nameParty = ''
      this.inform[index].editName = !this.inform[index].editName
    },
    cancelChangePlace(index) {
      this.updatedAdForm.place = ''
      this.inform[index].editPlace = !this.inform[index].editPlace
    },
    cancelChangeDate(index) {
      this.updatedAdForm.dateParty = ''
      this.inform[index].editDate = !this.inform[index].editDate
    },
    cancelChangeGirl(index) {
      this.updatedAdForm.girl = ''
      this.inform[index].editGirl = !this.inform[index].editGirl
    },
    cancelChangeBoy(index) {
      this.updatedAdForm.boy = ''
      this.inform[index].editBoy = !this.inform[index].editBoy
    }
  }
}
