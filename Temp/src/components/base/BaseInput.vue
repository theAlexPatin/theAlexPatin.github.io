<template>
  <div class="form-group">
    <input ref="field" v-if="type === 'text'" type="text" :name="name" class="form-control" autocomplete="off" required>
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
    value() {
      this.content = this.value
    }
  },
  computed: {
    inputListeners: function() {
      var vm = this
      // `Object.assign` merges objects together to form a new object
      return Object.assign({},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          input: event => this.$emit('input', this.content)
        }
      )
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
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
  z-index: 1001;
}

textarea:focus {
  background: white;
  border: none;
  color: black;
}

.form-group {
  position: relative;
  margin-bottom: 1.5rem;
}

.form-control {
  background: transparent;
  height: 40px;
  border: none;
  border-bottom: 1px solid white;
  padding-left: 10px;
  color: white;
  z-index: 1001;
}

.form-control:focus {
  background: white;
  border: none;
  color: black;
}

.form-control-placeholder {
  text-transform: uppercase;
  position: absolute;
  top: 20px;
  left: 10px;
  padding: 7px 0 0 13px;
  transition: all 200ms;
  color: #ff8080;
  z-index: 800;
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

.valid,
textarea:focus {
  margin-top: 15px;
}

</style>
