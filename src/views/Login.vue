<template>
  <v-container>
      <form>
        <v-text-field
        v-model="password"
        :error-messages="passwordErrors"
        label="Password"
        required
        ></v-text-field>
        <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        ></v-text-field>

    <v-btn
      class="mr-4"
      @click="submit"
    >
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>
  </v-container>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      password: { required, minLength: minLength(10), maxLength: maxLength(50) },
      email: { required, email },
    },

    data: () => ({
      password: '',
      email: '',
    }),

    computed: {
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.minLength && errors.push('Password must be at least 10 characters')
        !this.$v.password.maxLength && errors.push('Password must not exceed 50 characters')
        !this.$v.password.required && errors.push('Password is required.')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('E-mail is required')
        return errors
      },
    },

    methods: {
      submit () {

        if(this.$v.$invalid) {
          this.$v.$touch();

          return;
      }

        const formData = {
            email: this.email,
            password: this.password
        };

        localStorage.setItem('user', JSON.stringify(formData));

        this.$router.push('/');
      },
      clear () {
        this.$v.$reset()
        this.password = ''
        this.email = ''
      },
    },
  }
</script>