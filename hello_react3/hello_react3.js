// #rootのElementオブジェクトを取得
let dom = document.querySelector('#root')
// 仮想DOMのElementオブジェクトを作成
let element = React.createElement(
    'div', {}, [
        React.createElement(
            'h2', {}, "Hello!"
        ),
        React.createElement(
            'h3', {}, "React sample page."
        ),
        React.createElement(
            'ul', {}, [
                React.createElement(
                    'li', {}, "First item."
                ),
                React.createElement(
                    'li', {}, "Second item."
                ),
                React.createElement(
                    "li", {}, "Third item."
                ),
            ]
        ),
    ]
)
// 仮想DOMをレンダリング
ReactDOM.render(element, dom)