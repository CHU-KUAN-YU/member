<template>
    <div>
        <b-container>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
            >
                <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your password:" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="form.password"
                placeholder="Enter password"
                required
                ></b-form-input>
            </b-form-group>

            <!-- <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                <b-form-select
                id="input-3"
                v-model="form.food"
                :options="foods"
                required
                ></b-form-select>
            </b-form-group> -->

            <!-- <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
                <b-form-checkbox-group
                v-model="form.checked"
                id="checkboxes-4"
                :aria-describedby="ariaDescribedby"
                >
                <b-form-checkbox value="me">Check me out</b-form-checkbox>
                <b-form-checkbox value="that">Check that out</b-form-checkbox>
                </b-form-checkbox-group>
            </b-form-group> -->

            <b-button type="submit" variant="primary" class="mx-2">Submit</b-button>
            <b-button type="reset" variant="danger" class="mx-2">Reset</b-button>
            </b-form>
            <Recaptcha></Recaptcha>
        </b-container>
        
    </div>
</template>

<script>
import Recaptcha from '../components/recaptcha';

  export default {
    data() {
      return {
        form: {
          email: 's123456@gmail.com',
          password: '0000',
        //   checked: []
        //   food: null,
        },
        // foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    components:{
        Recaptcha
    },
    methods: {
      onSubmit(event) {
        // let api = '/api/show';
        let api = `${process.env.VUE_APP_SERVER_URL}/master/data.json`;
        let vm = this;

        event.preventDefault()
        // alert(JSON.stringify(this.form))

        this.axios.get(api)
            // .then(data => {
            //     if(data.data.status != 200){
            //         this.$Message.error(data.data.message);
            //     }else{
            //         this.$store.dispatch("userLogin",true);
            //         localStorage.setItem("flag", "isLogin");
            //         this.$Message.success(data.data.message);
            //         this.$router.push("/home");
            //     }
            // })
            .then((response) => {
                const enterEmaill = this.form.email;
                const enterPassword = this.form.password

                const email = response.data.data.account.number;
                const password = response.data.data.account.password;

                if(enterEmaill == email && enterPassword == password){
                    alert('輸入正確');

                    this.$store.dispatch("userLogin",true);
                    localStorage.setItem("flag", "isLogin");
                    // this.$Message.success(data.data.message);
                    this.$router.push("/home");


                }else{
                    alert('輸入錯誤')
                }
                // console.log(response.data.data.account)
                // console.log(email ,password)
            })
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password = ''
        // this.form.food = null
        // this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>