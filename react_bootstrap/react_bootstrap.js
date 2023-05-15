// #rootのElementオブジェクトを取得
let dom = document.querySelector('#root')
// 仮想DOMのElementオブジェクトを作成
let element = React.createElement(
    'div', {}, [
        React.createElement(
            'h2', {}, "Hello!"
        ),
        React.createElement(
            'h4', {className:'alert alert-primary'}, "React sample page."
        ),
        React.createElement(
            'ul', {className:'list-group'}, [
                React.createElement(
                    'li', {className:'list-group-item'}, "First item."
                ),
                React.createElement(
                    'li', {className:'list-group-item'}, "Second item."
                ),
                React.createElement(
                    "li", {className:'list-group-item'}, "Third item."
                ),
            ]
        ),
    ]
)
// 仮想DOMをレンダリング
ReactDOM.render(element, dom)