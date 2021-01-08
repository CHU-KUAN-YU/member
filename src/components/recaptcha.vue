<template>
  <!-- 添加一个 div 用作容器 -->
  <div id="grecaptcha"></div>
</template>
<script>
export default {
    data() {
    return {
        sitekey: "6LdMeyUaAAAAAGQlHxrq-YBbZdIycQCTkrfFoSz6"
    };
    },
    methods: {
        submit: function(token) {
            console.log(token);
        },
        loaded() {
        setTimeout(() => {
            window.grecaptcha.render("grecaptcha", {
            sitekey: this.sitekey,
            callback: this.submit
            });
        }, 200);
    }
    },
    mounted() {
        this.loaded();
    }
};
</script>