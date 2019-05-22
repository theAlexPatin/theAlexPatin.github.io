<template>
  <div class="form-group">
    <input ref="field"
        v-model="content"
        v-if="type === 'text'"
        type="text"
        :name="name"
        class="form-control"
        autocomplete="off"
        required>
    <textarea v-model="content" v-else ref="field" :class="{ valid: content !== '' }" name="message"/>
    <label tabindex="-1" class="form-control-placeholder"
        for="name">
      <a href="javascript:void" @click="click">{{title}}</a>
    </label>
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  data() {
    return {
      content: this.value,
    }
  },
  methods: {
    click() {
      this.$refs.field.focus()
    }
  },
  watch: {
    content () {
      this.$emit('input', this.content)
    },
    input () {
      this.content = this.input
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>
<style scoped>
textarea {
  width: 100%;
  padding-top: 10px;
  background: transparent;
  height: 40px;
  border: none;
  border-bottom: 1px solid white;
  padding-left: 10px;
  color: white;
  width: 100%;
}

textarea:focus {
  background: white;
  border: none;
  color: black;
}

.form-group {
  position: relative;
  margin-bottom: 40px;
}

.form-control {
  background: transparent;
  height: 40px;
  border: none;
  border-bottom: 1px solid white;
  padding-left: 10px;
  color: white;
  width: 100%;
}

.form-control:focus {
  border: none;
  color: #ff8080;
}

.form-control-placeholder {
  text-transform: uppercase;
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 7px 0 0 13px;
  transition: all 200ms;
  color: #ff8080;
}

a {
  color: #ff8080;
  text-decoration: none;
  cursor: text;
}

.form-control:focus + .form-control-placeholder,
.form-control:valid + .form-control-placeholder,
.valid + .form-control-placeholder,
textarea:focus + .form-control-placeholder {
  font-size: 75%;
  transform: translate3d(0, -160%, 0);
  opacity: 1;
}



</style>
