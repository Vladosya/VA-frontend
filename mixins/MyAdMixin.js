export default {
  methods: {
    saveChanges(index, value, needVal, changeTheValue, messageSuccess, messageWarning) {
      if (changeTheValue) {
        this.$store.commit('myParty/changeNeedValue', {
          index: index,
          value: value,
          needVal: needVal
        })
        this.$message({
          message: `${messageSuccess}`,
          type: 'success'
        })
        setTimeout(() => {
          this.$message('Чтобы все изменения вступили в силу нажмите на кнопку "Сохранить".')
        }, 1500)
      } else {
        this.$message({
          showClose: true,
          message: `${messageWarning}`,
          type: 'warning'
        })
      }
    },
    cancelChanges(index, value, needVal, changeTheValue) {
      changeTheValue = ''
      this.updatedAdForm.nameParty = ''
      this.$store.commit('myParty/changeNeedValue', {
        index: index,
        value: value,
        needVal: needVal
      })
    }
  }
}
