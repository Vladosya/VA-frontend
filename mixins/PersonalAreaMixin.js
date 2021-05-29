export default {
  methods: {
    NextPopupName() {
      if (this.formPersonalArea.name.length && this.$v.formPersonalArea.name.alpha) {
        this.popupChangeName = !this.popupChangeName
        this.$message({
          message: 'Ваше новое имя уже почти готово к изменению',
          type: 'success'
        })
        setTimeout(() => {
          this.$message('Чтобы все изменения вступили в силу нажмите на кнопку "Сохранить изменения".')
        }, 1500)
      } else {
        this.$message({
          showClose: true,
          message: 'Необходимо ввести имя.',
          type: 'warning'
        })
      }
    },
    NextPopupSex() {
      if (this.formPersonalArea.sex.length) {
        this.popupChangeSex = !this.popupChangeSex
        this.$message({
          message: 'Ваш новый пол уже почти готово к изменению',
          type: 'success'
        })
        setTimeout(() => {
          this.$message('Чтобы все изменения вступили в силу нажмите на кнопку "Сохранить изменения".')
        }, 1500)
      } else {
        this.$message({
          showClose: true,
          message: 'Необходимо выбрать пол.',
          type: 'warning'
        })
      }
    },
    NextPopupOld() {
      if (this.formPersonalArea.old.length) {
        this.popupChangeOld = !this.popupChangeOld
        this.$message({
          message: 'Ваш новый возраст уже почти готово к изменению',
          type: 'success'
        })
        setTimeout(() => {
          this.$message('Чтобы все изменения вступили в силу нажмите на кнопку "Сохранить изменения".')
        }, 1500)
      } else {
        this.$message({
          showClose: true,
          message: 'Необходимо указать возраст.',
          type: 'warning'
        })
      }
    },
    NextPopupCity() {
      if (this.formPersonalArea.city.length) {
        this.popupChangeCity = !this.popupChangeCity
        this.$message({
          message: 'Ваш новый выбранный город уже почти готово к изменению',
          type: 'success'
        })
        setTimeout(() => {
          this.$message('Чтобы все изменения вступили в силу нажмите на кнопку "Сохранить изменения".')
        }, 1500)
      } else {
        this.$message({
          showClose: true,
          message: 'Необходимо выбрать город.',
          type: 'warning'
        })
      }
    },
    NextPopupPassword() {
      if (this.formPersonalArea.oldPassword.length) {
        if (this.formPersonalArea.newPassword.length && this.formPersonalArea.confirmNewPassword.length && this.$v.formPersonalArea.confirmNewPassword.sameAs && this.formPersonalArea.oldPassword.length) {
          if (this.formPersonalArea.newPassword === this.oldPassword) {
            this.$message({
              showClose: true,
              message: 'Ваш старый пароль соответствует новому',
              type: 'warning'
            })
          } else {
            this.popupChangePassword = !this.popupChangePassword
            this.$message({
              message: 'Ваш новый пароль уже почти готово к изменению',
              type: 'success'
            })
            setTimeout(() => {
              this.$message('Чтобы все изменения вступили в силу нажмите на кнопку "Сохранить изменения".')
            }, 1500)
          }
        } else {
          this.$message({
            showClose: true,
            message: 'Необходимо заполнить поля нового пароля',
            type: 'warning'
          })
        }
      } else {
        this.$message({
          showClose: true,
          message: 'Необходимо заполнить поле старого пароля',
          type: 'warning'
        })
      }
    },
    cancelChangeCity() {
      this.formPersonalArea.city = ''
      this.popupChangeCity = !this.popupChangeCity
    },
    cancelChangeOld() {
      this.formPersonalArea.old = ''
      this.popupChangeOld = !this.popupChangeOld
    },
    cancelChangeSex() {
      this.formPersonalArea.sex = ''
      this.popupChangeSex = !this.popupChangeSex
    },
    cancelChangeName() {
      this.formPersonalArea.name = ''
      this.popupChangeName = !this.popupChangeName
    },
    cancelChangeButton() {
      this.formPersonalArea.oldPassword = ''
      this.formPersonalArea.newPassword = ''
      this.formPersonalArea.confirmNewPassword = ''
      this.popupChangePassword = !this.popupChangePassword
    }
  }
}
