import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Formモジュール（分割された木）
const Form = {
  namespaced: true,

  state: {
    button: ['確認', '送信'],
    component: ['TextareaComp', 'StringComp'],
  },

  mutations: {},

  actions: {
    // アクションハンドラの第一引数はコンテキストオブジェクト: ctx
    // 分割代入している
    buttonAction({ commit, state, rootState }) {
      console.log('buttonAction')
      // commitはミューテーションを実行するための関数: commit('mutation_name', args)
      // argsのことをペイロードと呼ぶ
      // ペイロードはオブジェクトの形で渡す
      // ≒イベントの発生
      if (rootState.errorFlag) {
        commit('setStepCount', null, { root: true })  // rootへのアクセス
      }
    }
  },

  getters: {
    getButton(state, getters, rootState) {
      return state.button[rootState.stepCount]
    },
    getComponent(state, getters, rootState) {
      return state.component[rootState.stepCount]
    },
  },
}

// Headモジュール（分割された木）
const Head = {
  state: {
    title: ['感想を入力', '確認画面', '送信完了'],
  },

  mutations: {},

  actions: {},

  getters: {
    // rootStateは全体木にあたるStoreのstate
    getTitle(state, getters, rootState) {
      return state.title[rootState.stepCount]
    },
  },
}

const Textarea = {
  namespaced: true,

  state: {
    errorMsg: '入力は必須です',
  },

  getters: {
    getError(state, getters, rootState) {
      if (rootState.errorFlag) {
        return null
      } else {
        return state.errorMsg
      }
    },
  },
}

const String = {
  namespaced: true, // 名前空間を有効にする

  getters: {
    getString(state, getters, rootState) {
      return rootState.impression
    },
  },
}

// 唯一のストアオブジェクト（全体木）: new Vuex.Store()
// あるコンポーネントでしか使用されないデータはVuexに置くべきではない
// 複数のコンポーネントで読み書きしうるデータはVuexへの保存を検討すべき
export default new Vuex.Store({
  state: {
    stepCount: 0,
    impression: '',
    errorFlag: false  // trueなら通過
  },

  // ミューテーションはすべて同期的に行わなければならない（非同期処理を書いてはいけない）
  // ≒イベントの検知
  mutations: {
    setStepCount(state) {
      console.log('rootsetStepCount')
      state.stepCount++
    },
    updateImpression(state, value) {
      state.impression = value
      if (state.impression) {
        state.errorFlag = true
      } else {
        state.errorFlag = false
      }
    },
  },

  modules: {
    Form,
    Head,
    Textarea,
    String,
  },
})
