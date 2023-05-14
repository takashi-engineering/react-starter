// #rootのElementオブジェクトを取得
let dom = document.querySelector('#root')
// 仮想DOMのElementオブジェクトを作成
let element = React.createElement(
    'p', {}, 'Hello React Application!'
)
// 仮想DOMをレンダリング
ReactDOM.render(element, dom)