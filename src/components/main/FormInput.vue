<template>
  <div class="contact-me">
    <h2>{{ 'Contact Me'.toUpperCase() }}</h2>
    <div class="divider"></div>
    <!-- /.divider -->
    <div class="form">
      <v-text-field
        placeholder="Name*"
        color="white"
        solo
        class="contact-text-field"
        v-model="name"
      ></v-text-field>
      <v-text-field
        placeholder="Email*"
        color="white"
        solo
        class="contact-text-field"
        v-model="email"
      ></v-text-field>
      <v-text-field
        placeholder="Subject*"
        color="white"
        solo
        class="contact-text-field"
        v-model="subject"
      ></v-text-field>
      <v-textarea solo placeholder="Message*" v-model="message"></v-textarea>
      <v-row justify="center"
        ><v-btn color="#82b1ff" dark @click="requestSendEmail"
          >Submit</v-btn
        ></v-row
      >
    </div>
    <!-- /.form -->
    <!-- <div v-for="(bodys, i) in body.data" :key="i">
      <h3>
        {{ 'Name :' + bodys.employee_name }}
        {{ 'Age :' + bodys.employee_age }}
      </h3>
    </div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
import sendGrid from '@/config/sendGrid.json';
export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  },
  computed: { ...mapState(['body']) },
  beforeMount() {},
  methods: {
    httpGetExample() {
      /* beforeMount 훅은 템플릿과 렌더 함수들이 컴파일된 후에 첫 렌더링이 일어나기 직전에 실행된다.
    대부분의 경우에 사용하지 않는 것이 좋다. 그리고 서버사이드 렌더링시에는 호출되지 않는다. */

      //통신의 기본적 형태
      /* this.$http
      .get('https://dummy.restapiexample.com/api/v1/employees')
      .then(function(response) {
        // handle success
        console.log(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      }); */
      // for (let i = 0; i <= this.body.data.length; i++) {
      //   console.log(this.body.data[i].employee_name);
      //   console.log(this.body.data[i].employee_age);
      // }
      // for (let i = 0; i <= this.body.data.length; i++) {
      //   let employee = this.body.data[i];
      //   console.log(
      //     'name' + employee.employee_name + 'age' + employee.employee_age
      //   );
      // }
      //for of 문
      console.log('for of 문');
      for (let employee of this.body.data) {
        console.log(
          'name' + employee.employee_name + 'age' + employee.employee_age
        );
      }
      console.log('for each 사용법');
      this.body.data.forEach((employee) => {
        console.log(
          'name' + employee.employee_name + 'age' + employee.employee_age
        );
      });
    },
    requestSendEmail() {
      let body = {
        personalizations: [
          {
            to: [
              {
                email: 'jaeyoung8456@gmail.com',
              },
            ],
            subject: this.subject,
          },
        ],
        from: {
          email: this.email,
        },
        content: [
          {
            type: 'text/plain',
            value: '안녕 나는 ' + this.name + this.message,
          },
        ],
      };
      this.$http
        .post('https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send', body, {
          headers: {
            'content-type': 'application/json', //콘텐츠 타입 - 정해져있는 규칙 같은 것(지켜줘야함) 보낸 데이터의 타입이 JSON
            'x-rapidapi-host': 'rapidprod-sendgrid-v1.p.rapidapi.com', //아래는 개발자가 마음대로 ~ 아이디
            //말그대로 KEY  비밀번호
            'x-rapidapi-key': sendGrid.key,
            accept: 'application/json', //json으로 accept하겠다 는 이야기
            useQueryString: true, //쿼리를 사용하겠다
          },
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-me {
  background-color: #333;
  padding: 50px;
}
h2 {
  color: #fff;
}
.contact-text-field {
  margin-bottom: 10px;
}
</style>
