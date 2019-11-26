/// <reference types="../../codemirror/codemirror-showhint" />

var cm = CodeMirror(document.body, {value: 'text'});
var pos = new CodeMirror.Pos(2, 3);
CodeMirror.showHint(cm);
CodeMirror.showHint(cm, function (cm) {
    return {
        from: pos,
        list: ["one", "two"],
        to: pos
    };
});
CodeMirror.showHint(cm, function (cm) {
    return {
        from: pos,
        list: [
            {
                text: "disp1",
                render: function (el, self, data) {
                    ;
                }
            },
            {
                className: "class2",
                displayText: "disp2",
                from: pos,
                to: pos,
                text: "sometext"
            }
        ],
        to: pos
    };
});
var asyncHintFunc : CodeMirror.AsyncHintFunction =
    (cm: CodeMirror.Editor, callback: (hints: CodeMirror.Hints) => any) => {
        callback({
            from: pos,
            list: ["one", "two"],
            to: pos
        });
    };
asyncHintFunc.async = true;

cm.showHint({
    completeSingle: false,
    hint: asyncHintFunc
})
