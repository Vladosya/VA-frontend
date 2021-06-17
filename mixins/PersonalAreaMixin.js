export default {
  methods: {
    nextPopup(changeTheValue, needVal, messageSuccess, messageWarning) {
      if (changeTheValue) {
        if (needVal === 'popupChangeName') {
          this.popupChangeName = !this.popupChangeName
        } else if (needVal === 'popupChangeSex') {
          this.popupChangeSex = !this.popupChangeSex
        } else if (needVal === 'popupChangeOld') {
          this.popupChangeOld = !this.popupChangeOld
        } else if (needVal === 'popupChangeCity') {
          this.popupChangeCity = !this.popupChangeCity
        }

        this.$message({
          message: `${messageSuccess}`,
          type: 'success'
        })
        setTimeout(() => {
          this.$message('Чтобы все изменения вступили в силу нажмите на кнопку "Сохранить изменения".')
        }, 1500)
      } else {
        this.$message({
          showClose: true,
          message: `${messageWarning}`,
          type: 'warning'
        })
      }
    },
    nextPopupPassword() {
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
    cancelChange(needVal) {
      if (needVal === 'popupCancelName') {
        this.formPersonalArea.name = ''
        this.popupChangeName = !this.popupChangeName
      } else if (needVal === 'popupCancelSex') {
        this.formPersonalArea.sex = ''
        this.popupChangeSex = !this.popupChangeSex
      } else if (needVal === 'popupCancelOld') {
        this.formPersonalArea.old = ''
        this.popupChangeOld = !this.popupChangeOld
      } else if (needVal === 'popupCancelCity') {
        this.formPersonalArea.city = ''
        this.popupChangeCity = !this.popupChangeCity
      }
    },
    cancelChangeButton() {
      this.formPersonalArea.oldPassword = ''
      this.formPersonalArea.newPassword = ''
      this.formPersonalArea.confirmNewPassword = ''
      this.popupChangePassword = !this.popupChangePassword
    }
  }
}
