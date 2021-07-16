// const tabs = document.getElementsByClassName('tab-btn');
// for (let i = 0; i < tabs.length; i++) {
//   tabs[i].addEventListener('click', tabSwitch);
// }
// function tabSwitch() {
//   document.getElementsByClassName('active')[0].classList.remove('active');
//   this.classList.add('active');
//   document.getElementsByClassName('show')[0].classList.remove('show');
//   const arrayTabs = Array.prototype.slice.call(tabs);
//   const index = arrayTabs.indexOf(this);
//   document.getElementsByClassName('content')[index].classList.add('show');
// }

// モーダルウィンドウ

// const open = document.getElementById('open');
// const container = document.getElementById('container');
// const close = document.getElementById('close');

// open.addEventListener('click', () => {
//   container.style.display = 'block';
// })
// close.addEventListener('click', () => {
//   container.style.display = 'none';
// })
// window.addEventListener('click', (e) => {
//   if (!e.target.closest('.modal-window') && e.target.id !== "open") {
//     container.style.display = 'none';
//   }
// });

// タブ

// Vue.component("content-first", {
//   template: `<div class="content show">コンテンツ１</div>`
// });
// Vue.component("content-second", {
//   template: `<div class="content show">コンテンツ2</div>`
// });
// Vue.component("content-third", {
//   template: `<div class="content show">コンテンツ3</div>`
// });

// const vm = new Vue({
//   el: '#items',
//   data() {
//     return {
//       content: 'content',
//       show: 'show',
//       nowTab: "タブ１",
//         tabs: [
//         "タブ１",
//         "タブ2",
//         "タブ3",
//       ],
//     }
//   }
// });

// const contents = [
//   {id: 1, label: 'タブ１', content: 'コンテンツ1'},
//   {id: 2, label: 'タブ2', content: 'コンテンツ2'},
//   {id: 3, label: 'タブ3', content: 'コンテンツ3'},
// ]

// const vm = new Vue({
//   el: '#tab',
//   data: contents,
//   computed: {
//     active() {
//       return this.id === this.id ? 'active' : false
//     }
//   }
// });

Vue.component('open-modal', {
  template: `
  <div class="window-container" v-on:click="$emit('close')" id="container">
        <div class="modal-window" v-on:click.stop="">
          <h3>モーダルウィンドウ</h3>
          <button v-on:click="$emit('close')" id="close">閉じる</button>
        </div>
      </div>
      `,
});

const vm = new Vue({
  el: '#items',
  data: {
    isActive: 'A',
    showContainer: false,
    text: '',
    nameLists: [
      {
        id: 1,
        name: '佐藤',
      },
      {
        id: 2,
        name: '山田',
      },
      {
        id: 3,
        name: '鈴木',
      },
      {
        id: 4,
        name: '田中',
      },
    ]
  },
  methods: {
    change: function (num) {
      this.isActive = num
    },
    open: function () {
      this.showContainer = true;
    },
    close: function () {
      this.showContainer = false;
    },
  },
  computed: {
    filterNames: function () {
      let nameLists = [];
      for (let i in this.nameLists) {
        let list = this.nameLists[i];
        if (list.name.indexOf(this.text) !== -1) {
          nameLists.push(list);
        }
      }
      return nameLists;
    }
  }
});

