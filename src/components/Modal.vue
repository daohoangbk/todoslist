<template>
  <div id="">
    <div v-if="showModal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <h4>Warning</h4>
            <div class="modal-body">
                Are you sure to delete user {{user.name}}
            </div>
            <div class="modal-footer">
              <button class="modal-default-button" @click="cancelDeleteUser">Cancel</button>
              <button class="modal-default-button" @click="agreeDelete">Agree</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'showModal',
      'user'
    ],
    methods: {
      cancelDeleteUser: function () {
        this.$emit('cancelDeleteUser')
      },
      agreeDelete: function () {
        this.$emit('toggleDeleteUser', this.user.id)
      }
    }
  }
</script>
