exports.ids = [1];
exports.modules = {

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GenerateCode.vue?vue&type=template&id=29ad2380&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<button class=\"bg-gray-500 text-white\">Generate Premium code</button> <p id=\"newCode\">Your New code:</p> <br> <p>Enter a code to delete</p> <form action><input id=\"inputedCode\" type=\"text\" placeholder=\"premium_key_i0iZnLZR1WA3\" class=\"w-64 border-2\"> <button class=\"bg-gray-500 text-white\">Delete Code</button> <p id=\"Itworkedtext\" class=\"text-green-500 hidden\">Yay! You succesfully deleted a code</p> <p id=\"ItNOworkedtext\" class=\"text-red-500 hidden\">Uh Oh, I couldnt find that code in the database! If this problem persists contact CiaranGames#5051</p></form> <br> <p>Here is all the codes to the recent refresh!!!</p> <ul>"+(_vm._ssrList((_vm.premuimCodes),function(codes){return ("<li class=\"text-black\">"+_vm._ssrEscape("\n            "+_vm._s(codes.premiumcode)+"\n      ")+"</li>")}))+"</ul>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/GenerateCode.vue?vue&type=template&id=29ad2380&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GenerateCode.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var GenerateCodevue_type_script_lang_js_ = ({
  name: 'NuxtTutorial',

  data() {
    return {
      premuimCodes: []
    };
  },

  async fetch() {
    const data = await this.$http.$get(`https://mysaftey-web.herokuapp.com/api/v1/create`); // console.log(data.Codes)

    for (let i = 0; i < data.Codes.length; i++) {
      this.premuimCodes.push(data.Codes[i]);
    }
  },

  methods: {
    async GenerateCode() {
      const data = await this.$http.$post(`https://mysaftey-web.herokuapp.com/api/v1/create`); // console.log(data.Code)

      var code = data.Code;
      var newcode = document.getElementById("newCode");
      newcode.innerHTML = `Your New code: ${code}`;
    },

    async DelCode() {
      var inputedcode = document.getElementById("inputedCode").value;
      const data = await this.$http.$delete(`https://mysaftey-web.herokuapp.com/api/v1/create?code="${inputedcode}"`); // console.log(data.success)

      var itworked = document.getElementById("Itworkedtext");
      var itNOworked = document.getElementById("ItNOworkedtext");

      if (data.success == true) {
        itworked.classList.remove("hidden");
        setTimeout(() => {
          itworked.classList.add("hidden");
        }, 8000);
      } else if (data.success == false) {
        itNOworked.classList.remove("hidden");
        setTimeout(() => {
          itNOworked.classList.add("hidden");
        }, 8000);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/GenerateCode.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GenerateCodevue_type_script_lang_js_ = (GenerateCodevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/GenerateCode.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_GenerateCodevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "63eea12a"
  
)

/* harmony default export */ var GenerateCode = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=generate-code.js.map