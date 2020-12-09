<template>
  <div class="container">
    <div class="card__wrapper">
      <div class="card__title">
        <h1>Test task Junior Frontend Developer For <span> Vue.js </span></h1>
      </div>
      <form @submit.prevent="testTest" class="card">
        <div class="block">
          <div class="block__header">
            <h2>Атрибуты формы</h2>
          </div>
          <div class="block__wrapper">
            <label class="block__lable">
              <h3 class="block__lable--text">Фамилия<span>*</span></h3>
              <input
                v-model="form.surname"
                required
                type="text"
                name="surname"
                class="block__lable--input"
                placeholder="Введите вашу фамилию"
              />
            </label>
            <label class="block__lable">
              <h3 class="block__lable--text">Имя<span>*</span></h3>
              <input
                v-model="form.name"
                required
                type="text"
                name="surname"
                class="block__lable--input"
                placeholder="Введите ваше имя"
              />
            </label>
            <label class="block__lable">
              <h3 class="block__lable--text">Отчество</h3>
              <input
                type="text"
                name="surname"
                class="block__lable--input"
                placeholder="Введите ваше отчество"
              />
            </label>
            <label class="block__lable">
              <h3 class="block__lable--text">Дата рождения<span>*</span></h3>
              <input
                required
                type="text"
                name="surname"
                class="block__lable--input"
                placeholder="Введите вашу дату рождения"
              />
            </label>
            <label class="block__lable">
              <h3 class="block__lable--text">Номер телефона<span>*</span></h3>
              <input
                required
                type="text"
                name="surname"
                class="block__lable--input"
                placeholder="Введите номер телефона"
              />
            </label>
            <label class="block__lable">
              <h3 class="block__lable--text">Пол</h3>
              <input
                type="text"
                name="surname"
                class="block__lable--input"
                placeholder="Пол"
              />
            </label>
            <label class="block__lable">
              <h3 class="block__lable--text">Группа клиентов<span>*</span></h3>
              <multiselect
                required
                v-model="value"
                :options="options"
                :multiple="true"
                :close-on-select="false"
                :clear-on-select="false"
                :preserve-search="true"
                placeholder="Поиск"
                label="name"
                track-by="name"
                :preselect-first="true"
              >
                <template slot="selection" slot-scope="{ values, isOpen }">
                  <span
                    class="multiselect__single"
                    v-if="values.length &amp;&amp; !isOpen"
                    >{{ values.length }} Выбрано групп</span
                  >
                </template>
              </multiselect>
            </label>
            <label class="block__lable">
              <h3 class="block__lable--text">Группа клиентов</h3>
              <select class="block__lable--input" name="Группа клиентов">
                <option value="" hidden>Выберете группу клиентов</option>
                <option>VIP</option>
                <option>Проблемные</option>
                <option>ОМС</option>
              </select>
            </label>
          </div>
        </div>
        <button type="submit">asasdfdfdsfsd</button>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minLength, between } from "vuelidate/lib/validators";
import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      form: {
        name: "",
        surname: "",
      },
      value: [],
      options: [{ name: "VIP" }, { name: "Проблемные" }, { name: "ОМС" }],
    };
  },
  methods: {
    testTest() {
      console.log(this.form);

    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style";
.container {
  max-width: 1270px;
  margin: 0 auto;
  padding: 15px;
}
.card {
  margin: 0 auto;
  padding: 30px 20px;
  background-color: $light-dark;
  max-width: 700px;
  height: 7000px;
  border: 3px solid $violet;
  border-radius: 25px;
  &__wrapper {
    max-width: 700px;
    margin: 0 auto;
  }
  &__title {
    margin-bottom: 20px;
    padding-left: 20px;

    & span {
      color: $green;
    }
  }
}
.block {
  &__header {
    border-bottom: 1px solid $green;
    margin-bottom: 15px;
    & h2 {
      color: $green;
    }
  }
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &__lable {
    max-width: 300px;
    width: 300px;
    margin: 15px 0 0 0;
    &--text {
      display: block;
      margin: 0 0 8px 10px;
      & h3 {
        margin: 0px 0 10px;
      }
    }
    &--input {
      width: 100%;
      height: 30px;
      border: 1px solid $silver;
      border-radius: 10px;
      color: $silver;
      outline: none;
      transition: all 0.4s;
      padding: 7px 10px;
      line-height: 15px;
      font-size: 0.8rem;
      &:active,
      &:hover,
      &:focus {
        border: 1px solid #388afc;
        box-shadow: 0px 0px 1px 2px #0c2d6b;
      }
    }
  }
}
</style>