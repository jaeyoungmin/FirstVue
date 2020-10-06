import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogs: [{
        title: "MOBILE FIRST & RESPONSIVE",
        imgUrl: "https://img.animalplanet.co.kr/news/2019/08/12/700/6k78a5j050yk11012f2b.jpg",

        text: "Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum."
      },
      {
        title: "THINK OUTSIDE THE BOX",
        imgUrl: "https://img.animalplanet.co.kr/news/2019/08/12/700/6k78a5j050yk11012f2b.jpg",
        text: "Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh."
      },
      {
        title: "SMALL CHANGES, BIG DIFFERENCE",
        imgUrl: "data:image/jpeg;base64,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",
        text: "Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget."
      }
    ],
    files: [{
        title: "Ex예제입니다",
        url: "https://bhent.co.kr/static/132b568efc531890a392c8d77e3ef93c/e376d/%25ED%2594%2584%25EB%25A1%259C%25ED%2595%2584_%25EA%25B0%2580%25EB%25A1%259C_mhxxoi.jpg",
        text: "한효주입니다."
      },
      {
        title: "Ex예제입니다",
        url: "https://www.startuptoday.co.kr/news/photo/201906/23520_6286_0327.jpg",
        text: "한효주입니다."
      },
      {
        title: "Ex예제입니다",
        url: "https://lh3.googleusercontent.com/proxy/q9oXaPa11jmFkOgmIyOIk-vcReZq1z4qDTDCq-pHzgQnmOX4Fb2hhXw2NkY7CgHFQ2QpPLhpCwzZn3i5CwonZLL8wC8BKx3aUVHayhbaH-thGZ-fD8zRFBrPcpzbXQ",
        text: "한효주입니다."
      }
    ],
    body: {
      status: "success",
      data: [{
          id: 1,
          employee_name: "Tiger Nixon",
          employee_salary: 320800,
          employee_age: 61,
          profile_image: ""
        },
        {
          id: 2,
          employee_name: "Garrett Winters",
          employee_salary: 170750,
          employee_age: 63,
          profile_image: ""
        },
        {
          id: 3,
          employee_name: "Ashton Cox",
          employee_salary: 86000,
          employee_age: 66,
          profile_image: ""
        },
        {
          id: 4,
          employee_name: "Cedric Kelly",
          employee_salary: 433060,
          employee_age: 22,
          profile_image: ""
        },
        {
          id: 5,
          employee_name: "Airi Satou",
          employee_salary: 162700,
          employee_age: 33,
          profile_image: ""
        },
        {
          id: 6,
          employee_name: "Brielle Williamson",
          employee_salary: 372000,
          employee_age: 61,
          profile_image: ""
        },
        {
          id: 7,
          employee_name: "Herrod Chandler",
          employee_salary: 137500,
          employee_age: 59,
          profile_image: ""
        },
        {
          id: 8,
          employee_name: "Rhona Davidson",
          employee_salary: 327900,
          employee_age: 55,
          profile_image: ""
        },
        {
          id: 9,
          employee_name: "Colleen Hurst",
          employee_salary: 205500,
          employee_age: 39,
          profile_image: ""
        },
        {
          id: 10,
          employee_name: "Sonya Frost",
          employee_salary: 103600,
          employee_age: 23,
          profile_image: ""
        },
        {
          id: 11,
          employee_name: "Jena Gaines",
          employee_salary: 90560,
          employee_age: 30,
          profile_image: ""
        },
        {
          id: 12,
          employee_name: "Quinn Flynn",
          employee_salary: 342000,
          employee_age: 22,
          profile_image: ""
        },
        {
          id: 13,
          employee_name: "Charde Marshall",
          employee_salary: 470600,
          employee_age: 36,
          profile_image: ""
        },
        {
          id: 14,
          employee_name: "Haley Kennedy",
          employee_salary: 313500,
          employee_age: 43,
          profile_image: ""
        },
        {
          id: 15,
          employee_name: "Tatyana Fitzpatrick",
          employee_salary: 385750,
          employee_age: 19,
          profile_image: ""
        },
        {
          id: 16,
          employee_name: "Michael Silva",
          employee_salary: 198500,
          employee_age: 66,
          profile_image: ""
        },
        {
          id: 17,
          employee_name: "Paul Byrd",
          employee_salary: 725000,
          employee_age: 64,
          profile_image: ""
        },
        {
          id: 18,
          employee_name: "Gloria Little",
          employee_salary: 237500,
          employee_age: 59,
          profile_image: ""
        },
        {
          id: 19,
          employee_name: "Bradley Greer",
          employee_salary: 132000,
          employee_age: 41,
          profile_image: ""
        },
        {
          id: 20,
          employee_name: "Dai Rios",
          employee_salary: 217500,
          employee_age: 35,
          profile_image: ""
        },
        {
          id: 21,
          employee_name: "Jenette Caldwell",
          employee_salary: 345000,
          employee_age: 30,
          profile_image: ""
        },
        {
          id: 22,
          employee_name: "Yuri Berry",
          employee_salary: 675000,
          employee_age: 40,
          profile_image: ""
        },
        {
          id: 23,
          employee_name: "Caesar Vance",
          employee_salary: 106450,
          employee_age: 21,
          profile_image: ""
        },
        {
          id: 24,
          employee_name: "Doris Wilder",
          employee_salary: 85600,
          employee_age: 23,
          profile_image: ""
        }
      ],
      message: "Successfully! All records has been fetched."
    }
  },
  mutations: {
    addBlog(state, payload) {
      state.blogs.push(payload); //d위에 state 안에 blogs 를 불러옴 그러고 그데이터는 payload에 입력된다.
    },
    addFile(state, payload) {
      state.files.push(payload);
    },
    addContact(state, payload) {
      state.body.push(payload);
    }
  }, //mutations 을 걸쳐서 데이터를 입력해야한다.
  actions: {},
  modules: {}
});